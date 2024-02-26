import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgCompass2Fill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M18.3277 4.25809L10.5858 12L12 13.4142L19.7419 5.6723C21.153 7.39641 22 9.5999 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C14.4001 2 16.6036 2.84695 18.3277 4.25809Z" />
  </AnimatedSvg>
);

export default SvgCompass2Fill;
