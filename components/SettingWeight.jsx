//lib
import { View, Text, Image, Button, TouchableOpacity, TextInput } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SmoothPicker from "react-native-smooth-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
//image
import ButtonBack from "../assets/Button_back.png";
import ButtonNext from "../assets/Button_Setting_5.png";
import textInput from "../styles/textInput";

let STORAGE_KEY = '@weight';

const array = Array.from({ length: 200 }, (_, i) => i + 5);
const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 20,
  1: 15,
  2: 10,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          backgroundColor: selected ? "#FFF" : "transparent",
          borderColor: selected ? "#24B445" : "transparent",
          width: vertical ? 190 : "auto",
        },
      ]}
    >
      <Text style={{ fontSize }}>{name} kg</Text>
    </View>
  );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

const SettingWeight = () => {
  const [number, onChangeNumber] = React.useState("");
  const [selected, setSelected] = useState(45);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, number)
    } catch (e) {
    }
  }

  const navigation = useNavigation();
  function handleChange(index) {
    setSelected(index);
    // saveData();
  }

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
          <Text style={colors.primaryColor}>Cân nặng</Text> của bạn là?
        </Text>
        <Text style={[spacing.space_ver_3, textInput.settingText]}>
          Để có thể cho bạn lời khuyên tốt nhất, hãy cho chúng tôi biết cân nặng
          của bạn.
        </Text>
      </View>
      <View style={styles.innerSettingAge}>
      <View style={[textInput.inforTextInput, {width: '80%'}]}>
          <TextInput
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Nhập cân nặng (kg)"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.bottomSetting}>
        <TouchableOpacity
          onPress={() => [navigation.navigate("SettingPractice"), saveData()]}
        >
          <Image source={ButtonNext} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingWeight;
