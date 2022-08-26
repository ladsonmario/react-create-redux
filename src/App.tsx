import * as C from './App.styles';
import { Background } from './components/Background';
import { MainRouter } from './routes/MainRouter';

function App() {
  return (    
    <Background>
      <C.Container>
        <MainRouter />
      </C.Container>
    </Background>         
  )
}

export default App
