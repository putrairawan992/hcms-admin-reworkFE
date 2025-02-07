'use client';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
export const TextArea = ({ value, onChange, ...props }) => {
  return <ReactQuill value={value} onChange={onChange} {...props} />;
};
