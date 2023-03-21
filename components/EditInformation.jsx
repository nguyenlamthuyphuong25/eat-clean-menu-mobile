//lib
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
import img from "../styles/img";
import textInput from "../styles/textInput";

//img
import BackBtn from "../assets/Button_back.png";
import Dropdown from "../assets/Dropdown.png";
import Calendar from "../assets/Calendar.png";

let STORAGE_KEY_G = "@gender";

const EditInformation = () => {
  const navigation = useNavigation();
  const genderArray = ["Nam", "Nữ", "Khác"];
  const [gender, setGender] = useState("");
  const [name, setName] = useState("Huỳnh Lê Thủy Tiên");
  const [email, setEmail] = useState("tien.huynhlt.tn@gmail.com");
  const [phone, setPhone] = useState("0849666957");
  const [address, setAddress] = useState("27 Long Tân, Long Thành Bắc");
  const [province, setProvince] = useState([]);
  const [provinceSelected, setProvinceSelected] = useState("");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const readGender = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_G);
      console.log(value);

      if (value !== null) {
        setGender(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  let dateISO =
    dateTime.getDate() +
    " - " +
    parseInt(dateTime.getMonth() + 1) +
    " - " +
    dateTime.getFullYear();

  console.log(dateISO);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateTime(date);
    hideDatePicker();
  };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        "https://provinces.open-api.vn/api/?depth=2"
      );
      setProvince(response.data.map((item) => item.name));
      provinceSelected !== ""
        ? setDistricts(
            response.data[provinceSelected].districts.map((item) => item.name)
          )
        : undefined;
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    readGender();
  }, []);

  useEffect(() => {
    getDataUsingAsyncAwaitGetCall();
  }, [provinceSelected]);

  return (
    <View style={[styles.containerMargin, { backgroundColor: "#FFF" }]}>
      <View style={styles.headerEditInformation}>
        <View style={styles.subHeaderEditInformation}>
          <TouchableOpacity onPress={() => navigation.goBack(-1)}>
            <Image source={BackBtn} />
          </TouchableOpacity>
          <Text style={[colors.primaryColor, typo.textBold]}>
            Chỉnh sửa thông tin cá nhân
          </Text>
        </View>
      </View>
      <View style={[styles.innerEditInformation]}>
        <View style={[styles.innerEditInformationInput]}>
          <Text style={[typo.subText, { color: "#757575" }]}>Họ tên</Text>
          <TextInput
            style={[styles.innerEditInformationTextInput]}
            onChangeText={setName}
            value={name}
          />
        </View>
        <View style={[styles.innerEditInformationInput]}>
          <Text style={[typo.subText, { color: "#757575" }]}>Giới tính</Text>
          <SelectDropdown
            statusBarTranslucent={true}
            buttonStyle={{
              width: "96%",
              backgroundColor: "rgba(36, 180, 69, 0.2)",
              borderRadius: 8,
              height: 40,
            }}
            buttonTextStyle={{ textAlign: "left", fontSize: 14 }}
            dropdownStyle={{
              textAlign: "left",
              borderBottomEndRadius: 8,
              borderBottomLeftRadius: 8,
              borderColor: "#FFF",
            }}
            rowTextStyle={{ textAlign: "left", fontSize: 14, padding: 0 }}
            selectedRowStyle={{ backgroundColor: "rgba(36, 180, 69, 0.2)" }}
            data={genderArray}
            renderDropdownIcon={() => <Image source={Dropdown} />}
            dropdownIconPosition="right"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={gender}
          />
        </View>
        <View style={[styles.innerEditInformationInput]}>
          <Text style={[typo.subText, { color: "#757575" }]}>Ngày sinh</Text>
          <View style={[styles.innerEditInformationInputCalendar]}>
            <Text>{dateISO}</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <Image source={Calendar} />
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View style={[styles.innerEditInformationInput]}>
          <Text style={[typo.subText, { color: "#757575" }]}>Email</Text>
          <TextInput
            style={[styles.innerEditInformationTextInput]}
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={[styles.innerEditInformationInput]}>
          <Text style={[typo.subText, { color: "#757575" }]}>
            Số điện thoại
          </Text>
          <TextInput
            style={[styles.innerEditInformationTextInput]}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={setPhone}
            value={phone}
          />
        </View>
        <View style={[styles.innerEditInformationInputProDis]}>
          <View style={{ width: "49%" }}>
            <Text style={[typo.subText, { color: "#757575" }]}>
              Tỉnh/Thành phố
            </Text>
            <SelectDropdown
              statusBarTranslucent={true}
              buttonStyle={{
                width: "96%",
                backgroundColor: "rgba(36, 180, 69, 0.2)",
                borderRadius: 8,
                height: 40,
              }}
              buttonTextStyle={{ textAlign: "left", fontSize: 14 }}
              dropdownStyle={{
                textAlign: "left",
                borderBottomEndRadius: 8,
                borderBottomLeftRadius: 8,
                borderTopEndRadius: 8,
                borderTopLeftRadius: 8,
                borderColor: "#FFF",
              }}
              rowTextStyle={{ textAlign: "left", fontSize: 14, padding: 0 }}
              selectedRowStyle={{ backgroundColor: "rgba(36, 180, 69, 0.2)" }}
              renderDropdownIcon={() => <Image source={Dropdown} />}
              dropdownIconPosition="right"
              data={province}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setProvince(selectedItem);
                setProvinceSelected(index);
              }}
              defaultButtonText="Chọn tỉnh thành"
            />
          </View>
          <View style={{ width: "49%" }}>
            <Text style={[typo.subText, { color: "#757575" }]}>Quận/Huyện</Text>
            {provinceSelected !== "" ? (
              <SelectDropdown
                statusBarTranslucent={true}
                buttonStyle={{
                  width: "96%",
                  backgroundColor: "rgba(36, 180, 69, 0.2)",
                  borderRadius: 8,
                  height: 40,
                }}
                buttonTextStyle={{ textAlign: "left", fontSize: 14 }}
                dropdownStyle={{
                  textAlign: "left",
                  borderBottomEndRadius: 8,
                  borderBottomLeftRadius: 8,
                  borderTopEndRadius: 8,
                  borderTopLeftRadius: 8,
                  borderColor: "#FFF",
                }}
                rowTextStyle={{ textAlign: "left", fontSize: 14, padding: 0 }}
                selectedRowStyle={{ backgroundColor: "rgba(36, 180, 69, 0.2)" }}
                renderDropdownIcon={() => <Image source={Dropdown} />}
                dropdownIconPosition="right"
                data={districts}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText="Chọn quận"
              />
            ) : (
              <SelectDropdown
                statusBarTranslucent={true}
                buttonStyle={{
                  width: "96%",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  borderRadius: 8,
                  height: 40,
                }}
                buttonTextStyle={{
                  textAlign: "left",
                  fontSize: 14,
                  color: "rgba(0, 0, 0, 0.4)",
                }}
                dropdownStyle={{
                  textAlign: "left",
                  borderBottomEndRadius: 8,
                  borderBottomLeftRadius: 8,
                  borderTopEndRadius: 8,
                  borderTopLeftRadius: 8,
                  borderColor: "#FFF",
                }}
                rowTextStyle={{ textAlign: "left", fontSize: 14, padding: 0 }}
                selectedRowStyle={{ backgroundColor: "rgba(36, 180, 69, 0.2)" }}
                renderDropdownIcon={() => <Image source={Dropdown} />}
                dropdownIconPosition="right"
                data={districts}
                onSelect={(selectedItem, index) => {
                  setDistrict(selectedItem);
                }}
                defaultButtonText="Chọn quận"
                disabled
              />
            )}
          </View>
        </View>
        <View style={[styles.innerEditInformationInput]}>
          <Text style={[typo.subText, { color: "#757575" }]}>Địa chỉ</Text>
          <TextInput
            style={[styles.innerEditInformationTextInput]}
            onChangeText={setAddress}
            value={address}
          />
        </View>
        <TouchableOpacity style={button.EditInformationButton}>
          <Text style={[textInput.settingText, typo.textBold, colors.wColor]}>CẬP NHẬT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditInformation;
