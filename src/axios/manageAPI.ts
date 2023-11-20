import axiosClient from './axiosClient';

const manageAPI = {
  getAllFolder: () => axiosClient.get('list/'),
  getAll: () => axiosClient.get('vehicles/'),
  clear: () => axiosClient.get('clear/'),
};

export default manageAPI;
