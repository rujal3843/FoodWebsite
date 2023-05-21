import React from 'react'
import { Search } from './pages/Search'
import { Route, Routes } from 'react-router'
import { Header } from './component/Header'
import { Home } from './pages/Home'
import { Special } from './pages/Special'
import { Details } from './pages/Details'

// import { Name } from './pages/Name'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='search/:searchText' element={<Search />} />
        <Route path='special' element={<Special />} />
        <Route path='detail/:id' element={<Details />} />

        <Route path='*' element={<h1>Error 404 page not found</h1>} />


      </Routes>
    </>

  )
}

export default App