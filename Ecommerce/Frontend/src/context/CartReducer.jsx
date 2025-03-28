/* eslint-disable no-case-declarations */
const CartReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        const existingProductIndex = state.findIndex(p => p.id === action.payload.id);
        if (existingProductIndex !== -1) {
          const updatedState = [...state];
          updatedState[existingProductIndex] = {
            ...updatedState[existingProductIndex],
            quantity: updatedState[existingProductIndex].quantity + 1,
          };
          return updatedState;
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
  
      case "Remove":
        return state.filter(p => p.id !== action.id);
  
      case "Increase":
        return state.map(p => 
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        );
  
      case "Decrease":
        return state.map(p => 
          p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
        );
  
      default:
        return state;  
    }
  };
  
  export default CartReducer;
  