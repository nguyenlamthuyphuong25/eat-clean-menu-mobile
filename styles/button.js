import { StyleSheet } from "react-native";
const colors = StyleSheet.create({
  nextButton: {
    backgroundColor: '#F6F7F7',
    borderRadius: 25,
    textTransform: "lowercase",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  inforButton: {
    backgroundColor: '#24B445',
    width: '100%',
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginTop: 32
  },
  settingButton: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 24,
    borderRadius: 12,
  },
  settingButtonActive: {
    backgroundColor: '#A1F5C3',
    width: '100%',
    padding: 24,
    borderRadius: 12,
  },

  settingBackButton: {
    position: "absolute",
    top: '-12%',
    left: 0
  },
  settingAnalysisButton: {
    backgroundColor: '#276047',
    width: '100%',
    padding: 24,
    borderRadius: 12,
    marginTop: 40
  },
  settingPaymentButton: {
    backgroundColor: '#276047',
    width: '100%',
    padding: 24,
    borderRadius: 12,
    marginTop: 24
  },
  settingPaymentButtonInactive: {
    backgroundColor: 'rgba(39, 96, 71, 0.3)',
    width: '100%',
    padding: 24,
    borderRadius: 12,
    marginTop: 24
  },

  mealStepButton: {
    padding: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000'
  },

  mealStepButtonActive: {
    padding: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#24B445',
  },

  mealStepLeftButton: {
    backgroundColor: 'rgba(36, 180, 69, 0.5)',
    width: '40%',
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  mealStepRightButton: {
    backgroundColor: '#24B445',
    width: '60%',
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },

  HomeInformationButton: {
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#FFF',
    marginTop: 24, 
    marginBottom: 32
  },

  EditInformationButton: {
    backgroundColor: 'rgba(36, 180, 69, 0.8)',
    width: '86%',
    padding: 16,
    borderRadius: 12,
    marginTop: 40
  },

  InputNewWeight: {
    backgroundColor: 'rgba(36, 180, 69, 0.8)',
    width: '96%',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    alignSelf: "center"
  },

  updateInputNewWeight: {
    backgroundColor: 'rgba(36, 180, 69, 1)',
    width: '32%',
    padding: 8,
    borderRadius: 24,
    margin: 16,
    marginTop: 32,
    alignSelf: "center",
  },
});
export default colors;
