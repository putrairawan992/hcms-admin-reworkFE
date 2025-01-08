import { useEffect, useState } from 'react';
import { httpClient } from '../../utils/network';

const useDashboardMitra = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
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
        url: '/admin/mitra/pretest/master_category'
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const fetchDataCategory = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/mitra/pretest/master_category'
      });

      const responseData = response?.data?.data || [];
      const transformedData = responseData?.map(
        ({ id, category_name }) => ({
          id,
          label: category_name,
          value: id,
        })
      );

      setCategory(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const addRowQuestion = () => {
    setQuestionData([...questionData, { question: '', answer: '' }]);
  };

  useEffect(() => {
    fetchData();
    fetchDataCategory();
  }, []);

  return { data, questionData, category, addRowQuestion };
};

export default useDashboardMitra;
