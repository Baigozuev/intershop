const initailState = {
  products: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("bas")) || [],
  dark: false,
  modal: false,
  history: JSON.parse(localStorage.getItem("history")) ||[]
};

export const Reducer = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let res = [...state.products, action.payload];
      localStorage.setItem("product", JSON.stringify(res));
      return { ...state, products: res };
    case "DARK_MODUL":
      return { ...state, dark: !state.dark };
    case "SORT_CATEGORY":
      let filterProduct = state.products.filter(
        (el) => el.category === action.payload.category
      );
      return { ...state, products: filterProduct };
      case "ADD_TO_BASKET":
        
        let findBas = state.basket.find((el)=> el.id === action.payload.id)
        return{...state , basket: [...state.basket , action.payload]}
    
   

    case "COUNT_PLUS":
      return {
        ...state,
        products: state.products.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        ),
      };
    case "COUNT_MINUS":
      return {
        ...state,
        products: state.products.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
            : el
        ),
      };
    case "DELETE_PRODUCT":
      let delet = state.basket.filter((el) => el.id !== action.payload.id)
      return {...state,basket : delet}
    case "SEARCH_PRODUCT":
      return state;
      case "QUAN_PLUS":
        return  {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
        case "QUAN_MINUS": 
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
              : el
          ),
        };
        case "MODAL":
          return {...state,modal : !state.modal}
          case "REMUVE__ALL":
            localStorage.removeItem("bas")
            return {...state,basket : []}
            case "HISTORY":
              let deil = [...state.history,action.payload]
              localStorage.setItem("history",JSON.stringify(deil))
              return {...state,history : deil}
    default:
      return state;
  }
};
