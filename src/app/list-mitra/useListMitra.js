import { useCallback, useState, useEffect } from 'react';
import { httpClient } from '../utils/network';
import { debounce } from 'lodash';

const useListMitra = () => {
  const [data, setData] = useState({
    mitra_list: [],
    pages: 1,
    paginate: [1],
  });
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    limit: 10,
    paginate: 1,
    key_search: '',
  });

  const fetchData = useCallback(async (params) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/mitra',
        params,
      });

      if (response?.data?.data) {
        setData(response.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoading(false);
    }
  }, []);

  const handlePageChange = (page) => {
    setFilters((prev) => ({
      ...prev,
      paginate: page,
    }));
  };

  const handleSearch = debounce((searchTerm) => {
    setFilters((prev) => ({
      ...prev,
      key_search: searchTerm,
      paginate: 1, // Reset to first page when searching
    }));
  }, 3000);

  useEffect(() => {
    fetchData(filters);
  }, [filters, fetchData]);

  return {
    data: data.mitra_list,
    loading,
    filters,
    totalPages: data.pages,
    currentPage: filters.paginate,
    handlePageChange,
    handleSearch,
  };
};

export default useListMitra;
