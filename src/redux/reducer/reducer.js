let initialState = {
    count: 0,
    id: '',
    password: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case'LOGIN' :
            return {...state, id: action.payload.id, password: action.payload.password};
        case 'DECREASE':
            return {...state, count: state.count - 1};
        default:
            return {...state};
    }
};

export default reducer;