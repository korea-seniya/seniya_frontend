// /** @jsxImportSource @emotion/react */
// import React, { useState } from "react";
// import type { InquiryRequestDto } from "../../dtos/inquiry/request/inquiry.request.dto";
// import { updateInquiryRequest } from "../../apis/inquiry/Inquiry";
// import { useParams } from "react-router-dom";
// import {
//   containerStyle,
//   titleStyle,
//   labelStyle,
//   inputStyle,
//   buttonStyle,
//   contentStyle,
//   divStyle,
//   buttonWrapperStyle,
// } from "./InquiryCreate.style";

// function InquiryUpdate() {
//   localStorage.setItem(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IuusuOydmO2FjOyKpO2KuCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzUwMTQ1NDAzLCJleHAiOjE3NTAxNDkwMDN9.03I3dLl0vJC4MFboeAWM7Qlce5BNZ0eip0-e4h9DMaQ"
//   );
//   const [title, setTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");
//   const [isPrivated, setIsPrivated] = useState<boolean>(false);
//   const [message, setMessage] = useState<string>("");
//   const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setContent(e.target.value);
//   };

//   const onIsPrivatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setIsPrivated(e.target.checked);
//   };

//   const { id } = useParams<{ id: string }>();

//   const inquiryId = Number(id);

//   const onSubmit = async () => {
//     if (!title || !content) {
//       setMessage("제목과 내용 모두 입력해주세요.");
//       return;
//     }

//     const requestBody: InquiryRequestDto = {
//       title,
//       content,
//       isPrivated,
//     };

//     const response = await updateInquiryRequest(inquiryId, requestBody);
//     if (response.code === "SU") {
//       alert("문의 등록 완료.");
//     } else {
//       setMessage(response.message);
//     }
//   };

//   return (
//     <div css={containerStyle}>
//       <h1 css={titleStyle}>문의 수정</h1>
//       <div css={divStyle}>
//         <label css={labelStyle}>제목</label>
//         <input
//           css={inputStyle}
//           type="text"
//           placeholder="제목을 입력하세요"
//         ></input>
//       </div>
//       <textarea
//         css={contentStyle}
//         placeholder="문의 내용을 입력해주세요"
//       ></textarea>
//       <div css={buttonWrapperStyle}>
//         <button css={buttonStyle}>작성완료</button>
//         <button css={buttonStyle}>취소</button>
//       </div>
//     </div>
//   );
// }

// export default InquiryUpdate;
