import {appData} from '../Modals/reducerModals';

export const Reducers = (state = appData, action) => {
  switch (action.type) {
    case 'onFetchData': {
      return {...state, baseData: action.payload};
    }
    case 'onEditData': {
      return action.editType == 'openEdit'
        ? {
            ...state,
            editData: {
              ...state.editData,
              isEdit: !state.editData.isEdit,
              whichData: action.payload.id,
              editFirstName: action.payload.editFirstName,
              editLastName: action.payload.editLastName,
              editAge: action.payload.editAge,
            },
          }
        : action.editType == 'editFirstName'
        ? {
            ...state,
            editData: {
              ...state.editData,
              editFirstName: action.payload,
            },
          }
        : action.editType == 'editLastName'
        ? {
            ...state,
            editData: {
              ...state.editData,
              editLastName: action.payload,
            },
          }
        : action.editType == 'editAge'
        ? {
            ...state,
            editData: {
              ...state.editData,
              editAge: action.payload,
            },
          }
        : {
            ...state,
            editData: {
              ...state.editData,
              isEdit: !state.editData.isEdit,
            },
          };
    }
    case 'onAddNewContact': {
      return action.addType == 'openAdd'
        ? {
            ...state,
            addData: {
              ...state.addData,
              isAddNewContact: !state.addData.isAddNewContact,
            },
          }
        : action.addType == 'addFirstName'
        ? {
            ...state,
            addData: {
              ...state.addData,
              addFirstName: action.payload,
            },
          }
        : action.addType == 'addLastName'
        ? {
            ...state,
            addData: {
              ...state.addData,
              addLastName: action.payload,
            },
          }
        : action.addType == 'addAge'
        ? {
            ...state,
            addData: {
              ...state.addData,
              addAge: action.payload,
            },
          }
        : null;
    }

    default:
      return state;
  }
};
