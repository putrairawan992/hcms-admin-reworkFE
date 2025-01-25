'use client';
import React from 'react';
import FileManualModal from './Manual';
import { noop } from '@/app/utils/helpers';
import FileExistingContractModal from './ExistingContract';
import FileAllModal from './All';

const FileModal = ({ type = '', isOpen = false, onClose = noop }) => {
  switch (type) {
    case 'contract_manual':
      return <FileManualModal isOpen={isOpen} onClose={onClose} />
    case 'existing_contract':
      return <FileExistingContractModal isOpen={isOpen} onClose={onClose} />
    case 'semua':
      return <FileAllModal isOpen={isOpen} onClose={onClose} />
    default:
      break;
  }
};

export default FileModal;
