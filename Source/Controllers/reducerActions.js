export const onFetchData = onFetchData_Payload => {
  return {
    type: 'onFetchData',
    payload: onFetchData_Payload,
  };
};

export const onEditData = ({onEditData_Payload, onEditData_editType}) => {
  //   console.log(onEditData_Payload, onEditData_editType);
  return {
    type: 'onEditData',
    editType: onEditData_editType,
    payload: onEditData_Payload,
  };
};

export const onAddNewContact = ({
  onAddNewContact_Payload,
  onAddNewContact_addType,
}) => {
  return {
    type: 'onAddNewContact',
    addType: onAddNewContact_addType,
    payload: onAddNewContact_Payload,
  };
};
