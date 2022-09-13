import { combineReducers } from 'redux';

import filtersReducer from '../components/Filters/FiltersSlide';
import todoReducer from '../components/Todo/TodoSlide';

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filtersReducer(state.filter, action),
//         todoList: todoReducer(state.todoList, action),
//     };
// };

const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList: todoReducer,
});

export default rootReducer;
