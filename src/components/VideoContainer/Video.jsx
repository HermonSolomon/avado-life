// A React component for playing a variety of URLs - https://www.npmjs.com/package/react-player?activeTab=readme
import ReactPlayer from "react-player";

const Video = ({ video }) => {
   // "video-container" is needed to correctly position video on a page
   // "video-wrapper" has an 16:9 aspect Ratio (divide 9 by 16 = 0.5625).
   // See more "_video-container.scss"
   return (
      <div className="video-container">
         <div className="video-wrapper">
            <ReactPlayer
               width="100%"
               height="100%"
               controls={true}
               className="video"
               url={video}
            />
         </div>
      </div>
   );
};

export default Video;
