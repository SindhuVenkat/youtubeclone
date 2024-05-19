const Videocard = ({info}) => {
 
 const {thumbnails, title, channelTitle} = info.snippet
    return(


    <div className="p-2 m-2 w-64 shadow-lg">
        <img  className="w-full" src={thumbnails.standard.url}/>
        <ul>
        <li  className="text-ellipsis overflow-hidden whitespace-nowrap">{title}</li>
        <li  className="text-ellipsis-50">{channelTitle}</li>
        <li className="text-ellipsis-50">{info.statistics.viewCount}</li>
        </ul>
    </div>
 )
}

export default Videocard;