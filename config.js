// ============================================================
//  ไฟล์ตั้งค่า — แก้ที่นี่ที่เดียว ใช้ร่วมกันทั้ง form.html และ show.html
// ============================================================

// 1) ค่าจาก Firebase Console > Project settings > Your apps > Web app > Config
const firebaseConfig = {
  apiKey: "AIzaSyD7XFbFOEJqyOse0yRQVR5qT6LDBs5pBDE",
  authDomain: "student-advice-control-ef7f4.firebaseapp.com",
  projectId: "student-advice-control-ef7f4",
  storageBucket: "student-advice-control-ef7f4.firebasestorage.app",
  messagingSenderId: "581239976815",
  appId: "1:581239976815:web:4a539150e83bedeed82e9a"
};


// 2) URL ของ Google Apps Script Web App (ได้หลังกด Deploy ลงท้ายด้วย /exec)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNzA8LM_YzSEJPlu2uyBCzuMzhNQTSIevYMhhqnpfDCAn-R4T-wqhqjv2eHWyAYRo-1w/exec";

// 3) ชื่อ collection ใน Firestore (ถ้าเปลี่ยน ต้องแก้ใน firestore.rules ด้วย)
const COLLECTION = "duty_records";
