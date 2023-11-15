type ChildImageType = {
  name: string;
};

type FolderImageType = {
  id: number;
  folderName: string;
  listFolder: string[];
  setChooseImage: (imageName: string) => void;
  chooseImage?: string;
  className?: string;
};

export type { FolderImageType, ChildImageType };
