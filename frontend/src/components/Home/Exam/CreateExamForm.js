import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../../../redux/actions/questionAction'
import { clearCreateExam, createExam } from '../../../redux/actions/schoolAction'


const CreateExamForm = (props) => {

    const questions = useSelector((state) => state.questions);

    const alert = useAlert()
    const dispatch = useDispatch()
    const exam = useSelector((state) => state.createExam)
    const [startTime, setstartTime] = useState('23:59')
    const [endTime, setendTime] = useState('12:59')

    useEffect(() => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes()
        console.log(time)
        setstartTime(time)
    }, [])

    useEffect(() => {
        console.log(exam)
        if (exam.loading === false) {
            if (exam.error !== "" && exam.status === "") {
                alert.error(exam.error.message)
            }
            else if (exam.error === "" && exam.status !== "") {
                alert.success("Exam Created Successfully")
            }
        }
    }, [exam])

    const createExamClicked = async () => {
        console.log(startTime, endTime)
        
        await dispatch(createExam(startTime, endTime))
        props.toggle()
        await dispatch(getQuestions());
        await dispatch(clearCreateExam())
    }

    return (
        <>
            <div>
                <div className="p-2">
                    <h2 className='text-bold text-2xl text-center my-4'>
                        Create Exam
                    </h2>
                    <div className='flex justify-around'>
                        <div className='flex justify-center flex-col items-center'>
                            <p className='mx-2 mb-2 text-bold text-lg'>Start Time</p>
                            <div className='flex items-center justify-around p-2 border-2 border-black rounded-md'>
                                <input className='cursor-pointer' type="datetime-local" onChange={(e) => { setstartTime(e.target.value) }} />
                            </div>
                        </div>
                        <div className='flex justify-center flex-col items-center'>
                            <p className='mx-2 mb-2 text-bold text-lg'>End Time</p>
                            <div className='flex items-center justify-around p-2 border-2 border-black rounded-md'>
                                <input className='cursor-pointer' type="datetime-local" onChange={(e) => { setendTime(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center my-2'>
                        <h1 className='text-bold text-lg'>No of Questions:- {!questions.loading && questions?.questions?.questions.length}</h1>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-blue-400 rounded-md p-2 my-2 text-white hover:bg-blue-600' onClick={createExamClicked}>Create Exam</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateExamForm