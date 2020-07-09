import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AutoComplete, DataSourceType } from './autoComplete';

interface LakerPlayerProps {
  value: string;
  number?: number;
}

interface GithubUserProps {
  login?: string;
  html_url?: string;
  avatar_url?: string;
}

const SimpleComplete = () => {
  // const lakers = ['bradley', 'pope', 'apple', 'sony', 'steven Jobs'];
  const lakersWithNumber = [
    {
      value: 'bradley',
      number: 1,
    },
    {
      value: 'pope',
      number: 12,
    },
    {
      value: 'apple',
      number: 34,
    },
    {
      value: 'sony',
      number: 8,
    },
    {
      value: 'steven Jobs',
      number: 33,
    },
  ];
  // const handleFetch = (query: string) => {
  //   return lakers.filter((item) => item.includes(query));
  // };
  // const handleFetch = (query: string) => {
  //   return lakersWithNumber
  //     .filter((player) => player.value.includes(query))
  //     .map((item) => ({
  //       value: item.value,
  //       number: item.number,
  //     }));
  // };

  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { items } = data || {};
        console.log(data.items);
        const formatItems = items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }));
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
    <AutoComplete
      fetchSuggestions={handleFetch}
      renderOption={renderOption}
      onSelect={action('selected')}
    />
  );
};

storiesOf('AutoComplete', module).add('AutoComplete', SimpleComplete);
