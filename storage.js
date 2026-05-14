// ==========================================
// FILE: storage.js (Quản lý LocalStorage)
// ==========================================

const SCORE_KEY = "userScore";
const LEVEL_KEY = "userLevel";

// Hàm Lưu dữ liệu
function saveData(score, level = 1) {
  localStorage.setItem(SCORE_KEY, score);
  localStorage.setItem(LEVEL_KEY, level);
  
  // Phát ra một sự kiện báo hiệu điểm đã thay đổi để thanh Tiến độ cập nhật
  window.dispatchEvent(new Event('scoreUpdated'));
}

// Hàm Gọi dữ liệu
function loadData() {
  const score = parseInt(localStorage.getItem(SCORE_KEY)) || 0;
  const level = parseInt(localStorage.getItem(LEVEL_KEY)) || 1;
  return { score, level };
}