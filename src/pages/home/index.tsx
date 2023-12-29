import { useContext, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import SideBar from '../../components/SideBar';
import { APP_CONTEXT } from '../../App';
import manageAPI from '../../axios/manageAPI';

const HomePage = () => {
  const context = useContext(APP_CONTEXT);
  const [inputService, setInputService] = useState(false);
  const handleClear = async () => {
    try {
      await manageAPI.clear();
      setInputService(false);
      if (context.setAddress) {
        context.setAddress('');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex h-full  p-4">
      <div className="flex-1">
        <Box w="100%" className="flex">
          <div className="w-full flex ">
            <SideBar setInputService={setInputService} className="w-1/5 px-2" />
            <div className="relative w-4/5">
              <img
                className="w-full"
                src={
                  !inputService
                    ? `https://www.skycards.eu/wp-content/uploads/2019/01/No-Input-Signal.jpg`
                    : `${process.env.REACT_APP_API_ENDPOINT}/api/video_feed/${context.address}/`
                }
                alt="address"
              />
              <button
                className="px-4 py-2 border-zinc-600 border hover:bg-zinc-600 absolute top-0 right-0 font-semibold"
                onClick={handleClear}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default HomePage;
