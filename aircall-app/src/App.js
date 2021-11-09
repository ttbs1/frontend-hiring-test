import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import {Start} from './pages/start'
import {Calls} from './pages/calls';
import {Call} from './pages/call';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Start}></Route>
            <Route path="calls" exact component={Calls}></Route>
            <Route path="calls/:id" exact component={Call}></Route>
        </BrowserRouter>
    );
}

export default App;
