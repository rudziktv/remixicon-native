import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgContractRightFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M8.99988 4.99976L16.0002 12L8.99988 18.9998V12.9998L2.9999 13.0001L2.99988 11.0001L8.99988 10.9998V4.99976ZM17.9999 18.9999L18 4.99993H20L19.9999 18.9999H17.9999Z" />
  </Svg>
);

export default SvgContractRightFill;
