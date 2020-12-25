//짚을 설명들
//server:
//접속을 받아주고 접속을 listen하고 있는 무언가
//npm:
//npm은 node.js에서 package를 사용하기 위한 도구다 일단 npm을 사용할려면 npm init을 한뒤
//여러 정보를 입력하고 깔고 싶은 package를 npm install package명 이렇게 install하면된다
//핵심 포인트
//express:
//express는 node.js로 서버를 간단한 코드 몇줄로 열수있게 도와주는 framework이다

//express 시작

const express = require('express');
//express를 node_modules에서 가져오는 거다
const app = express();
//express를 불러오고
const PORT = 8080;
//이건 중요 한거 아님 그저 포트


function handleHome (req, res) {
    //req는 서버에 들어오는 요청이고 예로 이 사이트의 html등 요소고
    //res는 그 요청에 대응 해주는 겄이다
    res.send('Chan zzang');
    //res.send()는 서버로 데이터를 전송하는 것인데 이렇게 쓰면 Cannot GET/이 안보이고 Chan zzang이 보인다
    //+참고로 res.send나 render이 없으면 "....무한의 츠크요미!!!!!!"가 아니라 무한 로딩이 된다
}


function handelListen(){
    console.log(`✅ Listening on: ${PORT}`)
}


app.get('/', handleHome);
//app.get은 이 서버에 누가 get형식으로 들어오면 이고 옆에 "/"는 여기 즉 localhost:8080/에 접속 하면 handleHome을 실행해라 이다
app.listen(PORT, handelListen);
//app.listen은 이 서버를 어떤 포트로 열겠단 소리고 ()안에 있는 8080은 그 포트 주소이다
//그리고 그옆에 있는 funtion은 "서버가 정상적으로 열리면" 작동 하는거다


//그리고 "scripts"에 "start"에 원하는 코드를 넣으면 자동으로 그코드가 npm start할때 마다 실행된다