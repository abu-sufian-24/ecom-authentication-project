import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
} from 'firebase/database';
import app from './firebaseConfig';

const db = getDatabase(app);

// read / get data from database
export const getFirebaseData = async tableName => {
  const starCountRef = ref(db, tableName);
  return new Promise((resolve, reject) => {
    try {
      onValue(starCountRef, snapshot => {
        const updateCategoriesList = [];
        snapshot.forEach(item => {
          updateCategoriesList.push({
            id: item.key,
            ...item.val(),
          });
        });

        resolve(updateCategoriesList);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getFirebaseDataForEdit = async tableName => {
  const starCountRef = ref(db, tableName);
  return new Promise((resolve, reject) => {
    try {
      onValue(starCountRef, snapshot => {
        resolve(snapshot.val());
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const setDataToFirebase = (tableName, data) => {
  push(ref(db, tableName), data);
};

// Write/Set/Push data to database;
export const updateDataFromFirebase = (tableName, data) => {
  set(ref(db, tableName), data);
};

export const deleteDataFromFirebase = async tableName => {
  const dbRef = ref(db, tableName);
  try {
    await remove(dbRef);
  } catch (error) {
    throw new Error(error.message);
  }
};

// ************************* user profile ****************************

export const creatUserProfile = async data => {
  const { id, name, role } = data;
  set(ref(db, 'userProfile/' + id), {
    name,
    role,
  });
};

export const getProfile = async id => {
  return new Promise((resolve, reject) => {
    try {
      onValue(ref(db, 'userProfile/' + id), snapshot => {
        resolve(snapshot.val());
      });
    } catch (error) {
      reject(error);
    }
  });
};
