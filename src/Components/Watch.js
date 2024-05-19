import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
    
    const [searchParams] = useSearchParams();


const dispatch = useDispatch()

useEffect(()=>{
    dispatch(hideMenu())
},[])
    
    return(
        <div className="flex flex-col w-full overflow-y-hidden">
        <div className="px-5 flex w-1/2">
          

        <div className="">
        <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </div>
          <div className="w-full">
          <LiveChat />
        </div>
            </div>
            <CommentsContainer/>
            </div>
    )
}

export default Watch;