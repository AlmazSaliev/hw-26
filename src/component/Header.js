import './AllStyle.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { uiActions } from './store/uiSlice'
import { useState } from 'react'

export const Header=()=>{
    let dispatch = useDispatch()
    let store = useSelector(store=>store.ui.btnname)
    let id =useSelector(store=>store.ui.id)
    let [d, setd]=useState([])
    let getfetch=()=>{
        if(d.length === 1) return
         fetch('https://userdata-2d3c9-default-rtdb.firebaseio.com/data.json')
        .then(res=>res.json())
        .then(data=>{
            setd(()=>{
                let d = []
                for(let key in data){
                   d.push(data[key])
                }
                let a = d.filter((i)=>i.id === id)
                 dispatch(uiActions.renderdata(a))
                return [...a]
            })
        })
    }
   
     function bool(){
        if(store==='Sing up'){
           dispatch(uiActions.newspa()) 
        }else{
            getfetch()
            setTimeout(()=>dispatch(uiActions.user()),350 )
        }
    }
    function homespa(){
        dispatch(uiActions.home())
    }
    return <div className='header'>
        <img src="https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg" alt="logo"/>
        <div className='btn-header'>
            <button onClick={homespa}>Home</button>
            <button onClick={bool}>{store}</button>
        </div>
    </div>
}