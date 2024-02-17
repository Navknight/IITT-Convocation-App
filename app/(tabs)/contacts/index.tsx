import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  Platform,
  FlatList,
  Dimensions,
} from "react-native";

import { contributors, organizers } from "~/constants";
import { themeColors } from "~/themes";

const ios = Platform.OS === "ios";
const { width, height } = Dimensions.get("window");

function Contributer(props) {
  return (
    <View
      style={{
        borderRadius: 10,
        height: ios ? height * 0.3 : height * 0.3,
        width: width * 0.4,
        elevation: 5,
        margin: ios ? -(height * 0.08) : 15,
        backgroundColor: "white",
        borderColor: themeColors.bgDark, // Assuming themes.bgDark holds the desired color value
        borderWidth: 2, // Adjust the width as needed
        borderStyle: "solid", // You can change this to 'dashed', 'dotted', etc.
        alignItems: "center", // Center the content horizontally
        paddingTop: 20, // Adjust the gap between the image and text
      }}
    >
      <Image
        source={props.item.image}
        style={{
          height: 100,
          width: 100,
          borderRadius: 100,
        }}
      />
      <View style={{ marginTop: 10 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          {props.item.name}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 12, marginTop: -10 }}>
          {props.item.designation}
        </Text>
        <Text style={{ textAlign: "center" }}>{props.item.email}</Text>
      </View>
    </View>
  );
}

export default function Contacts() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar />
      <SafeAreaView className="flex-1 flex-col justify-center items-center">
        <Text className="text-3xl font-bold">App Contributors</Text>
        <FlatList
          horizontal
          data={contributors}
          renderItem={(item) => <Contributer {...item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
