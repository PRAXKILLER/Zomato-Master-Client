import axios from "axios";

//redux types
import { GET_FOOD, GET_FOOD_LIST } from "./food.type";

import {API_URL} from "../../../key";

export const getFood = (foodId) => async(dispatch) => {
    try{
        const Food = await axios({
            method: 'GET',
            url: `${API_URL}/food/${foodId}`,
        });

        return dispatch({type: GET_FOOD, payload: Food.data});
    }catch (error) {
        return dispatch({ type: "ERROR", payload: error });
      }
};

export const getFoodList = (menuId) => async(dispatch) => {
    try{
        const Menu = await axios({
            method: 'GET',
            url: `${API_URL}/menu/list/${menuId}`,
        });

        return dispatch({type: GET_FOOD_LIST, payload: Menu.data});
    }catch (error) {
        return dispatch({ type: "ERROR", payload: error });
      }
};