import { useState } from 'react';
import styled from 'styled-components';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  // submit 이벤트 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 서버로 회원가입 데이터 전송
  };

  // 입력 값이 변경될 때마다 상태값 업데이트
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <img src='logo.png' />
      <div>
        친구들의 사진과 동영상을 보려면 가입하세요.
      </div>
      <div>
        휴대폰 번호 또는 이메일 주소
        <input type="text" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        성명
        <input type="text" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        사용자 이름
        <input type="password" value={nickname} onChange={handleNicknameChange} required />
      </div>
      <div>
        비밀번호
        <input type="email" value={password} onChange={handlePasswordChange} required />
      </div>
      <Button type="submit">가입</Button>
    </form>
  );
}

export default SignUpForm;

const Button = styled.button`
  color: blue;
  width: 50px;
  height: 30px;
`;