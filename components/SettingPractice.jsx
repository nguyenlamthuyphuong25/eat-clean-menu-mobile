//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
//image
import ButtonBack from "../assets/Button_back.png";
import ButtonNext from "../assets/Button_Setting_6.png";
import ButtonNextInactive from "../assets/Button_Setting_Inactive_6.png";
import textInput from "../styles/textInput";

let STORAGE_KEY_PRACTICE = "@practice";

const SettingPractice = () => {
  const navigation = useNavigation();
  const [noPractice, setNoPractice] = useState(false);
  const [lowPractice, setLowPractice] = useState(false);
  const [fitPractice, setFitPractice] = useState(false);
  const [lotsPractice, setLotsPractice] = useState(false);
  const [highPractice, setHighPractice] = useState(false);
  const [practice, setPractice] = useState("");

  const getNoPractice = () => {
    setNoPractice(!noPractice);
    setLowPractice(false);
    setFitPractice(false);
    setLotsPractice(false);
    setHighPractice(false);
    setPractice("Không tập luyện");
  };

  const getLowPractice = () => {
    setLowPractice(!lowPractice);
    setNoPractice(false);
    setFitPractice(false);
    setLotsPractice(false);
    setHighPractice(false);
    setPractice("Ít tập luyện");
  };

  const getFitPractice = () => {
    setFitPractice(!fitPractice);
    setLowPractice(false);
    setNoPractice(false);
    setLotsPractice(false);
    setHighPractice(false);
    setPractice("Luyện tập vừa");
  };

  const getLotsPractice = () => {
    setLotsPractice(!lotsPractice);
    setLowPractice(false);
    setFitPractice(false);
    setNoPractice(false);
    setHighPractice(false);
    setPractice("Luyện tập nhiều");
  };

  const getHighPractice = () => {
    setHighPractice(!highPractice);
    setLowPractice(false);
    setFitPractice(false);
    setLotsPractice(false);
    setNoPractice(false);
    setPractice("Luyện tập cường độ cao");
  };

  console.log(practice);
  const saveDataPractice = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_PRACTICE, practice);
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSetting}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={button.settingBackButton}
        >
          <Image source={ButtonBack} />
        </TouchableOpacity>
        <Text style={typo.subtitleLight}>
          <Text style={colors.primaryColor}>Mức độ vận động</Text> của bạn
        </Text>
        <Text style={[spacing.space_ver_3, textInput.settingText]}>
          Để có thể cho bạn lời khuyên tốt nhất, hãy cho chúng tôi biết mức độ
          vận động của bạn.
        </Text>
      </View>
      <View style={styles.innerSetting}>
        {noPractice ? (
          <TouchableOpacity
            onPress={getNoPractice}
            style={[button.settingButtonActive, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Không tập luyện</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={getNoPractice}
            style={[button.settingButton, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Không tập luyện</Text>
          </TouchableOpacity>
        )}

        {lowPractice ? (
          <TouchableOpacity
            onPress={getLowPractice}
            style={[button.settingButtonActive, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Ít tập luyện (1-3 ngày/ tuần)</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={getLowPractice}
            style={[button.settingButton, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Ít tập luyện (1-3 ngày/ tuần)</Text>
          </TouchableOpacity>
        )}

        {fitPractice ? (
          <TouchableOpacity
            onPress={getFitPractice}
            style={[button.settingButtonActive, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Luyện tập vừa (3-5 ngày/tuần)</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={getFitPractice}
            style={[button.settingButton, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Luyện tập vừa (3-5 ngày/tuần)</Text>
          </TouchableOpacity>
        )}

        {lotsPractice ? (
          <TouchableOpacity
            onPress={getLotsPractice}
            style={[button.settingButtonActive, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Luyện tập nhiều (5-7 ngày/tuần)</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={getLotsPractice}
            style={[button.settingButton, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Luyện tập nhiều (5-7 ngày/tuần)</Text>
          </TouchableOpacity>
        )}

        {highPractice ? (
          <TouchableOpacity
            onPress={getHighPractice}
            style={[button.settingButtonActive, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Luyện tập cường độ cao</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={getHighPractice}
            style={[button.settingButton, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Luyện tập cường độ cao</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomSetting}>
        {noPractice ||
        lowPractice ||
        fitPractice ||
        lotsPractice ||
        highPractice ? (
          <TouchableOpacity onPress={() => [navigation.navigate("Analysis"), saveDataPractice()]}>
            <Image source={ButtonNext} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled>
            <Image source={ButtonNextInactive} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SettingPractice;
