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
    link: "home/speech",
    speechType: "Director",
  },
  {
    id: 2,
    title: "Chief Guest's Address",
    image: require("../assets/ChiefGuest.jpg"),
    desc: "Mr. Dharmendra Pradhan holds the esteemed position of the Honorable Education Minister of India",
    link: "home/speech",
    speechType: "Chief Guest",
  },
  {
    id: 3,
    title: "Institute Awards",
    icon: "trophy",
    desc: "List of all the institute award winners of the 2022 and 2023 batches",
    link: "home/award",
  },
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
    json: require("~/assets/convocationCommittee.json"),
    link: "home/landing",
  },
  {
    id: 7,
    title: "Institute News",
    icon: "newspaper",
    link: "home/news",
    desc: "This section provides updates on the latest events and developments taking place at the campus of IIT Tirupati.",
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

export const awardData = {
  "2023": [
    {
      Name: "DEBESHEE DAS",
      Details:
        "Best academic performance in the B.Tech Programme in COMPUTER SCIENCE AND ENGINEERING",
      Image: require("~/assets/five/1_CS19B012  DEBESHEE DAS.jpg"),
      Award: "President’s Prize",
    },
    {
      Name: "NOBLE SAJI MATHEWS",
      Details:
        "All round proficiency in curricular and extra curricular activities in the B.Tech  Programme",
      Image: require("~/assets/five/2_CH19B023 NOBLE SAJI MATHEWS.jpeg"),
      Award: "Governor’s Prize",
    },
    {
      Name: "GIRIDARA SRINIVAAS M S",
      Details:
        "Best academic performance in the B.Tech Programme in CHEMICAL ENGINEERING",
      Image: require("~/assets/five/3_CH19B009 GIRIDARA SRINIVAAS M S.jpg"),
      Award: "Prof. Kamatam Krishnaiah Award",
    },
    {
      Name: "JOSE ENOCH KINGSON S",
      Details:
        "Best academic performance in the B.Tech Programme in CIVIL ENGINEERING",
      Image: require("~/assets/five/4_CE19B013_JOSE ENOCH KINGSON S.jpg"),
      Award: "Aarvee Associates Prize",
    },
    {
      Name: "ARJUN K",
      Details:
        "Best academic performance in the M.Tech Programme in CIVIL ENGINEERING",
      Image: require("~/assets/five/5_CE21M019 ARJUN K.jpg"),
      Award: "Institute Prize",
    },
    {
      Name: "DEBESHEE DAS",
      Details:
        "Best academic performance in the B.Tech Programme in COMPUTER SCIENCE AND ENGINEERING",
      Image: require("~/assets/five/1_CS19B012  DEBESHEE DAS.jpg"),
      Award: "Institute Prize",
    },
    {
      Name: "SHIKHER CHHAWCHHARIA",
      Details:
        "Best academic performance in the M.Tech Programme in COMPUTER SCIENCE AND ENGINEERING",
      Image: require("~/assets/five/7_CS21M014 SHIKHER CHHAWCHHARIA.jpg"),
      Award: "Ramakrishnan & Lakshmikanthan Memorial Prize",
    },
    {
      Name: "ABHIMANYU",
      Details:
        "Best academic performance in the B.Tech Programme in ELECTRICAL ENGINEERING",
      Image: require("~/assets/five/8_EE19B045 Abhimenyu Pathania.png"),
      Award: "Amara Raja Prize",
    },
    {
      Name: "SRIRAM RAMESH",
      Details:
        "Best academic performance in the M.Tech Programme in ELECTRICAL ENGINEERING",
      Image: require("~/assets/five/9_EE21M024 SRIRAM RAMESH.png"),
      Award: "Institute Prize",
    },
    {
      Name: "TIRUPATHI SAI RISHITHA",
      Details:
        "Best academic performance in the B.Tech Programme in MECHANICAL ENGINEERING",
      Image: require("~/assets/five/10_ME19B041 TIRUPATHI SAI RISHITHA.jpg"),
      Award: "ITC Ltd. Prize",
    },
    {
      Name: "MUKUND S",
      Details:
        "Best academic performance in the M.Tech Programme in MECHANICAL ENGINEERING",
      Image: require("~/assets/five/11_ME21M006 Mukund S.jpg"),
      Award: "Institute Prize",
    },
    {
      Name: "MANISA MAITY",
      Details:
        "Best academic performance in the M.Sc Programme in MATHEMATICS AND STATISTICS",
      Image: require("~/assets/five/12_MA21M006 Manisa Maity.jpg"),
      Award: "Institute Prize",
    },
    {
      Name: "UDIT BANERJEE",
      Details: "Best academic performance in the M.Sc Programme in PHYSICS",
      Image: require("~/assets/five/13_PH21M013 Udit Banerjee.jpg"),
      Award: "Prof. T Srinivasan Natarajan Award",
    },
    {
      Name: "S. SRIVIDYA",
      Details: "Best academic performance in the M.Sc Programme in CHEMISTRY",
      Image: require("~/assets/five/14_CY21M008 S SRIVIDYA.jpg"),
      Award: "Institute Prize",
    },
    {
      Name: "Uthradevi K",
      Details:
        "Best Ph.D. thesis entitled A RESOURCE-EFFICIENT AND WASTE FREE POINT -OF-USE DISINFECTION SYSTEM in",
      Image: require("~/assets/five/15_CE18D006 UTHRADEVI.jpeg"),
      Award: "First Dean's Prize",
    },
  ],
  "2022": [
    {
      Name: "Soumitro Vyapari",
      Award: "President’s Prize",
      Details: "Best academic performance in the B.Tech Programme",
      Image: require("~/assets/four/1_EE18B032_Soumitro Vyapari.jpg"),
    },

    {
      Name: "Prabhat Reddy Lanki Reddy",
      Award: "Governor’s Prize",
      Details:
        "All-round proficiency in curricular and extracurricular activities in the B.Tech Programme",
      Image: require("~/assets/four/2_EE18B022_Prabhat Reddy.jpg"),
    },

    {
      Name: "Keshav Kumar",
      Award: "Prof. Kamatam Krishnaiah Award",
      Details:
        "Best academic performance in the B.Tech Programme in Chemical Engineering",
      Image: require("~/assets/four/3_CH18B014_ KESHAV KUMAR.jpeg"),
    },
    {
      Name: "Dasari Yashwanthi",
      Award: "Aarvee Associates Prize",
      Details:
        "Best academic performance in the B.Tech Programme in Civil Engineering",
      Image: require("~/assets/four/4_CE18B009_dasari yashwanthi.jpg"),
    },

    {
      Name: "Jay Chordia",
      Award: "Institute Prize",
      Details:
        "Best academic performance in the M.Tech Programme in Civil Engineering",
      Image: require("~/assets/four/5_CE20M003 - Jay Chordia.png"),
    },
    {
      Name: "W Pranathi ",
      Award: "Institute Prize",
      Details:
        "Best academic performance in the B.Tech Programme in Computer Science and Engineering",
      Image: require("~/assets/four/6_CS18B045_ Pranathi Wuppuluru.png"),
    },
    {
      Name: "Prantik Parashar Sarmah",
      Award: "Ramakrishnan & Lakshmikanthan Memorial Prize",
      Details:
        "Best academic performance in the M.Tech Programme in Computer Science and Engineering",
      Image: require("~/assets/four/7_CS20M010 PRANTIK PARASHAR SARMAH.jpg"),
    },

    {
      Name: "Soumitro Vyapari",
      Award: "Amara Raja Prize",
      Details:
        "Best academic performance in the B.Tech Programme in Electrical Engineering",
      Image: require("~/assets/four/8_EE18B032_Soumitro Vyapari.jpg"),
    },

    {
      Name: "Sirigi Reddy Bhargav Reddy ",
      Award: "Institute Prize",
      Details:
        "Best academic performance in the M.Tech Programme in Electrical Engineering",
      Image: require("~/assets/four/9_EE20M010_Bhargav Reddy SIRIGIREDDY.jpg"),
    },

    {
      Name: "Sibibalan Jeevanandam",
      Award: "ITC Ltd. Prize",
      Details:
        "Best academic performance in the B.Tech Programme in Mechanical Engineering",
      Image: require("~/assets/four/10_ME18B031_Sibibalan.jpg"),
    },

    {
      Name: "Rajbir Singh Bajwa",
      Award: "Institute Prize",
      Details:
        "Best academic performance in the M.Tech Programme in Mechanical Engineering",
      Image: require("~/assets/four/11_ME20M016 Rajbir Singh Bajwa.jpg"),
    },

    {
      Name: "Nayan Jain",
      Award: "Institute Prize",
      Details:
        "Best academic performance in the M.Sc Programme in Mathematics and Statistics",
      Image: require("~/assets/four/12_MA20M007 - Nayan Jain.jpg"),
    },

    {
      Name: "Tushti Patel",
      Award: "Prof. T Srinivasan Natarajan Award",
      Details: "Best academic performance in the M.Sc Programme in Physics",
      Image: require("~/assets/four/13_PH20M014_Tushti P.jpg"),
    },

    {
      Name: "Sumedha Gupta",
      Award: "Institute Prize",
      Details: "Best academic performance in the M.Sc Programme in Chemistry",
      Image: require("~/assets/four/14_CY20M014_Sumedha Gupta.jpg"),
    },

    {
      Name: "Spoorthi G E",
      Award: "Institute Prize",
      Details:
        "Best M.S. (Research) thesis entitled NOVEL PHASE UNWRAPPING TECHNIQUES BASED ON DEEP LEARNING FRAMEWORKS",
      Image: require("~/assets/four/15_EE17S005_Spoorthi GE.png"),
    },
  ],
};
