import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleChange = async (e: any) => {
    e.target.value;
    try {
      const url = `http://localhost:8080/search?text=${e.target.value}`;
      const response = await axios.get(url);

      const searchResult = response.data;
      console.log(searchResult);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        onChange={(e) => {
          setInputValue(e.target.value);
          handleChange(e);
        }}
      ></Input>
    </Form>
  );
};

const Form = styled.form``;
const Input = styled.input.attrs({
  placeholder: "검색",
})`
  width: 100%;
  height: 30px;
  background: rgba(128, 128, 128, 0.3);
  font-size: 15px;
`;
export default InputForm;
