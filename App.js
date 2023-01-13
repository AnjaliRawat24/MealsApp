import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import withImageBackground from "./src/hoc/withImageBackground";
import Categories from "./src/views/Categories";
import Favorites from "./src/views/Favorites";
import Meal from "./src/views/Meal";
import Meals from "./src/views/Meals";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./src/store/context/FavoritesContext";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#F4F3EE" },
        headerTintColor: "black",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "#CCD5AE",
        drawerContentStyle: { backgroundColor: "#E5E5E5" },
      }}
    >
      <Drawer.Screen
        component={withImageBackground(Categories)}
        name="Categories"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={withImageBackground(Favorites)}
        name="Favorites"
        options={{
          title: "My Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-sharp" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const SCREENS = [
  {
    name: "MealCategories",
    component: DrawerNavigator,
    options: {
      headerShown: false,
    },
  },
  {
    name: "MealsOverview",
    component: withImageBackground(Meals),
    // options: ({ route }) => ({ title: route.params.title }),
  },
  {
    name: "MealDetail",
    component: withImageBackground(Meal),
    // options: {
    //   headerRight: () => <Button title="Tap me!" color="black" />,
    // },
  },
];

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* <SafeAreaView style={styles.container}> */}
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "#F4F3EE" },
            }}
          >
            {SCREENS.map((screen) => (
              <Stack.Screen {...screen} key={screen.name} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
      {/* </SafeAreaView> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
