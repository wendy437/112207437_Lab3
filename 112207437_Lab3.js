const targetNumber = Math.floor(Math.random() * 100) + 1; // 隨機生成目標數字
let attemptsLeft = 7; // 剩餘次數
let guessedCorrectly = false;
let min = 1; // 最小範圍
let max = 100; // 最大範圍

while (attemptsLeft > 0 && !guessedCorrectly) {
    const userGuess = window.prompt(
        `請輸入 ${min}~${max} 之間的數字\n還剩下 ${attemptsLeft} 次機會`
    );

    if (userGuess === null || isNaN(userGuess) || userGuess.trim() === "") {
        alert("請輸入有效範圍內的數字！（不能選擇範圍的上下限）");
        continue;
    }

    const guess = Number(userGuess);
    if (guess <= min || guess >= max) {
         alert(`請輸入有效範圍內的數字！（不能選擇範圍的上下限）`);
        continue;
    }

    if (guess === targetNumber) {
        alert("恭喜你答對了！");
        guessedCorrectly = true;
        document.getElementById("result").innerHTML = `<img src="correct.jpg" alt="Correct Guess">`;
    } else if (guess < targetNumber) {
        alert("太小了！");
        min = Math.max(min, guess); // 更新最小範圍
    } else {
        alert("太大了！");
        max = Math.min(max, guess); // 更新最大範圍
    }

    attemptsLeft--;
}

    if (!guessedCorrectly) {
        alert(`很遺憾，遊戲結束。正確的答案是 ${targetNumber}！`);
        document.getElementById("result").innerHTML = `<img src="wrong.jpg" alt="Wrong Guess">`;
    }