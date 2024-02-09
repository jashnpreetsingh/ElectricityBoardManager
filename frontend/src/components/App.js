import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './applications/Dashboard';
import ApplicationTracker from './applications/ApplicationTracker.js';
import  {Provider} from 'react-redux';
import store from '../store';
import Home from './layout/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    console.log('App component');  
    return (
            // Wrap the entire app with the Provider component to provide the Redux store to all components
            <Provider store={store}>
                {/*Use the Router component to enable routing in the app*/}
                <Router>
                    <Header/>
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/application-tracker" element={<ApplicationTracker />} />
                        </Routes>
                </Router>
            </Provider>
        
        )
}


ReactDOM.render(<App />, document.getElementById('app'));