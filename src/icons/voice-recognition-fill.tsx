import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgVoiceRecognitionFill = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M20.998 3V21H2.99805V3H20.998ZM12.998 6H10.998V18H12.998V6ZM8.99805 9H6.99805V15H8.99805V9ZM16.998 9H14.998V15H16.998V9Z" />
  </AnimatedSvg>
);

export default SvgVoiceRecognitionFill;
