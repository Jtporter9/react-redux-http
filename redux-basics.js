const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  test: ""
};

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_POST') {
        return {
            ...state,
            test: action.value
        };
    }
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'ADD_POST', value: "HELLO WORLD"});



