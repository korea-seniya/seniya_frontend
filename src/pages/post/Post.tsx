import React from "react";

const posts = [
  { id: "공지", title: "공지사항 알려드립니다. 부산 버스 파업 했습니다.", date: "2025-05-28", author: "관리자" },
  { id: "공지", title: "오늘 점심 추천 받습니다. 긴급 사황입니다.", date: "2025-05-28", author: "관리자" },
  { id: 15, title: "안녕하세요 24살 조민지 입니다 잘 부탁드려요...", date: "2025-05-28", author: "진우태" },
  { id: 14, title: "집에 가고 싶어요~", date: "2025-05-27", author: "김재우" },
  { id: 13, title: "TEAM 시니아 새로운 조원 모집 중 (4/999999)", date: "2025-05-26", author: "심상현" },
  { id: 12, title: "집에 가고 싶어요~", date: "2025-05-24", author: "강세희" },
  { id: 11, title: "KOREA IT ACADEMI 개업", date: "2025-05-04", author: "김광현" },
  { id: 10, title: "기다렸던 이런 느낌 나만 듣고 싶은 그녀의 멜로디~", date: "2025-03-23", author: "정현철" },
  { id: 9, title: "삼성 SDI + 5.81%", date: "2025-02-14", author: "이준규" },
];

export default function Post() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">게시판</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-6">
        <select className="border rounded px-3 py-2 text-sm w-40">
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="author">작성자</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          className="flex-1 px-3 py-2 border rounded text-sm"
        />
        <button className="px-6 py-2 bg-violet-500 text-white rounded text-sm">검색</button>
      </div>

      {/* Total Count */}
      <p className="text-sm mb-2">전체 123124건</p>

      {/* Divider */}
      <div className="border-b-2 border-blue-600 mb-2" />

      {/* Post List */}
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center gap-3">
              {post.id === "공지" ? (
                <span className="border border-blue-400 text-blue-500 rounded-full px-2 text-sm">공지</span>
              ) : (
                <span className="w-5 text-center text-sm text-gray-500">{post.id}</span>
              )}
              <span className="text-sm font-medium whitespace-nowrap truncate max-w-xs">{post.title}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                {post.date}
              </div>
              <div>{post.author}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-1">
        <button className="px-2 py-1 border rounded text-sm">⏮</button>
        <button className="px-2 py-1 border rounded text-sm">◀</button>
        <button className="px-4 py-1 bg-blue-600 text-white rounded text-sm">1</button>
        <button className="px-2 py-1 border rounded text-sm">▶</button>
        <button className="px-2 py-1 border rounded text-sm">⏭</button>
      </div>
    </div>
  );
}