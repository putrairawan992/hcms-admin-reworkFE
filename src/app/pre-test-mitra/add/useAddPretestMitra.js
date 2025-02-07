import { useState } from 'react';
import axiosInstance from '@/app/api/axiosConfig';
import usePretestStore from '@/stores/pretestStore';

const useAddPretestMitra = () => {
  const { jobSpesialistId } = usePretestStore();
  const [questionData, setQuestionData] = useState([
    {
      id: 1,
      question: '',
      answer: '',
      options: [
        { alphabet: 'A', text: '', is_correction: 'false' },
        { alphabet: 'B', text: '', is_correction: 'false' },
        { alphabet: 'C', text: '', is_correction: 'false' },
        { alphabet: 'D', text: '', is_correction: 'false' },
      ],
    },
  ]);

  const postPretest = async (data) => {
    try {
      const response = await axiosInstance.post(
        `/api/admin/pretest?job_specialist_id=${jobSpesialistId}`,
        data
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const getDetailPretest = async (id) => {
    try {
      const response = await axiosInstance.get(
        `/api/admin/pretest_detail?pretest_modul_detail_id=${id}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const addRowQuestion = () => {
    const newQuestion = {
      id: questionData.length + 1,
      question: '',
      answer: '',
      options: [
        { alphabet: 'A', text: '', is_correction: 'false' },
        { alphabet: 'B', text: '', is_correction: 'false' },
        { alphabet: 'C', text: '', is_correction: 'false' },
        { alphabet: 'D', text: '', is_correction: 'false' },
      ],
    };
    setQuestionData([...questionData, newQuestion]);
  };

  return {
    addRowQuestion,
    getDetailPretest,
    postPretest,
    questionData,
    setQuestionData,
  };
};

export default useAddPretestMitra;
