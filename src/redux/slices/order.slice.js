import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateOrder, reducerCreateOrder } from '../actions/order/createOrder';
import { initStateGetOrderList, reducerGetOrderList } from '../actions/order/getOrderList';
import { initStateGetOrderSingle, reducerGetOrderSingle } from '../actions/order/getOrderSingle';
import { initStateChangeTypePaymentOrder, reducerChangeTypePaymentOrder } from '../actions/order/changeTypePaymentOrder';

export const initialState = {
  ...initStateCreateOrder,
  ...initStateGetOrderList,
  ...initStateGetOrderSingle,
  ...initStateChangeTypePaymentOrder,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetCreateOrder(state) {
      state.createOrder = initStateCreateOrder.createOrder;
    },
  },
  extraReducers: {
    ...reducerCreateOrder,
    ...reducerGetOrderList,
    ...reducerGetOrderSingle,
    ...reducerChangeTypePaymentOrder,
  },
});
export const { resetCreateOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
