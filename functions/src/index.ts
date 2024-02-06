/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// functions/index.js

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendNotification = functions.firestore
  .document('articles/{articleId}')
  .onCreate((snapshot:any, context:any) => {
    const articleData = snapshot.data();

    const message = {
      notification: {
        title: 'New Article',
        body: articleData.title,
      },
      topic: 'allUsers',  // Send to a topic or specific devices
    };

    return admin.messaging().send(message);
  });