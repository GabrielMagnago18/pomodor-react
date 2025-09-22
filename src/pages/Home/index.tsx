import Container from '../../components/Container'
import { CountDown } from '../../components/CountDown'
import MainForm from '../../components/MainForm'
import MainTemplate from '../../templates/MainTemplate'

const Home = () => {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}

export default Home
