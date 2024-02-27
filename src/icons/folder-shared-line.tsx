import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFolderSharedLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M22 13H20V7H11.5858L9.58579 5H4V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V13ZM18 17V13.5L23 18L18 22.5V19H15V17H18Z" />
  </Svg>
);

export default SvgFolderSharedLine;
