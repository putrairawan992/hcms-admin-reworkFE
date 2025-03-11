import axiosInstance from '../api/axiosConfig';
import { typeOptions } from '../components/molecules/ChooseLogo/shared/general';
import usePretestStore from '@/stores/pretestStore';
const usePretestMitra = () => {
  const { jobSpesialistId } = usePretestStore();
  const getJobSpesialist = async (data) => {
    console.log(data);
    try {
      const response = await axiosInstance.get(
        '/api/admin/master/job_specialist',
        {
          params: data,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const getPretest = async (data) => {
    try {
      const response = await axiosInstance.get('/api/admin/pretest', {
        params: data,
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };
  const getIconByLabel = (label, isActive) => {
    const iconObject = typeOptions('', isActive, 'lg').find(
      (option) => option.label === label
    );
    console.log(iconObject);
    return iconObject ? iconObject.icon : null;
  };
  return { getJobSpesialist, getPretest, getIconByLabel };
};

export default usePretestMitra;
