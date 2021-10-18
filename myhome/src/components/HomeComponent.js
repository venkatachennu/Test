import React,{useState, useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

function HomeComponent() {
    const [name,setName] = useState('')
    const [password,setPassword] = useState("")
    const nameRef = useRef()
    const pwRef = useRef()
    const history = useHistory()

    const loginCredentials = (e) => {
        e.preventDefault()
        if(name === "suneetha" && password === "suni"){
            history.push("/MemberDetailsComponent")
        }
        else{
            alert("please enter valid username and password")
            nameRef.current.value = ""
            pwRef.current.value = ""
            nameRef.current.focus()
        }
    }

   useEffect(()=>{
        nameRef.current.focus()
    },[]) 

    return(
        <>
            <header>
                <h1 style={{color:"Blue"}}>Welcome to my home</h1>
            </header>
            <section>
                <form>   
                    <div>                 
                    <label> Enter your UserName: </label>
                    <input type="text" ref= {nameRef} placeholder="enter name" onChange={e=>setName(e.target.value)}></input>
                    </div>
                    <br></br>
                    <div>
                    <label> Enter your Password: </label>
                    <input type="password" ref={pwRef} placeholder="enter password" onChange={e=>setPassword(e.target.value)} ></input>
                    </div>
                    <br></br>
                    <div>
                    <button onClick = {loginCredentials}> Login </button>
                    </div>
                </form>
            </section>
            <footer>
                <cite>Created by Suneetha</cite>
            </footer>
        </>
    )
}

export default HomeComponent;