import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCrop2Fill = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17.5858 5L20.1421 2.44365L21.5563 3.85786L19 6.41421V17H22V19H19V22H17V7H9V5H17.5858ZM15 17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V17H15ZM9 9H15V15H9V9Z" />
  </Svg>
);

export default SvgCrop2Fill;