import { type Dispatch, type SetStateAction } from 'react';

import {
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
  type MRT_Row,
  type MRT_RowData,
  type MRT_SortingState,
  type MRT_TableOptions,
  type MRT_VisibilityState,
} from 'mantine-react-table';

export type BuildTableOptionsParams<TData extends MRT_RowData> = {
  columnFilters: MRT_ColumnFiltersState;
  columns: MRT_ColumnDef<TData>[];
  columnVisibility: MRT_VisibilityState;
  data: TData[];
  globalFilter: string;
  handleColumnFilterChange: (
    updaterOrValue:
      | ((old: MRT_ColumnFiltersState) => MRT_ColumnFiltersState)
      | MRT_ColumnFiltersState
  ) => void;
  handleGlobalFilterChange: (
    updaterOrValue: ((old: string) => string) | string
  ) => void;
  mergedInitialState: MRT_TableOptions<TData>['initialState'];
  onRowClick?: (row: MRT_Row<TData>) => void;
  pagination: MRT_PaginationState;
  renderDetailPanel?: (row: MRT_Row<TData>) => React.ReactNode;
  renderRowActionMenuItems?: (row: MRT_Row<TData>) => React.ReactNode;
  restTableOptions: Omit<
    Partial<MRT_TableOptions<TData>>,
    'initialState' | 'state'
  >;
  rowCount: number;
  setColumnVisibility: Dispatch<SetStateAction<MRT_VisibilityState>>;
  setPagination: Dispatch<SetStateAction<MRT_PaginationState>>;
  setSorting: Dispatch<SetStateAction<MRT_SortingState>>;
  sorting: MRT_SortingState;
  state: MRT_TableOptions<TData>['state'];
};

const toBodyRowProps =
  <TData extends MRT_RowData>({
    onRowClick,
    rowProps,
  }: {
    onRowClick?: (row: MRT_Row<TData>) => void;
    rowProps: MRT_TableOptions<TData>['mantineTableBodyRowProps'];
  }): MRT_TableOptions<TData>['mantineTableBodyRowProps'] =>
  (props) => {
    const resolvedProps =
      typeof rowProps === 'function' ? rowProps(props) : rowProps;

    return {
      ...(onRowClick ? { onClick: () => onRowClick(props.row) } : {}),
      ...resolvedProps,
    };
  };

const toPaperProps =
  <TData extends MRT_RowData>({
    paperProps,
  }: {
    paperProps: MRT_TableOptions<TData>['mantinePaperProps'];
  }): MRT_TableOptions<TData>['mantinePaperProps'] =>
  (props) => {
    const resolvedProps =
      typeof paperProps === 'function' ? paperProps(props) : paperProps;

    return { ...resolvedProps };
  };

const toTableContainerProps =
  <TData extends MRT_RowData>({
    containerProps,
  }: {
    containerProps: MRT_TableOptions<TData>['mantineTableContainerProps'];
  }): MRT_TableOptions<TData>['mantineTableContainerProps'] =>
  (props) => {
    const resolvedProps =
      typeof containerProps === 'function'
        ? containerProps(props)
        : containerProps;

    return { ...resolvedProps };
  };

const toTableHeadCellProps =
  <TData extends MRT_RowData>({
    headCellProps,
  }: {
    headCellProps: MRT_TableOptions<TData>['mantineTableHeadCellProps'];
  }): MRT_TableOptions<TData>['mantineTableHeadCellProps'] =>
  (props) => {
    const resolvedProps =
      typeof headCellProps === 'function'
        ? headCellProps(props)
        : headCellProps;

    return { ...resolvedProps };
  };

export const buildTableOptions = <TData extends MRT_RowData>({
  columnFilters,
  columns,
  columnVisibility,
  data,
  globalFilter,
  handleColumnFilterChange,
  handleGlobalFilterChange,
  mergedInitialState,
  onRowClick,
  pagination,
  renderDetailPanel,
  renderRowActionMenuItems,
  restTableOptions,
  rowCount,
  setColumnVisibility,
  setPagination,
  setSorting,
  sorting,
  state,
}: BuildTableOptionsParams<TData>): MRT_TableOptions<TData> => ({
  columns,
  data,
  initialState: mergedInitialState,
  manualFiltering: true,
  manualPagination: true,
  manualSorting: true,
  onColumnFiltersChange: handleColumnFilterChange,
  onColumnVisibilityChange: setColumnVisibility,
  onGlobalFilterChange: handleGlobalFilterChange,
  onPaginationChange: setPagination,
  onSortingChange: setSorting,
  rowCount,
  state: {
    ...state,
    columnFilters,
    columnVisibility,
    globalFilter,
    pagination,
    sorting,
  },
  ...(renderRowActionMenuItems
    ? {
        renderRowActionMenuItems: ({ row }: { row: MRT_Row<TData> }) =>
          renderRowActionMenuItems(row),
      }
    : {}),
  ...(renderDetailPanel
    ? {
        renderDetailPanel: ({ row }: { row: MRT_Row<TData> }) =>
          renderDetailPanel(row),
      }
    : {}),
  ...restTableOptions,
  mantinePaperProps: toPaperProps({
    paperProps: restTableOptions.mantinePaperProps,
  }),
  mantineTableBodyRowProps: toBodyRowProps({
    onRowClick,
    rowProps: restTableOptions.mantineTableBodyRowProps,
  }),
  mantineTableContainerProps: toTableContainerProps({
    containerProps: restTableOptions.mantineTableContainerProps,
  }),
  mantineTableHeadCellProps: toTableHeadCellProps({
    headCellProps: restTableOptions.mantineTableHeadCellProps,
  }),
});
