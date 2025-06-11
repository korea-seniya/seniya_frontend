/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react'
import * as style from './course.style'

function CreateCourse() {

  const [form, setForm] = useState({
    title: '',
    description: '',
    classDate: '',
    classStartTime: '',
    classEndTime: '',
    category: '',
    classroom: '',
    trainerId: ''
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const createCourseClick = async () => {
    const { title, description, classDate, classStartTime, classEndTime, category, classroom, trainerId } = form;

    if (!title || !description || !classDate || !classStartTime || !classEndTime || !category || !classroom || !trainerId) {
      console.log("모든 항목 입력하3");
      return;
    }

  }

  return (
    <>
      <div css={style.containerStyle}>
        <h6 css={style.h6Style}>수업 제목</h6>
        <input type="text" placeholder='수업 제목' name='title' value={form.title} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>수업 설명</h6>
        <input type="text" placeholder='수업 설명' name='description' value={form.description} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>수업 날짜</h6>
        <input type="Date" placeholder='수업 날짜' name='classDate' value={form.classDate} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>수업 시간</h6>
        <input type="time" placeholder='수업 시작 시간' name='classStartTime' value={form.classStartTime} onChange={onInputChange} css={style.inputStyle} />
        <span> - </span>
        <input type="time" placeholder='수업 종료 시간' name='classEndTime' value={form.classEndTime} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>카테고리</h6>
        <input type="text" placeholder='카테고리' name='category' value={form.category} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>강의장</h6>
        <input type="text" placeholder='강의장' name='classroom' value={form.classroom} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>트레이너 ID</h6>
        <input type="text" placeholder='트레이너 ID' name='trainerId' value={form.trainerId} onChange={onInputChange} css={style.inputStyle} />

        <button onClick={createCourseClick} css={style.buttonStyle}>
          수업 개설
        </button>

      </div>
    </>
  )
}

export default CreateCourse