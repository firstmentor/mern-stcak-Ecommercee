import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CLEAR_ERRORS
}
    from '../constants/CategoryConstant'

import axios from 'axios'

export const categoriesReducer = (state = { categories: [] }, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case ALL_CATEGORY_REQUEST:
            return {
                loading: true,
                categories: [],
            }
        case ALL_CATEGORY_SUCCESS:
            return {
                loading: false,
                categories: action.payload.data,
            }
        case ALL_CATEGORY_FAIL:
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