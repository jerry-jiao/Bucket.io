import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import utils from './components/utils.js'
import Colorbox from './components/ColorBox.js';
import Navbar from './components/Navbar.js';

const Home = ( {navigation} ) => {
  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(3);
  const [width, setWidth] = React.useState(1);

  const getInterval = (offset: any) => {
    for (let i = 0; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  }

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={[styles.bullet, {opacity: interval === i ? 1 : 0.5,}]}
      >
        &bull;
      </Text>
    );
  }
  return (
    <SafeAreaView style={[styles.backgroundContainer]}>
      <ScrollView style={[styles.mainBody]}>
        <View style={[styles.carouselContainer]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            pagingEnabled
            horizontal={true}
            style={[styles.carousel]}
            onScroll={data => {
              setWidth(data.nativeEvent.contentSize.width);
              setInterval(getInterval(data.nativeEvent.contentOffset.x + 1));
            }}
          >
            <View style={[styles.carouselImageContainer]}>
              <Image style={[styles.carouselImage]} source={require('./assets/roadtrip.png')} />
              <TouchableOpacity style={styles.carouselButton}>
                <Text style={styles.carouselAddText}>Travel</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.carouselImageContainer]}>
              <Image style={[styles.carouselImage]} source={require('./assets/baking.jpg')} />
              <TouchableOpacity style={styles.carouselButton}>
                <Text style={styles.carouselAddText}>Bake</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.carouselImageContainer]}>
              <Image style={[styles.carouselImage]} source={require('./assets/skydiving.jpg')} />
              <TouchableOpacity style={styles.carouselButton}>
                <Image style={[styles.carouselAdd]} source={require('./assets/signs.png')} />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.bullets}>
            {bullets}
          </View>
        </View>
        <View style={[styles.feed]}>
          <View style={[styles.feedCardWrapper]}>
            <View style={[styles.feedCard]}>
              <View style={[styles.postTitleWrapper]}>
                <Image style={[styles.postProfilePic]} source={require('./assets/person1.png')} />
                <View style={styles.postTextArea}>
                  <Text style={styles.postName}>Eldin</Text>
                  <Text>just started my new dropshipping business! come check it out yall</Text>
                </View>
              </View>
              <View style={styles.postImgWrapper}>
                <Image style={[styles.postImg]} source={require('./assets/hiking.jpg')} />
              </View>
            </View>
          </View>
          <View style={[styles.feedCardWrapper]}>
            <View style={[styles.feedCard]}>
              <View style={[styles.postTitleWrapper]}>
                <Image style={[styles.postProfilePic]} source={require('./assets/person1.png')} />
                <View style={styles.postTextArea}>
                  <Text style={styles.postName}>Bilal</Text>
                  <Text>yo venmo @bilal to invest in the next FACEBOOK</Text>
                </View>
              </View>
              <View style={styles.postImgWrapper}>
                <Image style={[styles.postImg]} source={require('./assets/plant.jpg')} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={ navigation } />
    </SafeAreaView>
  );
};



