/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react'
import * as style from './course.style'
import Header from '../../../components/header';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import type { CreateCourseRequestDto } from '../../../dtos/course/request/CreateCourse.request.dto';
import { createCourse } from '../../../apis/course/courseDetail';

function CreateCourse() {

  const [form, setForm] = useState({
    title: '',
    description: '',
    classDate: '',
    classStartTime: '',
    classEndTime: '',
    category: '',
    classroom: '',
    trainerId: 0
  });

  // onChange 이벤트가 input, select 둘 다 처리하도록 수정
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === 'classDate') {
      updatedValue = `${value}T00:00:00`; // 저장할 땐 T 붙이기
    }

    setForm({ ...form, [name]: updatedValue });
  };

  const createCourseClick = async () => {
    const { title, description, classDate, classStartTime, classEndTime, category, classroom, trainerId } = form;

    if (!title || !description || !classDate || !classStartTime || !classEndTime || !category || !classroom || !trainerId) {
      console.log("모든 항목 입력해야함");
      return;
    }

    const dto: CreateCourseRequestDto = {
      trainerId,
      title,
      description,
      classDate,
      classStartTime,
      classEndTime,
      category,
      classroom
    }

    const response = await createCourse(dto);

    try {
      if (response.code === "SU") {
        console.log('수업 생성 완료');
        console.log(response.data);
        setForm({
          title: '',
          description: '',
          classDate: '',
          classStartTime: '',
          classEndTime: '',
          category: '',
          classroom: '',
          trainerId: 0
        });
      } else {
        console.log(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <AdminSidebar />
      <div css={style.containerStyle}>
        <h6 css={style.h6Style}>수업 제목</h6>
        <input type="text" placeholder='수업 제목' name='title' value={form.title} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>수업 설명</h6>
        <input type="text" placeholder='수업 설명' name='description' value={form.description} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>수업 날짜</h6>
        <input
          type="date"
          placeholder="수업 날짜"
          name="classDate"
          value={form.classDate ? form.classDate.split('T')[0] : ''}
          onChange={onInputChange}
          css={style.inputStyle}
        />

        <h6 css={style.h6Style}>수업 시간</h6>
        <input type="time" placeholder='수업 시작 시간' name='classStartTime' value={form.classStartTime} onChange={onInputChange} css={style.inputStyle} />
        <span> - </span>
        <input type="time" placeholder='수업 종료 시간' name='classEndTime' value={form.classEndTime} onChange={onInputChange} css={style.inputStyle} />

        <h6 css={style.h6Style}>카테고리</h6>
        <select
          name="category"
          value={form.category}
          onChange={onInputChange}
          css={style.inputStyle}
        >
          <option value="" disabled>카테고리를 선택하세요</option>
          <option value="SLEEP">SLEEP</option>
          <option value="REHABILITATION">REHABILITATION</option>
          <option value="EXERCISE">EXERCISE</option>
          <option value="PSYCHOLOGY">PSYCHOLOGY</option>
        </select>

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

export default CreateCourse;
