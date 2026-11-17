// config.js — ใช้ร่วมกันทั้ง form.html และ show.html
// (ใช้แบบตัวแปร global เพราะทั้งสองหน้าโหลด Firebase แบบ compat ผ่านแท็ก <script>)

const firebaseConfig = {
  apiKey: "AIzaSyA-ZJ9W0i8XZ6NAPd6wZcv1fy6ikh0ktyA",
  authDomain: "sk-advice-student-control.firebaseapp.com",
  projectId: "sk-advice-student-control",
  storageBucket: "sk-advice-student-control.firebasestorage.app",
  messagingSenderId: "897932059356",
  appId: "1:897932059356:web:0aa0bedd7f64205a11ca19"
};

// ชื่อ collection ใน Firestore ที่เก็บข้อมูลการลงคุมแถว
const COLLECTION = "lineup_records";

// URL ของ Web app จาก Google Apps Script (ได้หลังกด Deploy — ดูขั้นตอนในคำตอบ)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPt5cL37PBcRJ8_i6_5FCy3NzMOqWYTpWUTqBPz-sbvXU4cjO_JTAo2WfBlBXF3RZj/exec";
