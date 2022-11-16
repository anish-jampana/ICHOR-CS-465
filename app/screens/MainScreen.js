import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Image, TouchableOpacity, Alert, Modal, Pressable} from 'react-native';

export default function MainScreen({navigation}) {
    let MainScreenJSON = require('../assets/main-screen.json');
    let stringData = JSON.stringify(MainScreenJSON);
    const data = JSON.parse(stringData)
    const [biomarkers, setBiomarkers] = useState(data)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.horizontal}>
                <TouchableOpacity onPress={() => navigation.navigate("Import")}>
                    <Image style={styles.tinyLogo} source={require('../assets/filter-icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.heading}>BIOMARKERS</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Import")}>
                    <Image style={styles.tinyLogo} source={require('../assets/import-icon.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scroll_view}>
            { biomarkers.map((item) => {
                return (
                    <View style={styles.card_element}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', padding:10}}>
                            <Text style={styles.text_content}>{item.name}</Text>
                            <Info>{item.info}</Info>
                        </View>
                        <View style={styles.center}>
                            <TouchableOpacity onPress={() => navigation.navigate("Graph")}>
                                <Image style={styles.moretinyLogo} source={require('../assets/down-arrow.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
            </ScrollView>
        </SafeAreaView>
    );
}
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
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={{color: 'blue'}}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
            <Image style={styles.moretinyLogo} source={require('../assets/info-icon.png')}/>
        </Pressable>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#466B7A',
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 10,
        textAlign: "center"
    },
    scroll_view: {
        padding: 30
    },
    card_element: {
        padding: 10,
        backgroundColor: '#69A3BA',
        borderRadius: 20,
        marginBottom: 30,
    },
    text_content: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    tinyLogo: {
        width: 40,
        height: 40
    },
    moretinyLogo: {
        width: 25,
        height: 25
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        marginHorizontal: 20,
        marginVertical: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10
    },
    button: {
        // borderRadius: 10,
        // elevation: 2
    },
    buttonClose: {
        //backgroundColor: "#2196F3",
    }
})