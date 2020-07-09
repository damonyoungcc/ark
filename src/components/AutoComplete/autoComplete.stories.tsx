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
    return <div>Name: {item.value}</div>;
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
