import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import utils from './components/utils.js'
import Colorbox from './components/ColorBox.js';
import Navbar from './components/Navbar.js';

const Home = ( {navigation} ) => {
  const [interval, setInterval] = React.useState(1);
  return (
    <SafeAreaView style={[styles.backgroundContainer]}>
      <View style={[styles.mainBody]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          pagingEnabled
          horizontal={true}
          style={[styles.jumbo]}
        >
          <View style={[styles.jumboImageContainer]}>
            <Image style={[styles.jumboImage]} source={require('./assets/roadtrip.png')} />
          </View>
          <View style={[styles.jumboImageContainer]}>
            <Image style={[styles.jumboImage]} source={require('./assets/baking.jpg')} />
          </View>
          <View style={[styles.jumboImageContainer]}>
            <Image style={[styles.jumboImage]} source={require('./assets/skydiving.jpg')} />
          </View>
        </ScrollView>
        <View style={[styles.feed, utils.border('blue')]}>
        </View>
      </View>
      <Navbar navigation={ navigation } />
    </SafeAreaView>
  );
};



const BucketList = ( {navigation} ) => {
  return (
    <SafeAreaView style={[styles.backgroundContainer]}>
      <View style={[styles.mainBody]}>
        <Text>BucketList</Text>
      </View>
      <Navbar navigation={ navigation } />
    </SafeAreaView>
  );
}

const Chat = ( {navigation} ) => {
  return (
    <SafeAreaView style={[styles.backgroundContainer]}>
      <View style={[styles.mainBody]}>
        <Text>Chat</Text>
      </View>
      <Navbar navigation={ navigation } />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'black',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="BucketList" component={BucketList} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  jumbo: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // padding: 10,
    // flexDirection: 'row',
  },
  jumboImageContainer: {
    // flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  jumboImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    // resizeMode: 'center',
  },
  feed: {
    flex: 1.5,
    // height: 100,
  },
  mainBody: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundContainer: {
    flex: 1,
    // flexDirection: 'column',
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.morecontainer}>
//         <Text>Hello world!</Text>
//         <Text>Goodbye world!</Text>
//       </View>
//     </View>
//   );
// }
