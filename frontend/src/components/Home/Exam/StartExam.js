import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { clearSendAnswer, sendAnswers, takeExam } from '../../../redux/actions/schoolAction'
import DisplayQuestions from './DisplayQuestions'

const StartExam = () => {
  const { examId } = useParams()
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()

  const sendAnswer = useSelector((state)=>state.sendAnswer)
  const exam = useSelector((state) => state.takeExam)

  const [answers, setAnswers] = useState([])

  const submitAnswers = async (e) => {
    e.preventDefault()
    console.log("hula", answers)
    // sendAnswers
    await dispatch(sendAnswers(answers, examId))
  }

  useEffect(async () => {
    await dispatch(takeExam(examId))
  }, [])

  useEffect(() => {
    console.log(exam)
    if(!exam.loading) {
      if(exam.error !== "" && exam.status === "") {
        alert.error(exam.error.message)
        navigate("/home")
      }
    }
  }, [exam])

  useEffect(async ()=>{
    if(!sendAnswer.loading) {
      if(sendAnswer.error === "" && sendAnswer.status !== "") {
        alert.success("Exam Submitted Successfully.")
        await dispatch(clearSendAnswer())
        navigate("/home")
      }
      else if(sendAnswer.error !== "" && sendAnswer.status === "") {
        alert.error("Something went wrong")
      }
    }
    console.log(sendAnswer)
  }, [sendAnswer])

  return (
    <>
      <form>
        {exam?.status?.questions?.map((item, index) => {
          return (<DisplayQuestions setAnswers={setAnswers} answers={answers} question={item} index={index} />)
        })}
        <div className='flex justify-center'>
          <button onClick={submitAnswers} className='bg-blue-400 p-2 rounded-md text-white hover:bg-blue-600'>Send Answers</button>
        </div>
      </form>
    </>
  )
}

export default StartExam