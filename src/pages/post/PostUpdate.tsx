/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  contentStyle,
  nameStyle,
  buttonWrapperStyle,
  buttonStyle
} from './PostCreate.style';

function PostUpdate() {
  return (
    <div>
          <h1 css={nameStyle}>게시판</h1>
          <div css = {containerStyle}>
            <header>
              <h3 css={titleStyle}>게시판</h3>
            </header>
            <label css={labelStyle}>
              제목
              <input 
              css={inputStyle}
              type='text'
              placeholder='제목을 입력하세요'
              ></input>
            </label>
            <textarea
              css={contentStyle}
              placeholder="내용을 입력하세요."
            ></textarea>
            <div css={buttonWrapperStyle}>
              <button css={buttonStyle}>수정완료</button>
            </div>
          </div>
        </div>
  )
}

export default PostUpdate