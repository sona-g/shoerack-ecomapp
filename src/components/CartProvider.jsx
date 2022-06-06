// import React, { useReducer, useContext, createContext } from "react";

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [...state, action.item];
//     case "REMOVE":
//       const newArr = [...state];
//       newArr.splice(action.index, 1);
//       return newArr;
    // case "CHANGE_QTY":
    //   const Arr =[...state];
    //   Arr.filter((q) => q.id === action.id ? (q.qty = action.qty) : q.qty);
    //   return Arr;
    // default:
    //   return state;
    //throw new Error(`unknown action ${action.type}`);
//   }
// };

// const productReducer = (state, action) => {
//   switch (action.type) {
//     case "SORT":
//     return [...state, action.sort];
//     case "SELLING_FAST":
//     return [...state, action.bySellingFast]
//     case "SALE":
//       return [...state, action.bySale]
//       case "SEARCH":
//         return [...state, action.searchQuery]
//         case "CLEAR":
//           return [...state, action.byStock]
//           default:
//             return state;
//   }
// }
// const filterObject = {
//   searchQuery: "",
//   bySellingFast: false,
//   bySale: false
// }

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);
//   // const [productState, productDispatch] = useReducer(productReducer, filterObject)
//   // console.log(productState);

//   return (
//     <CartDispatchContext.Provider value={{dispatch, 
//     // productDispatch
//   }}
//     >
//       <CartStateContext.Provider value={{state, 
//         // productState
//       }}
//         >
//         {children}
//       </CartStateContext.Provider>
//     </CartDispatchContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);