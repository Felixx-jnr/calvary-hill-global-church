import React from "react";

const SermonDetails = ({ params }: { params: { sermonId: string } }) => {
  return <div>SermonDetails {params.sermonId}</div>;
};

export default SermonDetails;
