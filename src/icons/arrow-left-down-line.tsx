import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgArrowLeftDownLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M9 13.589L17.6066 4.98242L19.0208 6.39664L10.4142 15.0032H18V17.0032H7V6.00324H9V13.589Z" />
  </AnimatedSvg>
);

export default SvgArrowLeftDownLine;
