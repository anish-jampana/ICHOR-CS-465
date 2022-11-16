// import React in our code
import React from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
} from 'react-native-chart-kit';


const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Biomarker Chart</Text>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width-16}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};



const App = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#466B7A' }}>
      <View style={styles.horizontal}>
                <TouchableOpacity onPress={() => navigation.navigate("Import")}>
                    <Image style={styles.tinyLogo} source={require('../assets/white-filter-icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.heading}>BIOMARKERS</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Import")}>
                    <Image style={styles.tinyLogo} source={require('../assets/white-import-icon.png')}/>
                </TouchableOpacity>
      </View>
      
      <ScrollView style={{padding:30}}>
        <View style={styles.container}>
          <View>
            <MyLineChart />
          </View>
        </View>
        <View style={styles.card_element}>
            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding:10}}>
            <Text style={styles.header_content}>Calcium daily requirements</Text>   
            <Text style={styles.text_content}>Men: 1,000 mg {"\n"}Women: 1,000 mg</Text>  
          </View>     
        </View>
        <View style={styles.card_element}>
            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding:10}}>
                        <Text style={styles.header_content}>Benefits of calcium</Text>
                        <Text style={styles.text_content}>Your body needs calcium to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly.{"\n"}{"\n"}Some studies suggest that calcium, along with vitamin D, may have benefits beyond bone health: perhaps protecting against cancer, diabetes and high blood pressure. But evidence about such health benefits is not definitive. </Text>
                                              
            
            </View>
          </View> 
          <View style={styles.card_element}>
            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding:10}}>
                        <Text style={styles.header_content}>Risks of too little calcium</Text>
                        <Text style={styles.text_content}>If you don't get enough calcium, you could face health problems related to weak bones:{"\n"}{"\n"}Children may not reach their full potential adult height.Adults may have low bone mass, which is a risk factor for osteoporosis.{"\n"}{"\n"}Many Americans don't get enough calcium in their diets. Children and adolescents are at risk, but so are adults age 50 and older.</Text> 
          </View>     
        </View>

        <View style={styles.card_element}>
            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', padding:10}}>
            <Text style={styles.header_content}>Calcium Diet Suggestions</Text>   
            <Text style={styles.text_content}>{'\u2B24'} Dairy products, such as cheese, milk and yogurt{"\n"}{"\n"}
              {'\u2B24'} Dark green leafy vegetables, such as broccoli and kale{"\n"}{"\n"}
              {'\u2B24'} Fish with edible soft bones, such as sardines and canned salmon{"\n"}{"\n"}
              {'\u2B24'} Calcium-fortified foods and beverages, such as soy products, cereal and fruit juices, and milk substitutes{"\n"}{"\n"}
              </Text>  
          </View>     
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#466B7A',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
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
  tinyLogo: {
    width: 40,
    height: 40
  },
  header: {
    color:"#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: '600',
    fontStyle:"italic"
  },
  card_element: {
    padding: 10,
    backgroundColor: '#69A3BA',
    borderRadius: 20,
    marginBottom: 30,
  },
  header_content: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  text_content:{
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
  }
});
