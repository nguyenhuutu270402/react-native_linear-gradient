import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#13adb6', '#333', '#d4df25', 'red']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: '90%', height: 40, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text numberOfLines={1} style={{ color: 'white' }}>Hello</Text>
      </LinearGradient>

      <LinearGradient
        colors={['#13adb6', '#333', '#d4df25', 'red']}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: '90%', height: 40, justifyContent: 'center', alignItems: 'center', marginVertical: 20, }}
      >
        <Text numberOfLines={1} style={{ color: 'white' }}>Hello</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
