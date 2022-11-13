import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Home from './components/Home/Home';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import VerifyOTP from './components/Auth/VerifyOTP';
import SendLink from './components/Auth/SendLink';
import VerifyLink from './components/Auth/VerifyLink';
import About from './components/About/About';
import {useDispatch } from "react-redux";
import { loadUser } from './redux/actions/userAction';
import Contact from './components/Contact/Contact';
import StudentProfile from './components/profiles/StudentProfile';
import ShowMyStudents from './components/profiles/ShowMyStudents';
import StartExam from './components/Home/Exam/StartExam';
import MyExams from './components/Home/Exam/MyExams';
import DisplayScores from './components/Scores/DisplayScores';
import Results from './components/Home/Exam/Results';
import TeacherProfile from './components/profiles/TeacherProfile';
import Error404 from './components/404/Error404';

function App() {

  const dispatch = useDispatch();

  // Loads user on refresh
  React.useEffect(async ()=>{
    await dispatch(loadUser());
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/student/:id" element={<StudentProfile />} />
          <Route exact path="/teacher/:id" element={<TeacherProfile />} />
          <Route exact path="/studentsList" element={<ShowMyStudents />} />
          <Route exact path="/exam/start/:examId" element={<StartExam />}/>
          <Route exact path="exam/get/score/:examId" element={<DisplayScores />} />
          <Route exact path="/myExams" element={<MyExams />}/>
          <Route exact path="/exam/results/:examId" element={<Results />}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/verifyOTP" element={<VerifyOTP />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/password/forgot" element={<SendLink />} />
          <Route exact path="/api/v1/reset/password" element={<VerifyLink />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
