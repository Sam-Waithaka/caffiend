import CoffeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import History from "./components/History"
import Layout from "./components/Layout"
import Stats from "./components/Stats"

function App() {

  const isAuthenticated = true

  const authenticatedcontent = (
    <>
      <Stats />
      <History />
    </>
  )
  

  return (
    <Layout>
      <Hero />
      <CoffeeForm />
      {isAuthenticated && (authenticatedcontent) }
    </Layout>
  )
}

export default App
