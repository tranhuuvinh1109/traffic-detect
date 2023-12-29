import axiosClient from './axiosClient';

const manageAPI = {
  getAllFolder: () => axiosClient.get('list/'),
  detechLicense: () => axiosClient.get('license/'),
  deleteAllLicense: () => axiosClient.get('delete-all-vehicle/'),
  getAll: () => axiosClient.get('vehicles/'),
  clear: () => axiosClient.get('clear/'),
};

export default manageAPI;
