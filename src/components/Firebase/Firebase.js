import app from 'firebase/app'
import 'firebase/database'
import '@firebase/firestore'


const config = {
    apiKey: "AIzaSyBaharqoEvguoQzjzdRG5FvhDydgyODy20",
    authDomain: "react-app-fff5a.firebaseapp.com",
    databaseURL: "https://react-app-fff5a.firebaseio.com",
    projectId: "react-app-fff5a",
    storageBucket: "react-app-fff5a.appspot.com",
    messagingSenderId: "809171885472",
    appId: "1:809171885472:web:79d59274113e3e5456d8c5",
    measurementId: "G-06DHGV7WDH"
}


// app.initializeApp(app);
// app.analytics();
// db=app.database()

// users = () => db.ref('users')

class Firebase {
    constructor () {
        app.initializeApp(config);
        this.db = app.database();
    }

    users = () => this.db.ref('users')
    projects = () => this.db.ref('projects')
}

export default Firebase