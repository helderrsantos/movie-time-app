import { registerRootComponent } from 'expo';
import { Home } from './screens/Home';

export default function App() {
    return (
            <Home />
    )
}
console.log(App())
      
registerRootComponent(App);

