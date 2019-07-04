import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyB1Wq5tqH-M5qoVWURr8HM04s2N7-fiCkk",
            authDomain: "manager-6f4a0.firebaseapp.com",
            databaseURL: "https://manager-6f4a0.firebaseio.com",
            projectId: "manager-6f4a0",
            storageBucket: "",
            messagingSenderId: "675410093051",
            appId: "1:675410093051:web:04cbf255f43c92a5"
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;