import React from 'react';
import * as Icon from './icons';
import { type RemixIconType } from './RemixIconType';
import { Text } from 'react-native';
import type { NumberProp, PathProps, SvgProps } from 'react-native-svg';
import type { IconProps } from './IconProps';
import {
  createAnimatedPropAdapter,
  processColor,
  useAnimatedProps,
  type SharedValue,
} from 'react-native-reanimated';

const RemixIcon = ({
  name = 'remixicon-line',
  size = 24,
  color = 'white',
}: RemixIconProps) => {
  const iconComponentName =
    'Svg' +
    name
      .split('-')
      .map((s) => s[0]?.toUpperCase() + s.substring(1))
      .join('');

  const Component = (Icon as any)[iconComponentName] as React.FC<IconProps>;

  const animatedSvg = useAnimatedProps<SvgProps>(() => ({
    width:
      typeof size === 'number' || typeof size === 'string' ? size : size.value,
    height:
      typeof size === 'number' || typeof size === 'string' ? size : size.value,
  }));

  const animatedPath = useAnimatedProps<PathProps>(
    () => ({
      fill: typeof color === 'string' ? color : color.value,
    }),
    [color],
    createAnimatedPropAdapter(
      (props) => {
        if (Object.keys(props).includes('fill')) {
          props.fill = { type: 0, payload: processColor(props.fill) };
        }
        if (Object.keys(props).includes('stroke')) {
          props.stroke = {
            type: 0,
            payload: processColor(props.stroke),
          };
        }
      },
      ['fill', 'stroke']
    )
  );

  return Component ? (
    <Component
      svg={{ animatedProps: animatedSvg }}
      path={{ animatedProps: animatedPath }}
    />
  ) : (
    <Text>Icon not found</Text>
  );
};

export interface RemixIconProps {
  name: RemixIconType;
  size?: NumberProp | SharedValue<NumberProp>;
  color?: string | SharedValue<string>;
}

export default RemixIcon;
