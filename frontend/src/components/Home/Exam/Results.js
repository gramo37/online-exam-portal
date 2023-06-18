import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getScores } from '../../../redux/actions/schoolAction'
import Result from './Result'

const Results = () => {
    const dispatch = useDispatch()
    const score = useSelector((state) => state.score)

    const { examId } = useParams()

    useEffect(async () => {
        await dispatch(getScores(examId))
    }, [])

    useEffect(() => {
        console.log(score)
        score?.score?.scores?.map((item) => {
            console.log(item)
        })
    }, [score])

    return (
        <>
            <div className='bg-white my-2 mx-2 rounded-md p-2 flex justify-between'>
                <div className='font-bold text-lg text-center w-1/3 m-auto'>Name Of Student</div>
                <div className='font-bold text-lg text-center w-1/3 m-auto'>Score</div>
                <div className='font-bold text-lg text-center w-1/3 m-auto'>Percent</div>
            </div>

            {score?.score?.scores?.map((item) => {
                return (<Result score={item} />)
            })}
        </>
    )
}

export default Results