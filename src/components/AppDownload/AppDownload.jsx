import { assets } from "../../assets/assets"
import "./Download.css"

export const AppDownload=()=>{
    return(
        <div className="app-download" id="app-download">
            <p>For Better Experience Download <br />
            Tomato App
            <div className="app-download-platform">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
            </p>

        </div>
    )
}