import React from 'react'

const SingleJobs = (props) => {
    const { elm } = props
    return (
        <div className='vit'>
        <div className='container'>
            <div className="my-2 row" style={{ "width": "1000px" }}>
                <div className='col-md-10'>
                    <h2>{elm.company}</h2>
                    <h4>Role - {elm.designation}</h4>
                    <h4>Location - {elm.location}</h4>
                    <h4>Min_Experience - {elm.min_experience===0?'Fresher':elm.min_experience}</h4>
                    <h4>Skills -
                    {elm.skills.map((skill)=>{
                        return<span key={skill}>
                            {skill},
                        </span>
                        
                    })}
                    </h4>
                    
                </div>
                <div className='col my-auto'>
                    <button type='button' className='btn btn-primary'>Apply</button>
                </div>
                <hr />
            </div>
        </div>
        </div>
    )
}

export default SingleJobs