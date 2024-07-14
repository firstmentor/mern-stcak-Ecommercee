import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    CLEAR_ERRORS
} from '../constants/ProductContants'

import axios from 'axios'

export const getProducts = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_PRODUCT_REQUEST })
        let link = 'https://api-jlsm.onrender.com/api/products'
        const { data } = await axios.get(link)
        console.log(data)
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.respond.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        let link = `https://api-jlsm.onrender.com/api/getProductDetail/${id}`

        const { data } = await axios.get(link)
        // console.log(data)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: err.response.data.message
        })
    }
}
