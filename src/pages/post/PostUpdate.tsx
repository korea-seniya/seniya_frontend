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
import { useNavigate, useParams } from 'react-router-dom';
import { useUserStore } from '../../stores/user.store';
import Header from '../../components/header';
import Footer from '../../components/main/footer/Footer';

function PostUpdate() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { user } = useUserStore();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (id) {
      fetchPostDetail(Number(id));
    }
  }, [id]);

  const fetchPostDetail = async (postId: number) => {
    try {
      const res = await getPostDetail(postId);
      if (res.data) {
        setTitle(res.data.title);
        setContent(res.data.content);
      }
    } catch (error) {
      console.error('게시글 조회 실패:', error);
      alert('게시글 조회에 실패했습니다.');
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

  const handleSubmit = async () => {
    if (!id) {
      alert('게시글 ID가 없습니다.');
      return;
    }

    if (!user || !user.token) {
      alert('로그인 정보가 없습니다. 로그인 후 이용해주세요.');
      navigate('/signin');
      return;
    }

    try {
      const res = await updatePost(Number(id), title, content, selectedFiles, user.token);
      console.log('게시글 수정 성공:', res);
      alert('게시글이 수정되었습니다.');
      navigate('/posts');

      setSelectedFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정에 실패했습니다.');
    }
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default PostUpdate;