const BucketList = ( {navigation} ) => {
  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(3);
  const [width, setWidth] = React.useState(1);

  const getInterval = (offset: any) => {
    for (let i = 0; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  }
  return (
    <SafeAreaView style={[styles.backgroundContainer]}>
      <View style={[styles.mainBody]}>
        <View style={[styles.carouselContainer]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            pagingEnabled
            horizontal={true}
            style={[styles.bucketList]}
            onScroll={data => {
              setWidth(data.nativeEvent.contentSize.width);
              setInterval(getInterval(data.nativeEvent.contentOffset.x + 1));
            }}
          >
            <View style={styles.bucketCard}>
              <View style={[styles.bucketCardContent]}>
                <View style={[styles.bucketImageContainer]}>
                  <Image style={[styles.bucketImage]} source={require('./assets/skydiving.jpg')} />
                </View>
                <View style={[styles.bucketImageSpacer]}/>
                <View style={[styles.cardInfo]}>
                  <Text style={styles.cardTitleText}>Skydive in the Bahamas</Text>
                  <TouchableOpacity style={[styles.matches]}>
                    <View style={styles.matchImages}>
                      <Image style={[styles.matchImage1]} source={require('./assets/person1.png')} />
                      <Image style={[styles.matchImage2]} source={require('./assets/person2.png')} />
                    </View>
                    <View style={[styles.matchTextContainer]}>
                      <Text style={styles.matchText}>Jessica and Bob also have this on their bucket lists!</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bucketCard}>
              <View style={[styles.bucketCardContent]}>
                <View style={[styles.bucketImageContainer]}>
                  <Image style={[styles.bucketImage]} source={require('./assets/weed.jpg')} />
                </View>
                <View style={[styles.bucketImageSpacer]}/>
                <View style={[styles.cardInfo]}>
                  <Text style={styles.cardTitleText}>Smoke on top of the Big C</Text>
                  <TouchableOpacity style={[styles.matches]}>
                    <View style={styles.matchImages}>
                      <Image style={[styles.matchImage1]} source={require('./assets/vibs.png')} />
                      <Image style={[styles.matchImage2]} source={require('./assets/amrit.png')} />
                    </View>
                    <View style={[styles.matchTextContainer]}>
                      <Text style={styles.matchText}>Vibs and Amrit also have this on their bucket lists!</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bucketCard}>
              <View style={[styles.bucketCardContent]}>
                <TouchableOpacity style={styles.addNewButton}>
                  <Text style={[styles.addText]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <Navbar navigation={ navigation } />
    </SafeAreaView>
  );
};

const Chat = ( {navigation} ) => {
  return (
    <SafeAreaView style={[styles.backgroundContainer]}>
      <View style={[styles.mainBody]}>
        <ScrollView style={styles.chatList}>
          <TouchableOpacity style={[styles.chatItem]}>
            <Image style={[styles.chatImage]} source={require('./assets/iotas.png')} />
            <View style={styles.chatTextItem}>
              <Text style={styles.chatName}>Iotas</Text>
              <Text>guys whens the assignment due again</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chatItem]}>
            <Image style={[styles.chatImage]} source={require('./assets/person1.png')} />
            <View style={styles.chatTextItem}>
              <Text style={styles.chatName}>Jamal Ahmed</Text>
              <Text>Do you even lift bro?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chatItem]}>
            <Image style={[styles.chatImage]} source={require('./assets/person1.png')} />
            <View style={styles.chatTextItem}>
              <Text style={styles.chatName}>Tejas Predisomethingsomething</Text>
              <Text>baba when are we having our coffee chat</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chatItem]}>
            <Image style={[styles.chatImage]} source={require('./assets/person1.png')} />
            <View style={styles.chatTextItem}>
              <Text style={styles.chatName}>Sruthi Machina</Text>
              <Text>something something mimosas?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chatItem]}>
            <Image style={[styles.chatImage]} source={require('./assets/person1.png')} />
            <View style={styles.chatTextItem}>
              <Text style={styles.chatName}>Cindy Ji</Text>
              <Text>BEST PL :)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chatItem]}>
            <Image style={[styles.chatImage]} source={require('./assets/person1.png')} />
            <View style={styles.chatTextItem}>
              <Text style={styles.chatName}>Vikram</Text>
              <Text>Bruh stop eating ass (esp in warzone)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chatItem]}>
            <Image style={[styles.chatImage]} source={require('./assets/person1.png')} />
            <View style={styles.chatTextItem}>
              <Text style={styles.chatName}>Shriya Fandemily</Text>
              <Text>Please feature me on your meals insta</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
        <Stack.Screen name="Discover" component={Home}/>
        <Stack.Screen name="My Bucket List" component={BucketList} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  chatName: {
    fontWeight: 'bold',
  },
  chatTextItem: {
  },
  chatImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    margin: 10,
    marginRight: 30,
  },
  chatItem: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  chatList: {
    flex: 1,
    backgroundColor: '#e8f5ff',
  },
  carouselContainer: {
    flex: 1,
  },
  bucketList: {
    flex: 1,
  },
  bucketCard: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingVertical: 10,

  },
  bucketCardContent: {
    flex: 1,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 0.5,
  },
  bucketImageContainer: {
    // flex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    flexDirection: 'row',

  },
  bucketImage: {
    width: Dimensions.get('window').width * 0.9,
    flex: 1,
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover',
    // height: 100,
    // width: 100,
  },
  bucketImageSpacer: {
    height: 400,
  },
  cardInfo: {
    flex: 1,
    padding: 20,
  },
  cardTitleText: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif-medium': 'Avenir',
    fontSize: 20,
  },
  matches: {
    marginTop: 10,
    height: 30,
    flexDirection: 'row',
  },
  matchImages: {
    height: 30,
    width: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  matchImage1: {
    position: 'absolute',
    left: 22,
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    opacity: 1,
  },
  matchImage2: {
    position: 'absolute',
    left: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    opacity: 1,
  },
  matchTextContainer: {
    justifyContent: 'center',
  },
  matchText: {
    fontSize: 10,
    opacity: 0.5,
  },
  addNewButton: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.1,
  },
  carousel: {
    height: 200,
  },
  carouselImageContainer: {
    // flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  carouselImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    // resizeMode: 'center',
  },
  bullets: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
    color: 'white',
  },
  carouselButton: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    margin: 10,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselAddText: {
    opacity: 0.5,
  },
  carouselAdd: {
    height: 15,
    width: 15,
    resizeMode: 'center',
    opacity: 0.7
  },
  postImg: {
    width: Dimensions.get('window').width * 0.85,
    flex: 1,
    height: 400,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  postImgWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  postName: {
    fontWeight: 'bold',
  },
  postTextArea: {
    width: Dimensions.get('window').width * 0.85 - 60,
  },
  postProfilePic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 20,
    marginLeft: 0,
  },
  postTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.85,
  },
  feedCard: {
    flex: 1,
  },
  feedCardWrapper: {
    height: 500,
    alignItems: 'center',
    paddingVertical: 10,
  },
  feed: {
    flex: 1,
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
