import React from 'react';
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import AddComponent from '../Components/AddComponent';
import ButtonHighlight from '../Components/Button';
import EditComponent from '../Components/EditComponent';
import {onAddNewContact, onEditData} from '../Controllers/reducerActions';
import {appData} from '../Modals/reducerModals';
import {ScreenHeight} from '../Modals/ScreenHeight';
import customHooks from '../Services/Controller/customHooks';

const FirstScreen = () => {
  const {
    onFetch,
    onEdit,
    onDelete,
    onAdd,
    fetchedData,
    onDispatch,
    isEdit,
    isAddNewContact,
    addFirstName,
    addLastName,
    addAge,
    whichData,
    editFirstName,
    editLastName,
    editAge,
  } = customHooks();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.text}>List Of Contact</Text>

      <View style={styles.contentWrapper}>
        {(fetchedData || []).map((data, index) => (
          <View key={index} style={styles.maincontentWrapper}>
            <View key={index} style={styles.content}>
              <Text style={{fontSize: 20, flex: 1}}>{data.firstName}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-evenly',
                }}>
                <ButtonHighlight
                  children={'Edit'}
                  onPress={() =>
                    onDispatch(
                      onEditData({
                        onEditData_Payload: {
                          id: data.id,
                          editFirstName: data.firstName,
                          editLastName: data.lastName,
                          editAge: data.age,
                        },
                        onEditData_editType: 'openEdit',
                      }),
                    )
                  }
                />
                <ButtonHighlight
                  children={'Delete'}
                  onPress={() => onDelete(data.id)}
                />
              </View>
            </View>

            {isEdit && whichData == data.id ? (
              <Modal
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  // setModalVisible(!modalVisible);
                }}>
                <EditComponent
                  onChange={(payload, editType) =>
                    onDispatch(onEditData(payload, editType))
                  }
                  onPress={async () => {
                    await onEdit(data.id, editFirstName, editLastName, editAge);
                    onDispatch(
                      onEditData({
                        onEditData_Payload: data.id,
                        onEditData_editType: 'openEdit',
                      }),
                    );
                  }}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  age={data.age}
                />
              </Modal>
            ) : null}
          </View>
        ))}
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <ButtonHighlight
          children="Add New Contact"
          onPress={() =>
            onDispatch(
              onAddNewContact({
                onAddNewContact_Payload: null,
                onAddNewContact_addType: 'openAdd',
              }),
            )
          }
        />
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        {isAddNewContact ? (
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              // setModalVisible(!modalVisible);
            }}>
            <AddComponent
              onChange={(payload, editType) =>
                onDispatch(onAddNewContact(payload, editType))
              }
              onPress={async () => {
                await onAdd(addFirstName, addLastName, addAge);
                onDispatch(
                  onAddNewContact({
                    onAddNewContact_Payload: null,
                    onAddNewContact_addType: 'openAdd',
                  }),
                );
              }}
            />
          </Modal>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: ScreenHeight,
    paddingHorizontal: 20,
  },
  text: {
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: '500',
  },
  contentWrapper: {
    width: '100%',
    paddingVertical: 2.5,
  },
  maincontentWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingBottom: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default FirstScreen;
