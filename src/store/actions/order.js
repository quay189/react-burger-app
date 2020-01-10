import * as actionTypes from "./actionTypes";
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderID: id,
    orderData: orderData
  };
};
export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData, token) => {
  return {
    type: actionTypes.PURCHASE_BURGER,
    orderData: orderData,
    token: token
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};
export const fetchOrders = (token, userId) => {
  /*
   return dispatch => {
    dispatch(fetchOrderStart());
    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/orders.json" + queryParams)
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail());
      });
  };
  */
  return{
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId
  }
};
export const removeOrderSuccess = () => {
  return {
    type: actionTypes.REMOVE_ORDER_SUCCESS
  };
};

export const removeOrderFail = error => {
  return {
    type: actionTypes.REMOVE_ORDER_FAIL,
    error: error
  };
};

export const removeOrderStart = () => {
  return {
    type: actionTypes.REMOVE_ORDER_START
  };
};

export const removeOrder = orderId => {
  return{
    type: actionTypes.REMOVE_ORDER,
    orderId: orderId
  }
};
