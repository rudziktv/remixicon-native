# remixicon-native

[RemixIcon](https://remixicon.com/) for React Native

[RemixIcon](https://remixicon.com/) - version 4.2.0

This package provides RemixIcon component:

- fully static types (even name prop)
- newest RemixIcon version (4.2.0 contains all new icons)
- simple
- built with [react-native-svg](https://github.com/software-mansion/react-native-svg), [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- animation support

Hope it will be useful for you.

## Installation

#### Expo

```sh
npx expo install remixicon-native
```

#### React Native CLI

```sh
npm i remixicon-native
```

If [react-native-svg](https://github.com/software-mansion/react-native-svg), [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) haven't been installed automatically, do it manually

```sh
npm install react-native-svg react-native-reanimated
```

## Usage

```js
import { RemixIcon } from 'remixicon-native';

// ...
<RemixIcon
  name="remixicon-line" //required
  color="white" //optional, default = 'white'
  size={36} //optional, default = 24
  //to animate color or size, simply pass SharedValue (not SharedValue.value!!)
/>;
///...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
