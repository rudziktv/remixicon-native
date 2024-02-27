import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgTwitchLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M4.30098 3H21.001V14.7L16.301 19.4H12.401L9.90098 21.8H7.00098V19.4H3.00098V6.2L4.30098 3ZM5.00098 17.4H9.00098V19.8H9.09636L11.5964 17.4H15.4725L19.001 13.8716V5H5.00098V17.4ZM15.001 8H17.001V12.7H15.001V8ZM15.001 8H17.001V12.7H15.001V8ZM10.001 8H12.001V12.7H10.001V8Z" />
  </Svg>
);

export default SvgTwitchLine;
