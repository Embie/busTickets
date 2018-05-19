import { db } from './firebase';
// User API

export const doCreateUser = (id, username, email, phone) =>
    db.collection("users").add({
        username,
        email,
        phone,
        role:'user'
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });


export const onceGetUsers = () =>
    db.collection("users").get();

export const getRoutes = (from, to) =>
    db.collection("routes").where("from", "==", from).where("to", "==", to).get();

export const getUserById = (uid) =>
    db.collection("users").doc(uid).get();