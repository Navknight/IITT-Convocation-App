import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
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

  useEffect(() => {
    const loadViewedNotificationIds = async () => {
      try {
        const ids = await AsyncStorage.getItem("viewedNotificationIds");
        if (ids !== null) {
          setViewedNotificationIds(JSON.parse(ids));
        }
      } catch (error) {
        console.error("Error loading viewed notification IDs: ", error);
      }
    };

    loadViewedNotificationIds();
  }, []);

  const markNotificationAsRead = async (id) => {
    try {
      const updatedViewedNotificationIds = [...viewedNotificationIds, id];
      await AsyncStorage.setItem(
        "viewedNotificationIds",
        JSON.stringify(updatedViewedNotificationIds),
      );
      setViewedNotificationIds(updatedViewedNotificationIds);
      Alert.alert("Notification Marked as Read");
    } catch (error) {
      console.error("Error marking notification as read: ", error);
    }
  };

  const isNotificationRead = (id) => viewedNotificationIds.includes(id);

  const handleCardPress = (id) => {
    if (!isNotificationRead(id)) {
      markNotificationAsRead(id);
    }
  };

  const renderNotificationCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item.id)}>
      <View
        style={[
          styles.card,
          isNotificationRead(item.id) ? styles.oldCard : styles.newCard,
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotificationCard}
        keyExtractor={(item) => item.id}
      />
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
  newCard: {
    borderColor: themeColors.bgDark,
    borderWidth: 2,
  },
  oldCard: {
    borderColor: "#ccc", // Grey color for old notifications
    borderWidth: 2,
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
