import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgQuoteText = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z" />
  </AnimatedSvg>
);

export default SvgQuoteText;
