import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgScan2Fill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M4.25705 5.67127L6.39362 7.80783C5.5184 8.97641 5 10.4277 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C10.4277 5 8.97641 5.5184 7.80783 6.39362L5.67127 4.25705C7.39514 2.84637 9.59873 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 9.59873 2.84637 7.39514 4.25705 5.67127ZM7.8284 9.24261L12 13.4142L13.4142 12L9.24261 7.8284C10.033 7.30488 10.9809 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 10.9809 7.30488 10.033 7.8284 9.24261Z" />
  </AnimatedSvg>
);

export default SvgScan2Fill;
