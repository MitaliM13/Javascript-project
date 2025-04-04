const initialState = {count: 0}

function counterReducer(state, action){
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        case "incrementByAmount":
            return {count: state.count + action.payload}
        case "decrementByAmount":
            return {count: state.count - action.payload}
    
        default:
            return state;
    }
}


export{initialState, counterReducer }


//Payload is a property in the action object used to send additional data to the reducer. (The number entered by user in this case).
//Usage: Makes the reducer more flexible and keeps the logic scalable and reusable.
//Avoids defining multiple action types