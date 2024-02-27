import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgDownloadFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z" />
  </Svg>
);

export default SvgDownloadFill;
