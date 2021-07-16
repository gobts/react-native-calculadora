import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface IProps {
  text: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalculadora = ({
  text,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: IProps) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 160 : 70,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
