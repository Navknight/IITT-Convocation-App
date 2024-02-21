import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";
const ios = Platform.OS == "ios";

const ChiefGuest = () => {
  return (
    <Text className="text-gray-800 text-center text-xl m-2 p-2">
      Mr. Dharmendra Pradhan, currently serving as the Education Minister of
      India, brings a wealth of experience and expertise to his role. With a
      strong commitment to enhancing the educational landscape of the nation,
      Mr. Pradhan has been instrumental in implementing various policies and
      initiatives aimed at promoting access to quality education for all. His
      dedication to fostering innovation and excellence in the education sector
      has earned him recognition both nationally and internationally. As the
      Chief Guest for the convocation ceremony, Mr. Dharmendra Pradhan embodies
      the government's vision for a progressive and inclusive education system.
      His presence underscores the importance of education as a catalyst for
      individual empowerment and national development. Through his leadership,
      Mr. Pradhan continues to champion initiatives that empower students and
      educators alike, driving India towards a brighter and more prosperous
      future.
    </Text>
  );
};

const Director = () => {
  return (
    <View>
      <Text className="text-gray-800 text-xl m-2 p-2">
        Hon'ble Minister of Education and Minister of Skill Development &
        Entrepreneurship, Shri Dharmendra Pradhan Ji, Chairman, Board of
        Governors, Shri Sajjan Jindal Ji, members of the Board of Governors,
        members of the Academic Senate, distinguished guests, colleagues,
        graduands and their family members, and students – my heartfelt
        greetings to you all on this momentous occasion!
      </Text>

      <Text className="text-gray-800 text-xl m-2 p-2">
        I am immensely pleased to welcome you all to the 4th and 5th Convocation
        of IIT Tirupati. On this occasion, we are proud to announce that a total
        of 357 B. Tech degrees, 106 M. Tech degrees, 73 M. Sc. degrees, 15 M. S.
        (by research) degrees, and 20 PhD degrees from the Institute will be
        awarded today.
      </Text>
      <Text className="text-gray-800 text-xl m-2 p-2">
        I will now share with you some snapshots of our journey. The
        establishment of IIT Tirupati was announced in 2014 by the Government of
        India, along with five other new IITs. The foundation stone for the
        Institute was laid on March 28, 2015, and subsequently, the Institute
        launched its academic programme on August 5, 2015, with the support of
        its mentor Institute, IIT Madras, from a temporary campus situated on
        Tirupati-Renigunta Road. The Government of Andhra Pradesh provided this
        picturesque 548 acres of land with a mountain as a backdrop to develop
        the permanent campus of the Institute. The campus is planned to be
        developed in multiple stages. A master plan has been prepared to build a
        campus to eventually cater to Director's Report 12,000 students while
        conserving its ecological features. The south campus consisting of
        laboratories, hostels, classrooms and sports facilities, was completed
        by 2018 using prefab and sustainable technologies. Thus, the Institute
        started partly functioning from the permanent campus in the fourth year
        of its operations.
      </Text>
      <Text className="text-gray-800 text-xl m-2 p-2">
        Despite the challenges posed by the COVID-19 pandemic, Phase 'A' of the
        permanent campus construction was completed by July 2023. However, the
        buildings and facilities were occupied in stages from August 2022. The
        construction primarily spanned into four zones: Academic, hostel,
        sports, and residential. The academic zone has a total built-up area of
        62,351 square meters. It includes two Department Buildings with office
        spaces and department laboratories, a Central Instrumentation Facility,
        a Lecture Hall Complex, and an Administrative Building. The hostel zone
        includes two buildings with a housing capacity of 1000 students, a
        sports utility building, and a central dining facility comprising a
        student-mess on the ground floor and a spacious food court on the first
        floor. The total built-up area of this zone is 30,170 square meters. The
        faculty and staff residential buildings consisting of 168 apartments
        have been completed and occupied in the residential zone in a total
        built-up area of 33,769 square meters. This zone also comprises a
        Director's Bungalow and a 20-room Visitors' House. In line with the
        Hon'ble Prime Minister's call of 'Catch the rain, where it falls, when
        it falls' two beautiful lakes have also been created spanning over 10
        acres of land with a capacity of 80 million litres to store and use
        rainwater in a sustainable manner.
      </Text>
      <Text className="text-gray-800 text-xl m-2 p-2">
        In recognition of the sustainable construction, health, and safety
        practices adopted at our construction project, we have received 18
        awards from various national and international agencies. Some notable
        awards include:
      </Text>
      <Text className="text-gray-800 text-xl m-2 ml-4 p-2 italic">
        - GRIHA Council and HUDCO Awards for sustainable construction.
      </Text>
      <Text className="text-gray-800 text-xl m-2 ml-4 p-2 italic">
        - International Safety Award Merit 2021 from the British Safety Council.
      </Text>
      <Text className="text-gray-800 text-xl m-2 ml-4 p-2 italic">
        - RoSPA Gold Award 2021 from the Royal Society, England.
      </Text>
      <Text className="text-gray-800 text-xl m-2 ml-4 p-2 italic">
        - 12th, 13th, and 14th CIDC Viswakarma Awards for the consecutive years
        2021, 2022, and 2023.
      </Text>
      <Text className="text-gray-800 text-xl m-2 ml-4 p-2 italic">
        - Shrestha Suraksha Puraskar Awards for the years 2021 and 2022 from the
        National Safety Council of India.
      </Text>
      <Text className="text-gray-800 text-xl m-2 ml-4 p-2 italic">
        - CPWD's Best Project for Labour Welfare & Safety Measures in 2023 for
        our campus construction project.
      </Text>
      <Text
        className="m-2 p-2 text-2xl text-center text-gray-800"
        style={{ color: themeColors.bgDark }}
      >
        Academic Programmes
      </Text>
      <Text className="text-gray-800 text-xl m-2 p-2">
        The Institute commenced its operations with a total of 106 students in
        four B. Tech programmes (Civil, Computer Science & Engineering,
        Electrical & Mechanical) in 2015. M. Tech programs in Computer Science,
        Electrical and Mechanical Engineering, and B. Tech in Chemical
        Engineering were launched in 2018. Gradually, the Institute expanded its
        strength and introduced a master's programme in Mathematics and
        Statistics and M. Tech in three streams of Civil Engineering in 2019.
        The master's programmes in Chemistry and Physics were launched in 2020.
        During the academic year 2021-22, the Institute started M. Tech in
        Microelectronics & VLSI in the Electrical Engineering stream. In
        2022-23, the Institute launched a master's programme in Public Policy,
        becoming the third IIT to offer this programme. During the same academic
        year, the Institute also launched an M. Tech programme in RF and
        Microwave in Electrical Engineering stream.
      </Text>
      <Text className="text-gray-800 text-xl m-2 p-2">
        The current student strength of 1508 includes 904 B. Tech students, 179
        M. Tech students, 85 M. Sc. students, 35 MPP (Master of Public Policy)
        students, 36 MS and 269 PhD research students. It has often been pointed
        out that IITs have a skewed gender ratio. However, IIT Tirupati boasts
        of 20.46% of girl students admitted to the B. Tech programmes. The
        overall percentage of the girl students enrolled in various programmes
        at the Institute is even higher i.e., 22.74%.
      </Text>
      <Text
        className="m-2 p-2 text-2xl text-center text-gray-800"
        style={{ color: themeColors.bgDark }}
      >
        Academic and Sponsored Research
      </Text>
      <Text className="text-gray-800 text-xl m-2 p-2">
        Since its inception, IIT Tirupati has been engaged in recruiting
        world-class faculty members to teach and carry out cutting-edge
        research. The Institute has appointed 114 faculty members against the
        sanctioned strength of 120 faculty positions. We strive to establish one
        of India's leading environments for teaching, research and innovation to
        attract top Indian and global companies to recruit its students and
        conduct collaborative research. We are growing at a fast pace in terms
        of student and faculty strength, physical infrastructure creation, and
        academic and research programmes to be one of the leading institutions
        in the country with its ideal of global outlook and local relevance.
      </Text>
      <Text className="text-gray-800 text-xl m-2 p-2">
        The faculty members of the Institute have approximately 1200
        publications to their credit which include journal articles, book
        chapters, and authored and edited books published by publishers of
        international repute. IIT Tirupati has an IPR Cell and has filed around
        25 patents so far. We ranked 56th in our very first participation in the
        Engineering Category of the National Institutional Ranking Framework
        (NIRF) 2022 conducted by the Ministry of Education.
      </Text>
      <Text className="text-gray-800 text-xl m-2 p-2">
        IIT Tirupati faculty members are actively engaged in research and
        consultancy projects. In the last two years we have received 83
        sponsored research projects worth around Rs. 28.04 Crores and 80
        consultancy projects industrial consultancy worth around Rs.11.47
        Crores. The overall numbers stand at 177 sponsored research projects
        worth Rs. 175.14 crores and 185 industrial consultancies worth Rs. 21.95
        crores.
      </Text>
    </View>
  );
};

export default function Speech() {
  const params = useLocalSearchParams();
  const speechType = params.speechType;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const q = query(collection(firebase_db, "Speeches"));
  //       const querySnapshot = await getDocs(q);
  //       const fetchedSpeech = [];

  //       querySnapshot.forEach((doc) => {
  //         const speech = { id: doc.id, ...doc.data() };
  //         if (speech.id === speechType) {
  //           fetchedSpeech.push(speech);
  //         }
  //       });
  //       console.log(speech);
  //       setSpeech(fetchedSpeech);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, [speechType]);

  return (
    <ScrollView className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("~/assets/backgroundiitt.jpeg")}
        style={{ height: 300 }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="flex-row justify-center">
          <Image
            source={
              speechType === "Chief Guest"
                ? require("~/assets/ChiefGuest.jpg")
                : require("~/assets/Director.jpeg")
            }
            className="h-60 w-60 rounded-full overflow-hidden"
            style={{ marginTop: ios ? 0 : 100 }}
          />
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {speechType === "Chief Guest"
              ? "Mr. Dharmendra Pradhan"
              : "Director's Report"}
          </Text>
        </View>

        <View className="px-4 space-y-2">
          {speechType === "Chief Guest" ? <ChiefGuest /> : <Director />}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
