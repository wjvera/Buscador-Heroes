import React from 'react'

export default function LoginScreen({history}) {


    const Ingresar = () =>{
        history.replace('/')
    }
    
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={Ingresar}
            >
                Ingresar
            </button>
        </div>
    )
}
