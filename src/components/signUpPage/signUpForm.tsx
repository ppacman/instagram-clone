import { useState } from 'react';

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
      <label>
        이름
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <label>
        닉네임
        <input type="text" value={nickname} onChange={handleNicknameChange} required />
      </label>
      <label>
        비밀번호
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <label>
        이메일
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <button type="submit">가입하기</button>
    </form>
  );
}

export default SignUpForm;