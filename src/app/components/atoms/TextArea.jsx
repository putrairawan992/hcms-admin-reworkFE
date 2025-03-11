'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

import 'react-quill/dist/quill.snow.css';

export const TextArea = ({ value, onChange, ...props }) => {
  const [editorValue, setEditorValue] = useState(value);

  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  const handleChange = (content) => {
    setEditorValue(content);
    onChange(content);
  };

  return <ReactQuill value={editorValue} onChange={handleChange} {...props} />;
};
