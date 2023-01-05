import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onFetchData} from '../../Controllers/reducerActions';
import {BaseUrl} from '../BaseUrl/Url';

const customHooks = () => {
  const onDispatch = useDispatch();
  const fetchedData = useSelector(state => state.baseData);
  const {isEdit, whichData, editFirstName, editLastName, editAge} = useSelector(
    state => state.editData,
  );
  const {isAddNewContact, addFirstName, addLastName, addAge} = useSelector(
    state => state.addData,
  );

  onFetch = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/contact`);
      onDispatch(onFetchData(response.data.data));
    } catch (error) {
      alert(error);
    }
  };

  onEdit = async (id, editFirstName, editLastName, editAge) => {
    try {
      await axios.put(`${BaseUrl}/contact/${id}`, {
        firstName: `${editFirstName}`,
        lastName: `${editLastName}`,
        age: editAge,
        photo: 'String',
      });
      onFetch();
    } catch (error) {
      alert('somehow this API doesnt work');
    }
  };

  onDelete = async id => {
    console.log(id);
    try {
      await axios.delete(`${BaseUrl}/contact/${id}`);
      onFetch();
    } catch (error) {
      alert(error);
    }
  };

  onAdd = async (addFirstName, addLastName, addAge) => {
    console.log('clicked');
    try {
      await axios.post(`${BaseUrl}/contact`, {
        firstName: `${addFirstName}`,
        lastName: `${addLastName}`,
        age: addAge,
        photo: 'String',
      });
      onFetch();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  return {
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
  };
};

export default customHooks;
