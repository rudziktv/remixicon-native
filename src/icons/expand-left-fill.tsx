import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgExpandLeftFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M9.99994 4.99982V10.9998L16.0002 11.0002L16.0002 13.0002L9.99994 12.9998V18.9998L2.99994 12L9.99994 4.99982ZM18.0001 19V4.99999H20.0001V19H18.0001Z" />
  </AnimatedSvg>
);

export default SvgExpandLeftFill;
