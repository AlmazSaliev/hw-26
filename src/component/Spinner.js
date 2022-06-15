import { GooeyCircleLoader } from "react-loaders-kit"
import './AllStyle.css'

export const Spinner = () => {
    const loaderProps = {
        loading: true,
        size: 400,
        duration: -1,
        
        colors: ["aqua", "rgb(71, 115, 186)", "rgb(126, 76, 218)"],
      };
return(
    <div className="spinner">
        <div className="sp-box">
            <div className='loader'>
                <GooeyCircleLoader {...loaderProps}/>
            </div> 
        </div>
    </div>
)
}