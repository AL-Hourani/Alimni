
 import {Card,
  CardHeader,
  CardBody, 
  CardFooter, 
  
} from "@heroui/react";
import React,{useState , useRef} from "react";
import ReactPlayer from "react-player";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Moduel from "../courses/Moduel";
// import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react";


const VideoPlayer = ({ videoUrl ,isPaid }: { videoUrl: string , isPaid : boolean }) => {
const playerRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
const [openModuel , setOpenModuel] = useState(false);
const [muted, setMuted] = useState(false);
const [volume, setVolume] = useState(0.8);
const [progress, setProgress] = useState(0);
// playing
const handlePlay = () => {
  if(isPaid){
    setIsPlaying(true);
  }else {
    setOpenModuel(!openModuel)
  }
};
// const togglePlay = () => setPlaying(!playing);
// // mute 
// const toggleMute = () => setMuted(!muted);
// // volume
// const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setVolume(parseFloat(e.target.value));
//   setMuted(false);
// };
// // progress
// const handleProgress = (state: any) => {
//   setProgress(state.played * 100);
// };

// const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const newTime = parseFloat(e.target.value) / 100;
//   playerRef.current?.seekTo(newTime);
// };
// const handleFullscreen = () => {
//   const videoElement = document.getElementById("video-wrapper");
//   if (videoElement?.requestFullscreen) {
//     videoElement.requestFullscreen();
//   }
// };

  return (
    <>
        <Moduel isOpen={openModuel} onOpenChange={handlePlay} />
        <Card className="md:max-w-[300px] w-full  background-color rounded-none ligth-border-bottom  cursor-pointer">
              <CardHeader className="flex-center p-2 text-white ">
                <h2 className="  text-xl font-bold">رياضيات</h2>
              </CardHeader>

              <CardBody className="  !p-0 relative !m-0 w-full h-auto">
                    <ReactPlayer 
                     ref={playerRef}
                      url={videoUrl} 
                      width="100%" 
                      height="100%" 
                      playing={isPlaying}
                      volume={volume}
                      muted={muted}
                      style={{ padding: 0, margin: 0 }}
                      // onProgress={handleProgress}
                      controls={false} 
                    />

                    {/* palying viddeo  */}
                    {!isPlaying && (
                      <div
                        onClick={handlePlay}
                        className="absolute  w-10 h-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full background-primary flex items-center justify-center cursor-pointer z-10 "
                      >
                        <FontAwesomeIcon icon={faPlay} className="text-lg backgound-text "/>
                      </div>
                    )}
                    {/* controls in vedio */}
                      {/* Controls Overlay */}
                  {/* <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4 flex flex-col gap-2">
                    {/* Progress bar */}
                    {/* <input
                      type="range"
                      min={0}
                      max={100}
                      value={progress}
                      onChange={handleSeek}
                      className="w-full cursor-pointer accent-green-500"
                    /> */}

                    {/* <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <button onClick={togglePlay} className="text-white">
                          {playing ? <Pause /> : <Play />}
                        </button> */} 
{/* 
                        <button onClick={toggleMute} className="text-white">
                          {muted || volume === 0 ? <VolumeX /> : <Volume2 />}
                        </button>

                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.01}
                          value={volume}
                          onChange={handleVolumeChange}
                          className="cursor-pointer accent-green-500"
                        />
                      </div> */}

                      {/* <button onClick={handleFullscreen} className="text-white">
                        <Maximize2 />
                      </button>
                    </div>
                  </div> */}
                                {/* end controls invedio */}
              </CardBody>
              <CardBody className="flex-start p-2">
                <p className="text-white">الدرس الاول في الاعداد العقدية</p>
              </CardBody>
        {/* <span className="w-[96%] my-4 mx-auto h-[2px] rounded-lg light-bacground"></span> */}



        <CardFooter className=" p-4 flex-between gap-x-2">
        <div className="flex-center gap-x-2">
            <span className="text-base light-color ">3233</span>
             <FontAwesomeIcon icon={faHeart}  className="text-base "/>
          </div>
          <span className="w-[1px] my-4 mx-auto h-full rounded-lg light-bacground"></span>
          <div className="flex-center gap-x-2">
            <span className="text-base light-color ">47474</span>
             <FontAwesomeIcon icon={faDownload} className="text-base light-color "/>
          </div>
        <span className="w-[1px] my-4 mx-auto h-full rounded-lg light-bacground"></span>
          <div className="flex-center gap-x-2">
            <span className="text-base light-color ">76767</span>
             <FontAwesomeIcon icon={faEye} className="text-base light-color "/>
          </div>
        
  

        </CardFooter>
        </Card>
      </>
  )
}

export default VideoPlayer
