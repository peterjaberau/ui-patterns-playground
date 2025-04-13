import React from 'react';

console.log('[WDYR] File loaded'); // ← this MUST show up

if (typeof window !== 'undefined') {
  console.log('[WDYR] Initializing...');
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOnDifferentValues: true,
  });
}

export const wdyrLoaded = true; // prevent tree-shaking
