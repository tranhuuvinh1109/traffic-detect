import React, { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SideBar from '../../components/SideBar';
import { APP_CONTEXT } from '../../App';
import manageAPI from '../../axios/manageAPI';

const HomePage = () => {
  const context = useContext(APP_CONTEXT);
  const handleClear = async () => {
    console.log('clear');
    try {
      const res = await manageAPI.clear();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 ml-4">
        <Text className="my-4" fontSize="2xl">
          Real-time camera in Da Nang{' '}
        </Text>
        <Flex h="100%">
          <Box w="100%" className="flex">
            <div className="w-[80%]">
              {context.address && (
                <img src={`${process.env.REACT_APP_API_ENDPOINT}/video_feed/${context.address}/`} alt="address" />
              )}
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
