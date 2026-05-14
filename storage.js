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

// ==========================================
// QUẢN LÝ BÌNH LUẬN (Cộng đồng)
// ==========================================
const COMMENTS_KEY = "wildsphereComments";

// Lấy danh sách bình luận
function getComments() {
  try {
    return JSON.parse(localStorage.getItem(COMMENTS_KEY)) || [];
  } catch {
    return [];
  }
}

// Thêm bình luận mới
function addComment(username, text) {
  const comments = getComments();
  const newComment = {
    id: Date.now(),
    username: username,
    text: text,
    timestamp: new Date().toISOString()
  };
  
  // Đẩy bình luận mới lên đầu danh sách
  comments.unshift(newComment); 
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}

// ==========================================
// QUẢN LÝ ĐỘNG VẬT ĐÃ LƯU & ĐÃ XEM (Dashboard)
// ==========================================
const SAVED_KEY = "wildsphereSaved";
const VIEWED_KEY = "wildsphereViewed";

// 1. Quản lý Đã Lưu (Yêu thích)
function getSaved() {
  return JSON.parse(localStorage.getItem(SAVED_KEY)) || [];
}

function toggleSaved(name) {
  let saved = getSaved();
  let index = saved.indexOf(name);
  if (index > -1) {
    saved.splice(index, 1); // Xóa nếu đã lưu
  } else {
    saved.push(name); // Thêm nếu chưa lưu
  }
  localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  return index === -1; // Trả về true nếu vừa lưu thành công
}

function isSaved(name) {
  return getSaved().includes(name);
}

// 2. Quản lý Lịch sử Đã Xem
function getViewed() {
  return JSON.parse(localStorage.getItem(VIEWED_KEY)) || [];
}

function addViewed(name) {
  let viewed = getViewed();
  viewed = viewed.filter(n => n !== name); // Xóa trùng lặp để đẩy lên đầu
  viewed.unshift(name); // Thêm vào đầu danh sách
  if (viewed.length > 50) viewed.pop(); // Giữ tối đa 50 lịch sử gần nhất
  localStorage.setItem(VIEWED_KEY, JSON.stringify(viewed));
}