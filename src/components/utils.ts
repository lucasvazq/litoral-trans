/**
 * Convert hex color to int.
 * It must be in pair format.
 *
 * @param color - hex color.
 */
export const hexColorToInt = (color: string) => {
  return color
    .replace("#", "")
    .match(/.{2}/g)
    .map((value) => parseInt(value, 16));
};

/**
 * Mix two hex colors.
 *
 * @param bottomColor - bottom color.
 * @param topColor - top color.
 * @param opacity - opacity of top color.
 */
export const mixHexColors = (bottomColor: string, topColor: string, opacity: number) => {
  const valuesTopColor = hexColorToInt(topColor);
  const mixedValues = hexColorToInt(bottomColor).map((value, index) => Math.round(value * (1 - opacity) + valuesTopColor[index] * opacity).toString(16));
  return `#${mixedValues.join("")}`;
};
