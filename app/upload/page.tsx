import Header from "@/components/Header";
import AudioUploadWithMetadata from "@/components/uploadForm";

import React from "react";

const page = () => {
  return (
    <main>
      <Header header="Upload" />
      <AudioUploadWithMetadata />
    </main>
  );
};

export default page;
