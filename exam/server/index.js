const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("서버실행 완료");
});

app.post("/api", (req, res) => {
  const { name, gender, ageGroup, operatingSystem, computerInterest, deviceUsage, phoneType, programmingLanguage, remember } = req.body;

  let rememberText = remember ? "기억하기" : "기억하지 않기";

  console.log("입력된 값:");
  console.log("이름:", name);
  console.log("성별:", gender);
  console.log("연령층:", ageGroup);
  console.log("운영체제:", operatingSystem);
  console.log("컴퓨터 관심 분야:", computerInterest);
  console.log("컴퓨터와 모바일 사용:", deviceUsage);
  console.log("휴대폰 종류:", phoneType);
  console.log("관심 언어:", programmingLanguage);
  console.log("기억:", rememberText);

  res.json({
    name,
    gender,
    ageGroup,
    operatingSystem,
    computerInterest,
    deviceUsage,
    phoneType,
    programmingLanguage,
    remember: rememberText
  });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버가 대기중...`);
});