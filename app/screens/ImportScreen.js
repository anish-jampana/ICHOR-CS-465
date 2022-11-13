import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Button} from 'react-native';

export default function MainScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>BIOMARKER BREAKDOWN2</Text>
            <Button title='Go to Import' onPress={() => navigation.navigate("Import")}></Button>
            <ScrollView style={styles.scroll_view}>
                <View style={styles.element}></View>
                <View style={styles.element}></View>
                <View style={styles.element}></View>
                <View style={styles.element}></View>
                <View style={styles.element}></View>
                <View style={styles.element}></View>
                <View style={styles.element}></View>
                <View style={styles.element}></View>
                <View style={styles.element}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#466B7A',
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
    element: {
        padding: 30,
        backgroundColor: '#69A3BA',
        fontSize: 24,
        borderRadius: 20,
        marginBottom: 30
    }
})