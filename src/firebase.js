import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD2Gpyth1du_1-_h6iU1TzoRsG-anIy-lg",
    authDomain: "nba-app-ae40b.firebaseapp.com",
    databaseURL: "https://nba-app-ae40b.firebaseio.com",
    projectId: "nba-app-ae40b",
    storageBucket: "nba-app-ae40b.appspot.com",
    messagingSenderId: "1063328388835"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseVideos = firebaseDB.ref('videos');
  const firebaseTeams = firebaseDB.ref('teams');

  const firebaseLooper = (snapshot) => {

    const data = [];

    snapshot.forEach(childSnapshot => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        });
    });

    return data;
  }


  export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
  }