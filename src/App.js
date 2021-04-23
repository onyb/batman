import './App.css'

import Coins from './components/coins'
import Pagination from './components/pagination'
import WatchList from './components/watchlist'

function App() {
  return (
    <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-4">
      <div className="col-start-1 col-span-2">
        <h1 class="text-xl border-b mb-2">
          Today's Cryptocurrency Prices by Market Cap
        </h1>

        <Coins />
        <Pagination />
      </div>

      <div className="col-start-3 col-span-1">
        <h1 class="text-xl border-b mb-2">Watchlist</h1>
        <WatchList />
      </div>
    </div>
  )
}

export default App
