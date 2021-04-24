import React from 'react';

import WorksTop from './WorksTop/WorksTop';
import WorksMain from './WorksMain/WorksMain';

export default function WorksPage() {
  return (
    <div className='WorksPage  scroll-snapping'>
      <WorksTop />
      <WorksMain />
    </div>
  );
}
