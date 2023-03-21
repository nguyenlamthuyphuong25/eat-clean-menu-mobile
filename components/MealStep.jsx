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
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
import Line from "../assets/Meal_Line.png";

let STORAGE_KEY_USER = "@gmail";

const MealStep = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');
  const [dataUser, setDataUser] = useState();

  const { dishId, userCalories, id } = route.params;

  console.log(id)

  const readUser = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_USER);
      console.log(value);

      if (value !== null) {
        setUser(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  console.log(user)

  const getUser = async () => {
    await axios
      .get(`https://eat-clean-menu-ecm.azurewebsites.net/api/users/${user}`)
      .then(function (response) {
        console.log(response.data.data);
        setDataUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getIncredient = async () => {
    await axios
      .get(
        `https://eat-clean-menu-ecm.azurewebsites.net/api/dishes/${dishId}/recipes`
      )
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postIncre = async () =>
    axios
      .post(`https://eat-clean-menu-ecm.azurewebsites.net/api/user-dietary-tracking/${dataUser.id}/user-calories`, {
        userCalories: userCalories,
        menuDishId: id
      })
      .then(function (response) {
        console.log(response)
        navigation.navigate("DailyMenu");
      })
      .catch(function (error) {
        console.log(error);
      });

  useEffect(() => {
    getIncredient();
    readUser();
  }, []);

  useEffect(() => {
    getUser();
  }, [user]);

  console.log(moment());

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Cậu đợi bọn tớ xíu nhé</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.containerMargin, { backgroundColor: "#F9F9F9" }]}>
        <View style={styles.headerMeal}>
          <TouchableOpacity
            onPress={() => navigation.goBack(-1)}
            style={{ width: "32%" }}
          >
            <Image source={BackBtn} />
          </TouchableOpacity>
          <Text style={[typo.subtitleLight, colors.primaryColor]}>
            Hướng dẫn
          </Text>
        </View>
        <View style={styles.innerMeal}>
          <Image style={img.imgMeal} source={Dish1} />
        </View>
        <View style={styles.bottomMeal}>
          <Text style={[typo.subtitleItalic, spacing.space_ver_2]}>
            Hướng dẫn
          </Text>
          {/* <View style={styles.innerBottomMealStepContainer}>
          <TouchableOpacity
            style={[button.mealStepButtonActive, spacing.spaceRight_ver_1]}
          >
            <Text>01</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[button.mealStepButton, spacing.spaceRight_ver_1]}
          >
            <Text>02</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[button.mealStepButton, spacing.spaceRight_ver_1]}
          >
            <Text>03</Text>
          </TouchableOpacity>
          <TouchableOpacity style={button.mealStepButton}>
            <Text>04</Text>
          </TouchableOpacity>
        </View> */}
          <View
            style={[
              styles.innerBottomMealContainerFlex,
              spacing.spaceBottom_ver_1,
            ]}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {data.map((item) => {
                return (
                  <View>
                    <Text style={[typo.textBoldItalic]}>
                      Bước {item.stepNo}:
                    </Text>
                    <Text style={[spacing.spaceBottom_ver_3]}>
                      {item.description}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
            <View style={[styles.innerBottomMealButton, spacing.space_ver_1]}>
              <TouchableOpacity
                style={[button.mealStepLeftButton, spacing.spaceRight_ver_2]}
              >
                <Text style={[typo.textBold, colors.wColor]}>Quay lại</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={postIncre} style={button.mealStepRightButton}>
                <Text style={[typo.textBold, colors.wColor]}>Hoàn thành</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default MealStep;
