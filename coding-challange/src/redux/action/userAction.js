import { SAVE_USER_DATA ,UPDATE_PRODUCT_LIST} from '../../utils/constant';

export const saveUserData = (userData) => ({
  type: SAVE_USER_DATA,
  payload: { userData },
});
export const saveToken = (token) => {
  return {
    type: 'SAVE_TOKEN',
    payload: token,
  };
};
export const updateProductList = (products) => {
  return {
    type: UPDATE_PRODUCT_LIST,
    payload: products,
  };
}
