//lib
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import "moment/locale/vi";
import * as Progress from "react-native-progress";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import textInput from "../styles/textInput";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import img from "../styles/img";
import button from "../styles/button";
//image
import BackBtn from "../assets/Button_back.png";
import Dish1 from "../assets/Dish_1.png";
import HomeIcon from "../assets/Home.png";
import Noti from "../assets/Noti.png";
import Tip from "../assets/Tips.png";

const Tips = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.containerMargin]}>
      <View style={styles.headerNoti}>
        <TouchableOpacity onPress={() => navigation.goBack(-1)}>
          <Image source={BackBtn} />
        </TouchableOpacity>
        <Text style={[typo.subtitleLight, colors.primaryColor]}>Mẹo vặt</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DailyMenu")}>
          <Image source={HomeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.innerTipsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subHeaderTips}>
            <Image style={img.imgMeal} source={Tip} />
          </View>
          <View style={styles.innerTips}>
            <Text style={[typo.textBold, spacing.spaceBottom_ver_3]}>
              Để các đồ ăn vặt không lành mạnh xa khỏi tầm mắt
            </Text>
            <Text style={[typo.subTextBold, spacing.spaceBottom_ver_3]}>
              Mẹo vặt
            </Text>
            <Text style={[typo.subText, spacing.spaceBottom_ver_3]}>
              20 - 10 - 2022
            </Text>
            <Text style={[typo.text]}>
              Đây là mẹo cực hiệu quả cho các bạn eat clean ở nhà, đặc biệt
              trong mùa dịch này. Hãy để các loại đồ ăn vặt ra khỏi tầm mắt của
              bạn. Tốt nhất là ĐỪNG MUA đồ ăn không lành mạnh về và chất trong
              tủ. Thay vào đó, hãy mua hoặc tự làm các loại snack tốt cho sức
              khỏe như: hạt (hạnh nhân, hạt điều, óc chó, hạt dẻ,…), bánh kẹo
              healthy, hoa quả theo mùa. Đây là mẹo cực hiệu quả cho các bạn eat
              clean ở nhà, đặc biệt trong mùa dịch này. Hãy để các loại đồ ăn
              vặt ra khỏi tầm mắt của bạn. Tốt nhất là ĐỪNG MUA đồ ăn không lành
              mạnh về và chất trong tủ. Thay vào đó, hãy mua hoặc tự làm các
              loại snack tốt cho sức khỏe như: hạt (hạnh nhân, hạt điều, óc chó,
              hạt dẻ,…), bánh kẹo healthy, hoa quả theo mùa. Đây là mẹo cực hiệu
              quả cho các bạn eat clean ở nhà, đặc biệt trong mùa dịch này. Hãy
              để các loại đồ ăn vặt ra khỏi tầm mắt của bạn. Tốt nhất là ĐỪNG
              MUA đồ ăn không lành mạnh về và chất trong tủ. Thay vào đó, hãy
              mua hoặc tự làm các loại snack tốt cho sức khỏe như: hạt (hạnh
              nhân, hạt điều, óc chó, hạt dẻ,…), bánh kẹo healthy, hoa quả theo
              mùa. Đây là mẹo cực hiệu quả cho các bạn eat clean ở nhà, đặc biệt
              trong mùa dịch này. Hãy để các loại đồ ăn vặt ra khỏi tầm mắt của
              bạn. Tốt nhất là ĐỪNG MUA đồ ăn không lành mạnh về và chất trong
              tủ. Thay vào đó, hãy mua hoặc tự làm các loại snack tốt cho sức
              khỏe như: hạt (hạnh nhân, hạt điều, óc chó, hạt dẻ,…), bánh kẹo
              healthy, hoa quả theo mùa.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Tips;
