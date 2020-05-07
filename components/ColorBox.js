import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ColorBox = props => {
  const colors = {
    backgroundColor: props.backgroundColor,
    borderColor: props.borderColor,
  };

  return (
    <View style={[styles.box, colors]}>
      <Text>
        I am a colorbox!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
