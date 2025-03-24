"use client";

import { useEffect, useState } from "react";

const MixlrPlayer = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const response = await fetch("/api/mixlr");
        const data = await response.json();
        setIsLive(data.is_live); // Mixlr API returns an `is_live` boolean field
      } catch (error) {
        console.error("Error fetching Mixlr live status:", error);
      }
    };

    // Check live status on mount
    checkLiveStatus();

    // Optionally, poll for live status every minute
    const intervalId = setInterval(checkLiveStatus, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <div>
        <iframe
          src="https://calvary-hill-global-church.mixlr.com/embed"
          height="500px"
          width="100%"
        ></iframe>
      </div>

      <div className="my-2">
        {isLive ? (
          <div>We are live</div>
        ) : (
          <div className="text-xs sm:text-sm">
            We are not currently live but you can listen to other{" "}
            <a href="/sermons" className="hover:text-maroon underline">
              sermons
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MixlrPlayer;
