/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from "react";
import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  contentStyle,
  nameStyle,
  buttonArea,
  buttonWrapperStyle1,
  buttonStyle1,
  buttonWrapperStyle2,
  buttonStyle2,
  selectedFileContainerStyle,
  selectedFileLabelStyle,
  selectedFileStyle,
  fileNameStyle,
} from "./PostCreate.style";

import { createPost } from "../../apis/post/Post";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header'; 

function PostCreate() {
  useEffect(() => {
    localStorage.setItem(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IuynhOyasO2DnCIsInJvbGUiOiJVU0VSIiwidXNlcklkIjoyMiwiaWF0IjoxNzUwNzQ5MTQzLCJleHAiOjE3NTA3NTI3NDN9.tWRdh83UMJw8DpwSATtxlcV2RT2L26iJGoREXzcGlg0"
    );
  }, []);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFiles((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await createPost(title, content, selectedFiles);
      alert("게시글이 등록되었습니다.");
      navigate("/api/v1/posts");

      setTitle("");
      setContent("");
      setSelectedFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err: any) {
      console.error("[handleSubmit] 요청 중 오류:", err);
      if (err.response) {
        alert(err.response.data.message || "오류 발생 (서버 응답)");
      } else {
        alert(err.message || "오류 발생 (서버 응답 없음)");
      }
    }
  };

  return (
    <>
      <Header />
      <h1 css={nameStyle}>게시판</h1>
      <div css={containerStyle}>
        <header>
          <h3 css={titleStyle}>게시판</h3>
        </header>

        <label css={labelStyle}>
          제목
          <input css={inputStyle} type="text" placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <textarea css={contentStyle} placeholder="내용을 입력하세요." value={content} onChange={(e) => setContent(e.target.value)} />

        <div css={buttonArea}>
          <div css={buttonWrapperStyle1}>
            <button type="button" css={buttonStyle1} onClick={handleFileSelect}>
              이미지 선택
            </button>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} accept="image/*" multiple />
            {selectedFiles.length > 0 && (
              <div css={selectedFileContainerStyle}>
                <div css={selectedFileLabelStyle}>선택된 파일:</div>
                <div css={selectedFileStyle}>
                  {selectedFiles.map((file, idx) => (
                    <span key={idx} css={fileNameStyle}>
                      {file.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div css={buttonWrapperStyle2}>
            <button type="button" css={buttonStyle2} onClick={handleSubmit}>
              작성완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCreate;
