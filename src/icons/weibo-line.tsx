import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgWeiboLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M20.1945 14.1973C20.1945 17.5586 15.6658 20.6206 10.2693 20.6206C5.31907 20.6206 1.00098 18.1885 1.00098 14.5338C1.00098 12.5873 2.1808 10.447 4.24042 8.44571C7.0727 5.69957 10.4695 4.41277 12.0994 5.99781C12.5966 6.48041 12.8225 7.11988 12.8178 7.85577C14.7934 7.28031 16.4689 7.45174 17.3006 8.60768C17.7497 9.2307 17.8332 9.98744 17.6268 10.8152C19.1382 11.4259 20.1945 12.5847 20.1945 14.1973ZM15.755 12.1279C15.3691 11.7166 15.3549 11.2078 15.5572 10.7169C15.7655 10.2087 15.7701 9.90467 15.6776 9.77646C15.4134 9.40925 14.1443 9.41428 12.4833 10.0883C12.4306 10.1106 12.3609 10.1367 12.2765 10.1623C12.1789 10.1917 12.0794 10.2147 11.9744 10.2286C11.6296 10.274 11.3028 10.2293 10.9913 9.96287C10.572 9.60419 10.5175 9.10776 10.6694 8.64655C10.8835 7.97702 10.8482 7.57054 10.7057 7.43232C10.5197 7.25137 9.92883 7.24087 9.04745 7.57477C7.97823 7.97981 6.74875 8.79941 5.63339 9.88084C3.92586 11.54 3.00098 13.2178 3.00098 14.5338C3.00098 16.7755 6.27688 18.6206 10.2693 18.6206C14.6892 18.6206 18.1945 16.2506 18.1945 14.1973C18.1945 13.4588 17.558 12.8585 16.5218 12.5446C16.1276 12.4316 15.9855 12.3736 15.755 12.1279ZM22.8091 10.5099C22.6705 11.0445 22.1247 11.3655 21.5901 11.2268C21.0555 11.0882 20.7345 10.5424 20.8732 10.0078C20.9577 9.68188 21.001 9.34424 21.001 9C21.001 6.79086 19.2101 5 17.001 5C16.7223 5 16.448 5.02834 16.1806 5.08401C15.6399 5.19657 15.1103 4.84949 14.9977 4.3088C14.8852 3.76811 15.2323 3.23854 15.773 3.12599C16.1743 3.04244 16.5852 3 17.001 3C20.3147 3 23.001 5.68629 23.001 9C23.001 9.514 22.9361 10.0203 22.8091 10.5099Z" />
  </Svg>
);

export default SvgWeiboLine;
