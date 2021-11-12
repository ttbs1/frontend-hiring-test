import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Start} from './pages/start'
import {Calls} from './pages/calls';
import {Call} from './pages/call';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Start/> } />
                <Route path="/calls" exact component={ <Calls/> } />
                <Route path="/call/:id" exact component={ <Call/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
