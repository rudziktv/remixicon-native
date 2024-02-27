import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgMediumLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M8 7C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17C10.7614 17 13 14.7614 13 12C13 9.23858 10.7614 7 8 7ZM8 5C10.416 5 12.5461 6.22398 13.8041 8.08568C13.8153 8.06272 13.8265 8.03991 13.8378 8.01725C14.3434 7.00613 15.2268 6 16.5 6C17.6811 6 18.5268 6.86587 19.0466 7.79835C19.0855 7.7475 19.1259 7.69828 19.1679 7.65093C19.4563 7.32556 19.9042 7 20.5 7C21.0958 7 21.5437 7.32556 21.8321 7.65093C22.1216 7.97747 22.3367 8.39292 22.497 8.82045C22.8204 9.6829 23 10.8073 23 12C23 13.1927 22.8204 14.3171 22.497 15.1796C22.3367 15.6071 22.1216 16.0225 21.8321 16.3491C21.5437 16.6744 21.0958 17 20.5 17C19.9042 17 19.4563 16.6744 19.1679 16.3491C19.1259 16.3017 19.0855 16.2525 19.0466 16.2016C18.5268 17.1341 17.6811 18 16.5 18C15.2268 18 14.3434 16.9939 13.8378 15.9827C13.8265 15.9601 13.8153 15.9373 13.8041 15.9143C12.5461 17.776 10.416 19 8 19C4.13401 19 1 15.866 1 12C1 8.13401 4.13401 5 8 5ZM20 12C20 12.9131 20.0797 13.9334 20.5 14.7642C20.9203 13.9334 21 12.9131 21 12C21 11.0869 20.9203 10.0666 20.5 9.23584C20.0797 10.0666 20 11.0869 20 12ZM18 12C18 11.2401 17.7868 8 16.5 8C15.2132 8 15 11.2401 15 12C15 12.7599 15.2132 16 16.5 16C17.7868 16 18 12.7599 18 12Z" />
  </Svg>
);

export default SvgMediumLine;
