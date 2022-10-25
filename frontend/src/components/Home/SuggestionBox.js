import React from 'react'
import { Link } from "react-router-dom";
const SuggestionBox = (props) => {
    return (
        <>
            <li className="flex justify-between items-center p-2 font-bold cursor-pointer rounded-md transition-all hover:bg-gray-200">
                <Link to={`/${props.linkTo}/${props.item._id}`}>
                    <div>
                        <div>
                            {props.item?.name}
                        </div>
                        <div className="italic font-thin">
                            {props.item?.email}
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default SuggestionBox