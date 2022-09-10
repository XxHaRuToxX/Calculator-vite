import './App.css'
import { CalculadoraScreen } from './screens/CalculatorScreen'
import { styles } from './theme/calcTheme'

function App() {

  return (
    <div style={styles.fondo}>
      <CalculadoraScreen/>
    </div>
  )
}

export default App
