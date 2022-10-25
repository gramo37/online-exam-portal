import React from 'react'

const Result = (props) => {
    const { score } = props
    return (
        <>
            <div className='bg-white my-2 mx-2 rounded-md p-2 flex justify-between'>
                <div className='italic text-lg text-center w-1/3 m-auto'>{score.studentId.name}</div>
                <div className='italic text-lg text-center w-1/3 m-auto'>{score.score}</div>
                <div className='italic text-lg text-center w-1/3 m-auto'>{score.score * 100 / (score.examId.questions.length)}%</div>
            </div>
        </>
    )
}

export default Result