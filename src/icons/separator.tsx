import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSeparator = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z" />
  </AnimatedSvg>
);

export default SvgSeparator;
