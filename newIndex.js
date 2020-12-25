import express from "express";
//이제 babel을 적용시켜 es6의 기능을 쓸수있다 예로 require을 import로
const app = express();
const PORT = 8080;


const handleHome = (req, res) => res.send('Chan zzang');
//funtion은 arrow funtion으로

const handelListen = () => console.log(`✅ Listening on: localhost:${PORT}`)

const handleProfile = (req,res) => res.send("profile");

app.get('/', handleHome);
//자 middleware을 알아보자
app.get("/profile", handleProfile)
app.listen(PORT, handelListen);