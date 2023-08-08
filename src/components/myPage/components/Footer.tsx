import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterList>
        <Item>Meta</Item>
        <Item>소개</Item>
        <Item>블로그</Item>
        <Item>채용정보</Item>
        <Item>도움말</Item>
        <Item>API</Item>
        <Item>개인정보처리방침</Item>
        <Item>약관</Item>
        <Item>인기 계정</Item>
        <Item>위치</Item>
        <Item>Instagram Lite</Item>
        <Item>연락처 업로드 & 비사용자</Item>
        <Item>Meta Verified</Item>
      </FooterList>
      <SecondList>
        <SelectLanDiv>
          <SelectLanguage aria-label="표시 언어 변경" defaultValue="ko">
            <option value="af">Afrikaans</option>
            <option value="cs">Čeština</option>
            <option value="da">Dansk</option>
            <option value="de">Deutsch</option>
            <option value="el">Ελληνικά</option>
            <option value="en">English</option>
            <option value="en-gb">English (UK)</option>
            <option value="es">Español (España)</option>
            <option value="es-la">Español</option>
            <option value="fi">Suomi</option>
            <option value="fr">Français</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
            <option value="ms">Bahasa Melayu</option>
            <option value="nb">Norsk</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
            <option value="pt-br">Português (Brasil)</option>
            <option value="pt">Português (Portugal)</option>
            <option value="ru">Русский</option>
            <option value="sv">Svenska</option>
            <option value="th">ภาษาไทย</option>
            <option value="tl">Filipino</option>
            <option value="tr">Türkçe</option>
            <option value="zh-cn">中文(简体)</option>
            <option value="zh-tw">中文(台灣)</option>
            <option value="bn">বাংলা</option>
            <option value="gu">ગુજરાતી</option>
            <option value="hi">हिन्दी</option>
            <option value="hr">Hrvatski</option>
            <option value="hu">Magyar</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ml">മലയാളം</option>
            <option value="mr">मराठी</option>
            <option value="ne">नेपाली</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="si">සිංහල</option>
            <option value="sk">Slovenčina</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="vi">Tiếng Việt</option>
            <option value="zh-hk">中文(香港)</option>
            <option value="bg">Български</option>
            <option value="fr-ca">Français (Canada)</option>
            <option value="ro">Română</option>
            <option value="sr">Српски</option>
            <option value="uk">Українська</option>
          </SelectLanguage>
        </SelectLanDiv>
        <CopyRight>© 2023 Instagram from Meta</CopyRight>
      </SecondList>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
`;

const FooterList = styled.ul`
  margin-top: 24px;
  display: flex;
`;
const Item = styled.li`
  list-style: none;
  margin: 0 8px 12px;
  font-size: 12px;
  color: #737373;
`;
const SecondList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 12px 0px;
`;
const SelectLanDiv = styled.div``;
const SelectLanguage = styled.select`
  border: none;
  background-color: #fafafa;
  font-size: 12px;
  color: #737373;
  width: 55px;
`;
const CopyRight = styled.span`
  font-size: 12px;
  color: #737373;
`;
