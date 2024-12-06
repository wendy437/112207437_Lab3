// 產生隨機數字 (範圍 1~100)
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 7; // 最大嘗試次數
let guessedCorrectly = false;

while (attemptsLeft > 0 && !guessedCorrectly) {
    const userGuess = window.prompt(
        `請輸入1~100之間的數字\n還剩下${attemptsLeft}次機會`
    );

    // 檢查是否為空值或非數字
    if (userGuess === null || isNaN(userGuess) || userGuess.trim() === "") {
        alert("請輸入有效範圍內的數字！（不能選擇範圍的上下限）");
        continue;
    }

    const guess = Number(userGuess);

    // 檢查是否在範圍內
    if (guess <= 1 || guess >= 100) {
        alert("請輸入有效範圍內的數字！（不能選擇範圍的上下限）");
        continue;
    }

    // 判斷猜測結果
    if (guess === targetNumber) {
        alert("恭喜你答對了！");
        guessedCorrectly = true;
        document.getElementById("result").innerHTML = `<img src="correct.jpg" alt="Correct Guess">`;
    } else if (guess < targetNumber) {
        alert("太小了！");
    } else {
        alert("太大了！");
    }

    attemptsLeft--;
}

// 如果用完所有次數且未猜中
if (!guessedCorrectly) {
    alert(`很遺憾，遊戲結束。正確的答案是 ${targetNumber}！`);
    document.getElementById("result").innerHTML = `<img src="wrong.jpg" alt="Wrong Guess">`;
}
