import {combineReducers} from 'redux';

import restaurant from './restaurant/restaurant.reducer.js';
import image from './Image/Image.reducer.js';
import review from './Reviews/reviews.reducer.js';
import user from './User/user.reducer.js';
import food from './Food/food.reducer';
import auth from './Auth/auth.reducer';
import cart from './Cart/cart.reducer';
import order from './Order/order.reducer';

const rootReducer = combineReducers({
    restaurant,
    image,
    review,
    user,
    food,
    auth,
    cart,
    order,
});

export default rootReducer;