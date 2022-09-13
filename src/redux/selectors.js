import { createSelector } from 'reselect';

// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filter.search.trim());
//     });

//     return todoRemaining;
// };

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const filterPrioritiesSelector = (state) => state.filter.priority;

// reselect
export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                    ? todo.name.includes(searchText.trim()) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText.trim());
            }
            return todo.name.includes(searchText.trim()) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length
                ? priorities.includes(todo.priority)
                : true);
        });
    },
);
