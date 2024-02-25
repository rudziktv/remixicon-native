import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgExchangeBoxLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM12.0049 9.00275V6.00275L17.0049 11.0027H8.00488V9.00275H12.0049ZM7.00488 13.0027H16.0049V15.0027H12.0049V18.0027L7.00488 13.0027Z" />
  </AnimatedSvg>
);

export default SvgExchangeBoxLine;
