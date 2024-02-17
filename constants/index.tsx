export const mainGrid = [
  {
    id: 1,
    title: "Livestream",
    image: "film",
    link: "https://www.youtube.com/watch?v=hvkkpUdHS1s",
  },
  {
    id: 2,
    title: "Programme",
    image: "table-list",
    link: "",
  },
  {
    id: 3,
    title: "Attire",
    image: "vest",
    link: "",
  },
  {
    id: 4,
    title: "Pledge",
    image: "user-graduate",
    link: "",
  },
];
export const contributors = [
  {
    id: 1,
    name: "Abhinav Gupta \n",
    designation: "Digital Wizards, Co-ordinator",
    image: require("../assets/Abhinav.jpg"),
  },
  {
    id: 2,
    name: "Arpit Gupta\n",
    designation: "Digital Wizards, Head",
    image: require("../assets/Arpit.jpg"),
  },
];

export const ConvocationProgram = [
  {
    id: 1,
    title: "Directors Report",
    image: require("../assets/Director.jpeg"),
    desc: `Dr. Kalidindi N. Satyanarayana is currently the founding Director of IIT Tirupati, Andhra Pradesh. He is on deputation from IIT Madras where he has been a Professor in the Building Technology & Construction Management Division of the Department of Civil Engineering.
      He received his B.Tech degree in Civil Engineering from IIT Madras. He then received MS and PhD degrees with specialization in Construction Engineering and Management from Clemson University, USA. He has been a faculty member at IIT Madras since 1991. In 2009 he was a Visiting Professor at Iowa State University, USA.
      His teaching, research and consulting interests are in the areas of project management, construction contracts, construction productivity, construction equipment, C&D waste management, and public private partnerships. He has published extensively in these areas. He is the recipient of many awards including the Project Management Institute (India) Distinguished Scholar Award (2011).
      At IIT Madras he served as Advisor - Alumni Affairs (2004-2009), Chairman - Engineering Unit (2010-2013) and Chairman of the Implementation Committee for IIT Madras Research Park - Phase II (1.2 million sq.ft. facility). He has served on the committees for setting up new campuses including - IIM Trichy, IIT Indore and IIT Jodhpur.
      He is Chairman of the Academic Advisory Group, Project Management Institute (PMI) India; Vice-Chairman, Board of Advisors of The Glass Academy; Expert Member on the Board of Management of Building Materials & Promotion Council (BMTPC). He serves on the governing boards of academic institutions such as IISER Tirupati, NIT - Tadepalligudem, IIITDM - Kurnool, IIIT Sri City, AIIMS - Mangalagiri, and RGKUT. He serves as Independent Director on five company boards.`,
    link: "home/Speech",
    speechType: "Director",
  },
  {
    id: 2,
    title: "Chief Guest's Address",
    image: require("../assets/ChiefGuest.jpg"),
    desc: "Mr. Dharmendra Pradhan is the Honorable Education Minister of India",
    link: "home/Speech",
    speechType: "Chief Guest",
  },
  {
    id: 3,
    title: "Board of Governors",
    icon: "people-line",
    desc: "The board of governors of IIT Tirupati",
    images: [require("~/assets/board-of-governors.png")],
    link: "home/landing",
  },
  {
    id: 4,
    title: "Senate",
    icon: "people-roof",
    desc: "The Senate of IIT Tirupati",
    images: [require("~/assets/senate1.png"), require("~/assets/senate2.png")],
    link: "home/landing",
  },
  {
    id: 5,
    title: "Convocation Committees",
    icon: "people-group",
    desc: "The committe behind the 4th and 5th convocation of IIT TIrupati",
    images: [
      require("~/assets/convocationCommittee1.png"),
      require("~/assets/convocationCommittee2.png"),
      require("~/assets/convocationCommittee3.png"),
      require("~/assets/convocationCommittee4.png"),
      require("~/assets/convocationCommittee5.png"),
      require("~/assets/convocationCommittee6.png"),
      require("~/assets/convocationCommittee7.png"),
      require("~/assets/convocationCommittee8.png"),
      require("~/assets/convocationCommittee9.png"),
      require("~/assets/convocationCommittee10.png"),
      require("~/assets/convocationCommittee11.png"),
      require("~/assets/convocationCommittee12.png"),
    ],
    link: "home/landing",
  },
];

export const graduands = [
  {
    id: 1,
    name: "Chemical Engineering",
    image: "flask",
  },
  {
    id: 2,
    name: "Chemistry Department",
    image: "flask-vial",
  },
  {
    id: 3,
    name: "Computer Science And Engineering",
    image: "code",
  },
  {
    id: 4,
    name: "Civil and Environmental Engineering",
    image: "trowel-bricks",
  },
  {
    id: 5,
    name: "Electrical Engineering",
    image: "bolt",
  },
  {
    id: 6,
    name: "Humanities Department",
    image: "building-columns",
  },
  {
    id: 7,
    name: "Mathematics and Statistics",
    image: "chart-simple",
  },
  {
    id: 8,
    name: "Mechanical Engineering",
    image: "gears",
  },
  {
    id: 9,
    name: "Physics Department",
    image: "atom",
  },
];

export const graduandData = {
  "Chemical Engineering": {
    icon: "flask",
    four: require("~/assets/4th CH_page-0001-cropped.jpg"),
    five: require("~/assets/5th CH_page-0001-cropped.jpg"),
  },
  "Chemistry Department": {
    icon: "flask-vial",
    four: require("~/assets/4th CY_page-0001-cropped.jpg"),
    five: require("~/assets/5th CY_page-0001-cropped.jpg"),
  },
  "Computer Science And Engineering": {
    icon: "code",
    four: require("~/assets/4th CS_page-0001-cropped.jpg"),
    five: require("~/assets/5th CS_page-0001-cropped.jpg"),
  },
  "Civil and Environmental Engineering": {
    icon: "trowel-bricks",
    four: require("~/assets/4th CE_page-0001.jpg"),
    five: require("~/assets/5th CE_page-0001-cropped.jpg"),
  },
  "Electrical Engineering": {
    icon: "bolt",
    four: require("~/assets/4th EE_page-0001-cropped.jpg"),
    five: require("~/assets/5th EE_page-0001-cropped.jpg"),
  },
  "Humanities Department": {
    icon: "building-columns",
    four: require("~/assets/4th HSS_page-0001-cropped.jpg"),
    five: require("~/assets/5th HSS_page-0001-cropped.jpg"),
  },
  "Mathematics and Statistics": {
    icon: "chart-simple",
    four: require("~/assets/4th MA_page-0001-cropped.jpg"),
    five: require("~/assets/5th MA_page-0001-cropped.jpg"),
  },
  "Mechanical Engineering": {
    icon: "gears",
    four: require("~/assets/4th ME_page-0001-cropped.jpg"),
    five: require("~/assets/5th ME_page-0001-cropped.jpg"),
  },
  "Physics Department": {
    icon: "atom",
    four: require("~/assets/4th Physics_page-0001-cropped.jpg"),
    five: require("~/assets/5th PH_page-0001-cropped.jpg"),
  },
};
