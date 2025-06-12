/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react'
import * as style from './userDetailModal.style'

type userModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UserModal: React.FC<userModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <></>
  )
};

export default UserModal;