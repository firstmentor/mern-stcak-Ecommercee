import {
    ALL_SLIDER_REQUEST,
    ALL_SLIDER_SUCCESS,
    ALL_SLIDER_FAIL,
    CLEAR_ERRORS
} from '../constants/SliderConstants'

import axios from 'axios'

export const sliderReducer = (state = { sliders: [] }, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ALL_SLIDER_REQUEST:
            return {
                loading: true,
                sliders: [],
            }
        case ALL_SLIDER_SUCCESS:
            return {
                loading: false,
                sliders: action.payload.data,
            }
        case ALL_SLIDER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default: return state

    }
} 