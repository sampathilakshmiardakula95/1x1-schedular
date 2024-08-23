import React from 'react';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import StudentSchedule from './pages/StudentSchedule';
import MentorSchedule from './pages/MentorSchedule';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/student-schedule" component={StudentSchedule} />
                    <Route path="/mentor-schedule" component={MentorSchedule} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
