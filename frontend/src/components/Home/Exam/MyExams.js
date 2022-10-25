import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getMyExam } from '../../../redux/actions/schoolAction'
import Navbar from '../../Navbar/Navbar'
import MyExam from './MyExam'
const MyExams = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const myExam = useSelector((state) => state.myExam);
    const score = useSelector((state) => state.score);

    useEffect(async () => {
        await dispatch(getMyExam())
    }, [])

    useEffect(() => {
        console.log(myExam)
    }, [myExam])

    useEffect(async () => {
        console.log(score)
        if(!score.loading) {
            if(score.error === "" && score.user !== "") {
                alert.success("Score Successfully Calculated")
                await dispatch(getMyExam())
            } else if(score.error !== "" && score.user === "") {
                alert.error("Something Went Wrong!!")
            }
        }
    }, [score])

    return (
        <>
            <Navbar />
            <h2 className='font-bold text-lg text-center'>Exams with scores to be Calculated.</h2>
            {myExam?.exam?.exams?.length === 0 ? <h2 className='italic text-center'>No Exams to Display</h2> : 
                myExam?.exam?.exams?.map((item) => {
                    return (
                        <>
                            <MyExam item={item} isCalculated={false}/>
                        </>
                    )
                })
            }
            <h2 className='font-bold text-lg text-center'>Exams with Calculated Scores</h2>
            {myExam?.exam?.calculatedExams?.length === 0 ? <h2 className='italic text-center'>No Exams to Display</h2> : 
                myExam?.exam?.calculatedExams?.map((item) => {
                    return (
                        <>
                            <MyExam item={item} isCalculated={true}/>
                        </>
                    )
                })
            }
        </>
    )
}

export default MyExams