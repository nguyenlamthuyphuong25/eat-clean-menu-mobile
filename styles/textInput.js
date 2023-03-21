import { StyleSheet } from "react-native";
const textInput = StyleSheet.create({
  inforTextInput: {
    borderWidth: 1,
    borderStyle: "solid",
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderColor: '#E2E2E2',
    marginTop: 8,
    flexDirection: "row",
  },
  settingText: {
    textAlign: "center",
  },
  settingTextAnalysisGroup: {
    flexDirection: "column",
    backgroundColor: '#24B445',
    width: '100%',
    padding: 16,
    borderRadius: 8
  },
  settingTextAnalysis: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  settingTextAnalysisBMRGroup: {
    flexDirection: "column",
    width: '100%',
    borderRadius: 8
  },

  settingTextPaymentGroup: {
    flexDirection: "column",
    backgroundColor: '#E1FFED',
    width: '100%',
    padding: 12,
    borderRadius: 16
  },

  settingTextPaymentGroupActive: {
    flexDirection: "column",
    backgroundColor: '#A1F5C3',
    width: '100%',
    padding: 12,
    borderRadius: 16
  },
  
  settingTextPayment: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingTextPaymentBMRGroup: {
    flexDirection: "column",
    width: '100%',
    borderRadius: 8
  },

  subtextPayment: {
    width: '88%'
  },
  textPaymentLeft: {
    width: '56%',
    textAlign: "left"
  },
  textPaymentRight: {
    width: '44%',
    textAlign: "right"
  },
  settingTextPaymentOneMonth: {
    alignItems: 'flex-end',
  },

  settingTextNoti: {
  },

  settingTextNotiActive: {
    borderBottomColor: '#24B445',
    borderBottomWidth: 1,
  },

  settingTextAnalysisHomeActive: {
    backgroundColor: '#24B445',
    color: '#FFF',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 36,
    paddingRight: 36,
    borderRadius: 4
  },
  settingTextAnalysisHome: {
    color: '#FFF',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 36,
    paddingRight: 36,
  },
});
export default textInput;
