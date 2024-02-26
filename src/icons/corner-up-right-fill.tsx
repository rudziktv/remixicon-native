import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgCornerUpRightFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M4.99989 10.0001L4.99976 19L6.99976 19L6.99986 12.0001L14.5859 12V17.4142L21.0001 11L14.5859 4.58578L14.5859 10L4.99989 10.0001Z" />
  </AnimatedSvg>
);

export default SvgCornerUpRightFill;
