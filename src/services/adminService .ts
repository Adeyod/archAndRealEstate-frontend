import { getAllAdminsRoute, getAnAdminsRoute } from '../hooks/ApiRoutes';
import axiosInstance from '@/hooks/axiosInstance';

const useAdminApis = () => {
  const fetchAnAdmin = async (adminId: string) => {
    const response = await axiosInstance.get(`${getAnAdminsRoute}/${adminId}`);
    console.log(response);
    return response.data;
  };

  const fetchAllAdmins = async (
    page: string,
    limit: string,
    searchValue: string
  ) => {
    const response = await axiosInstance.get(
      `${getAllAdminsRoute}?searchParams=${searchValue}&page=${page}&limit=${limit}`
    );
    console.log(response);
    return response.data;
  };

  return {
    fetchAllAdmins,
    fetchAnAdmin,
  };
};

export default useAdminApis;
