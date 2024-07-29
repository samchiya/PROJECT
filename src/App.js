// import './App.css';
// import { Signup } from '.src/components/Signupform';
// function App() {
//   return (
//    <div ClassName="App">
//     <Signup />
//     </div>

//   );
// }

//export default App; 

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Signupform from './components/Signupform'; // Adjust the import path as needed
// import LoginForm from './components/LoginForm';
// import LoginForm from './components/login';
import { LoginForm } from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
    return (
    
        <Router>
            <Routes>
                <Route path="/" element={<Signupform/>} />
                {/* Define other routes here */}
                <Route path="/Login" element={<LoginForm/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    );
}

export default App;



