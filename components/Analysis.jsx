//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
import img from "../styles/img";
import textInput from "../styles/textInput";

const Analysis = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress === 0) {
      setTimeout(() => {
        setProgress(0.25);
      }, 1000);
    }
  }, [progress]);

  useEffect(() => {
    if (progress === 0.25) {
      setTimeout(() => {
        setProgress(0.5);
      }, 1000);
    }
  }, [progress]);

  useEffect(() => {
    if (progress === 0.5) {
      setTimeout(() => {
        setProgress(0.75);
      }, 1000);
    }
  }, [progress]);

  useEffect(() => {
    if (progress === 0.75) {
      setTimeout(() => {
        setProgress(1);
      }, 1000);
    }
  }, [progress]);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AnalysisBMI')
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerAnalysis}>
        <Progress.Circle showsText={true} progress={progress} size={160} borderColor='#CDCDCD' color='#24B445'/>
      </View>
      <View style={styles.innerAnalysis}>
        <Text style={[typo.subtitle, colors.primaryColor, spacing.space_ver_1]}>
          Phân tích chỉ số cơ thể
        </Text>
        <Text style={[typo.text, spacing.space_ver_3, textInput.settingText]}>
          Thiết lập kế hoạch dinh dưỡng của bạn và phân tích mục tiêu của bạn
          ...
        </Text>
      </View>
    </View>
  );
};

export default Analysis;
