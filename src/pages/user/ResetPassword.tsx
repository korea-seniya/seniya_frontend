import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { resetPassword } from '../../apis/auth/auth';  // 경로 맞게 수정

function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get('token');
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setError('유효하지 않은 토큰입니다.');
    } else {
      setError('');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (!token) {
      setError('유효하지 않은 토큰입니다.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    setLoading(true);

    try {
      await resetPassword({ token, newPassword: password });
      setSuccess('비밀번호가 성공적으로 재설정되었습니다. 2초 후 로그인 페이지로 이동합니다.');

      setTimeout(() => {
        navigate('/signIn'); // 필요에 따라 경로 조정 가능
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || '비밀번호 재설정에 실패했습니다.');
      } else {
        setError('비밀번호 재설정에 실패했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div>
        <p style={{ color: 'red' }}>유효하지 않은 토큰입니다.</p>
        <button onClick={() => navigate('/email-send')}>이메일 인증 페이지로 이동</button>
      </div>
    );
  }

  return (
    <div>
      <h2>비밀번호 재설정</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="새 비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
          minLength={6} // 필요시 비밀번호 최소 길이 조건
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
          disabled={loading}
          minLength={6}
        />
        <button type="submit" disabled={loading}>
          {loading ? '처리중...' : '비밀번호 재설정'}
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
