import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

import { buildTableOptions } from './data-table-options';

import {
  MantineReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
  type MRT_Row,
  type MRT_RowData,
  type MRT_SortingState,
  type MRT_TableOptions,
  type MRT_VisibilityState,
  useMantineReactTable,
} from 'mantine-react-table';

export type ConsumerTableProps<TData extends MRT_RowData> = {
  columns: MRT_ColumnDef<TData>[];
  data: TData[];
  onRowClick?: (row: MRT_Row<TData>) => void;
  renderRowActionMenuItems?: (row: MRT_Row<TData>) => ReactNode;
  tableOptions?: Partial<MRT_TableOptions<TData>>;
};

const columnFilters: MRT_ColumnFiltersState = [];
const columnVisibility: MRT_VisibilityState = {};
const globalFilter = '';
const handleColumnFilterChange = (
  _value:
    | ((old: MRT_ColumnFiltersState) => MRT_ColumnFiltersState)
    | MRT_ColumnFiltersState,
) => undefined;
const handleGlobalFilterChange = (
  _value: ((old: string) => string) | string,
) => undefined;
const pagination: MRT_PaginationState = { pageIndex: 0, pageSize: 10 };
const setColumnVisibility: Dispatch<SetStateAction<MRT_VisibilityState>> = () =>
  undefined;
const setPagination: Dispatch<SetStateAction<MRT_PaginationState>> = () =>
  undefined;
const setSorting: Dispatch<SetStateAction<MRT_SortingState>> = () => undefined;
const sorting: MRT_SortingState = [];

export const ConsumerTable = <TData extends MRT_RowData>({
  columns,
  data,
  onRowClick,
  renderRowActionMenuItems,
  tableOptions,
}: ConsumerTableProps<TData>) => {
  const {
    initialState: providedInitialState,
    state: providedState,
    ...restTableOptions
  } = tableOptions ?? {};
  const mergedInitialState = {
    ...providedInitialState,
    density: providedInitialState?.density ?? 'xs',
  };
  const options = buildTableOptions({
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
    renderRowActionMenuItems,
    restTableOptions,
    rowCount: data.length,
    setColumnVisibility,
    setPagination,
    setSorting,
    sorting,
    state: providedState,
  });
  const table = useMantineReactTable<TData>(options);

  return <MantineReactTable table={table} />;
};
