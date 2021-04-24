import React from 'react';

import BasicStanceTop from './BasicStanceTop/BasicStanceTop';
import BasicStanceMain from './BasicStanceMain/BasicStanceMain';

export default function BasicStancePage() {
  return (
    <div className='BasicStancePage  scroll-snapping'>
      <BasicStanceTop />
      <BasicStanceMain />
    </div>
  );
}
