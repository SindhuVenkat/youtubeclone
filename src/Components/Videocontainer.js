import Videocard from "./Videocard";
import {YOUTUBE_URL} from "../utils/constants"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getYoutubeid } from "../utils/idSlice";

const Videocontainer =() => {

const [videos, setVideos] = useState([])

const dispatch = useDispatch()

    useEffect(()=>{
  getVideos()
    },[])

const getVideos = async() => {
    const data = await fetch(YOUTUBE_URL)
    const json = await data.json()
    console.log(json.items,'json')
    setVideos(json.items)
    //dispatch(getYoutubeid(json.items))
}

const getYoutubeids = videos.map((x) => (x.id))
dispatch(getYoutubeid(getYoutubeids))

    return(
        <div className="flex flex-wrap">
        {videos.map((info)=>(
            <div>
          <Link to={"/watch?v=" + info.id}>  <Videocard info={info} /></Link>
          </div>
        ))}
        </div> 
    )
}


export default Videocontainer;