import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgChatOffFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M2.80777 1.3934L22.6068 21.1924L21.1925 22.6066L17.5846 18.9994L6.45516 19L2.00016 22.5V4C2.00016 3.8307 2.04223 3.67123 2.11649 3.53146L1.39355 2.80762L2.80777 1.3934ZM21.0002 3C21.5524 3 22.0002 3.44772 22.0002 4V17.785L7.21416 3H21.0002Z" />
  </Svg>
);

export default SvgChatOffFill;
