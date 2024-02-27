import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgVimeoFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M1.17444 8.30112C0.892531 7.88758 0.922443 7.88758 1.50184 7.37867C2.73388 6.29651 3.8964 5.11316 5.23826 4.1668C6.45346 3.31485 8.06417 2.7652 9.16466 4.1202C10.1791 5.36886 10.203 7.26157 10.4599 8.76952C10.7168 10.3336 10.963 11.9336 11.5114 13.4308C11.6632 13.8514 11.9535 14.6472 12.4793 14.7141C13.1568 14.8073 13.8474 13.6184 14.1617 13.1739C14.979 11.9945 16.0867 10.4053 15.9469 8.88781C15.8094 7.27591 14.0685 7.57941 12.9811 7.96416C13.1556 6.1551 14.8392 4.1214 16.4607 3.43314C18.1801 2.71979 20.7372 2.73174 21.6011 4.67105C22.5235 6.77286 21.6943 9.21402 20.6894 11.1187C19.5925 13.187 18.1801 15.1012 16.671 16.8888C15.3399 18.4768 13.765 20.2189 11.7803 20.9777C9.51357 21.8416 8.17052 20.158 7.39862 18.2079C6.55622 16.0846 6.13682 13.702 5.52862 11.4915C5.27291 10.5571 4.96941 9.49362 4.3624 8.72292C3.57019 7.72757 2.67044 8.66317 1.88779 9.19968C1.61894 8.93322 1.39669 8.59267 1.17444 8.30112Z" />
  </Svg>
);

export default SvgVimeoFill;
