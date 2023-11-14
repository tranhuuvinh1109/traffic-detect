import React from 'react';
import { Box, Flex, Text, AspectRatio } from '@chakra-ui/react';
import { ResultSearch } from '../../components';
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
          <Box w="65%">
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
          <Box w="35%" className="ml-4">
            <ResultSearch
              src="https://www.folio3.ai/blog/wp-content/uploads/2022/11/Untitled-design-4.jpg"
              alt="detect"
              label="43N1 - 96969"
              time="10:30 AM - 18/10/2023"
              location="Lien Chieu"
            />
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default HomePage;
