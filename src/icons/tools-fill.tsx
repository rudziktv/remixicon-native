import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgToolsFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M5.32943 3.27152C6.56252 2.83314 7.9923 3.10743 8.97927 4.0944C9.96652 5.08165 10.2407 6.51196 9.80178 7.74529L20.6465 18.5901L18.5252 20.7114L7.67936 9.86703C6.44627 10.3054 5.01649 10.0311 4.02952 9.04415C3.04227 8.0569 2.7681 6.62659 3.20701 5.39326L5.44373 7.62994C6.02952 8.21572 6.97927 8.21572 7.56505 7.62994C8.15084 7.04415 8.15084 6.0944 7.56505 5.50862L5.32943 3.27152ZM15.6968 5.15506L18.8788 3.38729L20.293 4.80151L18.5252 7.98349L16.7574 8.33704L14.6361 10.4584L13.2219 9.04415L15.3432 6.92283L15.6968 5.15506ZM8.62572 12.9332L10.747 15.0546L5.79729 20.0043C5.2115 20.5901 4.26175 20.5901 3.67597 20.0043C3.12464 19.453 3.09221 18.5792 3.57867 17.99L3.67597 17.883L8.62572 12.9332Z" />
  </Svg>
);

export default SvgToolsFill;
