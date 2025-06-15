/** @jsxImportSource @emotion/react */
import React from 'react'
import {
  containerStyle,
  titleStyle,
  buttonStyle,
  divStyle,
  pStyle,
  checkboxStyle,
  agreeTextStyle,
  centerButtonStyle,
  checkboxContainerStyle,
  listStyle
} from "./TrainerApplication.style";

function TrainerApplication() {
  return (
    <div css={containerStyle}>
      <div css={divStyle}>

        <h1 css={titleStyle}>트레이너 권한 신청 전 약관 동의</h1>
        <p css={pStyle}>
          트레이너 권한 신청은 단순한 온라인 절차가 아닙니다. 당사는 오프라인 면접 및 자격<br />
          심사를 통해 신중하게 트레이너를 선발 후 권한을 부여합니다.
        </p>
        <ul css={listStyle}>
          <li>본 신청은 단순한 체험이나 테스트를 위한 절차가 아닙니다.</li>
          <li>무분별한 신청은 사이트 운영에 방해가 되며, 관리자에 의해 제한 조치가 이루어질 수 있습니다.</li>
          <li>트레이너 권한은 관리자의 승인 이후에 부여됩니다.</li>
          <li>허위 정보 신청은 자동 반려되며, 이후 재신청이 제한될 수 있습니다.</li>
        </ul>
        <p css={pStyle}>위 내용을 충분히 이해하고, 진지하게 신청하시겠습니까?</p>

        <div css={checkboxContainerStyle}>
          <input
            type="checkbox"
            css={checkboxStyle}
          />
          <label css={agreeTextStyle}>
            예, 위 약관을 읽고 동의합니다.
          </label>
        </div>
        <div css={centerButtonStyle}>
          <button css={buttonStyle}>신청</button>
        </div>
      </div>
    </div>
  )
}

export default TrainerApplication