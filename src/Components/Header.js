import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {

const handleClick = () => {
    dispatch(toogleMenu())
}

const[searchQuery, setSearchQuery] = useState('')
const [suggestions, setSuggestions] = useState([])
const [showSuggestion, setShowSuggestion] = useState(false)

useEffect(()=>{
    getSearchResults()
},[searchQuery])

const getSearchResults = async() => {
    try{
    const data = await fetch(SEARCH_API + searchQuery)
    const json = await data.json()
    console.log(json[1],'search')
    setSuggestions(json[1])

}
catch(err){
    console.log(err)
}
}

const dispatch = useDispatch()

    return(
        <div className="grid grid-flow-col p-4 m-1 shadow-lg">      
            <div className="flex grid-cols-1">
            <img onClick={handleClick}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
          <a href="#">  <img className="h-8 mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtubelogo"/></a>
        </div>
        <div className="grid-cols-10">
            <div>
            <input type="text"
            value={searchQuery}
             onChange={(e)=>setSearchQuery(e.target.value)}
             onFocus={() => setShowSuggestion(true)}
             onBlur={() => setShowSuggestion(false)}
            className="px-5 w-10/12 border border-gray-400 p-2 rounded-l-full" placeholder="Search"/>
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
          </div>
          {showSuggestion && (
          
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
        <ul>
            {suggestions.map((info) =>
           <li className="py-2 px-3  hover:bg-gray-100">{info}</li>
         )}
         </ul>
         </div>
         )}
        </div>

        <div className="grid-cols-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        
        </div>
        </div>
  
    )
}


export default Header;