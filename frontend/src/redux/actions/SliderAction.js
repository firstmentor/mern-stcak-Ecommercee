import {
    ALL_SLIDER_REQUEST,
    ALL_SLIDER_SUCCESS,
    ALL_SLIDER_FAIL,
    CLEAR_ERRORS
} from '../constants/SliderConstants'

import axios from 'axios'

export const getSlider = () => async (dispatch) => {
    try {
        // To get data from api
        dispatch({type: ALL_SLIDER_REQUEST})
        // let link = 'http://localhost:4000/api/displaySlider'
        let link = 'https://api-jlsm.onrender.com/api/displaySlider'
        const {data} = await axios.get(link)

        //console.log(data)

        // success
        dispatch({
            type: ALL_SLIDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        // Failure
        dispatch({
            type: ALL_SLIDER_FAIL,
            payload: error.respond.data.message
        })
    }
}