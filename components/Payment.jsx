//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
import img from "../styles/img";
import textInput from "../styles/textInput";
//image
import Pic from "../assets/Analysis.png";
import Line from "../assets/Payment_line.png";

const Payment = () => {
  const navigation = useNavigation();
  const [activeOneMonth, setActiveOneMonth] = useState(false);
  const [activeThreeMonth, setActiveThreeMonth] = useState(false);
  const [activeTwelveMonth, setActiveTwelveMonth] = useState(false);

  const handleChangeOneMonth = () => {
    setActiveOneMonth(!activeOneMonth);
    setActiveThreeMonth(false);
    setActiveTwelveMonth(false);
    console.log(activeOneMonth);
  };

  const handleChangeThreeMonth = () => {
    setActiveOneMonth(false);
    setActiveThreeMonth(!activeThreeMonth);
    setActiveTwelveMonth(false);
  };

  const handleChangeTwelveMonth = () => {
    setActiveOneMonth(false);
    setActiveThreeMonth(false);
    setActiveTwelveMonth(!activeTwelveMonth);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerPayment}>
        <Image source={Pic} />
      </View>
      <View style={styles.innerPayment}>
        <TouchableOpacity>
          <Image source={Line} />
        </TouchableOpacity>
        <Text
          style={[
            typo.subtitle,
            textInput.settingText,
            spacing.space_ver_1,
            colors.wColor,
          ]}
        >
          Kế hoạch cá nhân hóa của bạn đã sẵn sàng
        </Text>
        <Text
          style={[
            typo.subText,
            textInput.settingText,
            colors.wColor,
            spacing.space_ver_3,
            textInput.subtextPayment,
          ]}
        >
          99% người sử dụng ECM gợi ý bạn nên nâng cấp gói sử dụng để đạt được
          trải nghiệm tốt nhất!
        </Text>
        {activeOneMonth ? (
          <TouchableOpacity
            onPress={handleChangeOneMonth}
            style={[
              textInput.settingTextPaymentGroupActive,
              spacing.space_ver_2,
            ]}
          >
            <View style={textInput.settingTextPayment}>
              <Text style={typo.text}>1 tháng</Text>
              <View style={textInput.settingTextPaymentOneMonth}>
                <Text style={[typo.text, textInput.settingText]}>
                  69.000 VNĐ
                </Text>
                <Text style={[typo.subText, textInput.settingText]}>
                  Chi trả mỗi tháng
                </Text>
                <Text style={[typo.subText, textInput.settingText]}>
                  Hủy bất kỳ lúc nào
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleChangeOneMonth}
            style={[textInput.settingTextPaymentGroup, spacing.space_ver_2]}
          >
            <View style={textInput.settingTextPayment}>
              <Text style={typo.text}>1 tháng</Text>
              <View style={textInput.settingTextPaymentOneMonth}>
                <Text style={[typo.text, textInput.settingText]}>
                  69.000 VNĐ
                </Text>
                <Text style={[typo.subText, textInput.settingText]}>
                  Chi trả mỗi tháng
                </Text>
                <Text style={[typo.subText, textInput.settingText]}>
                  Hủy bất kỳ lúc nào
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        {activeThreeMonth ? (
          <TouchableOpacity
            onPress={handleChangeThreeMonth}
            style={[
              textInput.settingTextPaymentGroupActive,
              spacing.space_ver_2,
            ]}
          >
            <View style={textInput.settingTextPayment}>
              <Text style={[typo.text, textInput.settingText]}>3 tháng</Text>
              <Text style={[typo.text, textInput.settingText]}>
                119.000 VNĐ
              </Text>
            </View>
            <View style={textInput.settingTextPayment}>
              <Text style={[typo.subText, textInput.textPaymentLeft]}>
                Chỉ với ~39.000 VNĐ/ tháng
              </Text>
              <Text style={[typo.subText, textInput.textPaymentRight]}>
                Chi trả mỗi 3 tháng. Hủy bất kỳ lúc nào.
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleChangeThreeMonth}
            style={[textInput.settingTextPaymentGroup, spacing.space_ver_2]}
          >
            <View style={textInput.settingTextPayment}>
              <Text style={[typo.text, textInput.settingText]}>3 tháng</Text>
              <Text style={[typo.text, textInput.settingText]}>
                119.000 VNĐ
              </Text>
            </View>
            <View style={textInput.settingTextPayment}>
              <Text style={[typo.subText, textInput.textPaymentLeft]}>
                Chỉ với ~39.000 VNĐ/ tháng
              </Text>
              <Text style={[typo.subText, textInput.textPaymentRight]}>
                Chi trả mỗi 3 tháng. Hủy bất kỳ lúc nào.
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {activeTwelveMonth ? (
          <TouchableOpacity
            onPress={handleChangeTwelveMonth}
            style={[
              textInput.settingTextPaymentGroupActive,
              spacing.space_ver_2,
            ]}
          >
            <View style={textInput.settingTextPayment}>
              <Text style={[typo.text, textInput.settingText]}>12 tháng</Text>
              <Text style={[typo.text, textInput.settingText]}>
                199.000 VNĐ
              </Text>
            </View>
            <View style={textInput.settingTextPayment}>
              <Text style={[typo.subText, textInput.textPaymentLeft]}>
                Chỉ với ~17.000 VNĐ/ tháng
              </Text>
              <Text style={[typo.subText, textInput.textPaymentRight]}>
                Chi trả mỗi 12 tháng.{"\n"} Hủy bất kỳ lúc nào.
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleChangeTwelveMonth}
            style={[textInput.settingTextPaymentGroup, spacing.space_ver_2]}
          >
            <View style={textInput.settingTextPayment}>
              <Text style={[typo.text, textInput.settingText]}>12 tháng</Text>
              <Text style={[typo.text, textInput.settingText]}>
                199.000 VNĐ
              </Text>
            </View>
            <View style={textInput.settingTextPayment}>
              <Text style={[typo.subText, textInput.textPaymentLeft]}>
                Chỉ với ~17.000 VNĐ/ tháng
              </Text>
              <Text style={[typo.subText, textInput.textPaymentRight]}>
                Chi trả mỗi 12 tháng.{"\n"} Hủy bất kỳ lúc nào.
              </Text>
            </View>
          </TouchableOpacity>
        )}

        <Text
          style={[
            typo.subText,
            textInput.settingText,
            colors.wColor,
            spacing.space_ver_2,
          ]}
        >
          Bằng cách tiếp tục, bạn đồng ý với các{" "}
          <Text style={typo.subTextBold}> Điều khoản và Điều kiện</Text>
        </Text>
        {activeOneMonth || activeThreeMonth || activeTwelveMonth ? (
          <TouchableOpacity onPress={() => navigation.navigate('DailyMenu')} style={button.settingPaymentButton}>
            <Text style={[typo.textBold, textInput.settingText, colors.wColor]}>
              Tiếp tục
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled style={button.settingPaymentButtonInactive}>
            <Text style={[typo.textBold, textInput.settingText, colors.wColor]}>
              Chọn gói để tiếp tục
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Payment;
