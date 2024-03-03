import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgUbuntuLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8.66784 19.2731L9.67371 17.5309C12.4214 18.6911 15.6673 17.6497 17.1971 15C17.6099 14.2851 17.8588 13.5206 17.9555 12.75H19.9677C19.8637 13.8618 19.5241 14.9695 18.9292 16C18.5267 16.6971 18.035 17.3108 17.477 17.8349C16.8385 17.6413 16.1244 17.7022 15.501 18.0621C14.8783 18.4216 14.4688 19.0086 14.3168 19.6575C12.4998 20.2066 10.4923 20.1118 8.66784 19.2731ZM7.3688 18.5231C5.73024 17.3624 4.64445 15.6713 4.21148 13.8232C4.69743 13.3671 5.00098 12.719 5.00098 12C5.00098 11.2801 4.69669 10.6312 4.20973 10.1751C4.38459 9.42975 4.67025 8.69715 5.07277 7.99995C5.66768 6.96954 6.4572 6.12154 7.3681 5.47557L8.3742 7.2182C7.75517 7.68729 7.21755 8.28509 6.80482 8.99995C5.27497 11.6497 5.996 14.9814 8.37467 16.7809L7.3688 18.5231ZM8.66779 4.72671C10.4122 3.92909 12.4225 3.76619 14.3163 4.34045C14.4679 4.99011 14.8776 5.57789 15.501 5.93778C16.1243 6.29766 16.8382 6.3586 17.4766 6.16508C18.9209 7.51805 19.785 9.34047 19.9664 11.25H17.9542C17.7265 9.45286 16.6908 7.77941 15.001 6.8038C13.3112 5.82819 11.3441 5.76797 9.67386 6.46927L8.66779 4.72671ZM16.001 5.07175C15.2835 4.65754 15.0377 3.74015 15.4519 3.02271C15.8662 2.30527 16.7835 2.05946 17.501 2.47367C18.2184 2.88789 18.4642 3.80527 18.05 4.52271C17.6358 5.24015 16.7184 5.48596 16.001 5.07175ZM4.00098 12C4.00098 12.8284 3.3294 13.5 2.50098 13.5C1.67255 13.5 1.00098 12.8284 1.00098 12C1.00098 11.1715 1.67255 10.5 2.50098 10.5C3.3294 10.5 4.00098 11.1715 4.00098 12ZM16.001 18.9282C16.7184 18.5139 17.6358 18.7598 18.05 19.4772C18.4642 20.1946 18.2184 21.112 17.501 21.5262C16.7835 21.9404 15.8662 21.6946 15.4519 20.9772C15.0377 20.2598 15.2835 19.3424 16.001 18.9282Z"
    />
  </AnimatedSvg>
);

export default SvgUbuntuLine;
