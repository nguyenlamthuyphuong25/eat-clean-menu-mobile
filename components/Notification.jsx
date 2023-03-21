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

const Notification = () => {
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
            Nhắc nhở
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationTips")}
          style={[textInput.settingTextNoti]}
        >
          <Text
            style={[
              typo.text,
              spacing.padRight_ver_2,
              spacing.padLeft_ver_2,
              spacing.padBottom_ver_3,
              {color: 'rgba(36, 180, 69, 0.5)'}
            ]}
          >
            Mẹo vặt
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerNoti}>
        <TouchableOpacity style={styles.innerNotiInfo}>
          <Image
            style={[spacing.padRight_ver_3]}
            source={Noti}
          />
          <View style={styles.innerNotiInfoText}>
            <Text style={typo.subTextBold}>Nhắc nhở nấu ăn buổi tối</Text>
            <Text style={typo.subText}>
              Bạn ơi, nhớ nấu ăn đúng giờ nhé. Cố gắng để có 1 cơ thể khỏe mạnh
              nào.
            </Text>
          </View>
          <Text style={typo.subTextBold}>1 phút trước</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerNotiInfo}>
          <Image
            style={[spacing.padRight_ver_3]}
            source={Noti}
          />
          <View style={styles.innerNotiInfoText}>
            <Text style={typo.subTextBold}>Nhắc nhở nấu ăn buổi tối</Text>
            <Text style={typo.subText}>
              Bạn ơi, nhớ nấu ăn đúng giờ nhé. Cố gắng để có 1 cơ thể khỏe mạnh
              nào.
            </Text>
          </View>
          <Text style={typo.subTextBold}>1 phút trước</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerNotiInfo}>
          <Image
            style={[spacing.padRight_ver_3]}
            source={Noti}
          />
          <View style={styles.innerNotiInfoText}>
            <Text style={typo.subTextBold}>Nhắc nhở nấu ăn buổi tối</Text>
            <Text style={typo.subText}>
              Bạn ơi, nhớ nấu ăn đúng giờ nhé. Cố gắng để có 1 cơ thể khỏe mạnh
              nào.
            </Text>
          </View>
          <Text style={typo.subTextBold}>1 phút trước</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notification;
