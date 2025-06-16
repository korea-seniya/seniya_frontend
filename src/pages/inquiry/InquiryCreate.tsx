/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle,
  divStyle,
  buttonWrapperStyle,
  checkboxStyle,
  label2Style
} from './InquiryCreate.style';

import { createInquiryRequest } from '../../apis/inquiry/Inquiry';
import type { InquiryRequestDto } from '../../dtos/inquiry/request/inquiry.request.dto';

function InquiryCreate() {

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isPrivated, setIsPrivated] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const onIsPrivatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivated(e.target.checked);
  }

  const onSubmit = async () => {
    if (!title || !content) {
      setMessage('제목과 내용 모두 입력해주세요.');
      return;
    }


    const requestBody: InquiryRequestDto = {
      title,
      content,
      isPrivated
    };

    const response = await createInquiryRequest(requestBody);
    if (response.code === 'SU') {
      alert('문의 등록 완료.');
    } else {
      setMessage(response.message);
    }
  }

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>문의 작성</h1>
      <div css={divStyle}>
        <label css={labelStyle}>
          제목
        </label>
        <input
          css={inputStyle}
          type='text'
          value={title}
          onChange={onTitleChange}
          placeholder='제목을 입력하세요'
        />
        <label css={label2Style}>
          <input
            type="checkbox"
            checked={isPrivated}
            onChange={onIsPrivatedChange}
            css={checkboxStyle}
          />
          비밀글
        </label>
      </div>
      <textarea
        css={contentStyle}
        value={content}
        onChange={onContentChange}
        placeholder='문의 내용을 입력해주세요'
      ></textarea>
      <div css={buttonWrapperStyle}>
        <button
          css={buttonStyle}
          type='submit'
          onClick={onSubmit}
        >등록</button>
        <button css={buttonStyle}>취소</button>
      </div>
      {<p>{message}</p>}
    </div>
  )
}

export default InquiryCreate