import {
  put,
  takeEvery,
  takeLatest,
  call,
  take,
  fork,
  delay,
  race,
  cancel
} from "redux-saga/effects";
import axios from "axios";

function* incrementApiCall(action) {
  try {
    const callReturndedValue = yield call(incrementOnServer);
    console.log("callReturned", callReturndedValue);
    yield put({ type: "INCREMENT_SUCCESS" });
  } catch (error) {
    console.error(error);
    yield put({ type: "INCREMENT_ERROR" });
  }
}

// function* incrementAsync(action) {
//   console.log("FROM SAGA", action);
//   console.log("początek sagi");
//   console.log(
//     "robię forka do sagi odpowiedzialnej za wywołanie funkcji zwiększającej licznik na serwerze"
//   );
//   const task = yield fork(incrementApiCall);
//   console.log("czekam na akcję INCREMENT_SUCCESS oraz CANCEL");
//   const result = yield take(["INCREMENT_SUCCESS", "CANCEL"]);
//   if (result.type === "CANCEL") {
//     console.log("anuluje task");
//     yield cancel(task);
//   } else {
//     console.log("wywołuje ackcję INCREMENT");
//     yield put({ type: "INCREMENT" });
//   }
//   console.log("koniec sagi");
// }

function* incrementAsync(action) {
  console.log("FROM SAGA", action);
  console.log("początek sagi");
  console.log(
    "robię forka do sagi odpowiedzialnej za wywołanie funkcji zwiększającej licznik na serwerze"
  );
  yield fork(incrementApiCall);
  console.log("czekam na akcję INCREMENT_SUCCESS");
  yield take(["INCREMENT_SUCCESS"]);
  console.log("wywołuje ackcję INCREMENT");
  yield put({ type: "INCREMENT" });
  console.log("koniec sagi");
}

// function* incrementAsync(action) {
//   console.log("FROM SAGA", action);
//   console.log("początek sagi");
//   console.log("rozpoczynam wyścig między trzema akcjami");
//   const { complete, timeout } = yield race({
//     complete: call(incrementOnServer), // zwiększenie licznika na serwerze
//     timeout: delay(5000), // mineło n milisekund
//     canceled: take(["CANCEL"]) // akcja typu CANCEL została wywołana
//   });
//   if (complete) {
//     console.log("wywołuje akcję INCEREMENT");
//     yield put({ type: "INCREMENT" });
//   }
//   if (timeout) {
//     console.log("wywołuje akcję TIMEOUT");
//     yield put({ type: "TIMEOUT" });
//   }
//   console.log("koniec sagi");
// }

export function* rootSaga() {
  // yield takeLatest("INCREMENT_REQUEST", incrementAsync);
  yield takeEvery("INCREMENT_REQUEST", incrementAsync);
}

async function incrementOnServer() {
  await wait(5000);
  // throw new Error("i co teraz?");
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

export const wait = ms =>
  new Promise(resolve => setTimeout(() => resolve(true), ms));

async function doApiCall(type = "quality") {
  console.log("making api call");
  const url = "https://api.skypicker.com/flights";
  const queryParams = {
    fly_from: "LON",
    fly_to: "SYD",
    v: 3,
    date_from: "01/12/2019",
    date_to: "09/12/2019",
    flight_type: "oneway",
    adults: 1,
    partner: "picky",
    sort: type,
    limit: 10
  };
  try {
    const result = await axios.get(url, { params: queryParams });
    console.log("Results", result.data);
    return result.data;
  } catch (error) {
    console.error("got error:");
    console.error(error);
    return error;
  }
}

function* makeFlightSearch(action) {
  console.log("start making call");
  console.log("FROM SAGA", action);
  console.log("początek sagi");
  const { complete, timeout } = yield race({
    complete: call(doApiCall),
    timeout: delay(20000),
    canceled: take(["CANCEL"])
  });
  if (complete) {
    console.log("wywołuje akcję SAVE_RESULTS:", complete);
    yield put({
      type: "SAVE_RESULTS",
      payload: { type: "quality", list: complete.data }
    });
  }
  if (timeout) {
    console.log("wywołuje akcję TIMEOUT");
    yield put({ type: "TIMEOUT" });
  }
  console.log("koniec sagi");
}

export default function* flightSearchSaga() {
  console.log("Root of flightSearchSaga");
  yield takeEvery("FLIGHT_SEARCH", makeFlightSearch);
}
