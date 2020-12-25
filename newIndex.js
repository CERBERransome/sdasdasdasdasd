//*********************** import ***********************
//main
import express from "express";
//이제 babel을 적용시켜 es6의 기능을 쓸수있다 예로 require을 import로

//middleware
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

//*********************** import ***********************
const app = express();
const PORT = 8080;


const handleHome = (req, res) => res.send('Chan zzang');
//funtion은 arrow funtion으로

const handelListen = () => console.log(`✅ Listening on: localhost:${PORT}`)

const handleProfile = (req,res) => res.send("profile");






const handleBetwwen = (req,res,next) => {
    //req와 res와 next라는 것이 매개변수로 있는데 위에서는 next를 안써서 표기를 안한것뿐이지
    //원래 모든 middleware(?)은 다 req,res,next를 가지고 있다
    console.log("im in the Betwwen");
    next();
    //이렇게 next를 안하면 여기 에서 멈추어 버리고 다음인 handleHome이 실행이 안된다
    //※꼭 넣어야 한다※
}






//start morgan
app.use(morgan("dev"))
//morgan은 이렇게 설정하고 short -> tiny -> dev -> common -> combind순으로 log양이 많아진다 우리가 사용할건 dev👨🏼‍💻이다
//start helmet
app.use(helmet())
//다를거 없다 이게끝
//start cookiePaser and bodyParser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
//https://github.com/expressjs/body-parser
//이렇게 옵션이 있는데 다 이해는 안해도 되고 얘기 하는 것만 이해해라
//뒤에 urlencoded랑 json은 이 form이 받는 data방식이다 그리고 ()안에 있는건 나도 모름
app.use(cookieParser());
//별거 없다







// app.use(handleBetwwen)

app.get('/', handleHome);//handleBetwwen,handleHome);
//자 middleware을 알아보자
//※주의 초큼 어려움※
//express에서 midelware란 처리가 끝날때까지 연결되 있는거다 이상하게 들릴거다
//이해해야 할건 우선 어떻게 연결이 시작되는가 이다
//이해했나?
//midelware을 쉽게 설명하면 현재 /와 handle사이에 handleBetwwen이 있다 그럼
//handleHome에 가기전에 handleBetwwen를 먼저 실행한다 그리고 참고로 예내가
//middleware인지 판단하는 방법은 middleware에 res.send가 있는가이다
//있으면 그건 middleware가 아니고 없으면 middleware이다
//자 이렇게 해서 handleBetwwen에서 console.log("im in the Betwwen")을 하게 하자
//보면 localhost:8080에 접속하니 console에 ...betwwen이 뜬다
//이해 했나? 이해 안되면 #2.6 blackmonkey댓글
//아! 그리고 app.use(middleware)이렇게 넣으면 use한 순서대로 즉 위;에서 아래 순서로(여러개 넣을수 있음)
//모든 router에 middleware로 적용된다

//정 이해가 안됀다 그럼 이걸 봐라
//midleware 은 video를 upload하는걸 middleware로 가로체가서 그 video파일을 db에 올릴수 있다

//모든 예시는 다 처음에 start midleware이름 이렇게 되어있음
// Morgan - 로그를 남겨줌
// helmet - 기초보안담당함
// cookieParser - 쿠키를 다룰 수 있음
// bodyParser - form데이터를 서버로 받아와서 활용가능함.
//이렇게 npm 으로 올라와 있는 유명한 middleware도 있다

app.get("/profile", handleProfile)
app.listen(PORT, handelListen);