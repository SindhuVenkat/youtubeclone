import ChatMessage from "./ChatMessage"
import { useEffect } from 'react';
import {generateRandomName, makeRandomMessage } from "../utils/helper"
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat =() => {
const dispatch = useDispatch()
const chat = useSelector((store) => store.chat.messages)
//console.log(chat,'chat')


////console.log(chat,'chat')

    useEffect(() => {
       // API Polling

       const i = setInterval(() => {
        dispatch(addMessage({
           
            name: generateRandomName(),
            message:makeRandomMessage(20)
           }))
       }, 2000)

       return () => {
        clearInterval(i)
       }
 
       },[]);

    return(
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
            {chat.map((c)=><ChatMessage name={c.name} message={c.message}/> 
            )}
   
        </div>
        </div>
    )
}

export default LiveChat;