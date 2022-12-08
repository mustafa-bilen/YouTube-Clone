import React from "react";
import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export default function SearchCard({ data }: { data: HomePageVideos }) {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-52 w-96"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className="max-w-2xl">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h3>
      </div>
    </div>
  );
}
