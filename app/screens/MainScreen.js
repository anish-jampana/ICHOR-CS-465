import { Formik, Field, Form } from "formik";
import React, { useState, useEffect} from "react";
import {
  Button,
  Text,
  Switch,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";

import Slider from '@react-native-community/slider';

import Checkbox from 'expo-checkbox';

import { BarChart } from "react-native-chart-kit";

export default function MainScreen({ navigation }) {
  let MainScreenJSON = require("../assets/main-screen.json");
  let stringData = JSON.stringify(MainScreenJSON);
  const data = JSON.parse(stringData);
  const [biomarkers, setBiomarkers] = useState(data);

  function handleChangeBiomarkers(biomarker) {
    let biomarkersCopy = biomarkers;
    let objects = Object.entries(biomarker);

    if (
      objects[objects.length-1][0] == "showAll" &&
      objects[objects.length-1][1] == true
    ) {
      Object.entries(biomarkersCopy).map(
        ([key, value]) => (biomarkersCopy[key]["display"] = true)
      );
      setBiomarkers({ ...biomarkersCopy });
      return;
    } else {

      Object.entries(biomarkersCopy).map(([key, value]) => {
        if (key != "showAll") {
          biomarkersCopy[key]["display"] = false;
        }
      });

      Object.entries(biomarker).map(([key, value]) => {
        if (key != "showAll") {
          biomarkersCopy[key]["display"] = value;
        }
      });

      setBiomarkers({ ...biomarkersCopy });
    }


  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
        <View style={styles.horizontal}>
          <Filter
            biomarkers={biomarkers}
            handleChangeBiomarkers={(biomarker) =>
              handleChangeBiomarkers(biomarker)
            }
            defaultAllBiomarkers={() =>
              defaultAllBiomarkers()
            }
          />
          <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/white-profile-icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Import")}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/white-import-icon.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scroll_view}>
        {Object.entries(biomarkers).map(([key, value]) => {
          return (
            value["display"] && (
              <View style={styles.card_element}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <Text style={styles.text_content}>{value.name}</Text>
                  <Info>{value.info}</Info>
                </View>
                <View style={styles.center}>
                  <MyStackedBarChart />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Graph")}
                  >
                    <Image
                      style={styles.moretinyLogo}
                      source={require("../assets/graph-icon.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const CheckBox = ({ children, value, handleChange }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
      >
        <Checkbox
          type={"checkbox"}
          value={value}
          onValueChange={handleChange}
          //   {...props}
        />
        <Text>  </Text>
        <Text>{children}</Text>
      </View>
    </View>
  );
};

var Filter = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [sliderValue, setSliderValue] = useState(1);
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalView}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.modalText}>FILTERING OPTIONS</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 10,
              }}
            >
              <Formik
                initialValues={{
                  A: false,
                  C: false,
                  D: false,
                  E: false,
                  K: false,
                  Calcium: false,
                  Magnesium: false,
                  showAll: false,
                }}
                onSubmit={(values, { resetForm }) => {
                  setModalVisible(!modalVisible);
                  props.handleChangeBiomarkers(values);
                }}
              >
                {({ handleChange, handleSubmit, values, setFieldValue }) => (
                  <View>
                    <View
                      style={{
                        borderColor: "black",
                        borderWidth: 1,
                        padding: 10,
                      }}
                    >
                      <CheckBox
                        value={values?.A}
                        handleChange={(nextValue) =>
                          setFieldValue("A", nextValue)
                        }
                      >
                        Vitamin A
                      </CheckBox>
                      <CheckBox
                        value={values?.C}
                        handleChange={(nextValue) =>
                          setFieldValue("C", nextValue)
                        }
                      >
                        Vitamin C
                      </CheckBox>
                      <CheckBox
                        value={values?.D}
                        handleChange={(nextValue) =>
                          setFieldValue("D", nextValue)
                        }
                      >
                        Vitamin D
                      </CheckBox>
                      <CheckBox
                        value={values?.E}
                        handleChange={(nextValue) =>
                          setFieldValue("E", nextValue)
                        }
                      >
                        Vitamin E
                      </CheckBox>
                      <CheckBox
                        value={values?.K}
                        handleChange={(nextValue) =>
                          setFieldValue("K", nextValue)
                        }
                      >
                        Vitamin K
                      </CheckBox>
                      <CheckBox
                        value={values?.Calcium}
                        handleChange={(nextValue) =>
                          setFieldValue("Calcium", nextValue)
                        }
                      >
                        Calcium
                      </CheckBox>
                      <CheckBox
                        value={values?.Magnesium}
                        handleChange={(nextValue) =>
                          setFieldValue("Magnesium", nextValue)
                        }
                      >
                        Magnesium
                      </CheckBox>
                      <CheckBox
                        value={values?.showAll}
                        handleChange={(nextValue) =>
                          setFieldValue("showAll", nextValue)
                        }
                      >
                        Show All Biomarkers
                      </CheckBox>
                    </View>
                    <CheckBox
                    >
                      Sort by Abnormal Levels
                    </CheckBox>
                    <Slider
                      style={{ width: 200, height: 40 }}
                      minimumValue={1}
                      maximumValue={12}
                      step={1}
                      value={sliderValue}
                      onValueChange={(sliderValue) =>
                        setSliderValue(sliderValue)
                      }
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#000000"
                    />
                    <Text style={{ color: "#000000" }}>
                      {sliderValue} months
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 10,
                      }}
                    >
                      <Button onPress={handleSubmit} title="Apply"></Button>
                      <Button
                        onPress={() => setModalVisible(!modalVisible)}
                        title="Cancel"
                      ></Button>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/white-filter-icon.png")}
        />
      </Pressable>
    </View>
  );
};

var Info = (info) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{info.children}</Text>
            <View style={{ alignItems: "center" }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={{ color: "blue" }}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image
          style={styles.moretinyLogo}
          source={require("../assets/info-icon.png")}
        />
      </Pressable>
    </View>
  );
};

const MyStackedBarChart = () => {
  return (
    <>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 20,
        }}
        data={{
          labels: ["Previous", "Current"],
          datasets: [
            {
              data: [30, 45],
            },
          ],
        }}
        fromZero={true}
        width={250}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#466B7A",
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    backgroundColor: "#1285b0",
    paddingVertical: 5,
    borderRadius: 100,
  },
  heading: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  scroll_view: {
    padding: 30,
  },
  card_element: {
    padding: 10,
    backgroundColor: "#69A3BA",
    borderRadius: 20,
    marginBottom: 30,
  },
  text_content: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  tinyLogo: {
    width: 38,
    height: 38,
  },
  moretinyLogo: {
    width: 25,
    height: 25,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    marginHorizontal: 20,
    marginVertical: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
  button: {
    // borderRadius: 10,
    // elevation: 2
  },
  buttonClose: {
    //backgroundColor: "#2196F3",
  },
});
