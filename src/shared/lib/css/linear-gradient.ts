export const linearGradient = (angle: number, from: string, to: string): string => {
  const formattedAngle = (angle % 360).toString() + 'deg';
  return `linear-gradient(${formattedAngle}, ${from}, ${to})`;
};
