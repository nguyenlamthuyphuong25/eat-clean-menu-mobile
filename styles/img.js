import { StyleSheet } from "react-native";
const img = StyleSheet.create({
  imgInfor: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  imgIcon: {
    width: 320,
    height: 320,
    borderRadius: 100,
  },
  imgIconSmall: {
    width: 72,
    height: 72,
    borderRadius: 100,
  },

  imgInforIcon: {
    marginLeft: 8,
    marginRight: 16,
  },
  imgInforEditIcon: {
    position: "absolute",
    zIndex: 999,
    left: '8%',
  },
  imgDailyAva: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },

  imgAnalysisHomeContainer: {
    padding: 8,
    borderColor: '#24B445',
    borderWidth: 2,
    borderRadius: 100,
  },

  imgAnalysisHome: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  imgDish: {
    width: 178,
    height: 178,
    borderRadius: 100,
    marginLeft: '56%',
    marginBottom: '-32%',
  },

  imgMeal: {
    width: '100%',
    height: 200,
    resizeMode: "stretch",
  },

});
export default img;
