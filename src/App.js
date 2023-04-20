import { useState } from 'react'
import SearchInput from './components/SearchInput'
import Credits from './components/Credits'
import HomeOptions from './components/HomeOptions'
import TypeWriterText from './components/TypeWriterTextEffect'

export default function App() {

  const [search, setSearch] = useState('')
  const [showMore, setShowMore] = useState(false)

  const onSearch = (searchText) => {
    setSearch(searchText);
  }

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gray-800">
      <header className="flex items-center justify-center w-1/2 p-10 text-gray-800 bg-gray-800 dark:text-gray-100">
        <h1 className="text-4xl font-bold">Chat GPT</h1>
      </header>
      <section className="flex flex-col items-center justify-center w-1/2 p-10 text-gray-800 bg-gray-800 dark:text-gray-100">

        {search.length === 0 ?
          <HomeOptions />
          :
          <>
            <div className='flex items-center justify-center w-full mt-20'>
              <TypeWriterText text="As an AI language model, I don't have the capability to build a website myself, but I can certainly provide you with some guidance on how to get started with building a website." onTextCompleted={setShowMore} />
            </div>
            {showMore &&
              <div className='flex items-center justify-center w-full mt-20'>
                <TypeWriterText text="I would recommend you call FL1 Digital, they're amazing and will build you a far better website than any articfial intellegance 😉" onTextCompleted={setShowMore} />
              </div>
            }
          </>}
        <div className='flex items-center justify-center w-full mt-20'>
          <SearchInput onSearch={onSearch} />
        </div>


      </section>
      <footer className="flex items-center justify-center w-1/2 p-10 text-gray-800 bg-gray-800 dark:text-gray-100">
        <Credits />
      </footer>
    </main>
  )
}