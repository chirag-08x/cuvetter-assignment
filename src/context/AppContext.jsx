import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const AppContext = createContext();

const initialState = {
  rank: "12890",
  percentile: "37",
  correctAns: "7",
  totalAns: "15",
  showModal: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateScores = (rank, percentile, correctAns) => {
    dispatch({
      type: "UPDATE_SCORES",
      payload: { rank, percentile, correctAns },
    });
  };

  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  return (
    <AppContext.Provider value={{ state, updateScores, toggleModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
