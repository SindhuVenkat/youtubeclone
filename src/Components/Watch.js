import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
    
    const [searchParams] = useSearchParams();


const dispatch = useDispatch()

useEffect(()=>{
    dispatch(hideMenu())
},[])
    
    return(
        <div className="flex flex-col w-full">
        <div className="px-5 flex w-full">
          

      
        <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
            </div>
            <CommentsContainer/>
            </div>
    )
}

export default Watch;