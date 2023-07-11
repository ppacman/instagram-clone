import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

interface PostFormProps {
  onSubmit: (caption: string, image: File | null) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleCaptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(caption, image);
  };

  return (
    <Background>
      <FormContainer>
        <TitleContainer>
          <FormTitle>새 게시물 만들기</FormTitle>
        </TitleContainer>

   


        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="caption">캡션</Label>
            <CaptionInput
              type="text"
              id="caption"
              value={caption}
              onChange={handleCaptionChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">이미지</Label>
            <ImageInput
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </FormGroup>
          <SubmitButton type="submit">등록</SubmitButton>
        </Form>
      </FormContainer>
    </Background>
  );
};

export default PostForm;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경을 어두운 색상과 투명도로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 527px;
  height: 569.6px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  width: 527px;
  height: 42.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
`;

const DragContainer = styled.div`
    width : 479px;
    height: 478.6px;
    padding : 24px;
`
const 일단 = styled.div`

    
`


const FormTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const CaptionInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ImageInput = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
