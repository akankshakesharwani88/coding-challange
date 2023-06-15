import { SAVE_USER_DATA } from '../../utils/constant';
import productListData from '../../components/sample.json';

const initialState = {
  email: '',
  productList: productListData,
  products: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        email: action.payload.email,
      };
      case 'SET_PRODUCT_LIST':
      return action.payload;
    case 'DELETE_PRODUCT':
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};

export default rootReducer;
