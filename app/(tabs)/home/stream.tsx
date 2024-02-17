import { useNavigation } from "@react-navigation/native";
import { mainGrid } from "~/constants";
import React, { useEffect } from "react";
import { View, Linking } from "react-native";

const YouTubeLinkScreen = () => {
  const navigate = useNavigation();
  const openYouTubeLink = () => {
    const youtubeLink = mainGrid[0].link;

    // Use Linking to open the URL
    Linking.openURL(youtubeLink).catch((err) =>
      console.error("Error opening YouTube link:", err),
    );
  };

  useEffect(() => {
    openYouTubeLink();
    return navigate.goBack();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
  );
};

export default YouTubeLinkScreen;
