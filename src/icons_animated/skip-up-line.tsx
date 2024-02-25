import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSkipUpLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12 13.9142L16.7929 18.7071L18.2071 17.2929L12 11.0858L5.79291 17.2929L7.20712 18.7071L12 13.9142ZM6.00001 7L18 7V9L6.00001 9L6.00001 7Z" />
  </AnimatedSvg>
);

export default SvgSkipUpLine;
