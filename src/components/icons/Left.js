import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}>
    <Path fill="currentColor" d="m19 7-9 9 9 9 2.23-2.23L14.46 16l6.77-6.77z" />
  </Svg>
);
export default SvgLeft;
