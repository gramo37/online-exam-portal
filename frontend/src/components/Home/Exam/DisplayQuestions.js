import React, {useState, useEffect} from 'react'

const DisplayQuestions = (props) => {
    const { question, index, setAnswers, answers } = props

    const [answer, setAnswer] = useState("")

    useEffect(() => {
      console.log(answer)

      let isPresent = false
        for (let i = 0; i < answers.length; i++) {
            const item = answers[i];
            if(item.questionId === question._id) {
                isPresent = true
                break
            }
        }

        if(isPresent === false) {
            let temp = answers
            temp.push({
                questionId: question._id,
                answers: parseInt(answer)
            })
            setAnswers(temp)
            
        } else {
            let temp = answers
            for (let i = 0; i < temp.length; i++) {
                const item = temp[i];
                if(item.questionId === question._id) { 
                    item.answers = parseInt(answer)
                    break
                }
            }
            setAnswers(temp)
        }

    }, [answer])
    

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    return (
        <>
        <div className='bg-white my-2 mx-2 p-2 rounded-md'>
            <div className='my-2'>
                <span>Q{index+1}: </span> {question.question}
            </div>
            <div>
                {question.options.map((opt, index) => {
                    return (
                    <div className='my-1'>
                        <input type="radio" checked={answer === `${index+1}`} value={index+1} onChange={handleChange}/> {opt}
                    </div>
                )
                })}
            </div>
        </div>
        </>
    )
}

export default DisplayQuestions