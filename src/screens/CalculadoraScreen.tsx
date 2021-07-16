import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalculadora} from '../components/BotonCalculadora';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    armarNumero,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    positivoNegativo,
    numero,
    numeroAnterior,
    limpiar,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalculadora text="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalculadora
          text="+/-"
          color="#9B9B9B"
          accion={positivoNegativo}
        />
        <BotonCalculadora text="del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalculadora text="/" color="#FF9427" accion={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora text="7" accion={armarNumero} />
        <BotonCalculadora text="8" accion={armarNumero} />
        <BotonCalculadora text="9" accion={armarNumero} />
        <BotonCalculadora text="x" color="#FF9427" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora text="4" accion={armarNumero} />
        <BotonCalculadora text="5" accion={armarNumero} />
        <BotonCalculadora text="6" accion={armarNumero} />
        <BotonCalculadora text="-" color="#FF9427" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora text="1" accion={armarNumero} />
        <BotonCalculadora text="2" accion={armarNumero} />
        <BotonCalculadora text="3" accion={armarNumero} />
        <BotonCalculadora text="+" color="#FF9427" accion={btnSumar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora text="0" ancho accion={armarNumero} />
        <BotonCalculadora text="." accion={armarNumero} />
        <BotonCalculadora text="=" accion={calcular} />
      </View>
    </View>
  );
};
