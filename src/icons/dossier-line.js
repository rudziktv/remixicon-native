import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDossierLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17 2V4H20C20.5523 4 21 4.44772 21 5V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V5C3 4.44772 3.44772 4 4 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM13 11V13H15V15H12.999L13 17H11L10.999 15H9V13H11V11H13ZM15 4H9V6H15V4Z" />
  </Svg>
);

export default SvgDossierLine;
