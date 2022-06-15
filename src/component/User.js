import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "./store/uiSlice"
import './AllStyle.css'

export const User=()=>{
    let dispatch = useDispatch()
    let data = useSelector(store=>store.ui.getdata)
    console.log(data);
    function logout(){
        
        dispatch(uiActions.gospinner())
        setTimeout(()=>{
            dispatch(uiActions.btn('Sing up'))
            dispatch(uiActions.stopspinner());
            dispatch(uiActions.home())
        }, 4000)
    }
    return(
        <div className="user">
            <div>
                {data.map((i)=><div>
                    <h2>{i.name}</h2>
                    <p>{i.email}</p>
                    <p>{i.password}</p>
                    </div>)}
                <img src="http://memesmix.net/media/created/emkhjz.jpg" alt="foto"/>
            </div>
            
            <button onClick={logout}>Logout</button>
        </div>
    )
}