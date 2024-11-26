import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
