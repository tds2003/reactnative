import InshortTabs from './components/InshortTabs';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={{...styles.container,backgroundColor:"#282C35"}}>
      <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop: StatusBar.currentHeight,
  },
});
