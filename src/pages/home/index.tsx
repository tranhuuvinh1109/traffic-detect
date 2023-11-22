import React, { useContext, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SideBar from '../../components/SideBar';
import { APP_CONTEXT } from '../../App';
import manageAPI from '../../axios/manageAPI';

const HomePage = () => {
  const context = useContext(APP_CONTEXT);
  const [inputService, setInputService] = useState(false);
  const handleClear = async () => {
    console.log('clear', inputService);
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
              {/* {inputService ? (
                <>
                  {context.address && (
                    <img
                      src={`${process.env.REACT_APP_API_ENDPOINT}/api/video_feed/${context.address}/`}
                      alt="address"
                    />
                  )}
                </>
              ) : ( */}
              <img
                src={
                  inputService
                    ? `https://cdn.dribbble.com/users/1595839/screenshots/11915511/no-signal-glitch-dribble.gif`
                    : `${process.env.REACT_APP_API_ENDPOINT}/api/video_feed/${context.address}/`
                }
                alt="address"
              />
              {/* )} */}
            </div>
            <div className="w-[20%]">
              <button className="px-4 py-2 bg-orange-400 font-semibold" onClick={handleClear}>
                Clear
              </button>
            </div>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default HomePage;
