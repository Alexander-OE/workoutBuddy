import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  });


  dispatch({type: 'SET_WORKOUTS', payload: [{}, { }]})

  return <WorkoutsContext.Provider value={{}}>{children}</WorkoutsContext.Provider>;
};
