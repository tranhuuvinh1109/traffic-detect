import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Checkbox,
  CheckboxGroup,
  AspectRatio,
} from '@chakra-ui/react';
import { colors } from '../../constant/colors';
import { Color, Header, InputSearch, ResultSearch } from '../../components';
import { options } from '../../constant/options';
import { filters } from '../../constant/filters';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
      gridTemplateRows={'60px 1fr'}
      gridTemplateColumns={'250px 1fr'}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      className="overflow-hidden"
    >
      <GridItem pl="2" area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl="2" area={'nav'}>
        <div className="ml-2">
          <Text fontSize="xl" textAlign="left">
            Select location
          </Text>
          <RadioGroup defaultValue="DaNang">
            {options.map((option) => {
              return (
                <Stack key={option.id} className="text-left px-1 py-2">
                  <Radio colorScheme="red" value={option.value}>
                    {option.label}
                  </Radio>
                </Stack>
              );
            })}
          </RadioGroup>
          <Divider />
          <CheckboxGroup>
            {filters.map((filter) => {
              return (
                <Stack key={filter.id} className="px-1 py-2">
                  <Checkbox colorScheme="red" value={filter.value}>
                    {filter.label}
                  </Checkbox>
                </Stack>
              );
            })}
          </CheckboxGroup>
          <Divider />
          <Stack w="100%">
            <Text>Color</Text>
            <Grid templateColumns="repeat(6, 1fr)" gap={2}>
              {colors.map((color) => {
                return (
                  <GridItem>
                    <Color color={color} key={color.id} />
                  </GridItem>
                );
              })}
            </Grid>
            <InputSearch value={searchValue} onChange={handleChange} placeholder="Search" className="mt-2" />
          </Stack>
        </div>
      </GridItem>
      <GridItem pl="2" className="pr-2" area={'main'}>
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
      </GridItem>
    </Grid>
  );
};

export default HomePage;
