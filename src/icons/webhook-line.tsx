import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgWebhookLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8.86874 14.1392C8.6556 14.4912 8.55014 14.7778 8.72043 15.2253C9.1905 16.4613 8.52737 17.664 7.28097 17.9905C6.10556 18.2985 4.96035 17.526 4.72713 16.2676C4.52048 15.1537 5.38488 14.0617 6.61294 13.8877C6.67963 13.8781 6.74717 13.874 6.83351 13.8688C6.88044 13.866 6.93293 13.8628 6.99384 13.8582L8.86194 10.7257C7.687 9.55742 6.98767 8.19164 7.14246 6.49936C7.25188 5.30308 7.72226 4.26933 8.58208 3.42201C10.2288 1.79945 12.7411 1.53667 14.68 2.78212C16.5423 3.97841 17.3951 6.30867 16.6681 8.30311L14.9611 7.84C15.1895 6.73115 15.0206 5.73536 14.2727 4.88234C13.7786 4.31914 13.1446 4.02394 12.4236 3.91516C10.9783 3.69681 9.55922 4.6254 9.13816 6.04399C8.66019 7.65406 9.38355 8.96924 11.3603 9.96029C10.5311 11.3541 9.70859 12.7518 8.86874 14.1392ZM13.7838 8.27337C14.3816 9.32798 14.9886 10.3986 15.5902 11.4593C18.631 10.5186 20.9237 12.2018 21.7462 14.004C22.7396 16.1809 22.0605 18.7593 20.1094 20.1023C18.1067 21.481 15.5741 21.2454 13.7997 19.4744L15.1919 18.3094C16.9444 19.4445 18.4772 19.3911 19.6151 18.047C20.5855 16.9003 20.5644 15.1906 19.5659 14.068C18.4136 12.7726 16.8701 12.7331 15.0044 13.9767C14.2305 12.6037 13.443 11.2413 12.6936 9.85845C12.4409 9.39233 12.1618 9.12196 11.5923 9.0233C10.6411 8.85839 10.027 8.04157 9.99016 7.12642C9.95395 6.22138 10.4871 5.4033 11.3205 5.08455C12.146 4.7688 13.1148 5.02367 13.6701 5.72554C14.1239 6.29901 14.2681 6.94443 14.0293 7.65167C13.9843 7.7852 13.9304 7.91584 13.8713 8.05885C13.8431 8.12694 13.8138 8.19801 13.7838 8.27337ZM11.552 16.895H15.2126C15.2636 16.963 15.3113 17.0303 15.3579 17.0959C15.4551 17.233 15.5474 17.3632 15.6551 17.4788C16.4304 18.3077 17.7395 18.3489 18.5682 17.5795C19.4271 16.7821 19.466 15.4426 18.6544 14.6101C17.8602 13.7955 16.5029 13.7177 15.7655 14.5802C15.3176 15.1044 14.8586 15.166 14.2641 15.1567C12.7414 15.1332 11.2177 15.149 9.69524 15.149C9.79406 17.2909 8.98436 18.6255 7.37841 18.9424C5.80582 19.2528 4.3575 18.4504 3.84759 16.9864C3.26842 15.3229 3.98467 13.9925 6.05421 12.9366C5.89847 12.3725 5.74115 11.8016 5.58541 11.236C3.32977 11.7276 1.63749 13.916 1.8122 16.378C1.96652 18.5514 3.71968 20.4815 5.86369 20.8273C7.02819 21.0153 8.12233 20.82 9.13741 20.2442C10.4433 19.5032 11.2011 18.3381 11.552 16.895Z"
      fill="#231F20"
    />
  </AnimatedSvg>
);

export default SvgWebhookLine;
