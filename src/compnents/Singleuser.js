import React from 'react'
import "./Singleuser.css"

const Singleuser = (props) => {
    const { elm } = props
    return (
        <div className='container'>
            <div className='container3'>
                <img src={elm.pictureUrl} alt="..." />
                <hr />
                <h5>Name - {elm.name}</h5>
                <hr />
                <h5>College - {elm.college}</h5>

            </div>


        </div>
    )
}

export default Singleuser