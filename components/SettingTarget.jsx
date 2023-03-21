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
import ButtonNext from "../assets/Button_Setting_2.png";
import ButtonNextInactive from "../assets/Button_Setting_Inactive_2.png";
import textInput from "../styles/textInput";

let STORAGE_KEY_TARGET = "@target";

const SettingTarget = () => {
  const navigation = useNavigation();
  const [upWeight, setUpWeight] = useState(false);
  const [downWeight, setDownWeight] = useState(false);
  const [keepWeight, setKeepWeight] = useState(false);
  const [target, setTarget] = useState("");

  const getUpWeight = () => {
    setUpWeight(!upWeight);
    setDownWeight(false);
    setKeepWeight(false);
    setTarget("Tăng cân");
  };
  const getDownWeight = () => {
    setDownWeight(!downWeight);
    setUpWeight(false);
    setKeepWeight(false);
    setTarget("Giảm cân");
  };
  const getKeepWeight = () => {
    setKeepWeight(!keepWeight);
    setDownWeight(false);
    setUpWeight(false);
    setTarget("Giữ nguyên cân nặng");
  };

  console.log(target);

  const saveDataTarget = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_TARGET, target);
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
          <Text style={colors.primaryColor}>Mục tiêu</Text> của bạn là gì?
        </Text>
        <Text style={[spacing.space_ver_3, textInput.settingText]}>
          Để có thể cho bạn lời khuyên tốt nhất, hãy cho chúng tôi biết mục tiêu
          của bạn.
        </Text>
      </View>
      <View style={styles.innerSetting}>
        {downWeight ? (
          <TouchableOpacity
            onPress={getDownWeight}
            style={[button.settingButtonActive, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Giảm cân</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={getDownWeight}
            style={[button.settingButton, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Giảm cân</Text>
          </TouchableOpacity>
        )}

        {upWeight ? (
          <TouchableOpacity
            onPress={getUpWeight}
            style={[button.settingButtonActive, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Tăng cân</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={getUpWeight}
            style={[button.settingButton, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Tăng cân</Text>
          </TouchableOpacity>
        )}
        {keepWeight ? (
          <TouchableOpacity
            onPress={getKeepWeight}
            style={[button.settingButtonActive, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Giữ nguyên cân nặng</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={getKeepWeight}
            style={[button.settingButton, spacing.spaceBottom_ver_3]}
          >
            <Text style={typo.text}>Giữ nguyên cân nặng</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomSetting}>
        {upWeight || downWeight || keepWeight ? (
          <TouchableOpacity
            onPress={() => [navigation.navigate("SettingAge"), saveDataTarget()]}
          >
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

export default SettingTarget;
