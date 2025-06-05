import CoffeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import History from "./components/History"
import Layout from "./components/Layout"
import Stats from "./components/Stats"
import { useAuth } from "./context/AuthContext"

function App() {
  const {globalUser, isLoading, globalData} = useAuth()
  const isAuthenticated = globalUser
  const isData = globalData && !!Object.keys(globalData || {}).length

  const authenticatedcontent = (
    <>
      <Stats />
      <History />
    </>
  )
  

  return (
    <Layout>
      <Hero />
      <CoffeeForm isAuthenticated={isAuthenticated}/>
      {(isLoading && isAuthenticated ) && (
        <p>Loading data...</p>
      )}
      {(isAuthenticated && isData) && (authenticatedcontent) }
    </Layout>
  )
}

export default App
