let quizData = [];
let cauHienTai = 0;
let diem = 0;

// 1. Tải dữ liệu từ data.json
async function loadQuizData() {
  const response = await fetch("./data.json");
  quizData = await response.json();
  hienThiCauHoi();
}

// 2. Hàm hiển thị câu hỏi
function hienThiCauHoi() {
  let dataCauHoi = quizData[cauHienTai];
  document.getElementById("cau-hoi").innerText =
    `Câu ${cauHienTai + 1}: ` + dataCauHoi.question;

  let cacNut = document.querySelectorAll(".nut-dap-an");
  cacNut.forEach((nut, index) => {
    const kyTu = ["A", "B", "C", "D"];

nut.innerText =
  kyTu[index] + ". " + dataCauHoi.answers[index];
    nut.style.background = ""; // Reset màu nút
    nut.disabled = false;
  });
  document.getElementById("thong-bao").innerText = "";
  
document.getElementById("quizExplanation").innerText = "";


}

// 3. Hàm kiểm tra đáp án và LƯU ĐIỂM
function checkAnswer(viTriNut) {
  let dataCauHoi = quizData[cauHienTai];
  let cacNut = document.querySelectorAll(".nut-dap-an");

  // Khóa nút để không bấm liên tục
  cacNut.forEach((nut) => (nut.disabled = true));

  if (viTriNut === dataCauHoi.correctAnswer) {
    document.getElementById("thong-bao").innerText = "🎉 CHÍNH XÁC!!!";
    diem += 100;

    // --- LƯU ĐIỂM VÀO THẺ NHỚ (LOCAL STORAGE) ---
    localStorage.setItem("userScore", diem);
    // --------------------------------------------
  } else {
    document.getElementById("thong-bao").innerText = "❌ SAI RỒI!!!";
  }

  document.getElementById("diem-so").innerText = "Điểm: " + diem;
  
document.getElementById("quizExplanation").innerText =
  dataCauHoi.explanation;



  cauHienTai++;
  if (cauHienTai < quizData.length) {
    setTimeout(hienThiCauHoi, 1500);
  } else {
    document.getElementById("cau-hoi").innerText =
      "🌟 BẠN ĐÃ HOÀN THÀNH HẾT 120 CÂU!";
    document.getElementById("thong-bao").innerText =
      "Điểm cuối cùng của bạn đã được lưu!";
  }
}


loadQuizData();
