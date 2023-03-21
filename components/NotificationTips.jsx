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

const NotificationTips = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.containerMargin, { backgroundColor: "#F9F9F9" }]}>
      <View style={styles.headerNoti}>
        <TouchableOpacity onPress={() => navigation.goBack(-1)}>
          <Image source={BackBtn} />
        </TouchableOpacity>
        <Text style={[typo.subtitleLight, colors.primaryColor]}>Thông báo</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DailyMenu")}>
          <Image source={HomeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.subHeaderNoti}>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Text
            style={[
              typo.text,
              spacing.padRight_ver_2,
              spacing.padLeft_ver_2,
              spacing.padBottom_ver_3,
              {color: 'rgba(36, 180, 69, 0.5)'}
            ]}
          >
            Nhắc nhở
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[textInput.settingTextNotiActive]}>
          <Text
            style={[
              typo.textBold,
              spacing.padRight_ver_2,
              spacing.padLeft_ver_2,
              spacing.padBottom_ver_3,
              colors.primaryColor
            ]}
          >
            Mẹo vặt
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerNoti}>
        <TouchableOpacity style={styles.innerNotiInfo} onPress={() => navigation.navigate('Tips')}>
          <Image
            style={[spacing.padLeft_ver_3, spacing.padRight_ver_3]}
            source={Noti}
          />
          <View style={styles.innerNotiInfoText}>
            <Text style={typo.subTextBold}>
              Để các đồ ăn vặt không lành mạnh xa khỏi tầm mắt
            </Text>
            <Text style={typo.subText}>
              Đây là mẹo cực hiệu quả cho các bạn eat clean ở nhà...
            </Text>
          </View>
          <Text style={typo.subText}>Xem thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerNotiInfo} onPress={() => navigation.navigate('Tips')}>
          <Image
            style={[spacing.padLeft_ver_3, spacing.padRight_ver_3]}
            source={Noti}
          />
          <View style={styles.innerNotiInfoText}>
            <Text style={[typo.subTextBold]}>
              Để các đồ ăn vặt không lành mạnh xa khỏi tầm mắt
            </Text>
            <Text style={typo.subText}>
              Đây là mẹo cực hiệu quả cho các bạn eat clean ở nhà...
            </Text>
          </View>
          <Text style={typo.subText}>Xem thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerNotiInfo} onPress={() => navigation.navigate('Tips')}>
          <Image
            style={[spacing.padLeft_ver_3, spacing.padRight_ver_3]}
            source={Noti}
          />
          <View style={styles.innerNotiInfoText}>
            <Text style={typo.subTextBold}>
              Để các đồ ăn vặt không lành mạnh xa khỏi tầm mắt
            </Text>
            <Text style={typo.subText}>
              Đây là mẹo cực hiệu quả cho các bạn eat clean ở nhà...
            </Text>
          </View>
          <Text style={typo.subText}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationTips;
