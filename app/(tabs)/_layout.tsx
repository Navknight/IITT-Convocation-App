import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { Image, Pressable, StyleSheet } from 'react-native';
import IITTlogo from '../../assets/IITT-logo.jpeg';
import { themeColors } from '~/themes';
import HomeScreen from '.';
import Landing from './landing';
import Information from './info';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

function HomeStack() {
  return (
    <Stack>
      <Stack.Screen name="index" component={HomeScreen} />
      <Stack.Screen name="landing" component={Landing} />
    </Stack>
  )
}

function InformationStack() {
  return (
    <Stack>
      <Stack.Screen name="info" component={Information} />
      <Stack.Screen name="landing" component={Landing} />
    </Stack>
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: themeColors.bgDark,
      }}>
      <Tabs.Screen
        name="index"
        component={HomeStack}
        options={{
          headerShown: false, // Set headerShown to false to disable the header
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => <Image source={IITTlogo} style={{
            height: 50,
            width: 80,
          }} />,
        }}
      />
      <Tabs.Screen
        name="info"
        component={InformationStack}
        options={{
          title: 'Information',
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ color }) => <TabBarIcon name="address-book" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
