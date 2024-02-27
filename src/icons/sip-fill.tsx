import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSipFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13.9602 6.50108L16.7886 3.67265C17.1791 3.28213 17.8123 3.28213 18.2028 3.67265L20.3241 5.79397C20.7146 6.1845 20.7146 6.81766 20.3241 7.20819L17.4957 10.0366L19.2635 11.8044L17.8492 13.2186L10.7782 6.14753L12.1924 4.73331L13.9602 6.50108ZM10.7782 8.97596L15.0208 13.2186L7.24264 20.9968H3V16.7541L10.7782 8.97596Z" />
  </Svg>
);

export default SvgSipFill;
