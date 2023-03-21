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
import Pic from "../assets/ECM_pic_2.png";
import Btn from "../assets/Button_Intro_2.png";
import { useNavigation } from "@react-navigation/native";

const IntroSecond = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => navigation.navigate('IntroFirst')}>
          <Image source={Icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={buttons.nextButton}>
          <Text>Bỏ qua</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inner}>
        <Image source={Pic} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.dishWrap}>
          <Text style={typo.subtitle}>Thống kê chi tiết</Text>
          <Text style={[typo.text, spacing.space_ver_3, styles.textWrap]}>
            Hiểu rõ hơn về thói quen dinh dưỡng của bạn với thống kê chi tiết
            cho từng cá nhân
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("IntroLast")}>
            <Image source={Btn} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IntroSecond;
