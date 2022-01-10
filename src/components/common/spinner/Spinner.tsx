import React, { ReactElement } from 'react';

export const Spinner = (): ReactElement => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Loading...
  </div>
);
