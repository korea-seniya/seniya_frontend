/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
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
  fileNameStyle
} from './PostCreate.style';

function PostCreate() {
  localStorage.setItem("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InF3ZXIxMjM0NTYiLCJyb2xlIjoiVVNFUiIsInVzZXJJZCI6MTAsImlhdCI6MTc1MDMxMDYzNywiZXhwIjoxNzUwMzE0MjM3fQ.vH-9e-Fmla8vWwmHl7_EYkCARJ1od8LJw_Ccj0GqkfY")
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // selectedFiles를 File 배열로 변경
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // 기존에 있던 파일과 새로 선택한 파일들을 합쳐서 상태 업데이트
      setSelectedFiles((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const handleSubmit = async () => {
  const token = localStorage.getItem('accessToken');
  console.log('[게시글 생성] 토큰:', token);

  if (!token) {
    alert('로그인이 필요합니다.');
    return;
  }

  const dto = {
    title,
    content,
  };

  const formData = new FormData();
  formData.append('data', new Blob([JSON.stringify(dto)], { type: 'application/json' }));
  selectedFiles.forEach((file) => formData.append('file', file));

  try {
    const response = await fetch('http://localhost:8080/api/v1/posts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        // Content-Type 생략: multipart/form-data는 브라우저가 자동 설정
      },
      body: formData,
    });

    console.log('[handleSubmit] 응답 상태:', response.status);

    if (!response.ok) {
      const errorText = await response.text(); // 에러 응답 바디 안전하게 받기
      console.error('[handleSubmit] 서버 응답 에러:', errorText);
      throw new Error('게시글 작성 실패');
    }

    // 성공 응답 처리 (비어있는 경우도 대비)
    const text = await response.text();
    const data = text ? JSON.parse(text) : {}; // 비어있으면 빈 객체 처리
    console.log('[handleSubmit] 게시글 등록 성공:', data);
    alert('게시글이 등록되었습니다.');

    // 초기화
    setTitle('');
    setContent('');
    setSelectedFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  } catch (err: any) {
    console.error('[handleSubmit] 요청 중 오류:', err);
    alert(err.message || '오류 발생');
  }
};


  return (
    <div>
      <h1 css={nameStyle}>게시판</h1>
      <div css={containerStyle}>
        <header>
          <h3 css={titleStyle}>게시판</h3>
        </header>

        <label css={labelStyle}>
          제목
          <input
            css={inputStyle}
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <textarea
          css={contentStyle}
          placeholder="내용을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div css={buttonArea}>
          <div css={buttonWrapperStyle1}>
            <button type="button" css={buttonStyle1} onClick={handleFileSelect}>
              이미지 선택
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept="image/*"
              multiple // 여러 파일 선택 가능하도록
            />
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
    </div>
  );
}

export default PostCreate;
