import axiosClient from './axiosClient';

const manageAPI = {
  getAllFolder: () => axiosClient.get('list/'),
  getAll: () => axiosClient.get('vehicles/'),
  clear: () => axiosClient.get('clear/'),
  getLicense: () => axiosClient.get('license/'),
  deletteAllLicense: () => axiosClient.post('delete-all-vehicle/'),
};

export default manageAPI;
