import React, { useEffect, useState } from 'react';
import { notification, Modal } from 'antd';
import { FolderImage } from '../../components';
import manageAPI from '../../axios/manageAPI';
import { VehicleType } from '../../type';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const openNotificationWithIcon = (type: NotificationType) => {
  if(type==='success'){
    notification[type]({
      message: 'Detech license',
      description:
        'Server get license successfully!!!',
    });
  }
  if(type === 'error'){
    notification[type]({
      message: 'Detech license',
      description:
        'Server get license failed , try again later !!!',
    });
  }
};

type AllFolderType = {
  list: VehicleType[];
  folder_name: string;
};
const ManagePage = () => {
  const [chooseImage, setChooseImage] = useState<VehicleType>();
  const [allFolder, setAllFolder] = useState<AllFolderType[]>();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Are you sure delete all data ?');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('Wating a  minute ...');
    setConfirmLoading(true);
    const deleteAllLicense =async () => {
      try {
        const res = await manageAPI.deletteAllLicense();
        if(res.status === 200) {
          setModalText('Detete all license successful !')
        }else{
          setModalText('Detete all license fail !')
        }
      }catch{
        setModalText('Detete all license fail !')
      }
    }
    setTimeout(() => {
      setOpen(false);
      deleteAllLicense();
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleDetechLincese = async () => {
    try {
      const res = await manageAPI.getLicense();
      if(res.status === 200){
        openNotificationWithIcon('success')
      }else{
        openNotificationWithIcon('error')
      }
    }catch{
      openNotificationWithIcon('error')
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await manageAPI.getAll();
        const result = res.data.data.reduce(
          (acc: { folder_name: string; list: VehicleType[] }[], item: VehicleType) => {
            const folderIndex = acc.findIndex((folder) => folder.folder_name === item.folder_name);
            if (folderIndex === -1) {
              acc.push({
                folder_name: item.folder_name,
                list: [item],
              });
            } else {
              acc[folderIndex].list.push(item);
            }

            return acc;
          },
          [],
        );
        setAllFolder(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between px-10">
        <div className="w-[20%]">
          {allFolder?.map((folder, index) => {
            return (
              <FolderImage
                id={index}
                key={index}
                folderName={folder.folder_name}
                listVehicle={folder.list}
                chooseImage={chooseImage}
                setChooseImage={setChooseImage}
              />
            );
          })}
        </div>
        <div className="ml-6 w-[70%] flex">
          {chooseImage && (
            <>
              <div className="w-[65%]">
                <h4 className="text-xl font-semibold py-4">Image origin</h4>
                <img
                  className="w-full rounded-lg"
                  src={`${process.env.REACT_APP_API_ENDPOINT}/media/${chooseImage.image_origin}`}
                  alt="fc"
                />
              </div>
              <div className="w-[35%] ml-4">
                <h4 className="text-xl font-semibold py-4">Image license</h4>
                <img
                  className="w-full rounded-lg"
                  src={`${process.env.REACT_APP_API_ENDPOINT}/media/${chooseImage.image_detect}`}
                  alt="fc"
                />
                <div>
                  <h5>License: {chooseImage.license_fixed}</h5>
                  <h5>Time: {chooseImage.time}</h5>
                  <h5>Location: {chooseImage.location}</h5>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-[10%]">
          <button className='bg-orange-400 mt-4 px-2 py-1 text-white rounded-md' onClick={handleDetechLincese}>
            Detech license
          </button>
          <button className='bg-red-600 mt-4 px-2 py-1 text-white rounded-md' onClick={showModal}>
            Delete all data
          </button>
        </div>
      </div>
      <Modal
        title="Delete all data" 
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
};

export default ManagePage;
