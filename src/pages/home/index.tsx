import React from 'react';
import { Box, Flex, Text, AspectRatio } from '@chakra-ui/react';
import SideBar from '../../components/SideBar';

const HomePage = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 ml-4">
        <Text className="my-4" fontSize="2xl">
          Real-time camera in Da Nang{' '}
        </Text>
        <Flex h="100%">
          <Box w="100%">
            <AspectRatio maxW="860px" maxH="530px" ratio={1}>
              <iframe
                width="860"
                height="500"
                src="https://www.youtube.com/embed/cM1WpTC2Sp8?si=uXB5tB9KTznSh-40"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default HomePage;
