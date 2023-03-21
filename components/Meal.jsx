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

const Meal = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState();
  const [dataName, setDataName] = useState("");
  const [calories, setCalories] = useState(0);

  const { dishId, id } = route.params;
  console.log(id);

  const getIncredient = async () => {
    await axios
      .get(
        `https://eat-clean-menu-ecm.azurewebsites.net/api/dishes/${dishId}/ingredients`
      )
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getName = async () => {
    await axios
      .get(`https://eat-clean-menu-ecm.azurewebsites.net/api/dishes/${dishId}`)
      .then(function (response) {
        console.log(response.data.data.name);
        setDataName(response.data.data.name);
        setCalories(response.data.data.calories);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getIncredient(), getName();
  }, []);

  if (data !== undefined) {
    console.log(
      data.Ingredient.map((item) => {
        return item.name;
      })
    );
  }

  if (data !== undefined) {
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
            Bữa sáng
          </Text>
        </View>
        <View style={styles.innerMeal}>
          <Image style={img.imgMeal} source={Dish1} />
        </View>
        <View style={styles.bottomMeal}>
          <Text
            style={[
              typo.subtitleItalic,
              spacing.space_ver_2,
              spacing.spaceBottom_ver_2,
            ]}
          >
            {dataName}
          </Text>
          <Image source={Line} />
          <View style={styles.innerBottomMealContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={[typo.textBoldItalic, spacing.spaceBottom_ver_3]}>
                Thành phần
              </Text>
              <View style={styles.innerBottomMeal}>
                <View style={{ width: "40%" }}>
                  {data.Ingredient.map((item) => {
                    return <Text style={spacing.spaceBottom_ver_3}>{item.name}</Text>
                  })}
                </View>
                <View style={{ width: "40%", alignItems: "flex-end" }}>
                {data.Ingredient.map((item) => {
                    return <Text style={spacing.spaceBottom_ver_3}>{item.quantity}</Text>
                  })}
                </View>
              </View>
              <Text
                style={[
                  typo.textBoldItalic,
                  spacing.space_ver_2,
                  spacing.spaceBottom_ver_3,
                ]}
              >
                Gia vị
              </Text>
              <View>
                <Text style={spacing.spaceBottom_ver_3}>Không có</Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MealStep", { dishId: dishId, userCalories: calories, id: id })
              }
              style={button.inforButton}
            >
              <Text style={[typo.textBold, colors.wColor]}>Bắt đầu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    ("Cậu đợi bọn tớ xíu nhé");
  }
};

export default Meal;
