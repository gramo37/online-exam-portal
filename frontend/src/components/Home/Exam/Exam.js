import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Exam = (props) => {
  const { exam, isCompleted } = props
  useEffect(() => {
    console.log(exam)
  }, [])
  console.log(exam)
  return (
    <>
      <div className='mx-2 my-2 p-3 rounded-md bg-white border-2 shadow-sm'>
        <div className='w-full flex items-center justify-between'>
          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <span className='font-bold'>Subject: </span> <div>Maths</div>
            <span className='font-bold'>Conducted By: </span> <div>{exam.teacher.name}</div>
          </div>
          <div className='w-1/2'>
            <div><span className='font-bold'>Exam Start Date: </span><p className='italic'>{exam.examStartDate}</p></div>
            <div><span className='font-bold'>Exam End Date: </span><p className='italic'>{exam.examExpiryDate}</p></div>
          </div>
        </div>
        <div className='mt-2 flex items-center justify-center'>
        <Link to={isCompleted ? `/exam/get/score/${exam.id}` : `/exam/start/${exam.id}`} ><button className='bg-blue-400 hover:bg-blue-300 p-2 rounded-md'>{isCompleted ? "Get Result" : "Start Exam"}</button></Link>
        </div>
      </div>
    </>
  )
}

export default Exam