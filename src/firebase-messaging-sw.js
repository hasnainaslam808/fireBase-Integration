importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyBCTN6KOIpobVLPcxPCZeUd9rJ4t3uKYqo",
    authDomain: "student-management-4307e.firebaseapp.com",
    projectId: "student-management-4307e",
    storageBucket: "student-management-4307e.appspot.com",
    messagingSenderId: "838485293378",
    appId: "1:838485293378:web:797a98ec95c1b461e570db",
    vapidKey: "BMgZuvjYNLOwmT7_PN0nDuTLM72X3a4ugWsV4mKoqfkRvzN4stGnL3MwpmTBqZgqoUtPe4EOMz5_2H5jJNMLyt0"

});
const messaging = firebase.messaging();