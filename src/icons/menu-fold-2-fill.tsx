import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgMenuFold2Fill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M4 3.5L9 8.49955L4 13.5V3.5ZM21 19.9995V17.9995H3V19.9995H21ZM21 12.9995V10.9995H12V12.9995H21ZM21 5.99951V3.99951H12V5.99951H21Z" />
  </AnimatedSvg>
);

export default SvgMenuFold2Fill;
