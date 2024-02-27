import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowUpWideLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96788 14.8838L3.0321 13.1162L12 8.36853Z" />
  </Svg>
);

export default SvgArrowUpWideLine;
