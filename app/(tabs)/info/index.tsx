import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { firebase_db } from '~/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { router, useLocalSearchParams } from 'expo-router';
import { themeColors } from '~/themes';

export default function Information({ navigation }) {
  const [notifications, setNotifications] = useState([]);
  const [viewedNotificationIds, setViewedNotificationIds] = useState([]);
  let refresh = useLocalSearchParams().refresh === "true";

  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchData(); // Fetch data every time the screen comes into focus
    }, [])
  );

  useEffect(() => {
    fetchDataIfRefresh(); // Fetch data only if refresh is true
  }, [refresh]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firebase_db, 'notifications'));
      const fetchedNotifications = [];
      querySnapshot.forEach((doc) => {
        fetchedNotifications.push({ id: doc.id, ...doc.data() });
      });
      setNotifications(fetchedNotifications);
      console.log(fetchedNotifications)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const fetchDataIfRefresh = () => {
    if (refresh) {
      fetchData();
      router.setParams({refresh: "false"})
    }
  };

  useEffect(() => {
    const loadViewedNotificationIds = async () => {
      try {
        const ids = await AsyncStorage.getItem('viewedNotificationIds');
        if (ids !== null) {
          setViewedNotificationIds(JSON.parse(ids));
        }
      } catch (error) {
        console.error('Error loading viewed notification IDs: ', error);
      }
    };

    loadViewedNotificationIds();
  }, []);

  const markNotificationAsRead = async (id) => {
    try {
      const updatedViewedNotificationIds = [...viewedNotificationIds, id];
      await AsyncStorage.setItem(
        'viewedNotificationIds',
        JSON.stringify(updatedViewedNotificationIds)
      );
      setViewedNotificationIds(updatedViewedNotificationIds);
    } catch (error) {
      console.error('Error marking notification as read: ', error);
    }
  };

  const isNotificationRead = (id) => viewedNotificationIds.includes(id);

  const renderNotificationCard = ({ item }) => (
    <View style={[styles.card, isNotificationRead(item.id) && styles.readCard]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>
    </View>
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

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    width: width * 0.9,
    borderColor: themeColors.bgDark,
    borderWidth: 2
  },
  readCard: {
    borderColor: 'red',
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});
