import axios from 'axios';

const GETPRODUCTS = 'products/GETPRODUCT';
const ADDPRODUCT = 'products/ADDPRODUCT';
const DELETEPRODUCT = 'products/DELETEPRODUCT';
const UPDATEPRODUCT = 'products/UPDATEPRODUCT';

export const getProductsAction = (products) => ({
  type: GETPRODUCTS,
  products
});

export const addProductAction = (product) => ({
  type: ADDPRODUCT,
  product
});

export const deleteProductAction = (id) => ({
  type: DELETEPRODUCT,
  productId: id
});

export const updateProductAction = (product) => ({
  type: UPDATEPRODUCT,
  product
});


export const getProductsThunk = () => async (dispatch) => {
  const { data: products } = await axios.get('/api/products/');
  dispatch(getProductsAction(products));
}

export const addProductThunk = (product) => async (dispatch) => {
  const res = await axios.post('/api/products/', product);

  dispatch(addProductAction(res.data));
}

export const deleteProductThunk = (id) => async (dispatch) => {


}

export const updateProductThunk = (product) => async (dispatch) => {


}

const initialState = {};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GETPRODUCTS:
      return { ...action.products };
    case ADDPRODUCT:
      return { ...state, [action.product.id]: action.product };
    case DELETEPRODUCT:
      const newState = { ...state };
      delete newState[action.productId];
      return newState;
    case UPDATEPRODUCT:
      return { ...state, [action.product.id]: action.product };
    default:
      return state;
  }
}