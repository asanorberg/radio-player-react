import React from "react";
import Channel from "./Channel";

const ChannelList = ({ channels }) => {
  return (
    <div>
      {channels.map((channel) => (
        <Channel key={channel.id} channel={channel} />
      ))}
    </div>
  );
};

export default ChannelList;
