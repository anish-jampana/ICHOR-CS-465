import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Button, Image, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';

export default function MainScreen({navigation}) {
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
                <View style={styles.card_element}>
                    <Text style={styles.card_content}>Hi</Text>
                    <View style={styles.center}>
                        <Image style={styles.moretinyLogo} source={require('../assets/down-arrow.png')} center/>
                    </View>
                </View>
                <View style={styles.card_element}></View>
                <View style={styles.card_element}></View>
                <View style={styles.card_element}></View>
                <View style={styles.card_element}></View>
                <View style={styles.card_element}></View>
                <View style={styles.card_element}></View>
                <View style={styles.card_element}></View>
                <View style={styles.card_element}></View>
                <MyComponent></MyComponent>
            </ScrollView>
        </SafeAreaView>
    );
}

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
        marginBottom: 30
    },
    card_content: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        padding: 15
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
    }
})

const MyComponent = () => {
    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);
  
    return (
      <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
  
        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
  };