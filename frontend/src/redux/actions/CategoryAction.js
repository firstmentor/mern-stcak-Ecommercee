import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CLEAR_ERRORS
}
    from '../constants/CategoryConstant'

import axios from 'axios'

    export const getCategory = () => async (dispatch) => {
        try {
            // To get data from api
            dispatch({type: ALL_CATEGORY_REQUEST})
            // let link = 'https://api-jlsm.onrender.com/api/getAllCategories'
            // let link = 'http://localhost:4000/api/getCategory'
            let link = 'https://api-jlsm.onrender.com/api/getCategory'
            const {data} = await axios.get(link)

            //console.log(data)

            // success
            dispatch({
                type: ALL_CATEGORY_SUCCESS,
                payload: data
            })
        } catch (error) {
            // Failure
            dispatch({
                type: ALL_CATEGORY_FAIL,
                payload: error.respond.data.message
            })
        }
    }

