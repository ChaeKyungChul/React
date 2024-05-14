import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    ageGroup: "",
    operatingSystem: "",
    computerInterest: "",
    deviceUsage: "",
    phoneType: "",
    programmingLanguage: ""
  });

  const [isChecked, setIsChecked] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 폼 검증...

    const myforms = {
      name: formData.name,
      gender: formData.gender,
      ageGroup: formData.ageGroup,
      operatingSystem: formData.operatingSystem,
      computerInterest: formData.computerInterest,
      deviceUsage: formData.deviceUsage,
      phoneType: formData.phoneType,
      programmingLanguage: formData.programmingLanguage,
      remember: isChecked
    };

    try {
      const res = await axios.post('/api', myforms);
      setResponseMessage(res.data);
      setFormData({
        name: "",
        gender: "",
        ageGroup: "",
        operatingSystem: "",
        computerInterest: "",
        deviceUsage: "",
        phoneType: "",
        programmingLanguage: ""
      });
      setIsChecked(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-5 text-center">MY FORM</h1>

      {responseMessage ?
        <div>
          <h2>입력하신 내용은 다음과 같습니다:</h2>
          <ul>
            <li>당신의 이름은 무엇입니까? {responseMessage.name}</li>
            <li>성별은 무엇입니까? {responseMessage.gender}</li>
            <li>연령층은 어떻게 되십니까? {responseMessage.ageGroup}</li>
            <li>주로 이용하는 운영체제는 어떤 것입니까? {responseMessage.operatingSystem}</li>
            <li>관심 있는 컴퓨터 분야는 어느쪽입니까? {responseMessage.computerInterest}</li>
            <li>하루에 컴퓨터와 모바일 중 어느 것을 더 많이 이용하나요? {responseMessage.deviceUsage}</li>
            <li>휴대폰의 종류는 어떤 것입니까? {responseMessage.phoneType}</li>
            <li>관심있는 언어는? {responseMessage.programmingLanguage}</li>
            <li>기억 {responseMessage.remember ? "합니다" : "하지 않습니다"}</li>
          </ul>
        </div>
      
        :
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">1. 당신의 이름은 무엇입니까?:</label>
            <input type="text"
              className="form-control"
              id="name"
              placeholder="이름"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">2. 성별은 무엇입니까?:</label>
            <div className="form-check">
              <input className="form-check-input"
                type="radio"
                name="gender"
                value="남"
                checked={formData.gender === '남'}
                onChange={handleChange} />
              <label className="form-check-label">남</label>
            </div>
            <div className="form-check">
              <input className="form-check-input"
                type="radio"
                name="gender"
                value="여"
                checked={formData.gender === '여'}
                onChange={handleChange} />
              <label className="form-check-label">여</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">3. 연령층은 어떻게 되십니까?:</label>
            <select className="form-control" name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="10대">10대</option>
              <option value="20대">20대</option>
              <option value="30대">30대</option>
              <option value="40대">40대</option>
              <option value="50대">50대</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">4. 주로 이용하는 운영체제는 어떤 것입니까?:</label>
            <select className="form-control" name="operatingSystem" value={formData.operatingSystem} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="윈도우">윈도우</option>
              <option value="리눅스">리눅스</option>
              <option value="매킨토시">매킨토시</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">5. 관심 있는 컴퓨터 분야는 어느쪽입니까?:</label>
            <select className="form-control" name="computerInterest" value={formData.computerInterest} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="그래픽">그래픽</option>
              <option value="프로그래밍">프로그래밍</option>
              <option value="자격증">자격증</option>
              <option value="게임">게임</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">6. 하루에 컴퓨터와 모바일중 어느 것을 더 많이 이용하나요?:</label>
            <select className="form-control" name="deviceUsage" value={formData.deviceUsage} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="컴퓨터">컴퓨터</option>
              <option value="모바일">모바일</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">7. 휴대폰의 종류는 어떤 것입니까?:</label>
            <select className="form-control" name="phoneType" value={formData.phoneType} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="갤럭시">갤럭시</option>
              <option value="아이폰">아이폰</option>
              <option value="기타">기타</option>
              <option value="없음">없음</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">8. 관심있는 언어는?:</label>
            <select className="form-control" name="programmingLanguage" value={formData.programmingLanguage} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="자바">자바</option>
              <option value="파이썬">파이썬</option>
              <option value="모던웹">모던웹</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input"
                type="checkbox"
                name="remember"
                checked={isChecked}
                onChange={handleCheckboxChange}
              /> 기억하기
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      }
    </div>
  )
}

export default App;