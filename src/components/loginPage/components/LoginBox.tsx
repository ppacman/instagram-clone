import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import instagramTypo from "../../../../public/img/instagramTypo.png";

const LoginBox = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleIdChange = (event : any) => {
    setIdValue(event.target.value);
  };
  const handlePwChange = (event: any) => {
    setPwValue(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event : any) => {
    event.preventDefault();
    // 서버로 로그인 요청을 보냄
  };

  return (
    <Wrraper>
      <TypoBox>
      <Image src={instagramTypo} alt={""} width = {174} height={50}/>
      </TypoBox>
      <form onSubmit={handleSubmit}>
      <IdBox>
        <Label htmlFor="username">
          <IdInput
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
      <PwBox>
        <Label htmlFor="password">
          <PwInput
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
            <PwButton onClick={toggleShowPassword}>
              {showPassword ? "숨기기" : "비밀번호 표시"}{" "}
            </PwButton>
          </PwBtnBox>
        )}
      </PwBox>
      </form>
    </Wrraper>
  );
};

export default LoginBox;

const Wrraper = styled.div`
  width: 348.4px;
  height: 377.387px;
  border: 1px solid rgb(219, 219, 219);
  padding : 10px 0px 10px 0;
`;

const TypoBox = styled.div`
  width : 348.4px;


`
const IdBox = styled.div`
  width: 266.8px;
  height: 36px;
  border: 1px solid rgb(219, 219, 219);
  position: relative;
  margin: 20px;
`;

const Label = styled.label``;

const IdInput = styled.input`
  /* 비어있는 경우 */
  position: absolute;
  border: none;
  outline: none;
  padding: 9px 0px 7px 8px;
  width: 95%;
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

const PwBox = styled.div`
  width: 266.8px;
  height: 36px;
  border: 1px solid rgb(219, 219, 219);
  position: relative;
  margin: 20px;
`;

const PwInput = styled.input`
  position: absolute;
  border: none;
  outline: none;
  padding: 9px 0px 7px 8px;
  width: 60%;
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
  position: relative;
  left : 200px;
  
`;

const PwButton = styled.button`
  color: rgb(38, 38, 38);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

`;
