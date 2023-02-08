import { configureStore } from '@reduxjs/toolkit'

import allProductsSlice from './allProductsSlice'
import singleProductSlice from './SingleProductSlice'
import adminProductSlice from './adminProductSlice'
import createProductSlice from './createProductSlice'
import updateProductSlice from './updateProductSlice'
import deleteProductSlice from './deleteProductSlice'

import UserSlice from './UserSlice'
import ProfileSlice from './ProfileSlice'
import getAllUserSlice from './getAllUserSlice'
import updateUserSlice from './updateUserSlice'
import deleteUserSlice from './deleteUserSlice'

import forgotPasswordSlice from './ForgotPasswordSlice'
import resetForgotPasswordSlice from './ResetForgotPassword'

import cartSlice from './cartSlice'

import orderSlice from './orderSlice'
import myOrderSlice from './myOrderSlice'
import allOrderSlice from './allOrderSlice'
import updateOrderSlice from './updateOrderSlice'
import deleteOrderSlice from './deleteOrderSlice'
import getOrderSlice from './getOrderSlice'


import newReviewSlice from './newreviewSlice'
import allReviewSlice from './allReviewSlice'
import deleteReviewSlice from './deleteReviewSlice'

import createProductFormChageSlice from './AdminCreateFormShowSlice'

const store = configureStore({
    reducer: {
        allProducts: allProductsSlice.reducer,
        singleProduct: singleProductSlice.reducer,
        adminProducts: adminProductSlice.reducer,
        newProduct: createProductSlice.reducer,
        updateProduct: updateProductSlice.reducer,
        deleteProduct: deleteProductSlice.reducer,

        user: UserSlice.reducer,
        profile: ProfileSlice.reducer,
        getAllUser: getAllUserSlice.reducer,
        updateUser: updateUserSlice.reducer,
        deleteUser: deleteUserSlice.reducer,

        forgotPassword: forgotPasswordSlice.reducer,
        resetForgotPassword: resetForgotPasswordSlice.reducer,

        cart: cartSlice.reducer,

        order: orderSlice.reducer,
        myOrder: myOrderSlice.reducer,
        allOrders: allOrderSlice.reducer,
        updateOrder: updateOrderSlice.reducer,
        deleteOrder: deleteOrderSlice.reducer,
        getOrder: getOrderSlice.reducer,

        newReview: newReviewSlice.reducer,
        allReview: allReviewSlice.reducer,
        deleteReview: deleteReviewSlice.reducer,

        FormShow: createProductFormChageSlice.reducer,
    }
})

export const allProductsActions = allProductsSlice.actions
export const singleProductSliceActions = singleProductSlice.actions
export const adminProductActions = adminProductSlice.actions
export const craeteProductActions = createProductSlice.actions
export const updateProductActions = updateProductSlice.actions
export const deleteProductActions = deleteProductSlice.actions

export const UserActions = UserSlice.actions
export const ProfileActions = ProfileSlice.actions
export const getAllUserActions = getAllUserSlice.actions
export const updateUserActions = updateUserSlice.actions
export const deleteUserActions = deleteUserSlice.actions

export const forgotPasswordActions = forgotPasswordSlice.actions
export const resetForgotPasswordActions = resetForgotPasswordSlice.actions


export const cartActions = cartSlice.actions

export const OrderActions = orderSlice.actions
export const myOrderActions = myOrderSlice.actions
export const allOrderActions = allOrderSlice.actions
export const updateOrderActions = updateOrderSlice.actions
export const deleteOrderActions = deleteOrderSlice.actions
export const getOrderActions = getOrderSlice.actions

export const newReviewActions = newReviewSlice.actions
export const allReviewActions = allReviewSlice.actions
export const deleteReviewActions = deleteReviewSlice.actions


export default store;
