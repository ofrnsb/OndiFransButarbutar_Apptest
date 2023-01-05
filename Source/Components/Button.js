import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const ButtonHighlight = props => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#DDDDDD',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
      minWidth: 80,
      alignItems: 'center',
      backgroundColor:
        props.children == 'Edit'
          ? '#919191'
          : props.children == 'Delete'
          ? '#7A1B1B'
          : '#29730E',
    },
  });

  return (
    <TouchableHighlight
      onPress={() => props.onPress()}
      style={{paddingVertical: 5}}>
      <View style={styles.button}>
        <Text style={{color: 'white'}}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonHighlight;
