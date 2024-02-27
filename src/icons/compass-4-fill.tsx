import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCompass4Fill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.4462 9.96803C15.102 9.38559 14.6144 8.89798 14.032 8.55382L8.55382 14.032C8.89798 14.6144 9.38559 15.102 9.96803 15.4462L15.4462 9.96803Z" />
  </Svg>
);

export default SvgCompass4Fill;
