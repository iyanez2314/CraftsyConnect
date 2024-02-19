import Svg, { G, Circle, Path } from "react-native-svg";
export const Icons = {
  Search: ({ color = "currentColor" }) => (
    <Svg width="22em" height="22em" viewBox="0 0 24 24">
      <G
        fill="none"
        stroke={color} // Use color prop here
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Circle cx={11} cy={11} r={8}></Circle>
        <Path d="m21 21l-4.3-4.3"></Path>
      </G>
    </Svg>
  ),
};
