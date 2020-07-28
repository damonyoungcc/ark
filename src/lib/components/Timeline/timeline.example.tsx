import React, { FC } from 'react';
import Timeline from './timeline';
import Icon from '../Icon';

const SpinIcon1 = <Icon icon="circle-notch" spin />;
const SpinIcon2 = <Icon icon={['far', 'clock']} spin />;
const SpinIcon3 = <Icon icon={['far', 'hourglass']} spin />;
const SpinIcon4 = <Icon icon={['fas', 'hourglass-end']} spin />;
const SpinIcon5 = <Icon icon={['fas', 'spinner']} pulse />;

const App: FC = () => {
  return (
    <div>
      <Timeline pending>
        <Timeline.Item dot={SpinIcon2}>
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item dot={SpinIcon3}>
          Solve initial network problems 2015-09-01
        </Timeline.Item>
        <Timeline.Item dot={SpinIcon5}>
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item dot={SpinIcon4}>
          Network problems being solved 2015-09-01
        </Timeline.Item>
      </Timeline>
      <div>
        --------------------------------------------------------------------------
      </div>
      <Timeline mode="right">
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>

      <div>
        -------------------------------------------------------------------
      </div>
      <Timeline mode="alternate" pending="Recording....">
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item color="green">
          Solve initial network problems 2015-09-01
        </Timeline.Item>
        <Timeline.Item dot={SpinIcon1}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Timeline.Item>
        <Timeline.Item color="red">
          Network problems being solved 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      </Timeline>
      <div>
        -----------------------------------------------------------------------
      </div>
      <Timeline mode="left">
        <Timeline.Item label="2015-09-01">
          <p>Create a services</p>
          <p>Create a services</p>
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Technical testing
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Network problems being solved
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default App;
