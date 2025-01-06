export const ADD_TO_CART = (productId) => {
    return {
        type: 'ADD_TO_CART_ACTION',
        payload: productId
    }
}