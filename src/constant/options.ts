interface OptionInterface {
  id: number;
  label: string;
  value: string;
}
const options: OptionInterface[] = [
  {
    id: 0,
    label: 'DaNang',
    value: 'DaNang',
  },
  {
    id: 1,
    label: 'HaNoi',
    value: 'HaNoi',
  },
  {
    id: 2,
    label: 'SaiGon',
    value: 'SaiGon',
  },
  {
    id: 3,
    label: 'Hue',
    value: 'Hue',
  },
];
export type { OptionInterface };
export { options };
