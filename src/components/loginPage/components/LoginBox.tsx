import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import instagramTypo from "../../../../public/img/instagramTypo.png";
import facebook from "../../../../public/img/facebook.png";

const LoginBox = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validPw, setValidPw] = useState(false);
  const [validId, setValidId] = useState(false);
 
  const handleIdChange = (event: any) => {
    setIdValue(event.target.value);
    if (event.target.value.length > 0) {  
      setValidId(true);
    } else {
      setValidId(false);
    }
  };
  const handlePwChange = (event: any) => {
    setPwValue(event.target.value);
    if (event.target.value.length > 5) {
      setValidPw(true);
    } else {
      setValidPw(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: any) => {
    // 서버로 로그인 요청을 보냄
  };

  return (
    <FormWrraper>
      <TypoBox>
        <Image src={instagramTypo} alt={""} width={174} height={50} />
      </TypoBox>
      <DivWrraper>
        <form onSubmit={handleSubmit}>
          <IdDiv>
            <IdBox>
              <Label htmlFor="username">
                <IdInput
                  required
                  type="text"
                  id="username"
                  value={idValue}
                  onChange={handleIdChange}
                  className={idValue ? "enterd" : ""}
                />
                <IdSpan className={idValue ? "enterd" : ""}>
                  전화번호,사용자 이름 또는 이메일
                </IdSpan>
              </Label>
            </IdBox>
          </IdDiv>
          <PwDiv>
            <PwBox>
              <Label htmlFor="password">
                <PwInput
                  required
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={pwValue}
                  onChange={handlePwChange}
                  className={pwValue ? "enterd" : ""}
                />
                <PwSpan className={pwValue ? "enterd" : ""}>비밀번호</PwSpan>
              </Label>
              {pwValue && ( // pwValue가 비어있지 않을 때만 PwButton을 보여줌
                <PwBtnBox>
                  <PwButton type="button" onClick={toggleShowPassword}>
                    {showPassword ? "숨기기" : "비밀번호 표시"}
                  </PwButton>
                </PwBtnBox>
              )}
            </PwBox>
          </PwDiv>
          <LoginDiv>
            <LoginBtn
              disabled={!(validId && validPw)}
              className={(validId && validPw) ? "" : "unvalid"}
              onClick={handleSubmit}
              type="submit"
            >
              로그인
            </LoginBtn>
          </LoginDiv>
        </form>
        <LineDiv>
          <Line />
          <Typo>또는</Typo>
          <Line />
        </LineDiv>
        <FacebookDiv>
          <Image
            src={facebook}
            alt={""}
            width={20}
            height={20}
            margin-right="8px"
          />
          <FacebookTypo>Facebook으로 로그인</FacebookTypo>
        </FacebookDiv>
      </DivWrraper>
      <FindPw> 비밀번호를 잊으셨나요?</FindPw>
    </FormWrraper>
  );
};

export default LoginBox;

const FormWrraper = styled.div`
  width: 350px;
  height: 406.99px;
  border: 1px solid rgb(219, 219, 219);
  padding: 10px 0px 0px 0;
  align-items: center;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  margin: 0px 0px 0px;
  position: relative;
  vertical-align: baseline;
  margin-bottom: 10px;
`;

const TypoBox = styled.div`
  width: 174px;
  cursor: pointer;
  margin-top: 36px;
  margin-bottom: 12px;
  height: 53.6px;
`;

const DivWrraper = styled.div`
  margin: 24px 0px 10px 0px;
`;

const IdDiv = styled.div`
  margin: 0px 40px 6px;
  height: 37.6px;
  display: flex;
  justify-content: center;
`;
const IdBox = styled.div`
  width: 266.8px;
  height: 36px;
  border: 1px solid rgb(219, 219, 219);
  position: relative;
`;

const Label = styled.label``;

const IdInput = styled.input`
  /* 비어있는 경우 */
  position: absolute;
  border: none;
  outline: none;
  padding: 9px 0px 7px 8px;
  width: 97%;
  font-size: 16px;
  margin: 0%;
  /* 입력된 경우*/
  &.enterd {
    position: absolute;
    border: none;
    outline: none;
    width: 95%;
    padding: 14px 0px 2px 8px;
    flex: 1 0 auto;
    font-size: 12px;
    margin: 0%;
  }
`;

const IdSpan = styled.span`
  border: 0;
  color: rgb(115, 115, 115);
  font-size: 12px;
  left: 8px;
  line-height: 36px;
  margin: 0;
  padding: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  transform-origin: left;
  transition: transform ease-out 0.1s;
  vertical-align: baseline;
  white-space: nowrap;
  &.enterd {
    position: absolute;
    font-size: 12px;
    transition: 0.1s ease-out;
    transform: scale(calc(10 / 12)) translateY(-10px);
  }
`;

const PwDiv = styled.div`
  margin: 0px 40px 14px;
  height: 37.6px;
  display: flex;
  justify-content: center;
`;

const PwBox = styled.div`
  width: 266.8px;
  height: 36px;
  border: 1px solid rgb(219, 219, 219);
  position: relative;

  align-items: center;
`;

const PwInput = styled.input`
  position: absolute;
  border: none;
  outline: none;
  padding: 9px 0px 7px 8px;
  width: 97%;
  font-size: 16px;
  margin: 0%;
  /* 입력된 경우*/
  &.enterd {
    position: absolute;
    border: none;
    outline: none;
    width: 60%;
    padding: 14px 0px 2px 8px;
    flex: 1 0 auto;
    font-size: 12px;
    margin: 0%;
  }
`;

const PwSpan = styled.div`
  border: 0;
  color: rgb(115, 115, 115);
  font-size: 12px;
  left: 8px;
  line-height: 36px;
  margin: 0;
  padding: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  transform-origin: left;
  transition: transform ease-out 0.1s;
  vertical-align: baseline;
  white-space: nowrap;
  &.enterd {
    position: absolute;
    font-size: 12px;
    transition: 0.1s ease-out;
    transform: scale(calc(10 / 12)) translateY(-10px);
  }
`;

const PwBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PwButton = styled.button`
  color: rgb(38, 38, 38);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  display: inline-block;
  position: relative;
  top: 10px;
  padding-right: 8px;
`;

const LoginDiv = styled.div`
  margin: 0px 8px 18px 8px;
  height: 37.6px;
  display: flex;
  justify-content: center;
`;
const LoginBtn = styled.button`
  width: 268.4px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background-color: rgb(0, 149, 246);
  color: rgb(255, 255, 255);
  position: relative;
  font-size: 14px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  &.unvalid {
    opacity: 0.7;
  }
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgb(0, 149, 246)" : "rgb(24, 119, 242)"};
  }
`;

const LineDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 268.4px;
  height: 14.988px;
  align-items: center;
  margin-left: 40px;
  margin-bottom: 26px;
`;

const Line = styled.div`
  height: 1px;
  width: 103.2px;
  background-color: rgb(219, 219, 219);
  position: relative;
  display: block;
`;

const Typo = styled.div`
  width: 26px;
  height: 14.988px;
  color: rgb(115, 115, 115);
  font-size: 13px;
  font-weight: 600;
  margin: 0px 18px 0px 18px;
`;
const FacebookDiv = styled.button`
  width: 268.4px;
  height: 19.6px;
  margin: 0px 40px 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: white;
`;

const FacebookTypo = styled.div`
  color: rgb(56, 81, 133);
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
`;

const FindPw = styled.a`
  display: block;
  color: rgb(0, 55, 107);
  font-size: 12px;
  line-height: 16px;

  box-sizing: border-box;
  cursor: pointer;
`;
