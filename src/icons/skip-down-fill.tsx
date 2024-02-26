import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSkipDownFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M18 17 6 17 6 15 18 15 18 17ZM12 13 18 7H6L12 13Z" />
  </AnimatedSvg>
);

export default SvgSkipDownFill;
