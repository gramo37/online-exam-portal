import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMyStudents } from '../../redux/actions/schoolAction'
import Navbar from '../Navbar/Navbar'

const ShowMyStudents = () => {
    const dispatch = useDispatch()
    const school = useSelector((state) => state.school)
    useEffect(() => {
        dispatch(getMyStudents())
    }, [])
    useEffect(() => {
        console.log(school)
    }, [school])
    return (
        <>
            <Navbar />
            <div>
                {school.student?.students?.length === 0 ? "No Students to Display" : school.student?.students?.map((item) => {
                    return (
                        <>
                            <Link to={`/student/${item._id}`}>
                                <div className='mx-2 my-2 p-2 rounded-md bg-white border-2 shadow-sm cursor-pointer'>
                                    <div className='hover:bg-gray-200 p-2 rounded-md'>

                                        <div>
                                            <span className='font-bold'>Name: </span>{item.name}
                                        </div>
                                        <div className='italic'>
                                            <span className='font-bold'>Email: </span>
                                            {item.email}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ShowMyStudents