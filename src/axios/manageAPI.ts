import axiosClient from './axiosClient';

const manageAPI = {
  getAllFolder: () => axiosClient.get('list/'),
  getAll: () => axiosClient.get('vehicles/'),
};

export default manageAPI;
