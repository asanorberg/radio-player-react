import React from "react";

const Channel = ({ channel }) => {
  console.log(channel);
  return (
    <>
      <div
        key={channel.id}
        className="station"
        style={{ backgroundColor: "#" + channel.color }}
      >
        <div className="station-image">
          <img src={channel.image} alt="channel logo" />
        </div>
        <div className="station-text">
          <h1> {channel.name}</h1>{" "}
          <audio src={channel.liveaudio.url} type="audio/mpeg" controls></audio>
        </div>
      </div>
    </>
  );
};

export default Channel;
