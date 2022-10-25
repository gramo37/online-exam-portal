import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getScore } from '../../redux/actions/schoolAction'
import Navbar from '../Navbar/Navbar'

const DisplayScores = () => {
    let { examId } = useParams()

    const [scorePercent, setScorePercent] = useState(0)
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const score = useSelector((state) => state.score)

    useEffect(async () => {
        // getScore
        await dispatch(getScore(examId))
    }, [])

    useEffect(() => {
      console.log(score)
      score?.score?.score?.map((item)=>{
          let score = (item.score * 100 / item.examId.questions.length)
          setScorePercent(score)
      })
      if (score?.score?.score?.length === 0) {
          setMessage("Scores are yet to be calculated. Please Wait.")
          setScorePercent("")
      }
      else if(scorePercent < 40) {
          setMessage("Sorry, we regret to inform you that you were not able to pass the exam.")
      } else if(scorePercent >= 40 && scorePercent < 60) {
          setMessage("Congratulations. You have passed the exam with Grade C")
      } else if(scorePercent >= 60 && scorePercent < 80) {
        setMessage("Congratulations. You have passed the exam with Grade B")
      } else if (scorePercent >= 80) {
        setMessage("Congratulations. You have passed the exam with Grade A")
      }
    }, [score])

    return (
        <>
        <Navbar />
            <div className='bg-white mx-2 my-2 rounded-md p-2'>
                {score?.score?.score?.length === 0 ? "" : <>Score : {score?.score?.score?.map((item)=>{
                    return <>{item.score} / {item.examId.questions.length}</>
                })} <br />
                Percent : {scorePercent} <br /></>}
                {message}
            </div>
        </>
    )
}

export default DisplayScores