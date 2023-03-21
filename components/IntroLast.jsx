//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import buttons from "../styles/button";
//image
import Icon from "../assets/Button_back.png";
import Pic from "../assets/ECM_pic_3.png";
import Btn from "../assets/Button_Intro_3.png";
import { useNavigation } from "@react-navigation/native";

const IntroLast = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => navigation.navigate('IntroSecond')}>
          <Image source={Icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inner}>
        <Image source={Pic} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.dishWrap}>
          <Text style={typo.subtitle}>Bắt đầu và trải nghiệm</Text>
          <Text style={[typo.text, spacing.space_ver_3, styles.textWrap]}>
            Hãy bắt đầu hành trình của bạn với ECM Eat Clean Menu - Thực đơn
            khỏe, sức khỏe vàng!
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image source={Btn} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IntroLast;
