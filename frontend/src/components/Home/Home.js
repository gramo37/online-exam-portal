import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import TeacherHome from './TeacherHome';
import StudentHome from './StudentHome';
import { loadUser } from '../../redux/actions/userAction';

const Home = (props) => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(async ()=>{
    await dispatch(loadUser())
    console.log(user)
  }, [])

  return (
    <>
      <Navbar active="dashboard"/>
      {user.user?.user?.role === "teacher" && <TeacherHome />}
      {user.user?.user?.role === "student" && <StudentHome />}
    </>
  )
}

export default Home;

// Navbar options Frontend
// Media query
// Delete Option 
// Reduce no of options