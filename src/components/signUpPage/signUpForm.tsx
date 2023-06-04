import { FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import logo from "../signUpPage/logo.png"; //이거는 이제 너  이미지 파일이 예를 들어    image.png 면  image 만 써서 import 하면 되고 이미지 파일은
// public 폴더에 image 파일에 담아놓으면 돼
import Image from "next/image"; //이게 넥스트에서 지절로 제공해주는 Image야

// import mainLogo from '/Users/maaaanzi/instagram-clone/src/components/signUpPage/logo.png';

function SignUpForm() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  // submit 이벤트 핸들러
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // 서버로 회원가입 데이터 전송
  // };

  // 입력 값이 변경될 때마다 상태값 업데이트
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(e.target.value);
    console.log(validateEmail(emailOrPhone));
    const check = validateEmail(emailOrPhone);
    setIsEmailValid(check);
  };

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validateEmail(emailOrPhone);
    setIsEmailValid(isValid);
  };
  
  const validateEmail = (emailOrPhone: string): boolean => {
    const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return emailRegExp.test(emailOrPhone);
  };
  // const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  // const emailCheck = (emailOrPhone:string) => {
  //   console.log(emailRegExp.test(emailOrPhone))
  //   return emailRegExp.test(emailOrPhone);
  // }

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegExp = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/; // 최소 8자리 이상, 숫자, 특수기호 포함
    // console.log(passwordRegExp.test(e.target.value))
    // if(!passwordRegExp) {
    //   return(console.log("false"))
    // }
    setPassword(e.target.value);
  };
  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) return { type: "text", visible: true };
      return { type: "password", visible: false };
    });
  };

  // const randomButton = () => {
  //   const randomId = Math.random().toString(36).substring(2,11);
  //   setUsername(randomId);
  //   console.log(randomId)
  // }

  return (
    <Form onSubmit={handleSignUp}>
      <Box>
        <Image src={logo} alt={""} width={200} height={80} />
        <Title>친구들의 사진과 동영상을 보려면 가입하세요.</Title>
        {/* <hr />
        <ContainerStyle><TextStyle>또는</TextStyle></ContainerStyle> */}
        <Email>
          <Input
            type="email"
            value={emailOrPhone}
            placeholder="휴대폰 번호 또는 이메일 주소"
            onChange={handleEmailChange}
            required
          ></Input>
        {isEmailValid ? <Check>성공</Check> : <Check>실패</Check>}
        {/* <Check>{isEmailValid ? '성공' : '실패'}</Check>  근데 이코드가 더 가독성도 좋고 쓰기도 간편한것 같아 기능은 똑같아*/}



        </Email>
        <Fullname>
          <Input
            type="text"
            value={fullname}
            placeholder="성명"
            onChange={handleFullnameChange}
            required
          ></Input>
        </Fullname>
        <Username>
          <Input
            type="text"
            value={username}
            placeholder="사용자 이름"
            onChange={handleUsernameChange}
            required
          ></Input>
          {/* <span onClick={randomButton}><RanButton>랜덤생성</RanButton></span> */}
        </Username>
        <Password>
          <PwForm>
            <Input
              type={passwordType.type}
              value={password}
              placeholder="비밀번호"
              onChange={handlePasswordChange}
              required
            />
            <span onClick={handlePasswordType}>
              {passwordType.visible ? (
                <CheckPw>숨기기</CheckPw>
              ) : (
                <CheckPw>비밀번호 표시</CheckPw>
              )}
            </span>
          </PwForm>
        </Password>
        <Button type="submit">가입</Button>
      </Box>
    </Form>
  );
}

export default SignUpForm;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  border: 1px solid;
  border-color: #b2bec3;
`;

const Button = styled.button`
  background-color: #74b9ff;
  width: 268px;
  height: 30px;
  margin: 8px 40px;
  border: 0px;
  border-radius: 8px;
  color: whitesmoke;
  font-weight: bold;
`;

const CheckPw = styled.button`
  position: absolute;
  right: 510px;
  top: 440px;
  font-weight: bold;
  /* width: auto;
  height: 38px; */
  border: none;
  background: none;
  &:hover {
    color: grey;
  }
`;

const Check = styled.span`
  position: absolute;
  right: 510px;
  top: 278px;
`;

// const RanButton = styled.button`
//   position: absolute;
// `;

const Input = styled.input`
  width: 268px;
  height: 38px;
  margin: 5px 5px;
  position: relative;
  /* color: #dfe6e9; */
`;

// const Image = styled.img`
//   width: 50px;
//   height: 30px;
//   `;

const Title = styled.div`
  color: grey;
  font-size: 16px;
  font-weight: bold;
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

// const ContainerStyle = styled.div`
//   width: "100%";
//   text-align: center;
//   border: "1px solid";
//   /* lineHeight: "0.1em"; */
//   margin: "10px 0 20px";
// `;

// const TextStyle = styled.div`
// color: grey;
// background: "#fff";
// padding: "0 10px";
// `
