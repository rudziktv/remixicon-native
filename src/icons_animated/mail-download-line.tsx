import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgMailDownloadLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M20 7.23792L12.0718 14.338L4 7.21594V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12H20V7.23792ZM19.501 5H4.51146L12.0619 11.662L19.501 5ZM20 18H23L19 22L15 18H18V14H20V18Z" />
  </AnimatedSvg>
);

export default SvgMailDownloadLine;
