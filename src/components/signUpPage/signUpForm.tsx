import { useState } from 'react';
import styled from 'styled-components';
import mainLogo from '../signUpPage/logo.png';

function SignUpForm() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // submit 이벤트 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 서버로 회원가입 데이터 전송
  };

  // 입력 값이 변경될 때마다 상태값 업데이트
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(event.target.value);
  };
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        {/* <img src={mainLogo} /> */}
        <div>
          친구들의 사진과 동영상을 보려면 가입하세요.
        </div>
        <div>
          <input type="text" value={emailOrPhone} placeholder='휴대폰 번호 또는 이메일 주소' onChange={handleEmailChange} required />
        </div>
        <div>
          <input type="text" value={fullname} placeholder="성명" onChange={handleNameChange} required />
        </div>
        <div>
          <input type="password" value={username} placeholder="사용자 이름" onChange={handleNicknameChange} required />
        </div>
        <div>
          <input type="email" value={password} placeholder="비밀번호" onChange={handlePasswordChange} required />
        </div>
        <Button type="submit">가입</Button>
      </Box>
    </form>
  );
}

export default SignUpForm;

const Button = styled.button`
  color: blue;
  width: 50px;
  height: 30px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-color: black;
  `;