import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFavoriteSolid = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}>
    <Path
      fill="currentColor"
      d="M25.333 13.51V5.508a2.67 2.67 0 0 0-2.666-2.666H9.333a2.67 2.67 0 0 0-2.666 2.666v23.824L16 23.112l9.333 6.221z"
    />
  </Svg>
);
export default SvgFavoriteSolid;
