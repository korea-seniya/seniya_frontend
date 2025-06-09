import React, { useState, useEffect } from 'react';
import type { inquiry } from './inquiry';
import { inquiryDummyData } from './inquiryDummyData';

function InquiryList() {
  const [inquiries, setInquiries] = useState<inquiry[]>([]);

  useEffect(() => {
    setInquiries(inquiryDummyData);
  }, []);

  return (
    <div>
      <h1>문 의</h1>
      <hr />
      <ul>
        {inquiries.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> - {item.username} (
            {new Date(item.createdAt).toLocaleDateString()})
            <p>{item.content}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InquiryList;
