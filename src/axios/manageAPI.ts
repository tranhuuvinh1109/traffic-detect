import axiosClient from './axiosClient';

const manageAPI = {
  getAllFolder: () => axiosClient.get('list/'),
};

export default manageAPI;
