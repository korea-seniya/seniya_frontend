/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from 'react';
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

import { getPostDetail, updatePost } from '../../apis/post/Post';
import { useParams } from 'react-router-dom';

function PostUpdate() {
  const { id } = useParams<{ id: string }>();


  // 토큰을 테스트용으로 localStorage에 저장
  useEffect(() => {
    localStorage.setItem(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InF3ZXIxMjM0NTYiLCJyb2xlIjoiVVNFUiIsInVzZXJJZCI6MTAsImlhdCI6MTc1MDU4OTA3NCwiZXhwIjoxNzUwNTkyNjc0fQ.WJ9hNRU7elPsgTvRVvxPevgLUN7D0MqYWUJXN7Dj_LI"
    );
  }, []);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (id) {
      fetchPostDetail(Number(id));
    }
  }, [id]);

  const fetchPostDetail = async (id: number) => {
    try {
      const res = await getPostDetail(id);
      if (res.data) {
        setTitle(res.data.title);
        setContent(res.data.content);
        // 기존 첨부파일 관련 로직 필요 시 여기 추가
      }
    } catch (error) {
      console.error('게시글 조회 실패:', error);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(prev => [...prev, ...Array.from(files)]);
    }
  };

  const handleSubmit = async () => {1
    console.log('handleSubmit 시작');
    console.log('postId:', id, 'title:', title, 'content:', content, 'files:', selectedFiles);

    if (!id) return;

    try {
      const res = await updatePost(Number(id), title, content, selectedFiles);
      console.log('게시글 수정 성공:', res);
      alert('게시글이 수정되었습니다.');

      // 초기화
      setSelectedFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정에 실패했습니다.');
    }
  };

  return (
    <div>
      <h1 css={nameStyle}>게시판 수정</h1>
      <div css={containerStyle}>
        <header>
          <h3 css={titleStyle}>게시판 수정</h3>
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
              multiple
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
              수정완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostUpdate;
