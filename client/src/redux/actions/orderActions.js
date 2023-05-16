import axios from "axios";

export const placeOrder = (orderData) => async(dispatch) => {
    try {
        dispatch({
            type: 'placeOrderRequest'
        });

        const {data} = await axios.post('/orders/place', orderData);

        dispatch({
            type: 'placeOrderSuccess',
            payload: data.message
        });
        
    } catch (error) {
        dispatch({
            type: 'placeOrderFailure',
            payload: error.response?.data.message
        });
    }
}

export const myOrders = () => async(dispatch) => {
    try {
        dispatch({
            type: 'myOrdersRequest'
        });

        const {data} = await axios.get('/orders/me');
        dispatch({
            type: 'myOrdersSuccess',
            payload: data.orders
        });
        
    } catch (error) {
        dispatch({
            type: 'myOrdersFailure',
            payload: error.response?.data.message
        });
    }
}

export const paymentVarification = (orderData) => async(dispatch) => {
    
    try {
        dispatch({
            type: 'paymentVerificationRequest'
        });
        const {data} = await axios.post('/orders/payment/verification', orderData);

        dispatch({
            type: 'paymentVerificationSuccess',
            payload: data.message
        });

    } catch (error) {
        dispatch({
            type:'paymentVerificationFailure',
            payload: error.response?.data.message
        });
    }
}

export const orderDetails = (orderId) => async(dispatch) => {
    try {
        dispatch({
            type: 'orderDetailsRequest'
        });

        const {data} = await axios.get(`/orders/order/${orderId}`);

        dispatch({
            type: 'orderDetailsSuccess',
            payload: data.orders
        })

    } catch (error) {
        dispatch({
            type: 'orderDetailsFailure',
            payload: error.response?.data.message
        })
    }
}