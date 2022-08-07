let num = 0;

function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(tId);
    }
}


// setInterval(showTime,1000);  //1초마다 콘솔에 새로 찍힘

const tId = setInterval(showTime, 1000); //4초까지만 콘솔에 찍힘.