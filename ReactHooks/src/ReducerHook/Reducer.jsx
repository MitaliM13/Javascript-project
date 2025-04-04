import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: (state.count = 0) };

    default:
      break;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //State: Displays the current value
  //Dispatch: Function called to send the action to the reducer, which then updates the state
  //Reducer: Function that describes how the state should change based on actions. It takes current state and an action as an input and returns a new state.
  //initialState: The first state and assigned, during the intial render

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export default Reducer;
