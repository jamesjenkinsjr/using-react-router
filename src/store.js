import { createStore } from 'redux';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => ({
    type: LOGIN,
    payload: {
        value: {
            username,
            password
        }
    }
});

export const logout = () => ({
    type: LOGOUT
});

const initialState = {
    username: '',
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;