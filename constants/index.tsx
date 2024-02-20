export const mainGrid = [
  {
    id: 1,
    title: "Livestream",
    image: "film",
    link: "https://www.youtube.com/live/3mm2_XxUfgU",
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
    title: "Director's Report",
    image: require("../assets/Director.jpeg"),
    desc: `Dr. Kalidindi N. Satyanarayana is the founding Director of IIT Tirupati, Andhra Pradesh. He is currently on deputation from IIT Madras, where he holds the position of Professor in the Building Technology & Construction Management Division of the Department of Civil Engineering. Dr. Satyanarayana obtained his B.Tech degree in Civil Engineering from IIT Madras. He then pursued MS and PhD degrees with a specialization in Construction Engineering and Management from Clemson University, USA. Since 1991, he has been a faculty member at IIT Madras, and in 2009, he served as a Visiting Professor at Iowa State University, USA.
      His areas of expertise include project management, construction contracts, construction productivity, construction equipment, C&D waste management, and public-private partnerships. Dr. Satyanarayana has published extensively in these areas and has received numerous awards, including the Project Management Institute (India) Distinguished Scholar Award in 2011.
      During his tenure at IIT Madras, he held various positions such as Advisor - Alumni Affairs (2004-2009), Chairman - Engineering Unit (2010-2013), and Chairman of the Implementation Committee for IIT Madras Research Park - Phase II (1.2 million sq.ft. facility). He has also contributed to the establishment of new campuses, including IIM Trichy, IIT Indore, and IIT Jodhpur, by serving on their respective committees.
      Dr. Satyanarayana currently serves as the Chairman of the Academic Advisory Group at Project Management Institute (PMI) India and Vice-Chairman of the Board of Advisors at The Glass Academy. He is an Expert Member on the Board of Management of Building Materials & Promotion Council (BMTPC) and serves on the governing boards of academic institutions such as IISER Tirupati, NIT - Tadepalligudem, IIITDM - Kurnool, IIIT Sri City, AIIMS - Mangalagiri, and RGKUT. Additionally, he holds the position of Independent Director on five company boards.`,
    link: "home/Speech",
    speechType: "Director",
  },
  {
    id: 2,
    title: "Chief Guest's Address",
    image: require("../assets/ChiefGuest.jpg"),
    desc: "Mr. Dharmendra Pradhan holds the esteemed position of the Honorable Education Minister of India",
    link: "home/Speech",
    speechType: "Chief Guest",
  },
  // {
  //   id: 3,
  //   title: "Institute Award",
  //   icon: "trophy",
  //   desc: "List of all the institute award winners of the 2022 and 2023 batches",
  //   link: "home/award",
  // },
  {
    id: 4,
    title: "Board of Governors",
    icon: "people-line",
    desc: "The Board of Governors is responsible for governing and making important decisions regarding the academic and administrative matters of IIT Tirupati.",
    images: [require("~/assets/board-of-governors.png")],
    link: "home/landing",
  },
  {
    id: 5,
    title: "Senate",
    icon: "people-roof",
    desc: "The Senate of IIT Tirupati is responsible for making decisions on academic matters, including the curriculum, courses of study, and research.",
    images: [require("~/assets/senate1.png"), require("~/assets/senate2.png")],
    link: "home/landing",
  },
  {
    id: 6,
    title: "Convocation Committees",
    icon: "people-group",
    desc: "This committee is responsible for organizing the 4th and 5th convocation of IIT Tirupati.",
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
  {
    id: 7,
    title: "Institute News",
    icon: "newspaper",
    link: "home/news",
    desc: "This section provides updates on the latest events and developments taking place at the campus of IIT Tirupati.",
  }
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
    four: require("~/assets/json/4th-ch.json"),
    five: require("~/assets/json/5th-ch.json"),
  },
  "Chemistry Department": {
    icon: "flask-vial",
    four: require("~/assets/json/4th-cy.json"),
    five: require("~/assets/json/5th-cy.json"),
  },
  "Computer Science And Engineering": {
    icon: "code",
    four: require("~/assets/json/4th-cs.json"),
    five: require("~/assets/json/5th-cs.json"),
  },
  "Civil and Environmental Engineering": {
    icon: "trowel-bricks",
    four: require("~/assets/json/4th-ce.json"),
    five: require("~/assets/json/5th-ce.json"),
  },
  "Electrical Engineering": {
    icon: "bolt",
    four: require("~/assets/json/4th-ee.json"),
    five: require("~/assets/json/5th-ee.json"),
  },
  "Humanities Department": {
    icon: "building-columns",
    four: require("~/assets/json/4th-hss.json"),
    five: require("~/assets/json/5th-hss.json"),
  },
  "Mathematics and Statistics": {
    icon: "chart-simple",
    four: require("~/assets/json/4th-ma.json"),
    five: require("~/assets/json/5th-ma.json"),
  },
  "Mechanical Engineering": {
    icon: "gears",
    four: require("~/assets/json/4th-me.json"),
    five: require("~/assets/json/5th-me.json"),
  },
  "Physics Department": {
    icon: "atom",
    four: require("~/assets/json/4th-ph.json"),
    five: require("~/assets/json/5th-ph.json"),
  },
};
