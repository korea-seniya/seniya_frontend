/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as style from './QuickSearch.style';
import type { css } from '@emotion/react';

function UserIcon() {
  return (
    <svg
      css={style.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0113 0" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      css={style.searchIcon}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16" y1="16" x2="22" y2="22" />
    </svg>
  );
}

function QuickSearch() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    <div css={style.filterContainer}>
      <div css={style.filterBox}>
        <UserIcon />
        <select css={style.select}>
          <option value="">카테고리</option>
          <option value="SLEEP">SLEEP</option>
          <option value="REHABILITATION">REHABILITATION</option>
          <option value="EXERCISE">EXERCISE</option>
          <option value="PSYCHOLOGY">PSYCHOLOGY</option>
        </select>
      </div>

      <div css={style.filterBox}>
        <UserIcon />
        <input type="text" placeholder="강사" css={style.input} />
      </div>

      <div css={style.filterBox}>
        <UserIcon />
        <input type="date" css={style.input} />
      </div>

      <div css={style.filterBox}>
        <UserIcon />
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} css={style.time} />
        <span css={style.tilde}>~</span>
        <input
          type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} css={style.time} />
      </div>
      <div>
        <SearchIcon />
      </div>
    </div>
  );
}

export default QuickSearch;
