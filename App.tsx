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
} from "phosphor-react-native";
import { NativeBaseProvider } from "native-base";

import { ListScreen } from "./src/screens/list.screen";
import { Onboarding1, Onboarding2 } from "./src/screens/onboarding.screen";
import { ProductScreen } from "./src/screens/product.screen";
import { BarcodeScreen } from "./src/screens/barcode.screen";

function SearchScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Settings!</Text>
    </View>
  );
}

const isAndroid = Platform.OS === "android";

function CloseButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <CaretDown color="black" />
    </TouchableOpacity>
  );
}

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
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  if (1 === 0) {
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
          <StackNav.Navigator
            screenOptions={() => ({
              headerShown: false,
            })}
          >
            <StackNav.Screen name="TabGroup" component={TabNavigation} />
            <StackNav.Screen
              options={() => ({
                headerShown: true,
                headerTitle: "Scan Product",
                headerLeft: () => (isAndroid ? null : <BackButton />),
              })}
              name="BarcodeScreen"
              component={BarcodeScreen}
            />
            <StackNav.Group screenOptions={{ presentation: "modal" }}>
              <StackNav.Screen
                name="ProductModal"
                component={ProductScreen}
                options={() => ({
                  headerShown: true,
                  headerTitle: "Product Information",
                  headerRight: () => (isAndroid ? null : <CloseButton />),
                })}
              />
            </StackNav.Group>
          </StackNav.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
