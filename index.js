const express = require('express'); // 설치한 라이브러리 가져오기 
const app = express(); // 가져온 라이브러리 사용 

// 8080 포트에 서버를 열어주세요 그리고 function 내부를 실행해주세요 
// IP? 컴퓨터의 네트워크 주소. 서울 강남구 무슨동 타워팰리스. 서울 강남구 무슨동 은마아파트 같은 주소
// Port? 컴퓨터 네트워크 세부 주소. 101동 101호, 104동 303호 같은 주소 
app.listen(8080, function()
{
    console.log('server listen : 8080'); //서버가 열리면 괄호 안의 글을 남겨주세요
});

// / 위치( = 대문)로 방문하면, 
app.get('/', function(req, res)
{
    // 아래의 문장으로 응답해주세요 반응해주세요 
    res.send("Welcome to DDM World!");
});

// /user 위치로 방문하면, 
app.get('/user', function(req, res)
{
    // 아래의 문장으로 응답해주세요 반응해주세요 
    res.send("Welcome to User!!");
});