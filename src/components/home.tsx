import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

const home = () => {
  interface Video {
    name: string;
    description: string;
    channel: string;
    imageUrl: string;
  }

  const videos: Video[] = [
    {
      name: "Video 1",
      description: "Description For Video 1",
      channel: "Channel A",
      imageUrl: "../video_images/1.jpg",
    },
    {
      name: "Video 2",
      description: "Description For Video 2",
      channel: "Channel B",
      imageUrl: "../video_images/2.jpg",
    },
    {
      name: "Video 3",
      description: "Description For Video 3",
      channel: "Channel C",
      imageUrl: "../video_images/3.jpg",
    },
    {
      name: "Video 4",
      description: "Description For Video 4",
      channel: "Channel A",
      imageUrl: "../video_images/4.jpg",
    },
    {
      name: "Video 5",
      description: "Description For Video 5",
      channel: "Channel B",
      imageUrl: "../video_images/5.jpg",
    },
    {
      name: "Video 6",
      description: "Description For Video 6",
      channel: "Channel C",
      imageUrl: "../video_images/6.jpg",
    },
    {
      name: "Video 7",
      description: "Description For Video 7",
      channel: "Channel A",
      imageUrl: "../video_images/7.jpg",
    },
    {
      name: "Video 8",
      description: "Description For Video 8",
      channel: "Channel B",
      imageUrl: "../video_images/8.jpg",
    },
    {
      name: "Video 9",
      description: "Description For Video 9",
      channel: "Channel C",
      imageUrl: "../video_images/9.jpg",
    },
    {
      name: "Video 10",
      description: "Description For Video 10",
      channel: "Channel A",
      imageUrl: "../video_images/10.jpg",
    },
    {
      name: "Video 11",
      description: "Description For Video 11",
      channel: "Channel B",
      imageUrl: "../video_images/11.jpg",
    },
    {
      name: "Video 12",
      description: "Description For Video 12",
      channel: "Channel C",
      imageUrl: "../video_images/12.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {videos.map((video) => (
        <div key={video.name} className="w-90 flex flex-col ">
          <img src={video.imageUrl} className="rounded-2xl cursor-pointer" />
          <div className="flex">
            <FontAwesomeIcon icon={faFaceSmile} size="2x" className="p-3" />
            <div className="pt-2">
              <p className="text-lg">{video.name}</p>
              <p className="text-neutral-400 text-sm">{video.channel}</p>
              <p>{video.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default home;
