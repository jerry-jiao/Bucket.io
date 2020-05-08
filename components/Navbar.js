import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import utils from './utils.js';


const Navbar = ( {navigation} ) => {
  return (
    <View style={[styles.navArea]}>
      <View style={[styles.navItems]}>
        <TouchableOpacity
          style={[styles.navItem]}
          onPress={() => navigation.navigate('Discover')}
        >
          <Image style={styles.icon} source={require('../assets/home.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navItem]}
          onPress={() => navigation.navigate('My Bucket List')}
        >
          <Image style={styles.logo} source={require('../assets/bucket_pink.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navItem]}
          onPress={() => navigation.navigate('Chat')}
        >
          <Image style={styles.icon} source={require('../assets/comment.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navArea: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItems: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItem: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },
  logo: {
    height: 60,
    width: 60,
  },
});

export default Navbar;
