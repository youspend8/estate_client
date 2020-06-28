import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import SearchTable from './SearchTable';
import Axios from 'axios';
import { TradeContext } from './context/useTradeContext';
import NaverMap from './NaverMap';
import Pagination from './component/pagination/Pagination';

const App = () => {
  const [ data, setData ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ size, setSize ] = useState(10);

  const search = async() => {
    console.log(searchQuery)
    const response = await Axios.get('http://localhost:8080/search/', {
      params: {
        page: page,
        size: size
      }
    });
    const result = await response.data;

    setData(response.data)
    console.log(result)
  }

  const [ name, setName ] = useState('');

  const searchQuery = {
    state: {
      name: name,
    },
    action: {
      setName: setName
    }
  }

  useEffect(() => {
    search();
  }, [ page, size ]);

  return (
    <TradeContext.Provider value={{
      searchQuery: searchQuery,
      search: search
    }}>
      <div className="App">
        <SearchBox />
        <SearchTable data={data} pagination={{
          page: page,
          end: 10,
          size: size,
          onSizeChange: e => setSize(e.target.value),
          onPageChange: page => setPage(page)
        }} />
        {/* <NaverMap /> */}
      </div>
    </TradeContext.Provider>
  );
}

export default App;
