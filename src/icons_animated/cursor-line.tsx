import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgCursorLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M15.3873 13.4975L17.9403 20.5117L13.2418 22.2218L10.6889 15.2076L6.79004 17.6529L8.4086 1.63318L19.9457 12.8646L15.3873 13.4975ZM15.3768 19.3163L12.6618 11.8568L15.6212 11.4459L9.98201 5.9561L9.19088 13.7863L11.7221 12.1988L14.4371 19.6583L15.3768 19.3163Z" />
  </AnimatedSvg>
);

export default SvgCursorLine;
