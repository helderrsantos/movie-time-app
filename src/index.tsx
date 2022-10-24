import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native';
import Routes from './routes';
import GlobalStyle from './styles/theme';

export default function App() {
    return (
        <SafeAreaView
            style={{backgroundColor:`${GlobalStyle.colors.overlay}`, flex:1}}>
            <Routes />
        </SafeAreaView>
    )
}
      
registerRootComponent(App);

