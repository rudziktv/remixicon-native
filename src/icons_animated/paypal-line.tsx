import * as React from 'react';
import { Path, type SvgProps } from 'react-native-svg';
import { AnimatedSvg } from '../AnimatedSvg';
import type { AnimatedProps } from 'react-native-reanimated';

const SvgPaypalLine = (props: AnimatedProps<SvgProps>) => (
  <AnimatedSvg viewBox="0 0 24 24" {...props}>
    <Path d="M8.49626 20.6667H10.0474L10.5852 17.2912C10.8012 15.93 11.9747 14.9253 13.3545 14.9253H13.8545C16.5322 14.9253 17.915 13.9421 18.4055 11.4224C18.6134 10.3564 18.5222 9.69183 18.2339 9.32047C17.0272 12.3744 14.4449 13.4793 11.2725 13.4793H10.3878C10.004 13.4793 9.59454 13.6889 9.53611 14.0602L8.49626 20.6667ZM3.55247 20.3733C3.21381 20.3733 2.95514 20.0713 3.00781 19.736L5.68247 2.776C5.75314 2.32933 6.13847 2 6.59047 2H13.0138C15.2265 2 16.9558 2.46733 17.9131 3.558C18.783 4.54853 19.0364 5.64237 18.7846 7.25001C19.1438 7.44133 19.4518 7.67467 19.6998 7.956C20.5185 8.88867 20.6785 10.216 20.3685 11.8053C19.6278 15.6107 17.0925 16.9253 13.8545 16.9253H13.3545C12.9591 16.9253 12.6225 17.214 12.5605 17.6047L11.8578 21.988C11.7958 22.3787 11.4591 22.6667 11.0638 22.6667H6.72114C6.42447 22.6667 6.19781 22.402 6.24381 22.1093L6.51781 20.3733H3.55247ZM10.3878 11.4793H11.2725C14.462 11.4793 16.1671 10.2667 16.7549 7.2501C16.7744 7.14856 16.7919 7.04727 16.8086 6.94101C16.9746 5.88187 16.8586 5.38808 16.4104 4.87773C15.9451 4.34763 14.8073 4 13.0138 4H7.51416L5.24742 18.3733H6.80845L7.53821 13.7452L7.54562 13.7463C7.84632 12.4296 9.0169 11.4793 10.3878 11.4793Z" />
  </AnimatedSvg>
);

export default SvgPaypalLine;
