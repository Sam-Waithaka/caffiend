import { useState } from "react"

import Modal from "./Modal"
import Authentication from './Authentication'
import { useAuth } from "../context/AuthContext"

export default function Layout(props){

    const {children} = props
    const [showModal, setShowModal] = useState(false)

    const {globalUser, logout} = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND </h1>
                <p>for coffee instatiates</p>
            </div>
            {globalUser ? (
                <button onClick={logout}>
                    <p>Logout</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            ) : (
                <button onClick={()=>{setShowModal(true)}}>
                    <p>Sign up free</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            )
            }
        </header>
    )
    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a href="https://developersam-portfolio.netlify.app/">Sam Waithaka</a></p>
            <p>Check out the project on <a target='_blank'  rel="noopener" href="https://github.com/Sam-Waithaka/caffiend.git">Github!</a></p>
        </footer>
    )


    function handleCloseModal(){
        setShowModal(false)
    }

    return(
        <>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal}/>
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}