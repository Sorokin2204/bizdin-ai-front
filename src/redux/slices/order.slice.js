import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateOrder, reducerCreateOrder } from '../actions/order/createOrder';
import { initStateGetOrderList, reducerGetOrderList } from '../actions/order/getOrderList';
import { initStateGetOrderSingle, reducerGetOrderSingle } from '../actions/order/getOrderSingle';
import { initStateChangeTypePaymentOrder, reducerChangeTypePaymentOrder } from '../actions/order/changeTypePaymentOrder';
import { initStateGetOrderListAdmin, reducerGetOrderListAdmin } from '../actions/order/getOrderListAdmin';
import { initStateUpdateOrder, reducerUpdateOrder } from '../actions/order/updateOrder';
import { initStateCreatePayment, reducerCreatePayment } from '../actions/order/createPayment';
import { initStateGetSaveGameInputs, reducerGetSaveGameInputs } from '../actions/order/getSaveGameInputs';
import { initStateRemoveSaveGameInput, reducerRemoveSaveGameInput } from '../actions/order/removeSaveGameInput';

export const initialState = {
  ...initStateCreateOrder,
  ...initStateGetOrderList,
  ...initStateGetOrderSingle,
  ...initStateChangeTypePaymentOrder,
  ...initStateGetOrderListAdmin,
  ...initStateUpdateOrder,
  ...initStateCreatePayment,
  ...initStateGetSaveGameInputs,
  ...initStateRemoveSaveGameInput,
  editOrderId: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetCreateOrder(state) {
      state.createOrder = initStateCreateOrder.createOrder;
    },
    resetGetSingleOrder(state) {
      state.getOrderSingle = initStateGetOrderSingle.getOrderSingle;
    },
    resetUpdateOrder(state) {
      state.updateOrder = initStateUpdateOrder.updateOrder;
    },
    resetRemoveSaveGameInput(state) {
      state.removeSaveGameInput = initStateRemoveSaveGameInput.removeSaveGameInput;
    },
    setEditOrderId(state, action) {
      state.editOrderId = action.payload;
    },
  },
  extraReducers: {
    ...reducerCreateOrder,
    ...reducerGetOrderList,
    ...reducerGetOrderSingle,
    ...reducerChangeTypePaymentOrder,
    ...reducerGetOrderListAdmin,
    ...reducerUpdateOrder,
    ...reducerCreatePayment,
    ...reducerGetSaveGameInputs,
    ...reducerRemoveSaveGameInput,
  },
});
export const { resetCreateOrder, setEditOrderId, resetUpdateOrder, resetRemoveSaveGameInput, resetGetSingleOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
