import { ActivityIndicator, View } from 'react-native';

export function EstadoCarregando() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
