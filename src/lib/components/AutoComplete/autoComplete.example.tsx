import React from 'react';
import AutoComplete, { DataSourceType } from './autoComplete';
interface GithubUserProps {
  login?: string;
  html_url?: string;
  avatar_url?: string;
}
const App = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { items } = data || {};
        console.log(data.items);
        const formatItems = items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
        console.log(formatItems);
        return formatItems;
      });
  };

  const renderOption = (item: DataSourceType<GithubUserProps>) => {
    console.log('item', item);
    return (
      <>
        <p>url: {item.html_url}</p>
        <h2>Name: {item.value}</h2>
      </>
    );
  };

  return (
    <div>
      <div>
        <AutoComplete
          fetchSuggestions={handleFetch}
          renderOption={renderOption}
        />
      </div>
    </div>
  );
};

export default App;
