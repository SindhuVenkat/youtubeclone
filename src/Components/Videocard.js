const Videocard = ({info}) => {
 
 const {thumbnails, title, channelTitle} = info.snippet
    return(


    <div className="p-2 m-2 w-72 shadow-lg">
        <img src={thumbnails.standard.url}/>
        <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{info.statistics.viewCount}</li>
        </ul>
    </div>
 )
}

export default Videocard;