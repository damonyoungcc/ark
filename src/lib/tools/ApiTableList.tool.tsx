import React, { FC } from 'react';
import './style/api_table.scss';
interface ApiItem<T> {
  property: T;
  describe: T;
  type: T;
  defaultValue: T;
}

interface ApiListProps {
  ApiList: ApiItem<string>[];
}

const App: FC<ApiListProps> = (props) => {
  const { ApiList } = props;
  return (
    <div>
      <table className="api-table">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          {ApiList.map((item, index) => (
            <tr key={index}>
              <td>{item.property}</td>
              <td>{item.describe}</td>
              <td>
                <code>{item.type}</code>
              </td>
              <td>{item.defaultValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
