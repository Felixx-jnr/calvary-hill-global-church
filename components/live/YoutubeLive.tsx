import React from "react";

const YouTubeLive = () => {
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const liveUrl = `https://www.youtube.com/channel/${channelId}/live`;
  return (
    <div>
      {/* Embed the YouTube iframe here */}
      <iframe
        width="100%"
        height="500"
        src={liveUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Live Stream"
      ></iframe>
    </div>
  );
};

export default YouTubeLive;
