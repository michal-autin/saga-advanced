export default function flightResults(
  state = { quality: [], fast: [], cheap: [] },
  action
) {
  // console.log("FROM REDUCER", action);
  switch (action.type) {
    case "SAVE_RESULTS":
      const { type, list } = action.payload;
      console.log("reducer payload", action.payload);
      let localType = type || "quality";
      return { ...state, [localType]: list };
    case "CLEAR":
      return state;
    case "CLEAR_ALL":
      return state;
    case "CANCEL":
      return state;
    case "TIMEOUT":
      return state;
    default:
      return state;
  }
}
