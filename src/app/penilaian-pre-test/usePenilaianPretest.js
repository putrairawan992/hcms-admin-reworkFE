import { useEffect, useState } from 'react';
import { httpClient } from '../utils/network';

const usePenilaianPretest = () => {
  const [data, setData] = useState({
    paginate: [],
    pages: 0,
    master_job_specialist: [],
    job_seeker_id_selected: null,
    submit_list: [],
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobSpecialistId, setJobSpecialistId] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  const fetchData = async (params = {}) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: `/admin/pretest_scoring?job_specialist_id=${params.job_specialist_id || ''}&limit=${itemsPerPage}&paginate=${params.page || 1}`,
      });

      const responseData = response?.data?.data || {
        paginate: [],
        pages: 0,
        master_job_specialist: [],
        job_seeker_id_selected: null,
        submit_list: [],
      };

      setData(responseData);
      setTotalItems(responseData.submit_list.length * responseData.pages);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchData({ job_specialist_id: jobSpecialistId, page: newPage });
  };

  const handleJobSpecialistChange = (id) => {
    setJobSpecialistId(id);
    setCurrentPage(1);
    fetchData({ job_specialist_id: id, page: 1 });
  };

  const finishScore = async (pretestModulDetailId, jobSeekerId) => {
    try {
      const response = await httpClient({
        method: 'POST',
        url: '/admin/pretest_scoring_finish',
        data: {
          job_seeker_id: jobSeekerId,
          pretest_modul_detail_id: pretestModulDetailId,
        },
      });

      return response?.data;
    } catch (error) {
      console.error('Failed to submit score:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData({ job_specialist_id: '', page: 1 });
  }, []);

  return {
    currentPage,
    data,
    finishScore,
    handleJobSpecialistChange,
    handlePageChange,
    itemsPerPage,
    jobSpecialistId,
    loading,
    totalItems,
    totalPages: data.pages || 1,
  };
};

export default usePenilaianPretest;
