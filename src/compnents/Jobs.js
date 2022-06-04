import React, { useState, useEffect } from 'react'
import SingleJobs from './SingleJobs'
import "./Jobs.css"

const Jobs = () => {
    const [JobList, setJobList] = useState([])

    const getJobs = async () => {
        
        const response = await fetch('http://refertest.pythonanywhere.com/job/openings'
            , {
                Method: "GET",
                Headers:
                {
                    "tid": "3441"
                }
            }
        )
        const job = await response.json()
        // console.log(job)
        setJobList(job.data)
    }
    useEffect(() => {
        getJobs()
    }, [])

    return (
        <div className='vit'>
            <div className="container tit">
                <h1>
                    Job Vacancies
                </h1>
            </div>
            {JobList.map((elm) => {
                return <SingleJobs elm={elm} key={elm.id} />
            })}
        </div>
    )
}
export default Jobs