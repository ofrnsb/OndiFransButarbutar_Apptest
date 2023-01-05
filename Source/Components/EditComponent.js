import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import customHooks from '../Services/Controller/customHooks';
import ButtonHighlight from './Button';

const EditComponent = props => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingBottom: 20,
        position: 'absolute',
        bottom: 0,
        zIndex: 0,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}>
        <View style={{paddingVertical: 5}}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={e =>
              props.onChange({
                onEditData_Payload: e,
                onEditData_editType: 'editFirstName',
              })
            }
            defaultValue={props.firstName}
          />
        </View>

        <View style={{paddingVertical: 5}}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={e =>
              props.onChange({
                onEditData_Payload: e,
                onEditData_editType: 'editLastName',
              })
            }
            defaultValue={props.lastName}
          />
        </View>

        <View style={{paddingVertical: 5}}>
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            onChangeText={e =>
              props.onChange({
                onEditData_Payload: e,
                onEditData_editType: 'editAge',
              })
            }
            defaultValue={`${props.age}`}
          />
        </View>
      </View>

      <ButtonHighlight children="Submit" onPress={() => props.onPress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#DFDFDF',
  },
});

export default EditComponent;
