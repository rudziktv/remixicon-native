import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgNumbersFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M9 18H4V10H9V18ZM15 18H10V6H15V18ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z" />
  </Svg>
);

export default SvgNumbersFill;
