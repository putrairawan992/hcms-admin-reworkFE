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
        { id: null, alphabet: 'A', text: '', is_correction: 'false' },
        { id: null, alphabet: 'B', text: '', is_correction: 'false' },
        { id: null, alphabet: 'C', text: '', is_correction: 'false' },
        { id: null, alphabet: 'D', text: '', is_correction: 'false' },
      ],
    },
  ]);

  const postPretest = async (data) => {
    try {
      const response = await axiosInstance.post(
        `/api/admin/pretest?job_specialist_id=${jobSpesialistId}`,
        data
      );

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

      return response;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };
  const updatePretest = async (data) => {
    try {
      const response = await axiosInstance.put(
        `/api/admin/pretest?job_specialist_id=${jobSpesialistId}`,
        data
      );

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
        { id: null, alphabet: 'A', text: '', is_correction: 'false' },
        { id: null, alphabet: 'B', text: '', is_correction: 'false' },
        { id: null, alphabet: 'C', text: '', is_correction: 'false' },
        { id: null, alphabet: 'D', text: '', is_correction: 'false' },
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
    updatePretest,
  };
};
export default useAddPretestMitra;
