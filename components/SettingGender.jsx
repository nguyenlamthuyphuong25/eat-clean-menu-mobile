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
import textInput from "../styles/textInput";
//image
import MaleIcon from "../assets/Gender_Male.png";
import FemaleIcon from "../assets/Gender_Female.png";
import ButtonNext from "../assets/Button_Setting_1.png";
import ButtonDisable from "../assets/Button_Setting_Inactive_1.png";
import MaleActiveIcon from "../assets/Gender_Male_Active.png";
import FemaleActiveIcon from "../assets/Gender_Female_Active.png";

let STORAGE_KEY_G = "@gender";

const SettingGender = () => {
  const [activeMale, setActiveMale] = useState(false);
  const [activeFemale, setActiveFemale] = useState(false);

  const handleActiveMale = () => {
    setActiveMale(!activeMale);
    setActiveMale(true);
    setActiveFemale(false);
  };

  const handleActiveFemale = () => {
    setActiveFemale(!activeFemale);
    setActiveFemale(true);
    setActiveMale(false);
  };

  const saveDataMale = async () => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY_G, "Nam")
    } catch (e) {}
  };

  const saveDataFemale = async () => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY_G, "Nữ")
    } catch (e) {}
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerSetting}>
        <Text style={typo.subtitleLight}>
          <Text style={colors.primaryColor}>Giới tính</Text> của bạn là gì?
        </Text>
        <Text style={[spacing.space_ver_3, textInput.settingText]}>
          Để có thể cho bạn lời khuyên tốt nhất, hãy cho chúng tôi biết giới
          tính của bạn.
        </Text>
      </View>
      <View style={styles.innerSetting}>
        <TouchableOpacity onPress={() => [handleActiveMale(), saveDataMale()]}>
          {activeMale ? (
            <Image source={MaleActiveIcon} />
          ) : (
            <Image source={MaleIcon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => [handleActiveFemale(), saveDataFemale()]}
          style={spacing.space_ver_1}
        >
          {activeFemale ? (
            <Image source={FemaleActiveIcon} />
          ) : (
            <Image source={FemaleIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSetting}>
        {activeMale || activeFemale ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingTarget")}
          >
            <Image source={ButtonNext} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled>
            <Image source={ButtonDisable} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SettingGender;
