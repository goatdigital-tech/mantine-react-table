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

test('renders the table container with Mantine ScrollArea', () => {
  const html = renderToStaticMarkup(
    React.createElement(
      MantineProvider,
      null,
      React.createElement(MantineReactTable, {
        columns: [{ accessorKey: 'name', header: 'Name' }],
        data: [{ name: 'Ada' }],
      }),
    ),
  );

  assert.match(html, /mantine-ScrollArea-root/);
  assert.match(html, /data-autosize="true"/);
  assert.match(html, /data-offset-scrollbars="present"/);
});

test('allows ScrollArea defaults to be overridden', () => {
  const html = renderToStaticMarkup(
    React.createElement(
      MantineProvider,
      null,
      React.createElement(MantineReactTable, {
        columns: [{ accessorKey: 'name', header: 'Name' }],
        data: [{ name: 'Ada' }],
        mantineTableContainerProps: {
          offsetScrollbars: false,
          type: 'never',
        },
      }),
    ),
  );

  assert.doesNotMatch(html, /data-offset-scrollbars="present"/);
  assert.match(html, /data-hidden="true"/);
});
