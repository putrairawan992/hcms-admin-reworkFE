import { useState, useEffect } from 'react';
import { httpClient } from '../../utils/network';

const useDetailPenilaianPretest = (jobSeekerId, pretestModulId) => {
  const [data, setData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    // Don't attempt to fetch if we don't have valid IDs
    if (!jobSeekerId || !pretestModulId) {
      console.error('Missing required parameters for API call');
      setIsLoading(false);
      return;
    }

    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/pretest_scoring_detail',
        params: {
          job_seeker_id: jobSeekerId,
          pretest_modul_detail_id: pretestModulId,
        },
      });

      const responseData = response?.data?.data || {};
      setData(responseData);

      if (responseData.detail && responseData.detail.length > 0) {
        setQuestionData(responseData.detail);
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setIsLoading(false);
    }
  };

  const submitScore = async (applyJobAnswerId, score) => {
    try {
      const response = await httpClient({
        method: 'PUT',
        url: '/admin/pretest_scoring',
        data: {
          apply_job_answer_id: applyJobAnswerId,
          score: Number(score),
        },
      });

      return response?.data;
    } catch (error) {
      console.error('Failed to submit score:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, [jobSeekerId, pretestModulId]);

  return { data, questionData, isLoading, submitScore };
};

export default useDetailPenilaianPretest;
