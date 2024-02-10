import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function OrganizerCard({ item }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: ios ? height * 0.2 : height * 0.2,
        width: width * 0.9,
        flexDirection: "column",
        margin: 10,
        // alignItems: "space-between",
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
          marginTop: ios ? -(height * 0.08) : 15,
          flexDirection: "row",
          justifyContent: "",
          alignItems: "center",
          margin: 10,
        }}
        // className="flex-column justify-center align-items-center"
      >
        <View>
          <Image
            source={item.image}
            style={{ height: 152, width: 122, borderRadius: 16 }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-around",
            width: width * 0.5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {item.designation}
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {item.email}
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {item.phone}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: ios ? themeColors.bgDark : "transparent",
            shadowColor: themeColors.bgDark,
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
          }}
          className="flex-row justify-between items-center mb-5"
        >
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("Product", { ...item })}
            style={{
              shadowColor: "black",
              shadowRadius: 40,
              shadowOffset: { width: -20, height: -10 },
              shadowOpacity: 1,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 20,
            }}
          > */}
          {/* <PlusIcon size={25} strokeWidth={2} color={themeColors.bgDark} />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}
