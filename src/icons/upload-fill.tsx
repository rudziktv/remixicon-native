import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgUploadFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z" />
  </Svg>
);

export default SvgUploadFill;
