export const snakeToUpperLower = (string: string): string => {
  const spacedString: string = string.split("-").join(" ");
  return spacedString[0].toUpperCase() + spacedString.slice(1);
};
