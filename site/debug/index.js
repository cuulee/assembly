import React from 'react';
import { CheckboxesRadios } from './checkboxes_radios';
import { Buttons } from './buttons';
import { Pills } from './pills';
import { Grid } from './grid';
import { Typography } from './typography';
import { Elements } from './elements';
import { TablesLists } from './tables_lists';
import { Triangles } from './triangles';
import { Miscellaneous } from './miscellaneous';
import { Forms } from './forms';
import { Switches } from './switches';
import { Spinners } from './spinners';
import { Toggles } from './toggles';

class Debug extends React.Component {
  render() {
    return (
      <div>
        <div className='mb48'>
          <Spinners />
        </div>
        <div className='mb48'>
          <Toggles />
        </div>
        <div className='mb48'>
          <Switches />
        </div>
        <div className='mb48'>
          <CheckboxesRadios />
        </div>
        <div className='mb48'>
          <Buttons />
        </div>
        <div className='mb48'>
          <Triangles />
        </div>
        <div className='mb48'>
          <Pills />
        </div>
        <div className='mb48'>
          <Grid />
        </div>
        <div className='mb48'>
          <Typography />
        </div>
        <div className='mb48'>
          <Elements />
        </div>
        <div className='mb48'>
          <TablesLists />
        </div>
        <div className='mb48'>
          <Miscellaneous />
        </div>
        <div className='mb48'>
          <Forms />
        </div>
      </div>
    );
  }
}

export { Debug };
