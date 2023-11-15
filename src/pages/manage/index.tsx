import React, { useEffect, useState } from 'react';
import { FolderImage } from '../../components';
import manageAPI from '../../axios/manageAPI';

type AllFolderType = {
  folder: string;
  childImage: string[];
};
const ManagePage = () => {
  const [chooseImage, setChooseImage] = useState('');
  const [allFolder, setAllFolder] = useState<AllFolderType[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await manageAPI.getAllFolder();
        console.log(res.data.data);
        let data: { folder: string; childImage: string[] }[] = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        res.data.data.forEach((item: any) => {
          data.push({
            folder: item.folder,
            childImage: item.result,
          });
        });
        setAllFolder(data);
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
              folderName={folder.folder}
              listFolder={folder.childImage}
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
                src={`${process.env.REACT_APP_API_ENDPOINT}/media/${chooseImage.split('-')[0]}/result/${chooseImage}`}
                alt="fc"
              />
            </div>
            <div className="w-[35%] ml-4">
              <h4 className="text-xl font-semibold py-4">Image license</h4>
              <img
                className="w-full rounded-lg"
                src={`${process.env.REACT_APP_API_ENDPOINT}/media/${chooseImage.split('-')[0]}/binary/${chooseImage}`}
                alt="fc"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManagePage;
