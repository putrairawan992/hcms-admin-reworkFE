'use client';
import React from 'react';
import FileModal from './FIleModal';
import ConfirmationModal from './confirmationModal';
import { noop } from '@/app/utils/helpers';

const ModalSendDocument = ({ type = '', typeDocument = '', isOpen = false, onClose = noop, typeDocTalent = '', data = {}, onSubmit = noop, previewData = {}, onDelete = noop, jobProviderId = '' }) => {

  switch (type) {
    case 'file':
      return <FileModal type={typeDocument} isOpen={isOpen} onClose={onClose} typeDocTalent={typeDocTalent} data={data} onSubmit={onSubmit} previewData={previewData} jobProviderId={jobProviderId} />;
    case 'close':
      return <ConfirmationModal isOpen={isOpen} onClose={onClose} onSubmit={onDelete} />
    default:
      break;
  }
};

export default ModalSendDocument;
