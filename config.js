import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkDSz0qBIfG9_ASb-JH2YSsmqFAPgrTSQ",
  authDomain: "pikaribazr.firebaseapp.com",
  databaseURL: "https://pikaribazr-default-rtdb.firebaseio.com",
  projectId: "pikaribazr",
  storageBucket: "pikaribazr.firebasestorage.app",
  messagingSenderId: "718216554121",
  appId: "1:718216554121:web:039ec2e1632d59a7690858"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export function getUserId() {
  let uid = localStorage.getItem('pb_uid');
  if (!uid) {
    uid = 'user_' + Math.random().toString(36).slice(2, 11);
    localStorage.setItem('pb_uid', uid);
  }
  return uid;
}