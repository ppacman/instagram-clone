import { useCallback, useState } from 'react';
import styled from 'styled-components';
// import mainLogo from '/Users/maaaanzi/instagram-clone/src/components/signUpPage/logo.png';

function SignUpForm() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState({
    type : "password",
    visible : false,
  })

  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');

  // submit 이벤트 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 서버로 회원가입 데이터 전송
  };

  // 입력 값이 변경될 때마다 상태값 업데이트
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(!emailRegExp) {
      return(false)
    }
    setEmailOrPhone(e.target.value);
  };
  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegExp = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ // 최소 8자리 이상, 숫자, 특수기호 포함
    // console.log(passwordRegExp.test(e.target.value))
    // if(!passwordRegExp) {
    //   return(console.log("false"))
    // }
    // setPassword(e.target.value);
  };
  const handlePasswordType = () => {
    setPasswordType(() => {
      if(!passwordType.visible)
        return {type:"text", visible: true};
      return {type:"password", visible: false}
    })
  }

  const randomButton = () => {
    const randomId = Math.random().toString(36).substring(2,11);
    setUsername(randomId);
    console.log(randomId)
  }
  

  return (
    // <form onSubmit={handleSubmit}>
      <Box>
        <Img src='src/components/signUpPage/logo.png'></Img>
        <Title>
          친구들의 사진과 동영상을 보려면 가입하세요.
        </Title>
        <Email>
          <Input type="email" value={emailOrPhone} placeholder='휴대폰 번호 또는 이메일 주소' onChange={handleEmailChange} required></Input>
        </Email>
        <Fullname>
          <Input type="text" value={fullname} placeholder="성명" onChange={handleFullnameChange} required></Input>
        </Fullname>
        <Username>
          <Input type="text" value={username} placeholder="사용자 이름" onChange={handleUsernameChange} required></Input>
          <span onClick={randomButton}>랜덤생성</span>
        </Username>
        <Password>
          <PwForm>
            <Input type={passwordType.type} value={password} placeholder="비밀번호" onChange={handlePasswordChange} required  />
            <span onClick={handlePasswordType}>{passwordType.visible ? <CheckPw>숨기기</CheckPw> : <CheckPw>비밀번호 표시</CheckPw>}</span>
          </PwForm>
        </Password>
        <Button type="submit">가입</Button>
      </Box>
    // </form>
  );
}

export default SignUpForm;



const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  `;

const Button = styled.button`
background-color: #74b9ff;
width: 50px;
height: 30px;
margin: 8px 40px;
`;

const CheckPw = styled.button`
  position: absolute;
  /* width: auto;
  height: 38px; */
  border: none;
  background: none;
  &:hover {
    color: grey;
  }
  
`;

// const RanButton = styled.button`
//   width: 52px;
//   height: 38px;
//   margin: 5px 5px;
// `;


const Input = styled.input`
width: 268px;
height: 38px;
margin: 5px 5px;
position: relative;
/* color: #dfe6e9; */
`;

  const Img = styled.img`
    width: 50px;
    height: 30px;
    `;

  const Title = styled.div`
    font-size: 24px;
  `;

  const Email = styled.div``;

  const Fullname = styled.div``;

  const Username = styled.div``;

  const Password = styled.div`
    display: flex;
    flex-direction: column;
    `;

  const PwForm = styled.div`
    align-items: center;
    justify-content: center;
  `;