import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { FolderImageType } from '../../type';
import { FaRegImage } from 'react-icons/fa6';

const FolderImage: React.FC<FolderImageType> = ({ id, folderName, listFolder, className, setChooseImage }) => {
  const [openFolder, setOpenFolder] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded: openFolder });

  return (
    <div className={className}>
      <button
        {...getToggleProps({
          onClick: () => setOpenFolder((prevExpanded) => !prevExpanded),
        })}
        className={`flex items-center ${openFolder ? 'text-yellow-400' : ''}`}
      >
        {openFolder ? (
          <>
            <FaFolderOpen className="text-yellow-400 mr-2" fontSize={20} /> {folderName}
          </>
        ) : (
          <>
            <FaFolder className="text-yellow-400 mr-2" fontSize={20} /> {folderName}
          </>
        )}
      </button>
      <div {...getCollapseProps()} className="flex justify-end">
        <div className="w-[80%]">
          {listFolder?.map((childFile, index) => {
            return (
              <div
                key={index}
                onClick={() => setChooseImage(`${childFile}`)}
                className="hover:cursor-pointer hover:bg-slate-100 py-1.5 border-b border-slate-300 flex items-center"
              >
                <FaRegImage className="mr-4" />
                {childFile}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FolderImage;
