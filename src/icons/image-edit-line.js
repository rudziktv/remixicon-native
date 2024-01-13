import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgImageEditLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L11.9132 14.8422L9 11.9289L5 15.928V19H15.533L16.2414 19.0012L17.57 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z" />
  </Svg>
);

export default SvgImageEditLine;
