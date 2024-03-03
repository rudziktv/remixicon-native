import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgTimeZoneFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12 2C17.0778 2 21.2717 5.7847 21.9146 10.6871C20.5585 9.62985 18.8528 9 17 9C12.5817 9 9 12.5817 9 17C9 18.8528 9.62985 20.5585 10.6871 21.9146C5.7847 21.2717 2 17.0778 2 12C2 6.47715 6.47715 2 12 2ZM12 3.83333C9.68259 3.83333 7.59062 4.79858 6.1042 6.34896C6.28116 6.47186 6.43537 6.64453 6.54129 6.88256C6.74529 7.34029 6.74529 7.8112 6.74529 8.22764C6.74488 8.55598 6.74449 8.86735 6.84992 9.09302C6.99443 9.40134 7.6164 9.53227 8.16548 9.64736L8.18515 9.6515C8.37513 9.69149 8.57011 9.73254 8.74797 9.78176C9.25405 9.92233 9.64554 10.3765 9.95938 10.7412C10.0896 10.8931 10.2819 11.1163 10.3783 11.1717C10.4286 11.1356 10.59 10.9608 10.6699 10.6735C10.7307 10.4547 10.7134 10.2597 10.6239 10.1543C10.0648 9.49445 10.0952 8.2232 10.268 7.75495C10.5402 7.01606 11.3905 7.07058 12.012 7.11097L12.0178 7.11135C12.2474 7.12612 12.464 7.14006 12.6257 7.11976C13.097 7.06062 13.3212 6.50376 13.4611 6.15632C13.5059 6.0449 13.5421 5.95502 13.575 5.91C13.8671 5.50981 14.7607 4.9071 15.3158 4.53454C14.3025 4.08382 13.1805 3.83333 12 3.83333ZM23 17C23 20.3137 20.3137 23 17 23C13.6863 23 11 20.3137 11 17C11 13.6863 13.6863 11 17 11C20.3137 11 23 13.6863 23 17ZM16 18H20V16H18V14H16V18Z"
    />
  </AnimatedSvg>
);

export default SvgTimeZoneFill;
