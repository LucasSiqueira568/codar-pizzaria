
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB6J95mUHO-nrzIgGBULzsVJT74N-As7Xo",
    authDomain: "codar-pizzaria.firebaseapp.com",
    projectId: "codar-pizzaria",
    storageBucket: "codar-pizzaria.appspot.com",
    messagingSenderId: "141955476655",
    appId: "1:141955476655:web:acdb012e1dd9d726bbb85a"
  };

  
  const app = initializeApp(firebaseConfig);

  export default app