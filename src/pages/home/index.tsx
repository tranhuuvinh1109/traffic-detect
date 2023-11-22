import React, { useContext, useState, useMemo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SideBar from '../../components/SideBar';
import { APP_CONTEXT } from '../../App';
import manageAPI from '../../axios/manageAPI';

const HomePage = () => {
  const context = useContext(APP_CONTEXT);
  const [inputService, setInputService] = useState(false);
  const renderSignal = useMemo(() => {
    if(inputService) {
      return (
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/api/video_feed/${context.address}/`}
          alt={context.address}/>
      )
    }else{
      return (
        <img
          src={`https://cdn.dribbble.com/users/1595839/screenshots/11915511/no-signal-glitch-dribble.gif`}
          alt='no-signal'/>
      )
    }
  }, [context.address, inputService])
  const handleClear = async () => {
    try {
      const res = await manageAPI.clear();
      console.log(res);
      setInputService(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex">
      <SideBar setInputService={setInputService} />
      <div className="flex-1 ml-4">
        <Text className="my-4" fontSize="2xl" onClick={() => console.log(inputService)}>
          Real-time camera in Da Nang{' '}
        </Text>
        <Flex h="100%">
          <Box w="100%" className="flex">
            <div className="w-[80%]">
              {
                renderSignal
              }
            </div>
            <div className="w-[20%]">
              <button className="px-4 py-2 bg-orange-400 font-semibold" onClick={handleClear}>
                Stop
              </button>
            </div>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default HomePage;
