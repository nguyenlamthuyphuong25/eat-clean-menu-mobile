//lib
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import moment from "moment";
  import "moment/locale/vi";
  import { BarChart, LineChart, ProgressChart } from "react-native-chart-kit";
  import { Dimensions } from "react-native";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import Modal from "react-native-modal";
  import { TextInput } from "react-native-gesture-handler";
  
  //style
  import styles from "../styles/style";
  import typo from "../styles/typography";
  import colors from "../styles/colors";
  import spacing from "../styles/spacing";
  import button from "../styles/button";
  import img from "../styles/img";
  import textInput from "../styles/textInput";
  
  //img
  import Header from "../assets/Header_Analysis.png";
  import BackBtn from "../assets/Button_back.png";
  import Avatar from "../assets/LoginInformation_Person.png";
  import Weight from "../assets/Weight.png";
  
  let STORAGE_KEY = "@weight";
  let STORAGE_KEY_BMI = "@BMI";
  
  const AnalysisMonth = () => {
    const navigation = useNavigation();
    const [weight, setWeight] = useState(0);
    const [BMI, setBMI] = useState(0);
    const [timeNow, setTimeNow] = useState(moment().format("LT"));
  
    const data = {
      labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      datasets: [
        {
          data: [1200, 800, 1250, 900, 1000, 1100, 1500],
        },
      ],
    };
  
    const progressData = {
      data: [1],
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
    const readBMI = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY_BMI);
        console.log(value);
  
        if (value !== null) {
          setBMI(value);
        }
      } catch (e) {
        alert("Failed to fetch the input from storage");
      }
    };
  
    useEffect(() => {
      readWeight();
      readBMI();
    }, []);
  
    return (
      <View style={styles.containerMargin}>
        <View style={styles.headerAnalysisHome}>
          <Image style={{ width: "100%" }} source={Header} />
          <View style={styles.subHeaderAnalysisHome}>
            <TouchableOpacity onPress={() => navigation.goBack(-1)}>
              <Image source={BackBtn} />
            </TouchableOpacity>
            <Text style={[colors.primaryColor, typo.subtitle]}>Thống kê</Text>
          </View>
        </View>
        <View style={styles.innerAnalysisHome}>
          <View style={img.imgAnalysisHomeContainer}>
            <Image style={img.imgAnalysisHome} source={Avatar} />
          </View>
          <Text style={[typo.textBold, spacing.space_ver_3]}>
            Huỳnh Lê Thủy Tiên
          </Text>
        </View>
        <View style={styles.bottomAnalysisHome}>
          <View style={[spacing.spaceBottom_ver_2, spacing.space_ver_1]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
              <View style={[styles.bottomDateAnalysisHome]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("AnalysisHome")}
                >
                  <Text style={[textInput.settingTextAnalysisHome]}>Ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("AnalysisWeek")}>
                  <Text style={[textInput.settingTextAnalysisHome]}>
                    Tuần
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[textInput.settingTextAnalysisHomeActive]}>Tháng</Text>
                </TouchableOpacity>
              </View>
              <View
                style={[styles.bottomWeightAnalysisHome, spacing.space_ver_1]}
              >
                <Text style={typo.textBoldItalic}>Cân nặng</Text>
                <View style={styles.innerAnalysisHomeWeightContainerBox}>
                  <View style={styles.innerAnalysisHomeWeightContainer}>
                    <View style={[spacing.spaceLeft_ver_3, spacing.space_ver_3]}>
                      <Text style={typo.textItalic}>Cân nặng</Text>
                      <Text style={spacing.space_ver_3}>
                        <Text style={typo.headerLightItalic}>{weight} </Text>Kg
                      </Text>
                      <Text style={spacing.space_ver_2}>BMI {BMI}</Text>
                    </View>
                    <View>
                      <LineChart
                        data={{
                          datasets: [
                            {
                              data: [53, 52, 52.5],
                              strokeWidth: 1,
                            },
                          ],
                        }}
                        width={Dimensions.get("window").width - 136}
                        height={100}
                        withVerticalLabels={false}
                        withHorizontalLabels={false}
                        withInnerLines={false}
                        withOuterLines={false}
                        withShadow={false}
                        chartConfig={{
                          backgroundColor: "#FFF",
                          backgroundGradientFrom: "#FFF",
                          backgroundGradientTo: "#FFF",
                          decimalPlaces: 0,
                          color: (opacity = 1) =>
                            `rgba(160, 219, 253, ${opacity})`,
                          style: {
                            borderRadius: 16,
                          },
                          propsForDots: {
                            r: "4",
                            strokeWidth: "0",
                            stroke: "#000",
                          },
                        }}
                        style={{
                          borderRadius: 16,
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[spacing.space_ver_1, spacing.spaceLeft_ver_2]}>
                <Text style={typo.textBoldItalic}>Thống kê của tháng</Text>
              </View>
              <View style={[styles.innerAnalysisHomeCaloriesContainerBoxColumn, {marginTop: 24}]}>
                <View style={styles.innerAnalysisHomeCaloriesBoxColumn}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Image source={Weight} />
                    <Text style={[typo.textBold, colors.primaryColor]}>
                      Cân nặng
                    </Text>
                  </View>
                  <ProgressChart
                    data={progressData}
                    width={Dimensions.get("window").width - 240}
                    height={120}
                    strokeWidth={8}
                    radius={56}
                    chartConfig={{
                      backgroundColor: "#FFF",
                      backgroundGradientFrom: "#FFF",
                      backgroundGradientTo: "#FFF",
                      decimalPlaces: 2,
                      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      color: (opacity = 1) => `rgba(255, 205, 38, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                    }}
                    hideLegend={true}
                    style={{ marginTop: 8 }}
                  />
                  <View style={[styles.innerAnalysisWeekWeight]}>
                    <Text style={[colors.primaryColor, typo.subText]}>Từ 59kg</Text>
                    <Text style={[colors.primaryColor, typo.textBold, spacing.space_ver_3]}>-4 kg</Text>
                    <Text style={[colors.primaryColor, typo.subText, spacing.space_ver_3]}>còn 55kg</Text>
                  </View>
                </View>
                <View style={styles.innerAnalysisHomeCaloriesBoxColumn}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Image source={Weight} />
                    <Text style={[typo.textBold, colors.primaryColor]}>
                      Calories
                    </Text>
                  </View>
                  <ProgressChart
                    data={progressData}
                    width={Dimensions.get("window").width - 240}
                    height={120}
                    strokeWidth={8}
                    radius={56}
                    chartConfig={{
                      backgroundColor: "#FFF",
                      backgroundGradientFrom: "#FFF",
                      backgroundGradientTo: "#FFF",
                      decimalPlaces: 2,
                      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      color: (opacity = 1) => `rgba(255, 140, 57, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                    }}
                    hideLegend={true}
                    style={{ marginTop: 8 }}
                  />
                  <View style={[styles.innerAnalysisWeekWeight]}>
                    <Text style={[colors.primaryColor, typo.subtitle, spacing.space_ver_3]}>30,000</Text>
                    <Text style={[colors.primaryColor, typo.subText]}>kcal</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  };
  
  export default AnalysisMonth;
  