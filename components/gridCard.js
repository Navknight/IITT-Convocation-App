import React from "react";
import {
    View,
    Text,
    Dimensions,
    Platform,
    TouchableOpacity,
} from "react-native";
import { themeColors } from "../theme";
import {
    AcademicCapIcon as Cap,
    FilmIcon as Film,
    QueueListIcon as Queue,
} from "react-native-heroicons/solid";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faVest } from "@fortawesome/free-solid-svg-icons"; // Import the vest icon
import { useNavigation } from "@react-navigation/native";

export default function GridCard(props) {
    const { width, height } = Dimensions.get("window");
    const ios = Platform.OS == "ios";
    const navigation = useNavigation();
    let item;

    switch (props.item.icon) {
        case "cap":
            item = <Cap size="50" color={themeColors.bgLight} />;
            break;
        case "film":
            item = <Film size="50" color={themeColors.bgLight} />;
            break;
        case "queue":
            item = <Queue size="50" color={themeColors.bgLight} />;
            break;
        case "dress":
            item = (
                <FontAwesomeIcon icon={faVest} size={50} color={themeColors.bgLight} />
            );
            break;
        default:
            item = null;
            break;
    }

    return (
        <TouchableOpacity
            onPress={
                props.item.icon == "film"
                    ? () => navigation.navigate("Youtube")
                    : () => navigation.navigate("Product", { item: props.item })
            }
        >
            <View
                style={{
                    borderRadius: 40,
                    backgroundColor: themeColors.bgDark,
                    height: ios ? height * 0.15 : height * 0.2,
                    width: width * 0.42,
                    margin: 7,
                }}
                className="flex-col items-center justify-center"
            >
                {item}
                <Text className="text-white mt-5 text-base">{props.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
