import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgEthLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M8.1488 15.3042L12 20.5996L15.8513 15.3042L12 17.6742L8.1488 15.3042ZM17.1374 12.1643L12 3.81608L6.86261 12.1643L12 15.3258L17.1374 12.1643ZM4 13L12 0L20 13L12.0001 24L4 13Z" />
  </Svg>
);

export default SvgEthLine;
