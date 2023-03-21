//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
import img from "../styles/img";
import textInput from "../styles/textInput";
//image
import Pic from "../assets/Analysis.png";
import Line from "../assets/Analysis_line.png";

let STORAGE_KEY = "@weight";
let STORAGE_KEY_H = "@height";
let STORAGE_KEY_A = "@age";
let STORAGE_KEY_G = "@gender";
let STORAGE_KEY_BMI = "@BMI";
let STORAGE_KEY_TARGET = "@target";
let STORAGE_KEY_PRACTICE = "@practice";
let STORAGE_KEY_CALORIES = "@calo";
let STORAGE_KEY_USER = "@gmail";

const AnalysisBMI = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [target, setTarget] = useState("");
  const [practice, setPractice] = useState("");
  const [calo, setCalo] = useState(0);
  const [BMRFemaleNeed, setBMRFemaleNeed] = useState(0);
  const [BMRMaleNeed, setBMRMaleNeed] = useState(0);
  const [BMRMale, setBMRMale] = useState(0);
  const [BMRFemale, setBMRFemale] = useState(0);
  const [userAcc, setUserAcc] = useState("");
  const [dataUser, setDataUser] = useState();

  const BMI =
    Math.round((weight / (((height / 100) * height) / 100)) * 100) / 100;

  useEffect(() => {
    readWeight();
    readHeight();
    readAge();
    readGender();
    readTarget();
    readPractice();
    readUser();
  }, []);

  useEffect(() => {
    CalcBMR();
  });

  const readUser = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_USER);
      console.log(value);

      if (value !== null) {
        setUserAcc(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const getUser = async () => {
    await axios
      .get(`https://eat-clean-menu-ecm.azurewebsites.net/api/users/${userAcc}`)
      .then(function (response) {
        console.log(response.data.data);
        setDataUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, [userAcc]);

  const postMenuByUser = () => {
      axios
        .post(
          `https://eat-clean-menu-ecm.azurewebsites.net/api/user-dietary-info/${dataUser.id}`,
          {
            activityRate: practice,
            bmi: BMI,
            bmr: BMRFemale !== 0 ? BMRFemale : BMRMale,
            caloriesConsumed: calo,
            dietTarget: target,
            gender: gender,
            userAge: age,
            userHeight: height,
            userWeight: weight,
          }
        )
        .then(function (response) {
          console.log("hiiiiii" + response);
        })
        .catch(function (error) {
          console.log("hiiiiii" + error);
        });
  };

  const CalcBMR = () => {
    //Đối với nam giới: BMR = 66 + (13,7 x trọng lượng) + (5 x chiều cao) – (6,8 x tuổi).
    setBMRMale(
      Math.round((66 + 13.7 * weight + 5 * height - 6.8 * age) * 100) / 100
    );

    //Đối với phụ nữ: BMR = 655 + (9,6 x trọng lượng) + (1,8 x chiều cao) – (4,7 x tuổi).
    setBMRFemale(
      Math.round((655 + 9.6 * weight + 1.8 * height - 4.7 * age) * 100) / 100
    );
    if (practice == "Không tập luyện") {
      setBMRFemaleNeed(Math.round(BMRFemale * 1.2 * 100) / 100);
      setBMRMaleNeed(Math.round(BMRMale * 1.2 * 100) / 100);
    } else if (practice == "Ít tập luyện") {
      setBMRFemaleNeed(Math.round(BMRFemale * 1.375 * 100) / 100);
      setBMRMaleNeed(Math.round(BMRMale * 1.375 * 100) / 100);
    } else if (practice == "Luyện tập vừa") {
      setBMRFemaleNeed(Math.round(BMRFemale * 1.55 * 100) / 100);
      setBMRMaleNeed(Math.round(BMRMale * 1.55 * 100) / 100);
    } else if (practice == "Luyện tập nhiều") {
      setBMRFemaleNeed(Math.round(BMRFemale * 1.725 * 100) / 100);
      setBMRMaleNeed(Math.round(BMRMale * 1.725 * 100) / 100);
    } else if (practice == "Luyện tập cường độ cao") {
      setBMRFemaleNeed(Math.round(BMRFemale * 1.9 * 100) / 100);
      setBMRMaleNeed(Math.round(BMRMale * 1.9 * 100) / 100);
    }

    if (target === "Giảm cân" && gender === "Nữ") {
      setCalo(BMRFemaleNeed - 250);
    } else if (target === "Tăng cân" && gender === "Nữ") {
      setCalo(BMRFemaleNeed + 250);
    } else if (target === "Giữ nguyên cân nặng" && gender === "Nữ") {
      setCalo(BMRFemaleNeed);
    } else if (target === "Giảm cân" && gender === "Nam") {
      setCalo(BMRMaleNeed - 250);
    } else if (target === "Tăng cân" && gender === "Nam") {
      setCalo(BMRMaleNeed + 250);
    } else if (target === "Giữ nguyên cân nặng" && gender === "Nam") {
      setCalo(BMRMaleNeed);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY_BMI,
        (Math.round(BMI * 100) / 100).toString()
      );
    } catch (e) {}
  };

  const readWeight = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      console.log(value);

      if (value !== null) {
        setWeight(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };
  const readHeight = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_H);
      console.log(value);

      if (value !== null) {
        setHeight(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const readAge = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_A);
      console.log("age" + value);
      if (value !== null) {
        setAge(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const readGender = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_G);
      console.log(value);

      if (value !== null) {
        setGender(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const readTarget = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_TARGET);
      console.log(value);

      if (value !== null) {
        setTarget(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const readPractice = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_PRACTICE);
      console.log(value);

      if (value !== null) {
        setPractice(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const saveCalo = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_CALORIES, calo.toString());
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerAnalysisBMI}>
        <Image source={Pic} />
      </View>
      <View style={styles.innerAnalysisBMI}>
        <TouchableOpacity>
          <Image source={Line} />
        </TouchableOpacity>
        <Text style={[typo.subtitle, spacing.space_ver_1]}>
          Phân tích chỉ số cơ thể
        </Text>
        <View style={[textInput.settingTextAnalysisGroup, spacing.space_ver_1]}>
          <View style={textInput.settingTextAnalysis}>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              Cân nặng
            </Text>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              {weight} kg
            </Text>
          </View>
          <View style={textInput.settingTextAnalysis}>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              Chiều cao
            </Text>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              {height} cm
            </Text>
          </View>
        </View>
        <View style={[textInput.settingTextAnalysisGroup, spacing.space_ver_2]}>
          <View style={textInput.settingTextAnalysis}>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              BMI
            </Text>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              {BMI}
            </Text>
          </View>
          <View style={textInput.settingTextAnalysis}>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              BMR
            </Text>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              {gender === "Nam" ? BMRMale : BMRFemale}
            </Text>
          </View>
        </View>
        <View
          style={[textInput.settingTextAnalysisBMRGroup, spacing.space_ver_2]}
        >
          <Text style={[spacing.spaceBottom_ver_3, typo.text]}>
            Lượng calo cần nạp vào cơ thể
          </Text>
          <View style={textInput.settingTextAnalysisGroup}>
            <View style={textInput.settingTextAnalysis}>
              <Text style={[typo.text, textInput.settingText, colors.wColor]}>
                Calo
              </Text>
              <Text style={[typo.text, textInput.settingText, colors.wColor]}>
                {Math.round(calo * 100) / 100} Kcal/ngày
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => [
            navigation.navigate("DailyMenu"),
            saveData(),
            saveCalo(),
            postMenuByUser(),
          ]}
          style={button.settingAnalysisButton}
        >
          <Text style={[typo.textBold, textInput.settingText, colors.wColor]}>
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnalysisBMI;
