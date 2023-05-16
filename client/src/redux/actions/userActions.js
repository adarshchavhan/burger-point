import axios from 'axios';

export const loadUser = () => async(dispatch) => {
    try {
        dispatch({
            type: 'loadUserRequest'
        });

        const {data} = await axios.get('/auth/me', );

        dispatch({
            type: 'loadUserSuccess',
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: 'loadUserFailure',
            payload: error.response?.data.message
        })
    }
}

export const logout = () => async(dispatch) => {
    try {
        dispatch({
            type: 'logoutRequest'
        });

        const {data} = await axios.get('/auth/logout', );

        dispatch({
            type: 'logoutSuccess',
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: 'logoutFailure',
            payload: error.response?.data.message
        })
    }
}

export const setAddress = (addressData) => async(dispatch) => {
    try {
        dispatch({
            type: 'setAddressRequest'
        });

        const {data} = await axios.post('/auth/address', addressData);
        
        dispatch({
            type: 'setAddressSuccess',
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: 'setAddressFailure',
            payload: error.response?.data.message
        })
    }
}