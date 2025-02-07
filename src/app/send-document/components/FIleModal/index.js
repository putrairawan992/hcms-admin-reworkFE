'use client';
import React from 'react';
import FileManualModal from './Manual';
import { noop } from '@/app/utils/helpers';
import FileExistingContractModal from './ExistingContract';
import FileAllModal from './All';
import FileContractTemplateModal from './ContractTemplate';

const FileModal = ({ type = '', isOpen = false, onClose = noop, typeDocTalent = '', data = {}, onSubmit = noop, previewData = {}, jobProviderId = '' }) => {
  switch (type) {
    case 'contract_manual':
      return <FileManualModal isOpen={isOpen} onClose={onClose} typeDocTalent={typeDocTalent} data={data} onSubmit={onSubmit} />
    case 'existing_contract':
      return <FileExistingContractModal isOpen={isOpen} onClose={onClose} typeDocTalent={typeDocTalent} data={data} onSubmit={onSubmit} />
    case 'contract_template':
      return <FileContractTemplateModal isOpen={isOpen} onClose={onClose} typeDocTalent={typeDocTalent} data={previewData} onSubmit={onSubmit} jobProviderId={jobProviderId} />
    default:
      return <FileAllModal isOpen={isOpen} onClose={onClose} typeDocTalent={typeDocTalent} onSubmit={onSubmit} />
  }
};

export default FileModal;
