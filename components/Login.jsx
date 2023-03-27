//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import "expo-dev-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import axios from "axios";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
//image
import Pic from "../assets/Login_pic.png";
import LoginFace from "../assets/Login_Facebook.png";
import LoginGoogle from "../assets/Login_Google.png";

let STORAGE_KEY_USER = "@gmail";

const Login = () => {
  const navigation = useNavigation();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      "18162468684-iv5lokja8tepohh9q0rskinejb5cpua2.apps.googleusercontent.com",
  });

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log(idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    console.log(googleCredential);
    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log(user);
        postUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (initializing) return null;

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_USER, user.email);
    } catch (e) {
      console.log("lỗi");
    }
  };

  const postUser = async () => {
    axios
      .post("https://eat-clean-menu-ecm.azurewebsites.net/api/users/login", {
        avatar: user.photoURL,
        fullname: user.displayName,
        gmail: user.email,
      })
      .then(function (response) {
        saveData();
        navigation.navigate("LoginInformation", { gmail: user.email });
      })
      .catch(function (error) {
        console.log(error);
        navigation.navigate("Login");
      });
  };

  if (user === null) {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.headerLogin}>
            <Text style={[typo.textBold, colors.primaryColor]}>
              Bạn đã sẵn sàng?
            </Text>
            <Text style={[typo.header, colors.extraColor]}>
              Hãy tạo tài khoản của bạn
            </Text>
          </View>
          <View style={styles.innerLogin}>
            <Image source={Pic} />
          </View>
          <View style={styles.bottomLogin}>
            <GoogleSigninButton
              style={{ width: 300, height: 65 }}
              onPress={onGoogleButtonPress}
            />
          </View>
          {/* <TouchableOpacity onPress={signOut}>
              <Text>Đăng xuất</Text>
            </TouchableOpacity> */}
        </View>
      </View>
    );
  // } else {
  //   postUser();
  }
};

export default Login;
