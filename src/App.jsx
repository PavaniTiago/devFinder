import { Pfp } from './components/Pfp'
import { SearchBar } from './components/SearchBar'
import './styles/global.css'

function App() {
  console.log('s')
  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen bg-slate-900">
      <nav>
        <section>
          <SearchBar />
        </section>
      </nav>

      <main>
        <section>
          <Pfp />
        </section>
      </main>
    </div>
  )
}

export default App
