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
  buttonStyle2
} from './PostCreate.style';

function PostCreate() {
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
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    const dto = {
      title,
      content,
    };

    const formData = new FormData();
    formData.append(
      'data',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    );

    // 여러 파일을 각각 formData에 append
    selectedFiles.forEach((file) => {
      formData.append('file', file);
    });

    try {
      const response = await fetch('http://localhost:8080/api/v1/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type' 헤더는 multipart/form-data라 생략해야 합니다.
        },
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || '게시글 작성 실패');
      }

      const data = await response.json();
      console.log('작성 완료:', data);
      alert('게시글이 등록되었습니다.');

      // 초기화
      setTitle('');
      setContent('');
      setSelectedFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err: any) {
      console.error(err);
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
              <div style={{ marginTop: '8px', fontSize: '14px' }}>
                선택된 파일:
                <ul>
                  {selectedFiles.map((file, idx) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
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
