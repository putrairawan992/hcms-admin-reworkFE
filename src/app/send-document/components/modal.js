'use client';
import React from 'react';
import FileModal from './FIleModal';
import { noop } from '@/app/utils/helpers';

const ModalSendDocument = ({ type = '', typeDocument = '', isOpen = false, onClose = noop, typeDocTalent = '', data = {}, onSubmit = noop }) => {

  switch (type) {
    case 'file':
      return <FileModal type={typeDocument} isOpen={isOpen} onClose={onClose} typeDocTalent={typeDocTalent} data={data} onSubmit={onSubmit} />;
    default:
      break;
  }
};

export default ModalSendDocument;
