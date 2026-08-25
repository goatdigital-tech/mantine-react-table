import React from 'react';

import { MantineProvider } from '@mantine/core';

import { MantineReactTable } from '../dist/index.esm.mjs';

import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';

test('renders skeleton cells instead of placeholder values while loading', () => {
  const html = renderToStaticMarkup(
    React.createElement(
      MantineProvider,
      null,
      React.createElement(MantineReactTable, {
        columns: [
          {
            accessorKey: 'tier',
            Cell: () => React.createElement('span', null, 'placeholder-value'),
            header: 'Tier',
          },
        ],
        data: [],
        state: { isLoading: true },
      }),
    ),
  );

  assert.match(html, /mantine-Skeleton-root/);
  assert.doesNotMatch(html, /placeholder-value/);
});
