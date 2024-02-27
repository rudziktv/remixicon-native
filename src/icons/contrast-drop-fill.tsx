import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgContrastDropFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 0.268921L18.364 6.63288C21.8787 10.1476 21.8787 15.8461 18.364 19.3608C14.8492 22.8755 9.15076 22.8755 5.63604 19.3608C2.12132 15.8461 2.12132 10.1476 5.63604 6.63288L12 0.268921ZM12 3.09735L7.05025 8.0471C4.31658 10.7808 4.31658 15.2129 7.05025 17.9466C8.41814 19.3145 10.2113 19.9979 12.0042 19.9968L12 3.09735Z" />
  </Svg>
);

export default SvgContrastDropFill;
