import { db } from './firebase';
import * as firebase from 'firebase';
// User API

export const doCreateUser = (id, username, email,phone) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    phone,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

 
