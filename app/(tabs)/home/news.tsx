import { FontAwesome6 } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";

import { ConvocationProgram } from "~/constants";
const ios = Platform.OS == "ios";

const news = [
  {
    title: "Congratulations to Mr. Vikas Kumar Sahu",
    date: "January, 2024",
    link: "/pdfs/Awardees/2024/Vikas_Kumar_BPA.pdf",
    description:
      "Mr. Vikas Kumar Sahu, Ph.D. Scholar (Physics Department) received “Best Poster Presentation Award” from International Conference on Highly Frustrated Magnetism 2024 organized by IIT Madras from 7 - 13 January 2024.",
  },
  {
    title: "Congratulations to Dr. Govind Narayan Sahu",
    date: "December, 2023",
    link: "/pdfs/Awardees/2024/BEST_PAPER_AWARD-AIMTDR_2023.pdf",
    description:
      'Dr. Govind Narayan Sahu, received the “Best Paper Award" at the 9th International and 30th National, All India Manufacturing Technology, Design, and Research Conference (AIMTDR), 2023, held at IIT BHU on 8-10 Dec.',
  },
  {
    title: "Congratulations to Mr. Mohammad Irfan",
    date: "December, 2023",
    link: "https://iittp.ac.in/news",
    description:
      "Mr. Mohammad Irfan, received “Best Oral presentation Award” from International Conference on Separation and Purification Technologies (ICSPT-2023) held on Dec 7th – 8th , 2023, at IIT Patna.",
  },
  {
    title: "Congratulations to Mr. Yumnum Nandan",
    date: "July, 2023",
    link: "https://iittp.ac.in/news",
    description:
      'Mr. Yumnum Nandan, CH Research scholar (Supervisor: Prof. KSMS Raghavarao & Dr. Nilesh Choudhary) received the prestigious "Prime Minister\'s Fellowship for Doctoral Research".',
  },
  {
    title: "5G Awards",
    date: "October, 2023",
    link: "/pdfs/events/2023/5GAward_IITTP.png",
    description: "Award of 5G lab to IIT TIRUPATI",
  },
  {
    title: "Congratulations to Mr. Yumnum Nandan",
    date: "July, 2023",
    link: "https://iittp.ac.in/news",
    description:
      'Mr. Yumnum Nandan, CH Research scholar (Supervisor: Prof. KSMS Raghavarao & Dr. Nilesh Choudhary) received the prestigious "Prime Minister\'s Fellowship for Doctoral Research".',
  },
  {
    title: "Congratulations to Ms. N Sai Prasanna",
    date: "July, 2023",
    link: "https://iittp.ac.in/news",
    description:
      'Ms. N Sai Prasanna, CH Research scholar (Supervisor: Prof. KSMS Raghavarao & Dr. Nilesh Choudhary) received the prestigious "Prime Minister\'s Fellowship for Doctoral Research".',
  },
  {
    title:
      "Congratulations to Mr. Allabakshi S. M, Civil Engineering Research scholar received  “Best Poster Award”.",
    date: "21st - 22nd July, 2023",
    link: "https://iittp.ac.in/news",
    description:
      "Mr. Allabakshi S. M (CEE, Ph.D. scholar) received  “Best Poster Award” from Center of Excellence at Conference On Desalination, Brine Management And Water Recycling held on July 21st – 22nd, 2023, at IIT Bombay.",
  },
  {
    title:
      'Congratulations to Prof KSMS Raghava Rao has been awarded the prestigious "Life Time Achievement Award" by International Association of Engineering and Food.',
    date: "19th - 23rd June, 2023",
    link: "https://iittp.ac.in/news",
    description:
      'Prof KSMS Raghava Rao has been awarded the prestigious "Life Time Achievement Award" by International Association of Engineering and Food. He will receive the award at ICEF14 to be held at Nantes, France in June 2023.',
  },
  {
    title:
      'Congratulations to Mr. Allabakshi S. M, Civil Engineering Research scholar received the first prize in "Best oral presentation award category".',
    date: "6th - 7th March, 2023",
    link: "https://iittp.ac.in/news",
    description:
      'Mr. Allabakshi S. M (CEE, Ph.D. scholar) received the first prize in "Best oral presentation award category" from the 1st Institute Level Research Scholars Symposium organized by IIT Tirupati, India held on May 9th, 2023, at IIT Tirupati.',
  },
  {
    title:
      'Congratulations to Mr. V. Sunil (MS Scholar under guidance of Dr. Uday Kumar Sukumar & Dr. K. Anki Reddy, Department of Chemical Engineering) got selected for "Khorana Program of Internships - 2023".',
    date: "17th March, 2023",
    link: "https://iittp.ac.in/news",
    description:
      "Mr. V. Sunil (MS Scholar under guidance of Dr. Uday Kumar Sukumar & Dr. K. Anki Reddy, Department of Chemical Engineering) got selected for Khorana Program of Internships - 2023 to be pursued at Purdue University, USA",
  },
  {
    title:
      'Congratulations to Mr. Vikrant Yadav and Mr. Sonu Jana - Department of Physics, Research scholars have been awarded the prestigious "MITACS GLOBALINK RESEARCH" Award.',
    date: "24th March, 2023",
    link: "https://iittp.ac.in/news",
    description:
      'Mr. Vikrant Yadav and Mr. Sonu Jana (Department of Physics, Ph.D. scholars) have been awarded the prestigious "MITACS GLOBALINK RESEARCH" for a 3 month internship program at Professor Amar Vutha’s research group at the University of Toronto, Canada. Incidentally Sonu Jana is funded by the IITT TIH Chanakya Doctoral Fellowship. Both of them are involved in portable atomic clock development at IIT TIRUPATI.',
  },
  {
    title:
      'Congratulations to Mr. Allabakshi S. M, Civil Engineering Research scholar received the first prize in "Best Paper Award Category".',
    date: "6th - 7th March, 2023",
    link: "https://iittp.ac.in/news",
    description:
      'Mr. Allabakshi S. M (CEE, Ph.D. scholar) received the first prize in "Best Paper Award Category" from the Indo-Canadian Symposium on Water Management: Sustainability & Impact of Climate Change organized by Dalhousie University, Canada and IIT Tirupati, India held on March 6th – 7th, 2023, at IIT Tirupati.',
  },
  {
    title:
      'Congratulations to Ms. Vajitha. G, Civil Engineering Research scholar received the "Best poster presentation award".',
    date: "12th - 14th February, 2023",
    link: "https://iittp.ac.in/news",
    description:
      'Ms. Vajitha. G (CEE, Ph.D. scholar) received the "Best poster presentation award" at the 35th Kerala Science Congress held at Mar Baselios Christian College of Engineering and Technology on 12th – 14th, February 2023, Kerala.',
  },
  {
    title: "IIT Tirupati News Site",
    date: "2024",
    link: "https://iittp.ac.in/news",
    description: "For more news, visit the IIT Tirupati News Site",
  }
];

