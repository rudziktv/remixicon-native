import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgNumber7 = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M19 2V3.5L10.763 21.9995H8.574L16.587 4H6V2H19Z" />
  </AnimatedSvg>
);

export default SvgNumber7;
