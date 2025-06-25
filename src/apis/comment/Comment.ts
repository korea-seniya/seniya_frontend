import axios from 'axios';

export const addComment = async (postId: number, content: string, token: string) => {
  return axios.post(
    `http://localhost:8080/api/v1/posts/${postId}/comments`,
    { content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
