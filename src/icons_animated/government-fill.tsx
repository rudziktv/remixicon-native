import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgGovernmentFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M2 19V8H1V6H4V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V6H23V8H22V19H23V21H1V19H2ZM13 19V12H11V19H13ZM8 19V12H6V19H8ZM18 19V12H16V19H18ZM6 5V6H18V5H6Z" />
  </AnimatedSvg>
);

export default SvgGovernmentFill;
