// import { StatusBar } from "expo-status-bar";
// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import "expo-dev-client";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-google-signin/google-signin";
// import auth from "@react-native-firebase/auth";
// import { useEffect, useState } from "react";

// export default function App() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   GoogleSignin.configure({
//     webClientId:
//       "18162468684-iv5lokja8tepohh9q0rskinejb5cpua2.apps.googleusercontent.com",
//   });

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   const onGoogleButtonPress = async () => {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     console.log(googleCredential)
//     // Sign-in the user with the credential
//     const user_sign_in = auth().signInWithCredential(googleCredential);
//     user_sign_in
//       .then((user) => {
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  
//   const signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await auth().signOut();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View style={styles.container}>
//         <GoogleSigninButton
//           style={{ width: 300, height: 65 }}
//           onPress={onGoogleButtonPress}
//         />
//       </View>
//     );
//   }
//   return (
//     <View style={styles.container}>
//       <Text>Welcom, {user.displayName}</Text>
//       <Text>Welcom, {user.email}</Text>
//       <Image style={{height:300, width:300}} source={{uri: user.photoURL}} />
//       <TouchableOpacity onPress={signOut}>
//         <Text>Log out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


// import { StatusBar } from "expo-status-bar";
// r;
// import { StyleSheet, Text, View } from "react-native";
import "expo-dev-client";
import Home from "./components/Home";
import IntroFirst from "./components/IntroFirst";
import IntroLast from "./components/IntroLast";
import IntroSecond from "./components/IntroSecond";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import LoginInformation from "./components/LoginInformation";
import SettingGender from "./components/SettingGender";
import SettingTarget from "./components/SettingTarget";
import SettingAge from "./components/SettingAge";
import SettingHeight from "./components/SettingHeight";
import SettingWeight from "./components/SettingWeight";
import SettingPractice from "./components/SettingPractice";
import Analysis from "./components/Analysis";
import AnalysisBMI from "./components/AnalysisBMI";
import Payment from "./components/Payment";
import DailyMenu from "./components/DailyMenu";
import Meal from "./components/Meal";
import MealStep from "./components/MealStep";
import Notification from "./components/Notification";
import NotificationTips from "./components/NotificationTips";
import Tips from "./components/Tips";
import AnalysisHome from "./components/AnalysisHome";
import HomeInformation from "./components/HomeInformation";
import EditInformation from "./components/EditInformation";
import AnalysisWeek from "./components/AnalysisWeek";
import AnalysisMonth from "./components/AnalysisMonth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="IntroFirst"
          component={IntroFirst}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="IntroSecond"
          component={IntroSecond}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="IntroLast"
          component={IntroLast}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="LoginInformation"
          component={LoginInformation}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingGender"
          component={SettingGender}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingTarget"
          component={SettingTarget}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingAge"
          component={SettingAge}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingHeight"
          component={SettingHeight}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingWeight"
          component={SettingWeight}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingPractice"
          component={SettingPractice}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Analysis"
          component={Analysis}
          options={{ headerShown: false }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="AnalysisBMI"
          component={AnalysisBMI}
          options={{ headerShown: false }}
          screenOptions={{
            fullScreenGestureEnabled:true,
            
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="DailyMenu"
          component={DailyMenu}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Meal"
          component={Meal}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="MealStep"
          component={MealStep}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="NotificationTips"
          component={NotificationTips}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Tips"
          component={Tips}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="AnalysisHome"
          component={AnalysisHome}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="HomeInformation"
          component={HomeInformation}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="EditInformation"
          component={EditInformation}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="AnalysisWeek"
          component={AnalysisWeek}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="AnalysisMonth"
          component={AnalysisMonth}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