const Card = ({ props }) => {
  return (
    <Pressable
      onPress={() =>
        Linking.openURL(props.link).catch(() =>
          console.log("Cannot Open " + props.link),
        )
      }
      className="frex-col justify-center items-center m-5 p-5 bg-whote rounded-lg"
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: themeColors.bgDark,
      }}
    >
      <Text
        className="text-3xl text-bold text-center w-fullm-2 flex-1"
        style={{ color: themeColors.bgDark}}
      >
        {props.title.slice(0, 30)}
      </Text>
      <Text
        className="text-sm text-center border-t-2 border-b-2 pb-2 pt-2 w-full mb-2 mt-2"
        style={{
          color: themeColors.bgDark,
          borderColor: themeColors.bgDark,
        }}
      >
        {props.date}
      </Text>
      <Text
        className="text-lg text-center flex-1"
        style={{ color: themeColors.bgDark }}
      >
        {props.description.slice(0, 80) + "..."}
      </Text>
    </Pressable>
  );
};

export default function News() {
  const params = useLocalSearchParams();
  const id = Number(params.id);
  const data = ConvocationProgram.find((item) => item.id === id);

  return (
    <ScrollView className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("~/assets/backgroundiitt.jpeg")}
        style={{
          height: 300,
        }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="flex-row justify-center">
          {data.image ? (
            <Image
              source={data.image}
              className="h-60 w-60 rounded-full overflow-hidden"
              style={{ marginTop: ios ? 0 : 100 }}
            />
          ) : (
            <View
              className="flex-col justify-center items-center w-60 h-60 m-5"
              style={{
                backgroundColor: themeColors.bgDark,
                borderRadius: 100,
                marginTop: ios ? 0 : 100,
              }}
            >
              <FontAwesome6
                name={data.icon}
                size={100}
                color={themeColors.bgLight}
              />
            </View>
          )}
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {data.title}
          </Text>
        </View>
        {news.map((item, index) => (
          <Card key={index} props={item} />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}
