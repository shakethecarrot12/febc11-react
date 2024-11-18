import { useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('010');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCellphoneChange = (event) => {
    setCellphone(event.target.value);
  };

  return (
    <>
      <h1>05 회원가입 입력값 상태 관리</h1>

      <form>
        <label htmlFor="name">이름</label>
        <input 
          id="name"
          name="name"
          value={ name }
          onChange={ handleNameChange }
        /><br/>
        <div>검증 실패 메세지</div>

        <label htmlFor="email">이메일</label>
        <input 
          id="email"
          name="email"
          value={ email }
          onChange={ handleEmailChange }
        /><br/>
        <div>검증 실패 메세지</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input 
          id="cellphone"
          name="cellphone"
          value={ cellphone }
          onChange={ handleCellphoneChange }
        /><br/>
        <div>검증 실패 메세지</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: <br/>
        이메일: <br/>
        휴대폰: <br/>
      </p>
    </>
  );
}

export default App
