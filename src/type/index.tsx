type ChildImageType = {
  name: string;
};

type FolderImageType = {
  id: number;
  folderName: string;
  listFolder: string[];
  setChooseImage: (imageName: string) => void;
  className?: string;
};

export type { FolderImageType, ChildImageType };
