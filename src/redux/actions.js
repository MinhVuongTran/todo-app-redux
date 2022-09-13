// actions creators => function
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    };
};

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId,
    };
};

export const searchFilterChange = (text) => {
    return {
        type: 'filter/searchFilter',
        payload: text,
    };
};

export const statusFilterChange = (status) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status,
    };
};

export const priorityFilterChange = (priorities) => {
    return {
        type: 'filter/priorityFilterChange',
        payload: priorities,
    };
};
