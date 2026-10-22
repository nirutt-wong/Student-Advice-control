// ============================================================
//  ไฟล์ตั้งค่า — แก้ที่นี่ที่เดียว ใช้ร่วมกันทั้ง form.html และ show.html
// ============================================================

// 1) ค่าจาก Firebase Console > Project settings > Your apps > Web app > Config
const firebaseConfig = {
  apiKey: "AIzaSyCrwFRfG1PGDxkiYiZOHGWUCXIv077Hizw",
  authDomain: "student-advice-control.firebaseapp.com",
  projectId: "student-advice-control",
  storageBucket: "student-advice-control.firebasestorage.app",
  messagingSenderId: "926294585581",
  appId: "1:926294585581:web:60b6fb9c614502f5a39ce4"
};


// 2) URL ของ Google Apps Script Web App (ได้หลังกด Deploy ลงท้ายด้วย /exec)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNzA8LM_YzSEJPlu2uyBCzuMzhNQTSIevYMhhqnpfDCAn-R4T-wqhqjv2eHWyAYRo-1w/exec";

// 3) ชื่อ collection ใน Firestore (ถ้าเปลี่ยน ต้องแก้ใน firestore.rules ด้วย)
const COLLECTION = "duty_records";
