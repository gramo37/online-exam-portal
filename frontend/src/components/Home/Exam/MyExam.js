import React from 'react'
import {useNavigate} from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { calculateScore } from '../../../redux/actions/schoolAction'

const MyExam = (props) => {
    
    const user = useSelector((state) => state.user);
    const score = useSelector((state) => state.score)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {item, isCalculated} = props

    const calScoreClicked = async (id) => {
        if(isCalculated) {
            // Get Scores
            // getScores
            navigate(`/exam/results/${id}`)
            // await dispatch(getScores())
        } else {
            await dispatch(calculateScore(id))
        }
    }
    
    return (
        <>
            <div className='my-2 mx-2 bg-white rounded-md p-2'>
                <div className='flex justify-center items-center'>
                    <div className='mx-2 my-2'>
                        <div className='flex'>
                            <span className='font-bold mx-2'>Exam id: </span>
                            <div className='italic'>{item.exam._id}</div>
                        </div>
                        <div className='flex'>
                            <span className='font-bold mx-2'>No of Questions: </span>
                            <div className='italic'>{item.exam.questions.length}</div>
                        </div>
                        <div className='flex'>
                            <span className='font-bold mx-2'>No of Responses: </span>
                            <div className='italic'>{item.responses}</div>
                        </div>
                    </div>
                    <div className='mx-2 my-2'>
                        <div className='flex'>
                            <span className='font-bold mx-2'>Exam Start Date: </span>
                            <div className='italic'>{item.exam.examStartDate}</div>
                        </div>
                        <div className='flex'>
                            <span className='font-bold mx-2'>Exam Expiry Date: </span>
                            <div className='italic'>{item.exam.examExpiryDate}</div>
                        </div>
                        <div className='flex'>
                            <span className='font-bold mx-2'>No Of Responses Left: </span>
                            <div className='italic'>{user.user?.user?.students.length - item.responses}</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-around items-center my-2'>
                    <div className='mx-2'>
                        <button className='bg-blue-400 p-2 rounded-md' onClick={() => calScoreClicked(item.exam._id)}>
                            {isCalculated ? "Get Result" : "Calculate Score"}
                        </button>
                    </div>
                    <div className='mx-2'>
                        <button className='bg-blue-400 p-2 rounded-md'>Delete Exam</button>
                    </div>
                    {!isCalculated && <div className='mx-2'>
                        <button className='bg-blue-400 p-2 rounded-md'>Edit Exam</button>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default MyExam