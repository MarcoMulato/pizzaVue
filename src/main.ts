import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker'; 
import firebase from 'firebase';
Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyCU_Qs5nwCQ0nCeS6YRWJM3d9B91bcLYII",
  authDomain: "pizzavue-ccb0f.firebaseapp.com",
  databaseURL: "https://pizzavue-ccb0f.firebaseio.com",
  projectId: "pizzavue-ccb0f",
  storageBucket: "",
  messagingSenderId: "306610756471",
  appId: "1:306610756471:web:077631d8bbd60614"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BJLprbhX2u3ciFlaq5eHWdAE2JKsjJefHt4Z-IwX1_DAWVZJqdQ4lPpYJy2qD4rqiznJGkCpnsRY-PgHgGqimD0")
messaging.requestPermission().then(()=>{
  console.log("Permiso Concedido")
  messaging.getToken().then((token)=>{
    console.log(token)
    localStorage.setItem("tokenNotificaciones", token+"")
  });
}).catch((err)=>{
  console.log(err)
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
