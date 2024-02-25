import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgCastLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H15C15 20.3199 14.9478 19.6519 14.8471 19H20V5H4V8.1529C3.34806 8.05223 2.68013 8 2 8V4C2 3.44772 2.44772 3 3 3ZM13 21H11C11 16.0294 6.97056 12 2 12V10C8.07513 10 13 14.9249 13 21ZM9 21H7C7 18.2386 4.76142 16 2 16V14C5.86599 14 9 17.134 9 21ZM5 21H2V18C3.65685 18 5 19.3431 5 21Z" />
  </AnimatedSvg>
);

export default SvgCastLine;
