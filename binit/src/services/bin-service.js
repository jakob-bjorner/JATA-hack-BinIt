import { db } from '../firebase-config';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const usersCollectionRef = collection(db, 'bins');

const updateBin = async (
  id,
  downvote,
  location,
  recyclingMaterial,
  timestamp,
  upvote
) => {
  const binDoc = doc(db, 'bins', id);
  const newFields = {
    downvote,
    location,
    recyclingMaterial,
    timestamp,
    upvote,
  };
  await updateDoc(binDoc, newFields);
};

const createBin = async (
  downvote,
  location,
  recyclingMaterial,
  timestamp,
  upvote
) => {
  await addDoc(usersCollectionRef, {
    downvote: downvote,
    location: location,
    recyclingMaterial: recyclingMaterial,
    timestamp: timestamp,
    upvote: upvote,
  });
};

const deleteBin = async (id) => {
  const binDoc = doc(db, 'bins', id);
  await deleteDoc(binDoc);
};

export { updateBin, createBin, deleteBin };
