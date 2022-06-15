import { useState } from "react"
import { useDispatch } from "react-redux"
import { uiActions } from "./store/uiSlice"
import './AllStyle.css'

export const Input=()=>{
    let dispatch = useDispatch()
    let[value, setValue]=useState({
        text: '',
        email: '',
        password: '',
        id: Math.random().toString(),
        proverkatext: false,
        proverkaEmail: false,
        proverkaPassword: false,
        intext: false,
        inemail: false,
        inpassword: false,
    })
    function onblur(e){
        let getvalue = e.target.value
        if(e.target.type === 'text'){
            setValue({
                ...value,
                proverkatext: value.proverkatext = getvalue.length > 2 && getvalue.trim()!=='',
                intext: value.intext = true,
            })
        }
        if(e.target.type==='email'){
            setValue({
                ...value,
                proverkaEmail: value.proverkaEmail = (/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(getvalue)),
                inemail: value.inemail = true,
            })
        }
        if(e.target.type==='password'){
            setValue({
                ...value,
                proverkaPassword: value.proverkaPassword = getvalue.length > 6,
                inpassword: value.inpassword = true,
            })
        }
    }
    function onchange(e){
        let getvalue = e.target.value
        if(e.target.type === 'text'){
            setValue({
                ...value,
                proverkatext: value.proverkatext = getvalue.length > 2 && getvalue.trim()!=='',
                intext: value.intext = true,
            })
        }
        if(e.target.type==='email'){
            setValue({
                ...value,
                proverkaEmail: value.proverkaEmail = (/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(getvalue)),
                inemail: value.inemail = true,
            })
        }
        if(e.target.type==='password'){
            setValue({
                ...value,
                proverkaPassword: value.proverkaPassword = getvalue.length > 6,
                inpassword: value.inpassword = true,
            })
        }
        setValue({
            ...value,
            [e.target.type]: getvalue
        })
    }
    
    let btn = true
    if(value.proverkaEmail && value.proverkaPassword && value.proverkatext){
        btn=false
    }
    function submit(e){
        e.preventDefault()
        dispatch(uiActions.postfetch(value))
        dispatch(uiActions.gospinner())

        setTimeout(()=>{
            dispatch(uiActions.btn('User'))
            dispatch(uiActions.stopspinner());
            dispatch(uiActions.home())
        }, 4000)

        setValue({
            text: '',
            email: '',
            password: '',
        })

    }
    let text = !value.proverkatext && value.intext;
    let email = !value.proverkaEmail && value.inemail;
    let password = !value.proverkaPassword && value.inpassword;
    let classText = (text && 'form1 neform1') || 'form1';
    let classEmail = (email && 'form1 neform1') || 'form1';
    let classPassword = (password && 'form1 neform1') || 'form1';
    return <form onSubmit={submit}>
        <h2>Registration</h2>
        <div className={classText}>
            <label htmlFor="Name">Name</label>
            <input type='text' name="Name" onChange={onchange} placeholder={text? 'Try again...': 'Your name is...'} onBlur={onblur} value={value.text}/>
        </div>
        <div className={classEmail}>
            <label htmlFor="Gmail">Gmail</label>
            <input type='email' name="Gmail" onChange={onchange} placeholder={email? 'Try again...': 'Your email is...'} onBlur={onblur} value={value.email}/>
        </div>
        <div className={classPassword}>
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" onChange={onchange} placeholder={password? 'Try again...': 'Password...'} onBlur={onblur} value={value.password}/>
        </div>
        <button disabled={btn}>Add</button>
    </form>
}