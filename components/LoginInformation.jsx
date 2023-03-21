//lib
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import "expo-dev-client";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import axios from "axios";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import img from "../styles/img";
import textInput from "../styles/textInput";
import button from "../styles/button";
//image
import Pic from "../assets/LoginInformation_Person.png";
import LoginFace from "../assets/Login_Facebook.png";
import LoginGoogle from "../assets/Login_Google.png";
import Icon from "../assets/Login_Infor_icon.png";
import IconEdit from "../assets/Login_Infor_EditIcon.png";

let STORAGE_KEY_USER = "@gmail";

const LoginInformation = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [data, setData] = useState();
  const [name, setName] = useState("");

  console.log(typeof(data));

  GoogleSignin.configure({
    webClientId:
      "18162468684-iv5lokja8tepohh9q0rskinejb5cpua2.apps.googleusercontent.com",
  });

  const readUser = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_USER);
      console.log(value);

      if (value !== null) {
        setUser(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const getUser = async () => {
    await axios
      .get(`https://eat-clean-menu-ecm.azurewebsites.net/api/users/${user}`)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    readUser();
  }, []);

  useEffect(() => {
    getUser();
  }, [user]);

  if (data !== undefined) {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.headerInfo}>
            <Text style={[typo.textBold, colors.primaryColor]}>
              Xin chào bạn!
            </Text>
            <Text style={[typo.header, colors.extraColor]}>
              Hãy cập nhật thông tin cá nhân
            </Text>
          </View>
          <View style={styles.innerFirstInfor}>
            <TouchableOpacity>
              <Image style={img.imgInforEditIcon} source={IconEdit} />
            </TouchableOpacity>
            <View style={styles.innerFirstInforImg}>
              <Image style={[img.imgInfor]} source={{uri: data.avatar}} />
            </View>
            <Text style={[typo.subText, spacing.space_ver_2]}>
              Cập nhật ảnh đại điện
            </Text>
          </View>
          <View style={styles.innerThirdInfor}>
            <Text style={[typo.textBold, colors.primaryColor]}>
              Tên hiển thị
            </Text>
            <View style={textInput.inforTextInput}>
              <Image style={img.imgInforIcon} source={Icon} />
              <TextInput onChangeText={(e) => setName(e.target.value)} value={data.fullname} />
            </View>
          </View>
          <View style={styles.bottomInfor}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SettingGender")}
              style={button.inforButton}
            >
              <Text style={colors.wColor}>Bắt đầu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Cậu đợi bọn tớ xíu nhé...</Text>
      </View>
    );
  }
};

export default LoginInformation;
