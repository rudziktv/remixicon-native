import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgMiniProgramLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM13.001 14C13.001 15.9332 11.434 17.5002 9.50098 17.5002C7.56798 17.5002 6.00098 15.9332 6.00098 14.0002C6.00098 12.6262 6.80048 11.3965 8.02405 10.8265C8.52467 10.5932 9.11958 10.81 9.35282 11.3106C9.58607 11.8112 9.36932 12.4061 8.86871 12.6393C8.34353 12.884 8.00098 13.4109 8.00098 14.0002C8.00098 14.8287 8.67255 15.5002 9.50098 15.5002C10.3294 15.5002 11.001 14.8287 11.001 14.0002V10C11.001 8.067 12.568 6.5 14.501 6.5C16.434 6.5 18.001 8.067 18.001 10C18.001 11.3741 17.2015 12.6037 15.9779 13.1738C15.4773 13.407 14.8824 13.1903 14.6491 12.6897C14.4159 12.189 14.6326 11.5941 15.1332 11.3609C15.6584 11.1162 16.001 10.5894 16.001 10C16.001 9.17157 15.3294 8.5 14.501 8.5C13.6725 8.5 13.001 9.17157 13.001 10V14Z" />
  </AnimatedSvg>
);

export default SvgMiniProgramLine;
