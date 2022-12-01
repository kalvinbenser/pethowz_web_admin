import React from 'react';
import * as moment from 'moment';

// eslint-disable-next-line require-jsdoc
const DateFormat = () => {
  return (
    <div>
      <div>{moment('2022-09-08', 'YYYY-MM-DD').format('DD-MM-YYYY')}</div>

      <div>{moment('12/02/2022', ['DD/MM/YYYY', 'MM-DD-YYYY', 'MMDDYYYY']).format('DD-MM-YYYY')}</div>
      <div>{moment(new Date('2022-09-08')).format('DD-MM-YYYY')}</div>
    </div>
  );
};

export default DateFormat;
