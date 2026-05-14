let quizData = [];
let cauHienTai = 0;

// LẤY ĐIỂM TỪ STORAGE KHI VỪA VÀO TRANG (Chống reset khi F5)
let dataHienTai = loadData();
let diem = dataHienTai.score; 

// 1. Tải dữ liệu từ data.json
async function loadQuizData() {
  const response = await fetch("./data.json");
  quizData = await response.json();
  hienThiCauHoi();
}

// 2. Hàm hiển thị câu hỏi
function hienThiCauHoi() {
  let dataCauHoi = quizData[cauHienTai];
  document.getElementById("cau-hoi").innerText = `Câu ${cauHienTai + 1}: ` + dataCauHoi.question;

  let cacNut = document.querySelectorAll(".btn-answer");
  cacNut.forEach((nut, index) => {
    const kyTu = ["A", "B", "C", "D"];
    nut.innerText = kyTu[index] + ". " + dataCauHoi.answers[index];
    // Reset lại class và trạng thái nút
    nut.className = "btn-answer";
    nut.disabled = false;
  });

  // Ẩn các thành phần thông báo, giải thích và nút chuyển câu
  document.getElementById("thong-bao").innerText = "";
  document.getElementById("thong-bao").className = "quiz-message";
  
  let explanationBox = document.getElementById("quizExplanation");
  explanationBox.innerText = "";
  explanationBox.style.display = "none";

  document.getElementById("btn-next-question").style.display = "none";
}

// 3. Hàm kiểm tra đáp án
function checkAnswer(viTriNut) {
  let dataCauHoi = quizData[cauHienTai];
  let cacNut = document.querySelectorAll(".btn-answer");

  cacNut.forEach((nut) => (nut.disabled = true));
  let thongBao = document.getElementById("thong-bao");

  if (viTriNut === dataCauHoi.correctAnswer) {
    thongBao.innerText = "🎉 CHÍNH XÁC!!!";
    thongBao.className = "quiz-message correct-text";
    cacNut[viTriNut].classList.add("correct");
    diem += 100;

    // SỬ DỤNG HÀM TỪ STORAGE.JS ĐỂ LƯU
    saveData(diem, 1); 
  } else {
    thongBao.innerText = "❌ SAI RỒI!!!";
    thongBao.className = "quiz-message wrong-text";
    cacNut[viTriNut].classList.add("wrong");
    cacNut[dataCauHoi.correctAnswer].classList.add("correct");
  }

  document.getElementById("diem-so").innerText = "⭐ Điểm: " + diem;
  
  // Hiển thị phần giải thích
  let explanationBox = document.getElementById("quizExplanation");
  explanationBox.innerHTML = `<strong>💡 Giải thích:</strong> ${dataCauHoi.explanation}`;
  explanationBox.style.display = "block";

  // Hiển thị nút "Câu tiếp theo"
  document.getElementById("btn-next-question").style.display = "block";
}

// 4. Hàm chuyển sang câu tiếp theo
function nextQuestion() {
  cauHienTai++;
  if (cauHienTai < quizData.length) {
    hienThiCauHoi();
  } else {
    document.getElementById("cau-hoi").innerText = "🌟 CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH HẾT CÂU HỎI!";
    document.getElementById("quiz-answers-container").style.display = "none";
    document.getElementById("thong-bao").innerText = "Điểm cuối cùng của bạn đã được lưu!";
    document.getElementById("thong-bao").className = "quiz-message correct-text";
    document.getElementById("quizExplanation").style.display = "none";
    document.getElementById("btn-next-question").style.display = "none";
  }
}

// Bắt đầu tải dữ liệu
loadQuizData();