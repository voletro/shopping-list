import { Platform, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  MagnifyingGlass,
  ListBullets,
  Gear,
  CaretDown,
  CaretLeft,
  Folder,
} from "phosphor-react-native";
import { NativeBaseProvider } from "native-base";

import { ListScreen } from "./src/screens/tab/list.screen";
import { Onboarding1, Onboarding2 } from "./src/screens/onboarding.screen";
import { ProductScreen } from "./src/screens/product.screen";
import { BarcodeScreen } from "./src/screens/barcode.screen";
import { SettingsScreen } from "./src/screens/tab/settings.screen";
import { SearchScreen } from "./src/screens/tab/search.screen";
import { SavedScreen } from "./src/screens/tab/saved.screen";

const isAndroid = Platform.OS === "android";
const isiOS = Platform.OS === "ios";

function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <CaretLeft color="black" />
    </TouchableOpacity>
  );
}

function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "List") {
            return <ListBullets size={size} color={color} />;
          } else if (route.name === "Search") {
            return <MagnifyingGlass size={size} color={color} />;
          } else if (route.name === "Saved") {
            return <Folder size={size} color={color} />;
          } else if (route.name === "Settings") {
            return <Gear size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "grey",
        tabBarInactiveTintColor: "lightgrey",
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{ headerShown: true, headerTitle: "Shopping List" }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{ headerShown: true, headerTitle: "Saved Lists" }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  if (1 == 0) {
    const Onboarding = createNativeStackNavigator();

    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Onboarding.Navigator
            screenOptions={() => ({
              headerShown: false,
            })}
          >
            <Onboarding.Screen name="1" component={Onboarding1} />
            <Onboarding.Screen name="2" component={Onboarding2} />
          </Onboarding.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  } else {
    const StackNav = createNativeStackNavigator();
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <StackNav.Navigator>
            <StackNav.Screen
              name="TabGroup"
              component={TabNavigation}
              options={() => ({
                headerShown: false,
              })}
            />
            <StackNav.Screen
              options={() => ({
                headerTitle: "Scan Product",
                headerLeft: () => (isAndroid ? null : <BackButton />),
              })}
              name="BarcodeScreen"
              component={BarcodeScreen}
            />
            <StackNav.Screen
              name="ProductScreen"
              component={ProductScreen}
              options={() => ({
                headerTitle: "Product Information",
                headerLeft: () => (isAndroid ? null : <BackButton />),
              })}
            />
          </StackNav.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
