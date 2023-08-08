import React, { useState } from "react";
import styled from "styled-components";

interface CaptionProps {
  onChange: (value: string) => void;
  amount: number;
}

const Caption: React.FC<CaptionProps> = ({ onChange, amount }) => {
  const MAX_CHARACTERS = 2200;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onChange(value); // 부모 컴포넌트에서 입력값을 받아옵니다.
 
  };
  return (
    <div>
      <CaptionBox>
        <CaptionArea
          placeholder="문구 입력..."
          onChange={handleInputChange}
          maxLength={MAX_CHARACTERS}
        />
      </CaptionBox>
      <EmogiWrapper>
        <EmogiBox>
          <Emogi>
            <svg
              aria-label="이모티콘"
              className="x1lliihq x1n2onr6"
              color="rgb(115, 115, 115)"
              fill="rgb(115, 115, 115)"
              height="20"
              role="img"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
            </svg>
          </Emogi>
        </EmogiBox>
        <AmountBox>
          <AmountSpan>
            {amount}/{MAX_CHARACTERS}
          </AmountSpan>
        </AmountBox>
      </EmogiWrapper>
    </div>
  );
};

export default Caption;

const CaptionArea = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  align-items: flex-start;
  resize: none;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  box-sizing: border-box;
`;

const CaptionBox = styled.div`
  width: 290.4px;
  padding: 0px 16px 0px 16px;
  height: 168px;
  align-items: flex-start;
`;

const EmogiWrapper = styled.div`
  width: 323.2px;
  height: 44px;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  align-items: center;
`;

const EmogiBox = styled.div`
  width: 237.363px;
  height: 36px;
  padding: 4px 8px 4px 8px;
  display: flex;
  align-items: center;
`;
const Emogi = styled.div`
  width: 20px;
  height: 20px;
  padding: 8px;
`;

const AmountBox = styled.div`
  width: 45.037px;
  height: 44px;
  padding: 0px 12px 0px 12px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const AmountSpan = styled.span`
  font-size: 12px;
  height: 11px;
  white-space: nowrap;
  color: #c7c7c7;
`;
