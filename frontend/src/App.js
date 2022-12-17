import './App.css';
import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import { useDispatch } from "react-redux";
import { loadUser } from './redux/actions/userAction';
import Protected from './components/Protected Routes/Protected';
const DashBoard = lazy(() => import("./components/DashBoard/DashBoard"));
const Home = lazy(() => import("./components/Home/Home"));
const Signup = lazy(() => import("./components/Auth/Signup"));
const Login = lazy(() => import("./components/Auth/Login"));
const VerifyOTP = lazy(() => import("./components/Auth/VerifyOTP"));
const SendLink = lazy(() => import("./components/Auth/SendLink"));
const VerifyLink = lazy(() => import("./components/Auth/VerifyLink"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const StudentProfile = lazy(() => import("./components/profiles/StudentProfile"));
const ShowMyStudents = lazy(() => import("./components/profiles/ShowMyStudents"));
const StartExam = lazy(() => import("./components/Home/Exam/StartExam"));
const MyExams = lazy(() => import("./components/Home/Exam/MyExams"));
const DisplayScores = lazy(() => import("./components/Scores/DisplayScores"));
const Results = lazy(() => import("./components/Home/Exam/Results"));
const TeacherProfile = lazy(() => import("./components/profiles/TeacherProfile"));
const Error404 = lazy(() => import('./components/404/Error404'));

function App() {

  const dispatch = useDispatch();

  // Loads user on refresh
  React.useEffect(async () => {
    await dispatch(loadUser());
  }, [])

  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/dashboard" element={<Protected Component={Home} />} />
            <Route exact path="/student/:id" element={<StudentProfile />} />
            <Route exact path="/teacher/:id" element={<TeacherProfile />} />
            <Route exact path="/studentsList" element={<ShowMyStudents />} />
            <Route exact path="/exam/start/:examId" element={<StartExam />} />
            <Route exact path="exam/get/score/:examId" element={<DisplayScores />} />
            <Route exact path="/myExams" element={<MyExams />} />
            <Route exact path="/exam/results/:examId" element={<Results />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/verifyOTP" element={<VerifyOTP />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password/forgot" element={<SendLink />} />
            <Route exact path="/api/v1/reset/password" element={<VerifyLink />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
