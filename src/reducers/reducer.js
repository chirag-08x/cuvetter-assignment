export const reducer = (state, action) => {
  if (action.type === "UPDATE_SCORES") {
    return { ...state, ...action.payload };
  }

  if (action.type === "TOGGLE_MODAL") {
    return { ...state, showModal: !state.showModal };
  }
  return { ...state };
};
