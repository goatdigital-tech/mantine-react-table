import clsx from 'clsx'

import { useEffect, useLayoutEffect, useState } from 'react'

import {
  LoadingOverlay,
  ScrollArea,
  type ScrollAreaAutosizeProps,
} from '@mantine/core'

import { parseFromValuesOrFunc } from '../../utils/utils'
import { MRT_EditRowModal } from '../modals/MRT_EditRowModal'
import { MRT_Table } from './MRT_Table'
import classes from './MRT_TableContainer.module.css'
import type { MRT_RowData, MRT_TableInstance } from '../../types'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

interface Props<TData extends MRT_RowData> extends ScrollAreaAutosizeProps {
  table: MRT_TableInstance<TData>
}

export const MRT_TableContainer = <TData extends MRT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    state,
    options: {
      createDisplayMode,
      editDisplayMode,
      enableStickyHeader,
      mantineLoadingOverlayProps,
      mantineTableContainerProps,
    },
    refs: { bottomToolbarRef, tableContainerRef, topToolbarRef },
  } = table
  const {
    creatingRow,
    editingRow,
    isFullScreen,
    isLoading,
    showLoadingOverlay,
  } = state

  const [totalToolbarHeight, setTotalToolbarHeight] = useState(0)

  const tableContainerProps = {
    ...parseFromValuesOrFunc(mantineTableContainerProps, { table }),
    ...rest,
  }
  const { ref: tableContainerPropRef, ...resolvedTableContainerProps } =
    tableContainerProps
  const loadingOverlayProps = parseFromValuesOrFunc(
    mantineLoadingOverlayProps,
    { table },
  )

  useIsomorphicLayoutEffect(() => {
    const topToolbarHeight =
      typeof document !== 'undefined'
        ? (topToolbarRef.current?.offsetHeight ?? 0)
        : 0

    const bottomToolbarHeight =
      typeof document !== 'undefined'
        ? (bottomToolbarRef?.current?.offsetHeight ?? 0)
        : 0

    setTotalToolbarHeight(topToolbarHeight + bottomToolbarHeight)
  })

  const createModalOpen = createDisplayMode === 'modal' && creatingRow
  const editModalOpen = editDisplayMode === 'modal' && editingRow

  return (
    <ScrollArea.Autosize
      {...resolvedTableContainerProps}
      __vars={{
        '--mrt-top-toolbar-height': `${totalToolbarHeight}`,
        ...resolvedTableContainerProps.__vars,
      }}
      className={clsx(
        'mrt-table-container',
        classes.root,
        enableStickyHeader && classes['root-sticky'],
        isFullScreen && classes['root-fullscreen'],
        resolvedTableContainerProps.className,
      )}
      viewportRef={(node: HTMLDivElement) => {
        if (node) {
          tableContainerRef.current = node
          if (typeof tableContainerPropRef === 'function') {
            tableContainerPropRef(node)
          } else if (tableContainerPropRef) {
            tableContainerPropRef.current = node
          }
        }
      }}
    >
      <LoadingOverlay
        visible={isLoading || showLoadingOverlay}
        zIndex={2}
        {...loadingOverlayProps}
      />
      <MRT_Table table={table} />
      {(createModalOpen || editModalOpen) && (
        <MRT_EditRowModal open table={table} />
      )}
    </ScrollArea.Autosize>
  )
}
