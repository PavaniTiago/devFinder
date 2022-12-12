import axios from 'axios'
import {  useState } from 'react'
import { Pfp } from './components/Pfp'
import { SearchBar } from './components/SearchBar'
import './styles/global.css'

function App() {
  const [apiData, setApiData] = useState([])
  const [ user, setUser] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(false)

  const renderUser = (users, id) => {
    return (
      <div key={id}>
        <Pfp  avatar={users.avatar_url} name={users.name} login={users.login} bio={users.bio} location={users.location} url={users.html_url} following={users.following} followers={users.followers} public_repos={users.public_repos}/>
      </div>
    )
  }
  
   async function searchUser() {
    await axios.get(`https://api.github.com/users/${searchInput}`)
    .then(res => {
      setApiData(res.data)
      setUser([apiData])
      setLoading(true);
      console.log(apiData)
    });
  }

  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen bg-slate-900">
      <nav>
        <section>
          <SearchBar 
            onChange={e => setSearchInput(e.target.value)}
            onClick={searchUser}
          />
        </section>
      </nav>

      <main>
        <section>
          {
            loading ? user.map(renderUser) 
            : <Pfp name='John Doe' login='@github' bio='This user has no bio.' location='Brasil' url='https://github/JohnDoe' following='61' followers='342' public_repos='47'/>
          }
        </section>
      </main>
    </div>
  )
}

export default App
