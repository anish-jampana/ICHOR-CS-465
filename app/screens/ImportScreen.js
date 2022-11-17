import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import testData from "../assets/bloodtest.json";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

function Header(props) {
  return (
    <View style={styles.horizontal}>
      <AddTestModal
        handleAddTest={() => props.handleAddTest()}
        mostRecent={props.mostRecent}
      />
    </View>
  );
}

class Import extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: testData,
      mostRecent: false,
    };
  }

  handleRemoveTest(test) {
    let testDataCopy = this.state.testData;
    testDataCopy[test]["display"] = false;

    this.setState({
      testData: testDataCopy,
    });
  }

  handleAddTest() {
    let testDataCopy = this.state.testData;
    testDataCopy["test_recent"]["display"] = true;

    this.setState({
      testData: testDataCopy,
      mostRecent: true,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          handleAddTest={() => this.handleAddTest()}
          mostRecent={this.state.mostRecent}
        />
        <ComponentContainer>
          <TestListDisplay
            testData={this.state.testData}
            handleRemoveTest={(test) => this.handleRemoveTest(test)}
          />
        </ComponentContainer>
      </SafeAreaView>
    );
  }
}

class TestListDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: props.testData,
    };
  }

  render() {
    return (
      <ImportListScrollView>
        <View>
          {Object.entries(this.state.testData).map(
            ([test, value]) =>
              value["display"] && (
                <ComponentContainer key={test}>
                  <ListContainer>
                    <CircleContainer>
                      <MaterialIcons
                        name="description"
                        size={32}
                        color="white"
                      />
                    </CircleContainer>
                    <View>
                      <TextItem>{value["date"]}</TextItem>
                      {/* <TextDate>{value["date"]}</TextDate> */}
                    </View>
                    <RemoveTestWarningModal
                      test={test}
                      handleRemoveTest={(test) =>
                        this.props.handleRemoveTest(test)
                      }
                    />
                  </ListContainer>
                </ComponentContainer>
              )
          )}
        </View>
      </ImportListScrollView>
    );
  }
}

const RemoveTestWarningModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  function Confirm() {
    setModalVisible(!modalVisible);
    props.handleRemoveTest(props.test);
  }

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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.row}>
              <Text style={styles.modalText}>
                Warning: Are you sure you want to permanently remove this test
                from Ichor?
              </Text>
              <Pressable
                style={[styles.confirmButton, styles.buttonClose]}
                onPress={() => Confirm()}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </Pressable>
              <Pressable
                style={[styles.cancelButton, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <IconContainer onPress={() => setModalVisible(true)}>
        <MaterialIcons name="delete" size={28} color="white" />
      </IconContainer>
    </View>
  );
};

const AddTestModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  function Confirm() {
    setModalVisible(!modalVisible);
    props.handleAddTest();
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Conditional Rendering */}
            {!props.mostRecent && (
              <View style={styles.row}>
                <Text style={styles.modalText}>
                  Import latest blood test from MyChart?
                </Text>
                <Pressable
                  style={[styles.confirmButton, styles.buttonClose]}
                  onPress={() => Confirm()}
                >
                  <Text style={styles.textStyle}>Confirm</Text>
                </Pressable>
                <Pressable
                  style={[styles.cancelButton, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            )}
            {props.mostRecent && (
              <View style={styles.row}>
                <Text style={styles.modalText}>
                  Notice: There are currently no recent tests to import from
                  MyChart.
                </Text>
                <Pressable
                  style={[styles.okButton, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
      <IconContainer onPress={() => setModalVisible(true)}>
        <MaterialIcons name="add-circle-outline" size={32} color="white" />
      </IconContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#d3d3d3",
  },
  cancelButton: {
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 10,
  },
  confirmButton: {
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#466B7A",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    backgroundColor: "#f0f8ff",
    height: 50,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
    height: 20,
    marginBottom: 30,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#466B7A",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "center",
  },
  importListScrollView: {
    borderColor: "black",
    borderWidth: 1,
  },

  horizontal: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#466B7A",
    marginRight: 20
  },
  heading: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
    marginTop: 60,
    marginBottom: 10,
    textAlign: "center",
  },
  okButton: {
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
    padding: 10
  }
});

const PressableAddTest = styled(Pressable)`
  color: white;
  border-radius: 20px;
`;

const ImportListScrollView = styled.ScrollView`
  height: 80%;
  border-width: 1px;
  border-top-color: white;
  border-top-width: 1px;
`;

const ListContainer = styled.View`
  height: auto;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const AddTestModalContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: auto;
  width: auto;
  margin-right: 10px;
`;

const TextItem = styled.Text`
  color: white;
  width: 240px;
  height: auto;
  font-size: 20px;
  margin-top: 18px;
  margin-right: 20px;
  margin-left: 10px;
`;

const IconContainer = styled.TouchableOpacity`
  height: 40px;
  
`;

const CircleContainer = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 20px;
  border-color: white;
  border-width: 1px;
`;

export default Import;
