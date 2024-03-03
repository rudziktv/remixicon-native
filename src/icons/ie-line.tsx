import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgIeLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M18.1595 10.0001C17.3358 7.6697 15.1133 6.00008 12.5009 6.00008C9.88846 6.00008 7.66598 7.6697 6.84231 10.0001H18.1595ZM6.58385 13.0001C7.05993 15.8378 9.5279 18.0001 12.5009 18.0001C14.698 18.0001 16.6193 16.8191 17.6647 15.0573H20.9683C20.9608 15.0783 20.953 15.0992 20.9451 15.1201C19.6766 18.5528 16.3746 21.0001 12.5009 21.0001C11.1084 21.0001 9.7898 20.6839 8.61295 20.1193C5.86915 21.6102 3.50024 21.9188 2.1909 20.6106C0.847101 19.2694 1.56267 15.7588 3.50394 12.2367C4.19428 10.9842 5.03962 9.7302 6.00247 8.57179C6.36179 8.13949 6.73747 7.72051 7.12757 7.31987C6.85302 7.37539 5.24718 8.17147 3.71617 10.0345C3.77393 9.77522 3.84289 9.52012 3.92249 9.26978C5.07865 5.63404 8.48217 3.00008 12.5009 3.00008C12.7308 3.00008 12.9586 3.0087 13.1842 3.02563C16.2787 1.62287 19.158 1.29938 20.3759 2.51465C21.5009 3.63795 21.4384 5.51011 20.5009 7.75671C20.4918 7.77847 20.4828 7.79991 20.4739 7.82104C21.1298 9.06983 21.5009 10.4916 21.5009 12.0001C21.5009 12.3381 21.4823 12.6718 21.446 13.0001H18.4179H6.58385ZM8.00613 19.7991C6.1803 18.7445 4.75932 17.0672 4.03351 15.0575C2.87291 17.3392 2.57399 19.2474 3.56507 20.237C4.37757 21.0491 6.00257 20.861 8.00257 19.801L8.00613 19.7991ZM20.1728 7.29218C20.178 7.28091 20.1832 7.26962 20.1884 7.2583C20.9384 5.63576 21.0009 4.26367 20.3134 3.4524C19.4442 2.58451 17.7732 2.70192 15.7906 3.62029C17.6193 4.33877 19.1559 5.63857 20.1728 7.29218Z"
    />
  </AnimatedSvg>
);

export default SvgIeLine;
