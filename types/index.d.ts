type descriptionProps = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

type headerProps = {
  header: string;
  page?: string;
  className?: string;
};

type doctrineProps = {
  title: string;
  paragraph: string;
  secondParagraph?: string;
  imgSrc: string;
  className?: string;
};

type GalleryLayoutProps = {
  images?: string[];
};

type audioProps = {
  audioSrc: string;
};

interface SermonMetadata {
  title: string;
  date: string;
  art: string;
  desc: string;
}

interface Sermon {
  metadata: SermonMetadata;
  url: string;
}
