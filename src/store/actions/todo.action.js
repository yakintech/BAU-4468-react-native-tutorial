export const todoCreated = (data = {}) => {
    return {
        type: 'TODO_CREATED',
        payload: data
    }
}

export const todoDeleted = (data = '') => {
    return {
        type: 'TODO_DELETED',
        payload: data
    }
}

export const removeAll = () => {

    return {
        type: 'REMOVE_ALL'
    }
}   