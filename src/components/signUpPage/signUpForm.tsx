import { useCallback, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import logo from "../signUpPage/logo.png";
//이거는 이제 너  이미지 파일이 예를 들어    image.png 면  image 만 써서 import 하면 되고 이미지 파일은
// public 폴더에 image 파일에 담아놓으면 돼
import Image from "next/image"; //이게 넥스트에서 지절로 제공해주는 Image야

import { MdOutlineCancel, MdOutlineCheckCircleOutline } from "react-icons/md";
import { isForStatement } from "typescript";
import Router from "next/router";
import { pathName } from "../../../src/config/pathName";

// import mainLogo from '/Users/maaaanzi/instagram-clone/src/components/signUpPage/logo.png';

function MoveToLogin() {
  return (
    <SmallBox>
      <Text>
        이미 계정이 있으신가요? <Link href="/login"> Log in</Link>
      </Text>
    </SmallBox>
  );
}

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

  const handleRouter = (router: string) => {
    Router.push(router);
  };

  // submit 이벤트 핸들러
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // 서버로 회원가입 데이터 전송
  // };

  const handleSpanEvent = (e: any) => {
    if (e.target.value === "") {
      e.target.previousSibling.style.transform = "";
    } else {
      e.target.previousSibling.style.transform =
        "scale(calc(10 / 12)) translateY(-13px)";
    }
  };

  // 입력 값이 변경될 때마다 상태값 업데이트
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSpanEvent(e);
    let span = e.target.previousSibling;
    setEmailOrPhone(e.target.value);
    // console.log(validateEmail(emailOrPhone));
    const check = validateEmail(emailOrPhone);
    setIsEmailValid(check);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const target = e.target as HTMLFormElement;
    // console.log(target.email.value);
    // console.log(target.name.value);
    // console.log(target.username.value);
    // console.log(target.pw.value);
    const data = {
      email: emailOrPhone,
      name: fullname,
      username: username,
      pw: password,
    };
    console.log(data);

    const JSONdata = JSON.stringify(data);

    const endpoint = "http://localhost:8080/api/signUp";
    try {
      const options = {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSONdata,
      };

      const response = await fetch(endpoint, options);

      () => handleRouter(pathName.SIGNUP);
    } catch (error) {
      console.error("Error sending comment:", error);
    }
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
    handleSpanEvent(e);
    setFullname(e.target.value);
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSpanEvent(e);
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSpanEvent(e);
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

  const handleInputFocus = (e: any) => {};

  // const randomButton = () => {
  //   const randomId = Math.random().toString(36).substring(2,11);
  //   setUsername(randomId);
  //   console.log(randomId)
  // }

  return (
    <>
      <Box>
        <FormBox>
          <ImageBox>
            <Image src={logo} alt={""} width={200} height={80} />
          </ImageBox>
          <Form onSubmit={handleSignUp}>
            <Title>친구들의 사진과 동영상을 보려면 가입하세요.</Title>
            {/* <hr />
        <ContainerStyle><TextStyle>또는</TextStyle></ContainerStyle> */}
            <InputDiv>
              <Label>
                <InputText className="transform">
                  휴대폰 번호 또는 이메일 주소
                </InputText>
                <Input
                  name="email"
                  type="email"
                  value={emailOrPhone}
                  onChange={handleEmailChange}
                  onFocus={handleInputFocus}
                  required
                ></Input>
              </Label>
              <InputStatus>
                {isEmailValid ? (
                  <MdOutlineCheckCircleOutline
                    style={{ fontSize: "24px", color: "gray" }}
                  />
                ) : (
                  <MdOutlineCancel style={{ fontSize: "24px", color: "red" }} />
                )}
              </InputStatus>
              {/*   근데 이코드가 더 가독성도 좋고 쓰기도 간편한것 같아 기능은 똑같아*/}
            </InputDiv>
            <InputDiv>
              <Label>
                <InputText>성명</InputText>
                <Input
                  name="name"
                  type="text"
                  value={fullname}
                  onChange={handleFullnameChange}
                  onFocus={handleInputFocus}
                  required
                ></Input>
              </Label>
              <InputStatus>
                {fullname ? (
                  <MdOutlineCheckCircleOutline
                    style={{ fontSize: "24px", color: "gray" }}
                  />
                ) : (
                  <MdOutlineCancel style={{ fontSize: "24px", color: "red" }} />
                )}
              </InputStatus>
            </InputDiv>
            <InputDiv>
              <Label>
                <InputText>사용자 이름</InputText>
                <Input
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  onFocus={handleInputFocus}
                  required
                ></Input>
              </Label>
              <InputStatus>
                {username ? (
                  <MdOutlineCheckCircleOutline
                    style={{ fontSize: "24px", color: "gray" }}
                  />
                ) : (
                  <MdOutlineCancel style={{ fontSize: "24px", color: "red" }} />
                )}
              </InputStatus>
            </InputDiv>
            <InputDiv>
              <Label>
                <PwForm>
                  <InputText>비밀번호</InputText>
                  <Input
                    name="pw"
                    type={passwordType.type}
                    value={password}
                    onChange={handlePasswordChange}
                    onFocus={handleInputFocus}
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
              </Label>
              <InputStatus>
                {password ? (
                  <MdOutlineCheckCircleOutline
                    style={{ fontSize: "24px", color: "gray" }}
                  />
                ) : (
                  <MdOutlineCancel style={{ fontSize: "24px", color: "red" }} />
                )}
              </InputStatus>
            </InputDiv>
            <Button type="submit">가입</Button>
          </Form>
        </FormBox>
        <MoveToLogin />
      </Box>
    </>
  );
}

export default SignUpForm;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 450px;
  border: 1px solid;
  border-color: #b2bec3;
  margin: 0 0 10px;
`;
const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  margin-top: 36px;
  margin-bottom: 12px;
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

const Input = styled.input`
  border: 0;
  flex: 1 0 auto;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
`;
const Title = styled.div`
  color: grey;
  font-size: 16px;
  font-weight: 600px;
  text-align: center;
  margin: 0 40px 10px;
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-style: solid;
  border-color: rgb(168, 168, 168);
  border-width: 1px;
  margin: 0 40px 6px;
`;

// const Fullname = styled.div`
//   position: relative;
//   border-style: solid;
//   border-color: rgb(168, 168, 168);
//   border-width: 1px;
//   margin: 0 40px 6px;
// `;

// const Username = styled.div`
//   position: relative;
//   border-style: solid;
//   border-color: rgb(168, 168, 168);
//   border-width: 1px;
//   margin: 0 40px 6px;
// `;

// const Password = styled.div`
//   position: relative;
//   border-style: solid;
//   border-color: rgb(168, 168, 168);
//   border-width: 1px;
//   margin: 0 40px 6px;
// `;

const PwForm = styled.div`
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  border: 0;
  display: flex;
  flex: 1 0 0px;
  height: 36px;
  margin: 0;
  min-width: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const InputText = styled.span`
  font-size: 12px;
  color: grey;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  transform-origin: left;
  transition: transform ease-out 0.1s;
  transform: none;
`;

const InputStatus = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
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

/////

const SmallBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 70px;
  border: 1px solid;
  border-color: #b2bec3;
`;

const Text = styled.p`
  margin: 15px;
  font-size: 14px;
`;
