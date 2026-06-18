export const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
    submenu: [
      { title: "About Us", path: "about" },
      { title: "Mission & Vision", path: "/about/mission" },
      { title: "History", path: "/about/staff" },
      { title: "Our Facilities", path: "/about/staff" },
      { title: "Our Achievements", path: "/about/staff" },
      { title: "Our Directory", path: "/about/staff" },
    ],
  },
  {
    title: "Admission",
    path: "/academics",
    submenu: [
      { title: "Welcome Message", path: "/academics/primary" },
      { title: "How to Apply", path: "/academics/secondary" },
      { title: "Tuition & Fees", path: "/academics/curriculum" },
      { title: "Important Dates", path: "/academics/curriculum" },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    submenu: [
      { title: "EYFS", path: "/academics/primary" },
      { title: "Primary", path: "/academics/secondary" },
      { title: "Secondary", path: "/academics/curriculum" },
    ],
  },
  {
    title: "Student Life",
    path: "/academics",
    submenu: [
      { title: "Events", path: "/academics/primary" },
      { title: "School Clubs", path: "/academics/secondary" },
      { title: "Boarding", path: "/academics/curriculum" },
      { title: "Extra Curricular", path: "/academics/curriculum" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
