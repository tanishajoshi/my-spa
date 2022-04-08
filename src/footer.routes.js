// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

export default {
  brand: {
    name: "",
    route: "/",
  },
  socials: [
    {
      icon: <GitHubIcon />,
      link: "https://github.com/tanishajoshi",
    },
  ],
  menus: [
    {
      name: "help & support",
      items: [
        { name: "SLU Main Site", href: "https://slu.edu" },
        { name: "Dr. Esposito's Page", href: "https://cs.slu.edu/~esposito/index.html" },
      ],
    },
  ],
};
