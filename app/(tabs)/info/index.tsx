import { router, useLocalSearchParams } from "expo-router";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";

import { themeColors } from "~/themes";
import { firebase_db } from "~/utils/firebase";

export default function Information({ navigation }) {
  const [notifications, setNotifications] = useState([]);
  const [viewedNotificationIds, setViewedNotificationIds] = useState([]);
  const refresh = useLocalSearchParams().refresh === "true";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(firebase_db, "notifications"),
          orderBy("timestamp", "desc"),
        );
        const querySnapshot = await getDocs(q);
        const fetchedNotifications = [];
        querySnapshot.forEach((doc) => {
          const notification = { id: doc.id, ...doc.data() };
          fetchedNotifications.push(notification);
        });
        fetchedNotifications.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    router.setParams({ refresh: "false" });
  }, [refresh]);

  const handleCardPress = (id) => {
    if (!viewedNotificationIds.includes(id)) {
      const updatedViewedNotificationIds = [...viewedNotificationIds, id];
      setViewedNotificationIds(updatedViewedNotificationIds);
      Alert.alert("Notification Marked as Read");
    }
    // Handle navigation or any other action when a notification is pressed
  };

  const renderNotificationCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item.id)}>
      <View
        style={[
          styles.card,
          viewedNotificationIds.includes(item.id) && styles.readCard,
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {notifications[0] ? <FlatList
        data={notifications}
        renderItem={renderNotificationCard}
        keyExtractor={(item) => item.id}
      /> : <Text className="text-gray-500 text-center">All updates about the convocation will appear here!</Text>}
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    width: width * 0.9,
    borderColor: themeColors.bgDark,
    borderWidth: 2,
  },
  readCard: {
    borderColor: "#ccc", // Grey color for read notifications
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});
