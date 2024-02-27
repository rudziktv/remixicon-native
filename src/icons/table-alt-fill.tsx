import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgTableAltFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M7 14V3H3C2.44772 3 2 3.44772 2 4V14H7ZM15 14V3H9V14H15ZM22 14V4C22 3.44772 21.5523 3 21 3H17V14H22ZM21 21C21.5523 21 22 20.5523 22 20V16H2V20C2 20.5523 2.44772 21 3 21H21Z" />
  </Svg>
);

export default SvgTableAltFill;
