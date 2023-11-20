interface OptionInterface {
  id: number;
  label: string;
  value: string;
}
const options: OptionInterface[] = [
  {
    id: 0,
    label: 'TonDucThang',
    value: 'tonducthang',
  },
  {
    id: 1,
    label: 'DienBienPhu',
    value: 'dienbienphu',
  },
  // {
  //   id: 2,
  //   label: 'SaiGon',
  //   value: 'SaiGon',
  // },
  // {
  //   id: 3,
  //   label: 'Hue',
  //   value: 'Hue',
  // },
];
export type { OptionInterface };
export { options };
