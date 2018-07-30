const initialState = {
    posts: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'GET_POSTS'){
        return {
            ...state,
            posts: action.payload
        }
    }
    return {
        ...state
    };
};

export default reducer;