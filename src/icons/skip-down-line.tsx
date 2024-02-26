import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSkipDownLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12 10.0858L7.20712 5.29291L5.79291 6.70712L12 12.9142L18.2071 6.70712L16.7929 5.29291L12 10.0858ZM18 17L6.00001 17L6.00001 15L18 15V17Z" />
  </AnimatedSvg>
);

export default SvgSkipDownLine;
