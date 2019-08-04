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
import flightSearchSaga from "./flightSearchSaga";

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

// function* incrementAsync(action) {
//   console.log("FROM SAGA", action);
//   console.log("początek sagi");
//   try {
//     console.log("zwiększam licznik na serwerze");
//     yield incrementOnServer();
//     console.log("czekam na akcję CANCEL");
//     yield take(["CANCEL"]);
//     console.log("wywołuje akcję INCREMENT");
//     yield put({ type: "INCREMENT" });
//     console.log("czekam na akcję CANCEL");
//     yield take(["CANCEL"]);
//     console.log("koniec sagi");
//   } catch (error) {
//     console.error(error);
//   }
// }

// function* incrementAsync(action) {
//   console.log("FROM SAGA", action);
//   console.log("początek sagi");
//   console.log("koniec sagi");
// }

export default function* rootSaga() {
  // yield takeLatest("INCREMENT_REQUEST", incrementAsync);
  yield takeEvery("INCREMENT_REQUEST", incrementAsync);
  yield run("FLIGHT_SEARCH", flightSearchSaga);
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
