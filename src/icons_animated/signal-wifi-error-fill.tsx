import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgSignalWifiErrorFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12.0005 3C16.2849 3 20.2196 4.49683 23.3104 6.99607L22.4989 8H18.0005L17.9999 13.571L12.0005 21L0.689941 6.99671C3.78078 4.49709 7.71583 3 12.0005 3ZM22.0005 19V21H20.0005V19H22.0005ZM22.0005 10V17H20.0005V10H22.0005Z" />
  </AnimatedSvg>
);

export default SvgSignalWifiErrorFill;
