import Animated from 'react-native-reanimated';
import { Path, Svg } from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export { AnimatedSvg, AnimatedPath };
