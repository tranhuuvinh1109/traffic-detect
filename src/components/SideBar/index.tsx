import { GridItem, Text, RadioGroup, Stack, Radio, Divider, CheckboxGroup, Checkbox, Grid } from '@chakra-ui/react';
import React, { useState, ChangeEvent, useContext } from 'react';
import { options } from '../../constant/options';
import { filters } from '../../constant/filters';
import { colors } from '../../constant/colors';
import Color from '../Color';
import InputSearch from '../InputSearch';
import { APP_CONTEXT } from '../../App';

const SideBar = () => {
  const context = useContext(APP_CONTEXT);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleChangeRadio = (address: string) => {
    if (context && context.setAddress) {
      context.setAddress(address);
    }
  };
  return (
    <div>
      <div className="ml-2">
        <Text fontSize="xl" textAlign="left">
          Select location
        </Text>
        <RadioGroup onChange={handleChangeRadio} value={context.address}>
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
    </div>
  );
};
export default SideBar;
