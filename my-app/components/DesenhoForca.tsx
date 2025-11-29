import Svg, { Circle, Line } from 'react-native-svg';

type Props = {
  erros?: number;
  tamanho?: number;
};

export default function DesenhoForca({ erros = 0, tamanho = 220 }: Props) {
  const strokeColor = '#222';
  const thickness = 4;

  return (
    <Svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 200 200"
      accessibilityRole="image"
      accessibilityLabel={`Boneco da forca com ${erros} partes desenhadas`}
    >
      <Line x1="10" y1="190" x2="190" y2="190" stroke={strokeColor} strokeWidth={6} />
      <Line x1="40" y1="190" x2="40" y2="20" stroke={strokeColor} strokeWidth={6} />
      <Line x1="40" y1="20" x2="130" y2="20" stroke={strokeColor} strokeWidth={6} />
      <Line x1="130" y1="20" x2="130" y2="45" stroke={strokeColor} strokeWidth={6} />

      {erros > 0 && <Circle cx="130" cy="60" r="15" fill="none" stroke={strokeColor} strokeWidth={thickness} />}
      {erros > 1 && <Line x1="130" y1="75" x2="130" y2="115" stroke={strokeColor} strokeWidth={thickness} />}
      {erros > 2 && <Line x1="130" y1="85" x2="110" y2="105" stroke={strokeColor} strokeWidth={thickness} />}
      {erros > 3 && <Line x1="130" y1="85" x2="150" y2="105" stroke={strokeColor} strokeWidth={thickness} />}
      {erros > 4 && <Line x1="130" y1="115" x2="115" y2="140" stroke={strokeColor} strokeWidth={thickness} />}
      {erros > 5 && <Line x1="130" y1="115" x2="145" y2="140" stroke={strokeColor} strokeWidth={thickness} />}
    </Svg>
  );
}
