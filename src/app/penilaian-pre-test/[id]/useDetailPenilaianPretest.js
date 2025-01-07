import { useEffect, useState } from 'react';
import { httpClient } from '../../utils/network';

const useDetailPenilaianPretest = () => {
  const [data, setData] = useState([]);
  const [questionData, setQuestionData] = useState([
    {
      question: '',
      answer: '',
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/send_document/list',
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const addRowQuestion = () => {
    setQuestionData([...questionData, { question: '', answer: '' }]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, questionData, addRowQuestion };
};

export default useDetailPenilaianPretest;
