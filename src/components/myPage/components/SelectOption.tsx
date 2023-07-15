import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface SelectOptionProps {
  getOptionNum: (optionNum: number) => number;
}
const SelectOption = ({ getOptionNum }: SelectOptionProps) => {
  const [optionClick, setOptionClick] = useState(1);

  useEffect(() => {
    getOptionNum(optionClick);
  }, [optionClick]);
  return (
    <Container>
      <OptionList>
        <OptionItem
          onClick={() => {
            document.documentElement.scrollTop = 0;
            setOptionClick(1);
          }}
          optionClick={optionClick}
          className={optionClick === 1 ? "active" : ""}
        >
          <svg aria-label="" className="_ab6-" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
          게시물
        </OptionItem>
        <OptionItem
          onClick={() => {
            document.documentElement.scrollTop = 0;
            setOptionClick(2);
          }}
          optionClick={optionClick}
          className={optionClick === 2 ? "active" : ""}
        >
          <svg aria-label="" className="_ab6-" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
          저장됨
        </OptionItem>
        <OptionItem
          onClick={() => {
            document.documentElement.scrollTop = 0;
            setOptionClick(3);
          }}
          optionClick={optionClick}
          className={optionClick === 3 ? "active" : ""}
        >
          <svg aria-label="" className="_ab6-" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
          태그됨
        </OptionItem>
      </OptionList>
    </Container>
  );
};

export default SelectOption;

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  width: 935px;
`;
const OptionList = styled.div`
  display: flex;
  gap: 60px;
`;
const OptionItem = styled.div<{ optionClick: number }>`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 57px;
  height: 52px;
  font-size: 13px;
  margin-top: -1px;
  color: rgb(115, 115, 115);
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: black;
    border-top: 1px solid black;
    
      margin-top: -2px;
    
  }
`;
