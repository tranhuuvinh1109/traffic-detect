import React, { useEffect, useState } from 'react';
import { FolderImage } from '../../components';
import manageAPI from '../../axios/manageAPI';
import { VehicleType } from '../../type';

type AllFolderType = {
  list: VehicleType[];
  folder_name: string;
};
const ManagePage = () => {
  const [chooseImage, setChooseImage] = useState<VehicleType>();
  const [allFolder, setAllFolder] = useState<AllFolderType[]>();

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
    <div className="flex justify-between px-10">
      <div className="w-[30%]">
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
    </div>
  );
};

export default ManagePage;
