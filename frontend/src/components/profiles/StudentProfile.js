import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { addRemoveStudent, getStudentProfile } from '../../redux/actions/schoolAction';
import { loadUser } from '../../redux/actions/userAction';
import Navbar from '../Navbar/Navbar'
import Loader from '../Loading/Loader';

const StudentProfile = () => {
  const { id } = useParams()
  const dispatch = useDispatch() 
  const school = useSelector((state) => state.school)
  const user = useSelector((state) => state.user);

  useEffect(()=>{
    console.log(school, user)
  }, [school, user])

  useEffect(async () => {
    await dispatch(loadUser())
    await dispatch(getStudentProfile(id))
  }, [])

  const addStudent = async () => {
    await dispatch(addRemoveStudent(id))
    await dispatch(loadUser())
    await dispatch(getStudentProfile(id))
  }

  return (
    <>
    <Navbar />
      <div className='flex'>
        <div className='w-4/6 mx-2 my-2 p-3 rounded-md bg-white border-2 shadow-sm'>
          <div>
            <span className='font-bold'>Name:</span> {school?.student?.student?.name}
          </div>
          <div className='italic'>
            <span className='font-bold'>Email:</span> {school?.student?.student?.email}
          </div>
          <div className='flex justify-center items-center'>
            <button className='bg-blue-400 p-2 rounded-md mt-2 hover:bg-blue-300' onClick={()=>addStudent()}>
              {(!user.loading && !school.loading) ? (user?.user?.user?.students.includes(id) ? "Remove Student" : "Add Student") : "Loading..."}
            </button>
          </div>
        </div>
        <div className='w-2/6 mx-2 my-2 p-3 rounded-md bg-white border-2 shadow-sm'>
          <span className='text-lg font-bold'>Teachers</span>
          <ul className='list-disc ml-4'>
            {school?.student?.student?.teachers.map((item) => {
              return (
                <li>
                  {item.name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default StudentProfile