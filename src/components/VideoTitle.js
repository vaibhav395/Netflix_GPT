const VideoTitle = ({title, overview})=>{
    return <div className="w-screen aspect-video pt-[16%] px-24 absolute bg-gradient-to-r from-black text-white">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6  w-1/4">{overview}</p>
        <div>
            <button className="bg-white text-black text-xl p-2 px-8 rounded-md m-2 hover:bg-opacity-70">▸ Play</button>
            <button className="bg-gray-500 text-white text-xl p-2 px-12 rounded-md m-2">ⓘ More info</button>
        </div>
    </div>
}

export default VideoTitle;