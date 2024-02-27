import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgContractLeftLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M15.0712 4.92889L16.4854 6.34311L11.8286 11L21.0004 11.0001L21.0004 13.0001L11.8286 13L16.4854 17.6568L15.0712 19.071L8.00016 12L15.0712 4.92889ZM4.00037 18.9999L4.00037 4.99991H6.00037L6.00037 18.9999H4.00037Z" />
  </Svg>
);

export default SvgContractLeftLine;
