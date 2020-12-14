import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyAO3ZENeXy3f31IBkMPl5O0Xy_yBnLFc5g",
        authDomain: "e-commerce-38653.firebaseapp.com",
        projectId: "e-commerce-38653",
        storageBucket: "e-commerce-38653.appspot.com",
        messagingSenderId: "940130006754",
        appId: "1:940130006754:web:df1a93b57ac8ecbe8450bb",
        measurementId: "G-WJLN2760V4"
    }

)

export const getFirebase = () => {
    return app;
}

// vinculacion a la base de datos
export const getFirestore = () => {
    return firebase.firestore(); 
} 