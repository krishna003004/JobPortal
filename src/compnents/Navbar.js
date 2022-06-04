import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader } from 'reactstrap';
import Singleuser from './Singleuser'
import "./Navbar.css"

const Navbar = () => {
    const [modal, setmodal] = useState(false)
    const [UserData, setUserData] = useState([])

    useEffect(() =>{
        fetch("http://refertest.pythonanywhere.com/user/data").then((result) =>{
          result.json().then((resp) =>{
            // console.log(resp)
            setUserData(resp)
            // console.log(UserData)
          },)
    
        })
      },[])
      console.log(UserData.data)
    //   console.log("Fuck name",UserData.data.name)

    

    // const getuser = async () => {
    //     const ret = await fetch('http://refertest.pythonanywhere.com/user/data'
    //     , {
    //         Method: 'GET',
    //         Headers:
    //         {
    //             "uid": '136'
    //         }
            
    //     }
    //     )
    //     const lil = await ret.json()
    //     console.log(lil.data)
    //     setUserData(lil.data)
    //     // setUserData(prevUserData => ([...prevUserData,lil.data]))
    //     console.log("This is user data",UserData)
    // }
    // useEffect(() =>{
    //     getuser()
    //     // eslint-disable-next-line
    // }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container-fluid">
                <a className="navbar-brand mx-3" href="/">Jobs</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/">About Us</a>
                        </li>
                    </ul>
                    <form className="d-flex">

                    </form>
                    <Modal isOpen={modal} toggle={() => setmodal(!modal)}>
                        <ModalHeader  isOpen={modal} toggle={() => setmodal(!modal)} >
                                <div className='heading'><h3>Profile</h3></div>
                             {/* {UserData.map((elm)=>{
                                return <Singleuser elm={elm} key={elm.id} />
                            })} */}
                            <Singleuser elm={UserData.data}/>
                        </ModalHeader>
                    </Modal>
                    <span type='button' className='btn btn-primary me-4' onClick={() => setmodal(true)}>USER-INFO</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar