import { Image, ImageSourcePropType } from "react-native";

type Email = {
  id: number;
  image?: ImageSourcePropType;
  title: string;
  header: string;
  subheader: string;
  date: string;
  isRead: boolean;
  members?: string[];
  withAttachment?: boolean;
};

const DATA: Email[] = [
  {
    id: 1,
    image: Image.resolveAssetSource(require("../assets/nike.png")),
    title: "Nike",
    header: "Your order is here",
    subheader: "Vig, we also need the warning sc...",
    date: "yda",
    isRead: false,
    members: [],
    withAttachment: true,
  },
  {
    id: 2,
    title: "Shohan Rabbi & Joeseph K",
    header: "<no subject>",
    subheader: "screen that helps with figuring out",
    date: "yda",
    isRead: true,
    members: ["s", "J"],
  },
  {
    id: 3,
    title: "Matthew O Connors",
    header: "congratulations",
    subheader: "Vig, we also need the warning scr...",
    date: "Jul 14",
    isRead: true,
    members: ["M"],
  },
  {
    id: 4,
    image: Image.resolveAssetSource(require("../assets/man.png")),
    title: "Paris Chillen",
    header: "Issues to be fixed",
    subheader: "<no message>",
    date: "Jun ‘12",
    isRead: true,
  },
  {
    id: 5,
    image: Image.resolveAssetSource(require("../assets/nike.png")),
    title: "Nike",
    header: "Your order is here",
    subheader: "Vig, we also need the warning sc...",
    date: "yda",
    isRead: false,
  },
  {
    id: 6,
    image: Image.resolveAssetSource(require("../assets/net.png")),
    title: "Netflix",
    header: "Time for new shoes",
    subheader: "Vig, we also need the warning scr...",
    date: "yda",
    isRead: true,
  },
  {
    id: 7,
    title: "Marshall Sona",
    header: "<no subject>",
    subheader: "6 attachments",
    date: "yda",
    isRead: false,
    members: ["M"],
    withAttachment: true,
  },
  {
    id: 8,
    image: Image.resolveAssetSource(require("../assets/image.png")),
    title: "Ronald Richards & 4 others",
    header: "New Updates",
    subheader: "Vig, we also need the warning scr...",
    date: "yda",
    isRead: true,
    members: ["M", "S", "T", "Z"],
    withAttachment: true,
  },
];

export { DATA, Email };
