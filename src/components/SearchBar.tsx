
import { Search } from 'lucide-react'
import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className= ' hidden sm:flex items-center gap-3 ring-1 px-2 py-1 rounded ring-gray-200 shadow-md'>
        <Search className='text-gray-500 cursor-pointer h-4 w-4'/>
        <input id="search" placeholder='Search...' className='text-sm outline-0' />
    </div>
  )
}

export default SearchBar