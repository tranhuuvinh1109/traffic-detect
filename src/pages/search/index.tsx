import React, { useEffect, useState, useMemo } from 'react';
import manageAPI from '../../axios/manageAPI';
import { VehicleType } from '../../type';
import { useDebounce } from '../../hooks';
import { DatePicker } from 'antd';
import {
  GridItem,
  Text,
  Stack,
  Divider,
  Grid,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  RangeSliderMark,
} from '@chakra-ui/react';
import { colors } from '../../constant/colors';
import { Color } from '../../components';
import { MdGraphicEq } from 'react-icons/md';
const { RangePicker } = DatePicker;

const convertTime = (time: string, startAt: number, endAt: number) => {
  const currentDate = new Date(time);
  const timestamp = currentDate.getTime();
  const timestampStart = new Date(timestamp + (startAt * 86399000) / 100);
  const timestampEnd = new Date(timestamp + (endAt * 86399000) / 100);
  const start = `${timestampStart.getHours()}:${timestampStart.getMinutes()}`;
  const end = `${timestampEnd.getHours()}:${timestampEnd.getMinutes()}`;
  return [start, end];
};
const SearchPage = () => {
  const [valueSearch, setValueSearch] = useState<string>('');
  const [result, setResult] = useState<VehicleType[]>();
  const [sliderValue, setSliderValue] = useState([30, 80]);
  const [timeLabel, setTimeLabel] = useState<string[]>(['', '']);
  const [isOneDay, setIsOneDay] = useState<boolean>(false);
  const [choosedDay, setDayChoosed] = useState<string>('');
  const [allLicense, setAllLicense] = useState<VehicleType[]>();

  const debouncedInputValue = useDebounce(valueSearch, 1000);
  const handleChangeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueSearch(e.target.value);
  };
  const handleChangeRangeSlider = (val: number[]) => {
    const label = convertTime(choosedDay + ' 00:00:00', +val[0], +val[1]);
    setTimeLabel(label);
    setSliderValue(val);
  };
  const onChange = (_value: any, dateString: any) => {
    console.log('Formatted Selected Time: ', dateString);
    if (dateString && dateString?.length > 0) {
      if (dateString[0] === dateString[1]) {
        setIsOneDay(true);
        setDayChoosed(dateString[0]);
      } else {
        setIsOneDay(false);
      }
    }
  };
  const render = useMemo(() => {
    if (allLicense && allLicense?.length > 0) {
      let result = [];
      if (debouncedInputValue.trim()) {
        result = allLicense?.filter((item) => item.license_fixed.includes(debouncedInputValue));
        setResult(result);
      } else {
        result = allLicense;
        setResult(result);
      }
      return (
        <div className="flex flex-wrap max-h-[600px] overflow-y-auto">
          {result &&
            result?.map((item, index) => {
              return (
                <div key={index} className="w-[32%] mr-3 border rounded-lg p-2 mb-4">
                  <img
                    className="w-full rounded-lg"
                    src={`${process.env.REACT_APP_API_ENDPOINT}/media/${item.image_origin}`}
                    alt={item.image_origin}
                  />
                  {item.license_fixed}
                </div>
              );
            })}
        </div>
      );
    }
    return <div>none</div>;
  }, [allLicense, debouncedInputValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await manageAPI.getAll();
        setAllLicense(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-20 flex justify-between mt-6">
      <div className="w-[24%] ">
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
        </Stack>
        <input
          value={valueSearch}
          onChange={handleChangeSearch}
          placeholder="Search"
          className="border border-gray-300 w-full px-3 py-1 mt-4"
        />
        <h5>List license</h5>
        <div className="bg-orange-200 text-left max-h-[300px] overflow-y-auto">
          {result &&
            result?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-1 px-3 border-b border-gray-500 hover:bg-slate-100 hover:cursor-pointer"
                  onClick={() => setValueSearch(item.license_fixed)}
                >
                  {item.license_fixed}
                </div>
              );
            })}
        </div>
        <RangePicker size="middle" className="mt-4" format="YYYY-MM-DD" onChange={onChange} />
        <div className="mt-10">
          <RangeSlider
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={['min', 'max']}
            defaultValue={[30, 80]}
            onChange={handleChangeRangeSlider}
            isReadOnly={!isOneDay}
          >
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="tomato" />
            </RangeSliderTrack>
            <RangeSliderMark
              value={sliderValue[0]}
              textAlign="center"
              bg="red.300"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {timeLabel[0]}
            </RangeSliderMark>
            <RangeSliderMark
              value={sliderValue[1]}
              textAlign="center"
              bg="red.300"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {timeLabel[1]}
            </RangeSliderMark>
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="tomato" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0}>
              <Box color="tomato" as={MdGraphicEq} />
            </RangeSliderThumb>
            <RangeSliderThumb boxSize={6} index={1}>
              <Box color="tomato" as={MdGraphicEq} />
            </RangeSliderThumb>
          </RangeSlider>
        </div>
      </div>
      <div className="w-[75%]">{render}</div>
    </div>
  );
};

export default SearchPage;
