import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Box from "./component/Box";

function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);
    const id = useSelector(state => state.id);
    const password = useSelector(state => state.password);

    const increase = () => {
        dispatch({type: 'INCREMENT'});
    };

    const login = () => {
        // type -> 필수로 넘기는 매개변수
        // payload -> 선택적으로 넘기는 매개변수
        dispatch({type: 'LOGIN', payload: {id: 'noona', password: '123'}});
    };

    const decrease = () => {
        dispatch({type: 'DECREASE'});
    };

    return (
        <div>
            <h1>{id}, {password}</h1>
            <h1>{count}</h1>
            <button onClick={increase}>증가!</button>
            <button onClick={login}>Login</button>
            <button onClick={decrease}>감소!</button>
            <Box/>
        </div>
    );
}

export default App;
