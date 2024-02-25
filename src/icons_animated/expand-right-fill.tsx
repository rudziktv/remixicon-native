import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgExpandRightFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M13.9999 4.99982L21.0001 11.9999L13.9999 18.9998V13H7.99983L7.99981 11H13.9999V4.99982ZM3.99988 18.9998L3.99988 4.99982H5.99988V18.9998H3.99988Z" />
  </AnimatedSvg>
);

export default SvgExpandRightFill;
