import * as react from 'react';
import { MutableRefObject, HTMLProps, Dispatch, SetStateAction, ReactNode, RefObject, DragEventHandler, MouseEvent, ChangeEvent, JSX } from 'react';
import { PaginationProps, ActionIconProps, UnstyledButtonProps, SelectProps, TextInputProps, AutocompleteProps, CheckboxProps, MultiSelectProps, RangeSliderProps, TableTdProps, TableThProps, BoxProps, ModalProps, HighlightProps, LoadingOverlayProps, PaperProps, ProgressProps, RadioProps, SwitchProps, SkeletonProps, TableTbodyProps, TableTrProps, ScrollAreaAutosizeProps, TableTfootProps, TableTheadProps, TableProps, BadgeProps, AlertProps, FlexProps, MenuProps, MantineTheme } from '@mantine/core';
import * as _tanstack_react_table from '@tanstack/react-table';
import { Row, StockFeatures, DeepKeys, ColumnFiltersState, ColumnOrderState, ColumnPinningState, columnResizingState, ColumnSizingState, ColumnVisibilityState, ExpandedState, GroupingState, PaginationState, RowSelectionState, SortingState, Updater, AccessorFn, DeepValue, Table, TableState, ColumnDef, Column, Header, HeaderGroup, Cell, AggregationFnDef, SortFn, FilterFn, OnChangeFn, TableOptions, RowPinningPosition, Renderable } from '@tanstack/react-table';
import { VirtualItem, VirtualizerOptions, Virtualizer } from '@tanstack/react-virtual';
import { DateInputProps } from '@mantine/dates';
import { RankingInfo } from '@tanstack/match-sorter-utils';

declare const MRT_RowAggregationFns: {
    sum: _tanstack_react_table.AggregationFnDef<any, any, unknown, number>;
    min: _tanstack_react_table.AggregationFnDef<any, any, unknown, (number | Date) | undefined>;
    max: _tanstack_react_table.AggregationFnDef<any, any, unknown, (number | Date) | undefined>;
    extent: _tanstack_react_table.AggregationFnDef<any, any, unknown, [(number | Date) | undefined, (number | Date) | undefined]>;
    mean: _tanstack_react_table.AggregationFnDef<any, any, unknown, number | undefined>;
    median: _tanstack_react_table.AggregationFnDef<any, any, unknown, number | undefined>;
    unique: _tanstack_react_table.AggregationFnDef<any, any, unknown, unknown[]>;
    uniqueCount: _tanstack_react_table.AggregationFnDef<any, any, unknown, number>;
    count: _tanstack_react_table.AggregationFnDef<any, any, unknown, number>;
    first: _tanstack_react_table.AggregationFnDef<any, any, unknown, unknown>;
    last: _tanstack_react_table.AggregationFnDef<any, any, unknown, unknown>;
};

declare const MRT_FilterFns: {
    between: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValues: [number | string, number | string]): boolean;
        autoRemove(val: any): boolean;
    };
    betweenInclusive: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValues: [number | string, number | string]): boolean;
        autoRemove(val: any): boolean;
    };
    contains: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    empty: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, _filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    endsWith: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    equals: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    fuzzy: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, columnId: string, filterValue: number | string, addMeta: (item: RankingInfo) => void): boolean;
        autoRemove(val: any): boolean;
    };
    greaterThan: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    greaterThanOrEqualTo: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    lessThan: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    lessThanOrEqualTo: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    notEmpty: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, _filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    notEquals: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    startsWith: {
        <TData extends MRT_RowData>(row: Row<StockFeatures, TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    arrIncludes: _tanstack_react_table.CreatedFilterFn<any, any>;
    arrIncludesAll: _tanstack_react_table.CreatedFilterFn<any, any>;
    arrHas: _tanstack_react_table.CreatedFilterFn<any, any>;
    arrIncludesSome: _tanstack_react_table.CreatedFilterFn<any, any>;
    equalsString: _tanstack_react_table.CreatedFilterFn<any, any>;
    equalsStringSensitive: _tanstack_react_table.CreatedFilterFn<any, any>;
    inDateRange: _tanstack_react_table.CreatedFilterFn<any, any>;
    inNumberRange: _tanstack_react_table.CreatedFilterFn<any, any>;
    includesString: _tanstack_react_table.CreatedFilterFn<any, any>;
    includesStringSensitive: _tanstack_react_table.CreatedFilterFn<any, any>;
    weakEquals: _tanstack_react_table.CreatedFilterFn<any, any>;
};
declare function localizedFilterOption(localization: MRT_Localization, option: MRT_FilterOption): string;

declare const MRT_SortFns: {
    fuzzy: <TData extends MRT_RowData>(rowA: Row<StockFeatures, TData>, rowB: Row<StockFeatures, TData>, columnId: string) => number;
    alphanumeric: _tanstack_react_table.CreatedSortFn<any, any>;
    alphanumericCaseSensitive: _tanstack_react_table.CreatedSortFn<any, any>;
    basic: _tanstack_react_table.CreatedSortFn<any, any>;
    datetime: _tanstack_react_table.CreatedSortFn<any, any>;
    text: _tanstack_react_table.CreatedSortFn<any, any>;
    textCaseSensitive: _tanstack_react_table.CreatedSortFn<any, any>;
};
declare const rankGlobalFuzzy: <TData extends MRT_RowData>(rowA: MRT_Row<TData>, rowB: MRT_Row<TData>) => number;

type MRT_IconKeys = 'IconArrowAutofitContent' | 'IconArrowsSort' | 'IconBaselineDensityLarge' | 'IconBaselineDensityMedium' | 'IconBaselineDensitySmall' | 'IconBoxMultiple' | 'IconChevronDown' | 'IconChevronLeft' | 'IconChevronLeftPipe' | 'IconChevronRight' | 'IconChevronRightPipe' | 'IconChevronsDown' | 'IconCircleX' | 'IconClearAll' | 'IconColumns' | 'IconDeviceFloppy' | 'IconDots' | 'IconDotsVertical' | 'IconEdit' | 'IconEyeOff' | 'IconFilter' | 'IconFilterCog' | 'IconFilterOff' | 'IconGripHorizontal' | 'IconMaximize' | 'IconMinimize' | 'IconPinned' | 'IconPinnedOff' | 'IconSearch' | 'IconSearchOff' | 'IconSortAscending' | 'IconSortDescending' | 'IconX';
type MRT_Icons = Record<MRT_IconKeys, any>;

type LiteralUnion<T extends U, U = string> = (Record<never, never> & U) | T;
type Prettify<T> = {
    [K in keyof T]: T[K];
} & unknown;
type Xor<A, B> = Prettify<{
    [k in keyof A]?: never;
} & B> | Prettify<{
    [k in keyof B]?: never;
} & A>;
type HTMLPropsRef<T extends HTMLElement> = {
    ref?: MutableRefObject<null | T> | null;
} & Omit<HTMLProps<T>, 'color' | 'data' | 'label' | 'ref' | 'size' | 'style' | 'type'>;
type MantineShade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type MRT_PaginationProps = {
    rowsPerPageOptions?: Array<string>;
    showRowsPerPage?: boolean;
} & Partial<PaginationProps>;
type MRT_DensityState = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type MRT_ColumnFilterFnsState = Record<string, MRT_FilterOption>;
type MRT_RowData = Record<string, any>;
type MRT_CellValue = unknown;
type MRT_ColumnAccessorKey<TData extends MRT_RowData> = ({} & string) | (DeepKeys<TData> & string);
type MRT_ColumnFiltersState = ColumnFiltersState;
type MRT_ColumnOrderState = ColumnOrderState;
type MRT_ColumnPinningState = ColumnPinningState;
type MRT_ColumnResizingState = columnResizingState;
type MRT_ColumnSizingState = ColumnSizingState;
type MRT_ColumnVisibilityState = ColumnVisibilityState;
type MRT_VisibilityState = MRT_ColumnVisibilityState;
type MRT_ExpandedState = ExpandedState;
type MRT_GroupingState = GroupingState;
type MRT_PaginationState = PaginationState;
type MRT_RowSelectionState = RowSelectionState;
type MRT_SortingState = SortingState;
type MRT_Updater<T> = Updater<T>;
type MRT_VirtualItem = VirtualItem;
type MRT_VirtualizerOptions<TScrollElement extends Element | Window = Element | Window, TItemElement extends Element = Element> = VirtualizerOptions<TScrollElement, TItemElement>;
type MRT_ColumnVirtualizer<TScrollElement extends Element | Window = HTMLDivElement, TItemElement extends Element = HTMLTableCellElement> = {
    virtualColumns: Array<MRT_VirtualItem>;
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
} & Virtualizer<TScrollElement, TItemElement>;
type MRT_RowVirtualizer<TScrollElement extends Element | Window = HTMLDivElement, TItemElement extends Element = HTMLTableRowElement> = {
    virtualRows: Array<MRT_VirtualItem>;
} & Virtualizer<TScrollElement, TItemElement>;
type MRT_ColumnHelper<TData extends MRT_RowData> = {
    /**
     * Creates a data column definition with either an `accessorKey` (string) or
     * an `accessorFn` (function) to extract the cell value. Returns the
     * appropriate column-def variant so the column shape is preserved.
     * @example
     * ```ts
     * helper.accessor('firstName', { cell: (info) => info.getValue() })
     * helper.accessor((row) => row.lastName, { id: 'lastName' })
     * ```
     */
    accessor: <TAccessor extends AccessorFn<TData> | MRT_ColumnAccessorKey<TData>, TValue extends TAccessor extends AccessorFn<TData, infer TReturn> ? TReturn : TAccessor extends DeepKeys<TData> ? DeepValue<TData, TAccessor> : never>(accessor: TAccessor, column: TAccessor extends AccessorFn<TData> ? MRT_DisplayColumnDef<TData, TValue> : MRT_IdentifiedColumnDef<TData, TValue>) => TAccessor extends AccessorFn<TData> ? MRT_AccessorFnColumnDef<TData, TValue> : MRT_AccessorKeyColumnDef<TData, TValue>;
    /**
     * Wraps an array of column definitions to preserve each column's individual
     * `TValue` type. Uses variadic tuple types to infer element types before
     * checking constraints, preventing type widening.
     * @example
     * ```ts
     * helper.columns([
     *   helper.accessor('firstName', {}),
     *   helper.accessor('age', {}),
     * ])
     * ```
     */
    columns: <TColumns extends ReadonlyArray<MRT_ColumnDef<TData, any>>>(columns: [...TColumns]) => [...TColumns] & Array<MRT_ColumnDef<TData, any>>;
    /**
     * Creates a display column definition for non-data columns like row actions
     * or row numbers.
     */
    display: (column: MRT_DisplayColumnDef<TData>) => MRT_DisplayColumnDef<TData, unknown>;
    /**
     * Creates a group column definition that contains nested child columns.
     */
    group: (column: MRT_GroupColumnDef<TData, unknown>) => MRT_GroupColumnDef<TData, unknown>;
};
interface MRT_Localization {
    actions: string;
    and: string;
    cancel: string;
    changeFilterMode: string;
    changeSearchMode: string;
    clearFilter: string;
    clearSearch: string;
    clearSelection: string;
    clearSort: string;
    clickToCopy: string;
    collapse: string;
    collapseAll: string;
    columnActions: string;
    copiedToClipboard: string;
    copy: string;
    dropToGroupBy: string;
    edit: string;
    expand: string;
    expandAll: string;
    filterArrIncludes: string;
    filterArrIncludesAll: string;
    filterArrIncludesSome: string;
    filterBetween: string;
    filterBetweenInclusive: string;
    filterByColumn: string;
    filterContains: string;
    filterEmpty: string;
    filterEndsWith: string;
    filterEquals: string;
    filterEqualsString: string;
    filterFuzzy: string;
    filterGreaterThan: string;
    filterGreaterThanOrEqualTo: string;
    filterIncludesString: string;
    filterIncludesStringSensitive: string;
    filteringByColumn: string;
    filterInNumberRange: string;
    filterLessThan: string;
    filterLessThanOrEqualTo: string;
    filterMode: string;
    filterNotEmpty: string;
    filterNotEquals: string;
    filterStartsWith: string;
    filterWeakEquals: string;
    goToFirstPage: string;
    goToLastPage: string;
    goToNextPage: string;
    goToPreviousPage: string;
    grab: string;
    groupByColumn: string;
    groupedBy: string;
    hideAll: string;
    hideColumn: string;
    max: string;
    min: string;
    move: string;
    noRecordsToDisplay: string;
    noResultsFound: string;
    of: string;
    or: string;
    pin: string;
    pinToLeft: string;
    pinToRight: string;
    resetColumnSize: string;
    resetOrder: string;
    rowActions: string;
    rowNumber: string;
    rowNumbers: string;
    rowsPerPage: string;
    save: string;
    search: string;
    select: string;
    selectedCountOfRowCountRowsSelected: string;
    showAll: string;
    showAllColumns: string;
    showHideColumns: string;
    showHideFilters: string;
    showHideSearch: string;
    sortByColumnAsc: string;
    sortByColumnDesc: string;
    sortedByColumnAsc: string;
    sortedByColumnDesc: string;
    thenBy: string;
    toggleDensity: string;
    toggleFullScreen: string;
    toggleSelectAll: string;
    toggleSelectRow: string;
    toggleVisibility: string;
    ungroupByColumn: string;
    unpin: string;
    unpinAll: string;
}
interface MRT_RowModel<TData extends MRT_RowData> {
    flatRows: Array<MRT_Row<TData>>;
    rows: Array<MRT_Row<TData>>;
    rowsById: {
        [key: string]: MRT_Row<TData>;
    };
}
type MRT_TableInstance<TData extends MRT_RowData> = {
    getAllColumns: () => Array<MRT_Column<TData>>;
    getAllFlatColumns: () => Array<MRT_Column<TData>>;
    getAllLeafColumns: () => Array<MRT_Column<TData>>;
    getBottomRows: () => Array<MRT_Row<TData>>;
    getCenterLeafColumns: () => Array<MRT_Column<TData>>;
    getCenterRows: () => Array<MRT_Row<TData>>;
    getColumn: (columnId: string) => MRT_Column<TData>;
    getEndLeafColumns: () => Array<MRT_Column<TData>>;
    getExpandedRowModel: () => MRT_RowModel<TData>;
    getFilteredSelectedRowModel: () => MRT_RowModel<TData>;
    getFlatHeaders: () => Array<MRT_Header<TData>>;
    getHeaderGroups: () => Array<MRT_HeaderGroup<TData>>;
    getPaginationRowModel: () => MRT_RowModel<TData>;
    getPreFilteredRowModel: () => MRT_RowModel<TData>;
    getPrePaginatedRowModel: () => MRT_RowModel<TData>;
    getRowModel: () => MRT_RowModel<TData>;
    getSelectedRowModel: () => MRT_RowModel<TData>;
    getStartLeafColumns: () => Array<MRT_Column<TData>>;
    getState: () => MRT_TableState<TData>;
    getTopRows: () => Array<MRT_Row<TData>>;
    options: MRT_StatefulTableOptions<TData>;
    refs: {
        bottomToolbarRef: MutableRefObject<HTMLDivElement | null>;
        editInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
        filterInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
        lastSelectedRowId: MutableRefObject<null | string>;
        searchInputRef: MutableRefObject<HTMLInputElement | null>;
        tableContainerRef: MutableRefObject<HTMLDivElement | null>;
        tableFooterRef: MutableRefObject<HTMLTableSectionElement | null>;
        tableHeadCellRefs: MutableRefObject<Record<string, HTMLTableCellElement>>;
        tableHeadRef: MutableRefObject<HTMLTableSectionElement | null>;
        tablePaperRef: MutableRefObject<HTMLDivElement | null>;
        topToolbarRef: MutableRefObject<HTMLDivElement | null>;
    };
    setColumnFilterFns: Dispatch<SetStateAction<MRT_ColumnFilterFnsState>>;
    /**
     * v9 calls this `setcolumnResizing` (lowercase 'c') on the underlying table —
     * we expose a normal camelCase alias here.
     */
    setColumnResizing: (updater: Updater<MRT_TableState<TData>['columnResizing']>) => void;
    setCreatingRow: Dispatch<SetStateAction<MRT_Row<TData> | null | true>>;
    setDensity: Dispatch<SetStateAction<MRT_DensityState>>;
    setDraggingColumn: Dispatch<SetStateAction<MRT_Column<TData> | null>>;
    setDraggingRow: Dispatch<SetStateAction<MRT_Row<TData> | null>>;
    setEditingCell: Dispatch<SetStateAction<MRT_Cell<TData> | null>>;
    setEditingRow: Dispatch<SetStateAction<MRT_Row<TData> | null>>;
    setGlobalFilterFn: Dispatch<SetStateAction<MRT_FilterOption>>;
    setHoveredColumn: Dispatch<SetStateAction<null | Partial<MRT_Column<TData>>>>;
    setHoveredRow: Dispatch<SetStateAction<null | Partial<MRT_Row<TData>>>>;
    setIsFullScreen: Dispatch<SetStateAction<boolean>>;
    setShowAlertBanner: Dispatch<SetStateAction<boolean>>;
    setShowColumnFilters: Dispatch<SetStateAction<boolean>>;
    setShowGlobalFilter: Dispatch<SetStateAction<boolean>>;
    setShowToolbarDropZone: Dispatch<SetStateAction<boolean>>;
    /**
     * The current full table state. Populated by useTable's `state => state` selector
     * and enriched with MRT-only slices that v9's store doesn't track.
     * Use this in place of v8's `table.getState()`.
     */
    state: MRT_TableState<TData>;
} & Omit<Table<StockFeatures, TData>, 'getAllColumns' | 'getAllFlatColumns' | 'getAllLeafColumns' | 'getBottomRows' | 'getCenterLeafColumns' | 'getCenterRows' | 'getColumn' | 'getEndLeafColumns' | 'getExpandedRowModel' | 'getFlatHeaders' | 'getHeaderGroups' | 'getPaginationRowModel' | 'getPreFilteredRowModel' | 'getPrePaginatedRowModel' | 'getRowModel' | 'getSelectedRowModel' | 'getStartLeafColumns' | 'getState' | 'getTopRows' | 'options'>;
type MRT_DefinedTableOptions<TData extends MRT_RowData> = {
    icons: MRT_Icons;
    localization: MRT_Localization;
} & Omit<MRT_TableOptions<TData>, 'icons' | 'localization'>;
type MRT_StatefulTableOptions<TData extends MRT_RowData> = {
    state: Pick<MRT_TableState<TData>, 'columnFilterFns' | 'columnOrder' | 'columnResizing' | 'creatingRow' | 'density' | 'draggingColumn' | 'draggingRow' | 'editingCell' | 'editingRow' | 'globalFilterFn' | 'grouping' | 'hoveredColumn' | 'hoveredRow' | 'isFullScreen' | 'pagination' | 'showAlertBanner' | 'showColumnFilters' | 'showGlobalFilter' | 'showToolbarDropZone'>;
} & MRT_DefinedTableOptions<TData>;
type MRT_TableState<TData extends MRT_RowData> = Prettify<{
    columnFilterFns: MRT_ColumnFilterFnsState;
    creatingRow: MRT_Row<TData> | null;
    density: MRT_DensityState;
    draggingColumn: MRT_Column<TData> | null;
    draggingRow: MRT_Row<TData> | null;
    editingCell: MRT_Cell<TData> | null;
    editingRow: MRT_Row<TData> | null;
    globalFilterFn: MRT_FilterOption;
    hoveredColumn: null | Partial<MRT_Column<TData>>;
    hoveredRow: null | Partial<MRT_Row<TData>>;
    isFullScreen: boolean;
    isLoading: boolean;
    isSaving: boolean;
    showAlertBanner: boolean;
    showColumnFilters: boolean;
    showGlobalFilter: boolean;
    showLoadingOverlay: boolean;
    showProgressBars: boolean;
    showSkeletons: boolean;
    showToolbarDropZone: boolean;
} & TableState<StockFeatures>>;
type MRT_ColumnDef<TData extends MRT_RowData, TValue = unknown> = {
    /**
     * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
     * Specify a function here to point to the correct property in the data object.
     *
     * @example accessorFn: (row) => row.username
     */
    accessorFn?: (originalRow: TData) => any;
    /**
     * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
     * Specify which key in the row this column should use to access the correct data.
     * Also supports Deep Key Dot Notation.
     *
     * @example accessorKey: 'username' //simple
     * @example accessorKey: 'name.firstName' //deep key dot notation
     */
    accessorKey?: MRT_ColumnAccessorKey<TData>;
    AggregatedCell?: (props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    aggregationFn?: Array<{
        aggregationFn: MRT_RowAggregationFn<TData>;
        id: string;
    } | MRT_RowAggregationOption> | MRT_RowAggregationFn<TData>;
    Cell?: (props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        renderedCellValue: number | ReactNode | string;
        renderedColumnIndex?: number;
        renderedRowIndex?: number;
        row: MRT_Row<TData>;
        rowRef?: RefObject<HTMLTableRowElement | null>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    /**
     * Specify what type of column this is. Either `data`, `display`, or `group`. Defaults to `data`.
     * Leave this blank if you are just creating a normal data column.
     *
     * @default 'data'
     *
     * @example columnDefType: 'display'
     */
    columnDefType?: 'data' | 'display' | 'group';
    columnFilterModeOptions?: Array<LiteralUnion<MRT_FilterOption & string>> | null;
    columns?: Array<MRT_ColumnDef<TData>>;
    Edit?: (props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    editVariant?: 'multi-select' | 'select' | 'text';
    enableCellHoverReveal?: boolean;
    enableClickToCopy?: ((cell: MRT_Cell<TData>) => boolean) | boolean;
    enableColumnActions?: boolean;
    enableColumnDragging?: boolean;
    enableColumnFilterModes?: boolean;
    enableColumnOrdering?: boolean;
    enableEditing?: ((row: MRT_Row<TData>) => boolean) | boolean;
    enableFilterMatchHighlighting?: boolean;
    Filter?: (props: {
        column: MRT_Column<TData, TValue>;
        header: MRT_Header<TData>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    filterFn?: MRT_FilterFn<TData>;
    filterTooltipValueFn?: MRT_FilterTooltipValueFn;
    filterVariant?: 'autocomplete' | 'checkbox' | 'date' | 'date-range' | 'multi-select' | 'range' | 'range-slider' | 'select' | 'text';
    Footer?: ((props: {
        column: MRT_Column<TData, TValue>;
        footer: MRT_Header<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode) | ReactNode;
    /**
     * footer must be a string. If you want custom JSX to render the footer, you can also specify a `Footer` option. (Capital F)
     */
    footer?: string;
    GroupedCell?: (props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    /**
     * If `layoutMode` is `'grid'` or `'grid-no-grow'`, you can specify the flex grow value for individual columns to still grow and take up remaining space, or set to `false`/0 to not grow.
     */
    grow?: boolean | number;
    Header?: ((props: {
        column: MRT_Column<TData, TValue>;
        header: MRT_Header<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode) | ReactNode;
    /**
     * header must be a string. If you want custom JSX to render the header, you can also specify a `Header` option. (Capital H)
     */
    header: string;
    /**
     * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
     *
     * If you have also specified an `accessorFn`, MRT still needs to have a valid `id` to be able to identify the column uniquely.
     *
     * `id` defaults to the `accessorKey` or `header` if not specified.
     *
     * @default gets set to the same value as `accessorKey` by default
     */
    id?: LiteralUnion<keyof TData & string>;
    mantineColumnActionsButtonProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineColumnDragHandleProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineCopyButtonProps?: ((props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
    mantineEditSelectProps?: ((props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineEditTextInputProps?: ((props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineFilterAutocompleteProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
    mantineFilterCheckboxProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
    mantineFilterDateInputProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
    mantineFilterMultiSelectProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
    mantineFilterRangeSliderProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
    mantineFilterSelectProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineFilterTextInputProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineTableBodyCellProps?: ((props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        renderedRowIndex?: number;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableTdProps) | (HTMLPropsRef<HTMLTableCellElement> & TableTdProps);
    mantineTableFooterCellProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps) | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
    mantineTableHeadCellProps?: ((props: {
        column: MRT_Column<TData, TValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps) | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
    PlaceholderCell?: (props: {
        cell: MRT_Cell<TData, TValue>;
        column: MRT_Column<TData, TValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderColumnActionsMenuItems?: (props: {
        column: MRT_Column<TData, TValue>;
        internalColumnMenuItems: ReactNode;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderColumnFilterModeMenuItems?: (props: {
        column: MRT_Column<TData, TValue>;
        internalFilterOptions: Array<MRT_InternalFilterOption>;
        onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    sortFn?: MRT_SortFn<TData>;
    visibleInShowHideMenu?: boolean;
} & Omit<ColumnDef<StockFeatures, TData, TValue>, 'accessorKey' | 'aggregatedCell' | 'aggregationFn' | 'cell' | 'columns' | 'filterFn' | 'footer' | 'header' | 'id' | 'sortFn'>;
type MRT_DisplayColumnDef<TData extends MRT_RowData, TValue = unknown> = Omit<MRT_ColumnDef<TData, TValue>, 'accessorFn' | 'accessorKey'>;
/**
 * A data column with an `id` and optional `header`. Used as the input shape
 * for `columnHelper.accessor(key, ...)` — the `id` defaults to the accessor key
 * so it's not required at the call site. Mirrors v9's `IdentifiedColumnDef`.
 */
type MRT_IdentifiedColumnDef<TData extends MRT_RowData, TValue = unknown> = MRT_DisplayColumnDef<TData, TValue>;
/**
 * The result type of `columnHelper.accessor(fn, ...)`. Has a required
 * `accessorFn`. Mirrors v9's `AccessorFnColumnDef`.
 */
type MRT_AccessorFnColumnDef<TData extends MRT_RowData, TValue = unknown> = {
    accessorFn: (originalRow: TData) => TValue;
} & MRT_DisplayColumnDef<TData, TValue>;
/**
 * The result type of `columnHelper.accessor(key, ...)`. Has a required
 * `accessorKey`. Mirrors v9's `AccessorKeyColumnDef`.
 */
type MRT_AccessorKeyColumnDef<TData extends MRT_RowData, TValue = unknown> = {
    accessorKey: MRT_ColumnAccessorKey<TData>;
} & MRT_DisplayColumnDef<TData, TValue>;
/**
 * Union of `MRT_AccessorFnColumnDef` and `MRT_AccessorKeyColumnDef`.
 * Mirrors v9's `AccessorColumnDef`.
 */
type MRT_AccessorColumnDef<TData extends MRT_RowData, TValue = unknown> = MRT_AccessorFnColumnDef<TData, TValue> | MRT_AccessorKeyColumnDef<TData, TValue>;
type MRT_GroupColumnDef<TData extends MRT_RowData, TValue = unknown> = {
    columns?: ReadonlyArray<MRT_ColumnDef<TData, any>>;
} & MRT_DisplayColumnDef<TData, TValue>;
type MRT_DefinedColumnDef<TData extends MRT_RowData, TValue = unknown> = {
    _filterFn: MRT_FilterOption;
    defaultDisplayColumn: Partial<MRT_ColumnDef<TData, TValue>>;
    id: string;
} & Omit<MRT_ColumnDef<TData, TValue>, 'defaultDisplayColumn' | 'id'>;
type MRT_Column<TData extends MRT_RowData, TValue = unknown> = {
    columnDef: MRT_DefinedColumnDef<TData, TValue>;
    columns?: Array<MRT_Column<TData>>;
    filterFn?: MRT_FilterFn<TData>;
    footer: string;
    header: string;
} & Omit<Column<StockFeatures, TData, MRT_CellValue>, 'columnDef' | 'columns' | 'filterFn' | 'footer' | 'header'>;
type MRT_Header<TData extends MRT_RowData, TValue = unknown> = {
    column: MRT_Column<TData, TValue>;
} & Omit<Header<StockFeatures, TData, MRT_CellValue>, 'column'>;
type MRT_HeaderGroup<TData extends MRT_RowData> = {
    headers: Array<MRT_Header<TData>>;
} & Omit<HeaderGroup<StockFeatures, TData>, 'headers'>;
type MRT_Row<TData extends MRT_RowData> = {
    _valuesCache: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
    getAllCells: () => Array<MRT_Cell<TData>>;
    getVisibleCells: () => Array<MRT_Cell<TData>>;
    subRows?: Array<MRT_Row<TData>>;
} & Omit<Row<StockFeatures, TData>, '_valuesCache' | 'getAllCells' | 'getVisibleCells' | 'subRows'>;
type MRT_Cell<TData extends MRT_RowData, TValue = unknown> = {
    column: MRT_Column<TData, TValue>;
    row: MRT_Row<TData>;
} & Omit<Cell<StockFeatures, TData, TValue>, 'column' | 'row'>;
type MRT_RowAggregationOption = keyof typeof MRT_RowAggregationFns & string;
type MRT_RowAggregationFn<TData extends MRT_RowData> = AggregationFnDef<StockFeatures, TData, any, any> | MRT_RowAggregationOption;
type MRT_SortingOption = LiteralUnion<keyof typeof MRT_SortFns & string>;
type MRT_SortFn<TData extends MRT_RowData> = MRT_SortingOption | SortFn<StockFeatures, TData>;
type MRT_FilterOption = LiteralUnion<keyof typeof MRT_FilterFns & string>;
type MRT_FilterFn<TData extends MRT_RowData> = FilterFn<StockFeatures, TData> | MRT_FilterOption;
type MRT_FilterTooltipValueFn<TValue = any> = (value: TValue) => string;
type MRT_InternalFilterOption = {
    divider: boolean;
    label: string;
    option: string;
    symbol: string;
};
type MRT_DisplayColumnIds = 'mrt-row-actions' | 'mrt-row-drag' | 'mrt-row-expand' | 'mrt-row-numbers' | 'mrt-row-pin' | 'mrt-row-select' | 'mrt-row-spacer';
type MRT_CreateTableFeature<TData extends MRT_RowData, TFeature = any> = (table: MRT_TableInstance<TData>) => TFeature;
/**
 * `columns` and `data` props are the only required props, but there are over 150 other optional props.
 *
 * See more info on creating columns and data on the official docs site:
 * @link https://www.mantine-react-table.com/docs/getting-started/usage
 *
 * See the full props list on the official docs site:
 * @link https://www.mantine-react-table.com/docs/api/table-options
 */
type MRT_TableOptions<TData extends MRT_RowData> = {
    /**
     * Custom aggregation functions to apply to the table. These get merged with
     * MRT's built-ins (`mean`, `min`, `max`, etc.) and passed into
     * the aggregation feature registry.
     */
    aggregationFns?: Record<string, AggregationFnDef<StockFeatures, TData, any, any>>;
    columnFilterDisplayMode?: 'custom' | 'popover' | 'subheader';
    columnFilterModeOptions?: Array<LiteralUnion<MRT_FilterOption & string>> | null;
    /**
     * The columns to display in the table. `accessorKey`s or `accessorFn`s must match keys in the `data` prop.
     *
     * See more info on creating columns on the official docs site:
     * @link https://www.mantine-react-table.com/docs/guides/data-columns
     * @link https://www.mantine-react-table.com/docs/guides/display-columns
     *
     * See all Columns Options on the official docs site:
     * @link https://www.mantine-react-table.com/docs/api/column-options
     */
    columns: Array<MRT_ColumnDef<TData>>;
    columnVirtualizerInstanceRef?: MutableRefObject<null | Virtualizer<HTMLDivElement, HTMLTableCellElement>>;
    columnVirtualizerOptions?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>) | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>;
    createDisplayMode?: 'custom' | 'modal' | 'row';
    /**
     * Pass your data as an array of objects. Objects can theoretically be any shape, but it's best to keep them consistent.
     *
     * See the usage guide for more info on creating columns and data:
     * @link https://www.mantine-react-table.com/docs/getting-started/usage
     */
    data: Array<TData>;
    /**
     * Instead of specifying a bunch of the same options for each column, you can just change an option in the `defaultColumn` prop to change a default option for all columns.
     */
    defaultColumn?: Partial<MRT_ColumnDef<TData>>;
    /**
     * Change the default options for display columns.
     */
    defaultDisplayColumn?: Partial<MRT_DisplayColumnDef<TData>>;
    displayColumnDefOptions?: Partial<{
        [key in MRT_DisplayColumnIds]: Partial<MRT_DisplayColumnDef<TData>>;
    }>;
    editDisplayMode?: 'cell' | 'custom' | 'modal' | 'row' | 'table';
    enableBatchRowSelection?: boolean;
    enableBottomToolbar?: boolean;
    enableClickToCopy?: ((cell: MRT_Cell<TData>) => boolean) | boolean;
    enableColumnActions?: boolean;
    enableColumnDragging?: boolean;
    enableColumnFilterModes?: boolean;
    enableColumnOrdering?: boolean;
    enableColumnVirtualization?: boolean;
    enableDensityToggle?: boolean;
    enableEditing?: ((row: MRT_Row<TData>) => boolean) | boolean;
    enableExpandAll?: boolean;
    enableFacetedValues?: boolean;
    enableFilterMatchHighlighting?: boolean;
    enableFullScreenToggle?: boolean;
    enableGlobalFilterModes?: boolean;
    enableGlobalFilterRankedResults?: boolean;
    enableHeaderActionsHoverReveal?: boolean;
    enablePagination?: boolean;
    enableRowActions?: boolean;
    enableRowDragging?: boolean;
    enableRowNumbers?: boolean;
    enableRowOrdering?: boolean;
    enableRowSelection?: ((row: MRT_Row<TData>) => boolean) | boolean;
    enableRowVirtualization?: boolean;
    enableSelectAll?: boolean;
    enableStickyFooter?: boolean;
    enableStickyHeader?: boolean;
    enableTableFooter?: boolean;
    enableTableHead?: boolean;
    enableToolbarInternalActions?: boolean;
    enableTopToolbar?: boolean;
    expandRowsFn?: (dataRow: TData) => Array<TData>;
    /**
     * Custom filter functions to apply to the table. These get merged with MRT's
     * built-ins (`fuzzy`, `contains`, `between`, etc.) and passed into
     * `createFilteredRowModel(...)`.
     */
    filterFns?: Record<string, FilterFn<StockFeatures, TData>>;
    getRowId?: (originalRow: TData, index: number, parentRow: MRT_Row<TData>) => string | undefined;
    globalFilterFn?: MRT_FilterOption;
    globalFilterModeOptions?: Array<MRT_FilterOption> | null;
    icons?: Partial<MRT_Icons>;
    initialState?: Partial<MRT_TableState<TData>>;
    /**
     * Changes which kind of CSS layout is used to render the table. `semantic` uses default semantic HTML elements, while `grid` adds CSS grid and flexbox styles
     */
    layoutMode?: 'grid' | 'grid-no-grow' | 'semantic';
    /**
     * Pass in either a locale imported from `mantine-react-table/locales/*` or a custom locale object.
     *
     * See the localization (i18n) guide for more info:
     * @link https://www.mantine-react-table.com/docs/guides/localization
     */
    localization?: Partial<MRT_Localization>;
    mantineBottomToolbarProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => BoxProps & HTMLPropsRef<HTMLDivElement>) | (BoxProps & HTMLPropsRef<HTMLDivElement>);
    mantineColumnActionsButtonProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineColumnDragHandleProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineCopyButtonProps?: ((props: {
        cell: MRT_Cell<TData, MRT_CellValue>;
        column: MRT_Column<TData, MRT_CellValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
    mantineCreateRowModalProps?: ((props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
    mantineDetailPanelProps?: ((props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => BoxProps & HTMLPropsRef<HTMLTableCellElement>) | (BoxProps & HTMLPropsRef<HTMLTableCellElement>);
    mantineEditRowModalProps?: ((props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
    mantineEditSelectProps?: ((props: {
        cell: MRT_Cell<TData, MRT_CellValue>;
        column: MRT_Column<TData, MRT_CellValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineEditTextInputProps?: ((props: {
        cell: MRT_Cell<TData, MRT_CellValue>;
        column: MRT_Column<TData, MRT_CellValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineExpandAllButtonProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineExpandButtonProps?: ((props: {
        renderedRowIndex?: number;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineFilterAutocompleteProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
    mantineFilterCheckboxProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
    mantineFilterDateInputProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
    mantineFilterMultiSelectProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
    mantineFilterRangeSliderProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
    mantineFilterSelectProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineFilterTextInputProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineHighlightProps?: ((props: {
        cell: MRT_Cell<TData, MRT_CellValue>;
        column: MRT_Column<TData, MRT_CellValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>) | (HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>);
    mantineLoadingOverlayProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>);
    mantinePaginationProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => Partial<HTMLPropsRef<HTMLDivElement> & MRT_PaginationProps>) | Partial<HTMLPropsRef<HTMLDivElement> & MRT_PaginationProps>;
    mantinePaperProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & PaperProps) | (HTMLPropsRef<HTMLDivElement> & PaperProps);
    mantineProgressProps?: ((props: {
        isTopToolbar: boolean;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & ProgressProps) | (HTMLPropsRef<HTMLDivElement> & ProgressProps);
    mantineRowDragHandleProps?: ((props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineSearchTextInputProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineSelectAllCheckboxProps?: ((CheckboxProps | RadioProps | SwitchProps) & HTMLPropsRef<HTMLInputElement>) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => (CheckboxProps | RadioProps | SwitchProps) & HTMLPropsRef<HTMLInputElement>);
    mantineSelectCheckboxProps?: ((CheckboxProps | RadioProps | SwitchProps) & HTMLPropsRef<HTMLInputElement>) | ((props: {
        renderedRowIndex?: number;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => (CheckboxProps | RadioProps | SwitchProps) & HTMLPropsRef<HTMLInputElement>);
    mantineSkeletonProps?: ((props: {
        cell: MRT_Cell<TData, MRT_CellValue>;
        column: MRT_Column<TData, MRT_CellValue>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & SkeletonProps) | (HTMLPropsRef<HTMLDivElement> & SkeletonProps);
    mantineTableBodyCellProps?: ((props: {
        cell: MRT_Cell<TData, MRT_CellValue>;
        column: MRT_Column<TData, MRT_CellValue>;
        renderedColumnIndex?: number;
        renderedRowIndex?: number;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableTdProps) | (HTMLPropsRef<HTMLTableCellElement> & TableTdProps);
    mantineTableBodyProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & TableTbodyProps) | (HTMLPropsRef<HTMLTableSectionElement> & TableTbodyProps);
    mantineTableBodyRowProps?: ((props: {
        isDetailPanel?: boolean;
        renderedRowIndex?: number;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps) | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
    mantineTableContainerProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & ScrollAreaAutosizeProps) | (HTMLPropsRef<HTMLDivElement> & ScrollAreaAutosizeProps);
    mantineTableFooterCellProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps) | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
    mantineTableFooterProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & TableTfootProps) | (HTMLPropsRef<HTMLTableSectionElement> & TableTfootProps);
    mantineTableFooterRowProps?: ((props: {
        footerGroup: MRT_HeaderGroup<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps) | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
    mantineTableHeadCellProps?: ((props: {
        column: MRT_Column<TData, MRT_CellValue>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps) | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
    mantineTableHeadProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & TableTheadProps) | (HTMLPropsRef<HTMLTableSectionElement> & TableTheadProps);
    mantineTableHeadRowProps?: ((props: {
        headerGroup: MRT_HeaderGroup<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps) | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
    mantineTableProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableElement> & TableProps) | (HTMLPropsRef<HTMLTableElement> & TableProps);
    mantineToolbarAlertBannerBadgeProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>);
    mantineToolbarAlertBannerProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>);
    mantineTopToolbarProps?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => BoxProps & HTMLPropsRef<HTMLDivElement>) | (BoxProps & HTMLPropsRef<HTMLDivElement>);
    /**
     * Memoize cells, rows, or the entire table body to potentially improve render performance.
     *
     * @warning This will break some dynamic rendering features. See the memoization guide for more info:
     * @link https://www.mantine-react-table.com/docs/guides/memoize-components
     */
    memoMode?: 'cells' | 'rows' | 'table-body';
    onColumnFilterFnsChange?: OnChangeFn<{
        [key: string]: MRT_FilterOption;
    }>;
    onCreatingRowCancel?: (props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => void;
    onCreatingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
    onCreatingRowSave?: (props: {
        exitCreatingMode: () => void;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
        values: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
    }) => void;
    onDensityChange?: OnChangeFn<MRT_DensityState>;
    onDraggingColumnChange?: OnChangeFn<MRT_Column<TData> | null>;
    onDraggingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
    onEditingCellChange?: OnChangeFn<MRT_Cell<TData> | null>;
    onEditingRowCancel?: (props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => void;
    onEditingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
    onEditingRowSave?: (props: {
        exitEditingMode: () => void;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
        values: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
    }) => Promise<void> | void;
    onGlobalFilterFnChange?: OnChangeFn<MRT_FilterOption>;
    onHoveredColumnChange?: OnChangeFn<null | Partial<MRT_Column<TData>>>;
    onHoveredRowChange?: OnChangeFn<null | Partial<MRT_Row<TData>>>;
    onIsFullScreenChange?: OnChangeFn<boolean>;
    onShowAlertBannerChange?: OnChangeFn<boolean>;
    onShowColumnFiltersChange?: OnChangeFn<boolean>;
    onShowGlobalFilterChange?: OnChangeFn<boolean>;
    onShowToolbarDropZoneChange?: OnChangeFn<boolean>;
    paginationDisplayMode?: 'custom' | 'default' | 'pages';
    positionActionsColumn?: 'first' | 'last';
    positionCreatingRow?: 'bottom' | 'top' | number;
    positionExpandColumn?: 'first' | 'last';
    positionGlobalFilter?: 'left' | 'none' | 'right';
    positionPagination?: 'both' | 'bottom' | 'none' | 'top';
    positionToolbarAlertBanner?: 'bottom' | 'head-overlay' | 'none' | 'top';
    positionToolbarDropZone?: 'both' | 'bottom' | 'none' | 'top';
    renderBottomToolbar?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode) | ReactNode;
    renderBottomToolbarCustomActions?: (props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderColumnActionsMenuItems?: (props: {
        column: MRT_Column<TData, MRT_CellValue>;
        internalColumnMenuItems: ReactNode;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderColumnFilterModeMenuItems?: (props: {
        column: MRT_Column<TData, MRT_CellValue>;
        internalFilterOptions: Array<MRT_InternalFilterOption>;
        onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderCreateRowModalContent?: (props: {
        internalEditComponents: Array<ReactNode>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderDetailPanel?: (props: {
        internalEditComponents: Array<ReactNode>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderEditRowModalContent?: (props: {
        internalEditComponents: Array<ReactNode>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderEmptyRowsFallback?: (props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderGlobalFilterModeMenuItems?: (props: {
        internalFilterOptions: Array<MRT_InternalFilterOption>;
        onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderRowActionMenuItems?: (props: {
        renderedRowIndex?: number;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderRowActions?: (props: {
        cell: MRT_Cell<TData, MRT_CellValue>;
        renderedRowIndex?: number;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderToolbarAlertBannerContent?: (props: {
        groupedAlert: null | ReactNode;
        selectedAlert: null | ReactNode;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderToolbarInternalActions?: (props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderTopToolbar?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode) | ReactNode;
    renderTopToolbarCustomActions?: (props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    rowCount?: number;
    rowNumberDisplayMode?: 'original' | 'static';
    rowPinningDisplayMode?: 'bottom' | 'select-bottom' | 'select-sticky' | 'select-top' | 'sticky' | 'top' | 'top-and-bottom';
    rowVirtualizerInstanceRef?: MutableRefObject<null | Virtualizer<HTMLDivElement, HTMLTableRowElement>>;
    rowVirtualizerOptions?: ((props: {
        table: MRT_TableInstance<TData>;
    }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>) | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>;
    selectAllMode?: 'all' | 'page';
    selectDisplayMode?: 'checkbox' | 'radio' | 'switch';
    /**
     * Custom sort functions to apply to the table. These get merged with MRT's
     * built-ins (`alphanumeric`, `fuzzy`, etc.) and passed into
     * `createSortedRowModel(...)`.
     */
    sortFns?: Record<string, SortFn<StockFeatures, TData>>;
    /**
     * Manage state externally any way you want, then pass it back into MRT.
     */
    state?: Partial<MRT_TableState<TData>>;
} & Omit<Partial<TableOptions<StockFeatures, TData>>, 'columns' | 'data' | 'defaultColumn' | 'enableRowSelection' | 'expandRowsFn' | 'getRowId' | 'globalFilterFn' | 'initialState' | 'onStateChange' | 'state'>;

interface MRT_TableBodyProps<TData extends MRT_RowData> extends TableTbodyProps {
    columnVirtualizer?: MRT_ColumnVirtualizer;
    table: MRT_TableInstance<TData>;
    tableProps: Partial<TableProps>;
}
declare const MRT_TableBody: <TData extends MRT_RowData>({ columnVirtualizer, table, tableProps, ...rest }: MRT_TableBodyProps<TData>) => react.JSX.Element;
declare const Memo_MRT_TableBody: typeof MRT_TableBody;

interface Props$R<TData extends MRT_RowData, TValue = MRT_CellValue> extends TableTdProps {
    cell: MRT_Cell<TData, TValue>;
    numRows?: number;
    renderedColumnIndex?: number;
    renderedRowIndex?: number;
    rowRef: RefObject<HTMLTableRowElement | null>;
    table: MRT_TableInstance<TData>;
    virtualCell?: MRT_VirtualItem;
}
declare const MRT_TableBodyCell: <TData extends MRT_RowData>({ cell, numRows, renderedColumnIndex, renderedRowIndex, rowRef, table, virtualCell, ...rest }: Props$R<TData>) => react.JSX.Element;
declare const Memo_MRT_TableBodyCell: typeof MRT_TableBodyCell;

interface Props$Q<TData extends MRT_RowData, TValue = MRT_CellValue> {
    cell: MRT_Cell<TData, TValue>;
    renderedColumnIndex?: number;
    renderedRowIndex?: number;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableBodyCellValue: <TData extends MRT_RowData>({ cell, renderedColumnIndex, renderedRowIndex, table, }: Props$Q<TData>) => react.ReactNode;

interface Props$P<TData extends MRT_RowData> extends TableTrProps {
    table: MRT_TableInstance<TData>;
    tableProps: Partial<TableProps>;
}
declare const MRT_TableBodyEmptyRow: <TData extends MRT_RowData>({ table, tableProps, ...commonRowProps }: Props$P<TData>) => react.JSX.Element;

interface Props$O<TData extends MRT_RowData> extends TableTrProps {
    columnVirtualizer?: MRT_ColumnVirtualizer;
    numRows?: number;
    pinnedRowIds?: Array<string>;
    renderedRowIndex?: number;
    row: MRT_Row<TData>;
    rowVirtualizer?: MRT_RowVirtualizer;
    table: MRT_TableInstance<TData>;
    tableProps: Partial<TableProps>;
    virtualRow?: MRT_VirtualItem;
}
declare const MRT_TableBodyRow: <TData extends MRT_RowData>({ children, columnVirtualizer, numRows, pinnedRowIds, renderedRowIndex, row, rowVirtualizer, table, tableProps, virtualRow, ...rest }: Props$O<TData>) => react.JSX.Element;
declare const Memo_MRT_TableBodyRow: typeof MRT_TableBodyRow;

interface Props$N<TData extends MRT_RowData> extends ActionIconProps {
    row: MRT_Row<TData>;
    rowRef: RefObject<HTMLTableRowElement>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableBodyRowGrabHandle: <TData extends MRT_RowData>({ row, rowRef, table, ...rest }: Props$N<TData>) => react.JSX.Element;

interface Props$M<TData extends MRT_RowData> extends ActionIconProps {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableBodyRowPinButton: <TData extends MRT_RowData>({ row, table, ...rest }: Props$M<TData>) => react.JSX.Element | null;

interface Props$L<TData extends MRT_RowData> extends TableTdProps {
    parentRowRef: RefObject<HTMLTableRowElement | null>;
    renderedRowIndex?: number;
    row: MRT_Row<TData>;
    rowVirtualizer?: MRT_RowVirtualizer;
    striped?: false | string;
    table: MRT_TableInstance<TData>;
    virtualRow?: MRT_VirtualItem;
}
declare const MRT_TableDetailPanel: <TData extends MRT_RowData>({ parentRowRef, renderedRowIndex, row, rowVirtualizer, striped, table, virtualRow, ...rest }: Props$L<TData>) => react.JSX.Element;

interface Props$K<TData extends MRT_RowData> {
    column: MRT_Column<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ColumnPinningButtons: <TData extends MRT_RowData>({ column, table, }: Props$K<TData>) => react.JSX.Element;

interface Props$J<TData extends MRT_RowData, TValue = MRT_CellValue> extends UnstyledButtonProps {
    cell: MRT_Cell<TData, TValue>;
    children: ReactNode;
    table: MRT_TableInstance<TData>;
}
declare const MRT_CopyButton: <TData extends MRT_RowData>({ cell, children, table, ...rest }: Props$J<TData>) => react.JSX.Element;

interface Props$I<TData extends MRT_RowData> extends BoxProps {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
    variant?: 'icon' | 'text';
}
declare const MRT_EditActionButtons: <TData extends MRT_RowData>({ row, table, variant, ...rest }: Props$I<TData>) => react.JSX.Element;

interface Props$H<TData extends MRT_RowData> extends ActionIconProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ExpandAllButton: <TData extends MRT_RowData>({ table, ...rest }: Props$H<TData>) => react.JSX.Element;

interface Props$G<TData extends MRT_RowData> extends ActionIconProps {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ExpandButton: <TData extends MRT_RowData>({ row, table, ...rest }: Props$G<TData>) => react.JSX.Element;

interface Props$F<TData extends MRT_RowData> {
    actionIconProps?: ActionIconProps & HTMLPropsRef<HTMLButtonElement>;
    onDragEnd: DragEventHandler<HTMLButtonElement>;
    onDragStart: DragEventHandler<HTMLButtonElement>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_GrabHandleButton: <TData extends MRT_RowData>({ actionIconProps, onDragEnd, onDragStart, table: { options: { icons: { IconGripHorizontal }, localization: { move }, }, }, }: Props$F<TData>) => react.JSX.Element;

interface Props$E<TData extends MRT_RowData> extends ActionIconProps {
    pinningPosition: RowPinningPosition;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_RowPinButton: <TData extends MRT_RowData>({ pinningPosition, row, table, ...rest }: Props$E<TData>) => react.JSX.Element;

interface Props$D<TData extends MRT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ShowHideColumnsButton: <TData extends MRT_RowData>({ table, title, ...rest }: Props$D<TData>) => react.JSX.Element;

interface Props$C<TData extends MRT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleDensePaddingButton: <TData extends MRT_RowData>({ table: { options: { icons: { IconBaselineDensityLarge, IconBaselineDensityMedium, IconBaselineDensitySmall, }, localization: { toggleDensity }, }, setDensity, state, }, title, ...rest }: Props$C<TData>) => react.JSX.Element;

interface Props$B<TData extends MRT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleFiltersButton: <TData extends MRT_RowData>({ table: { options: { icons: { IconFilter, IconFilterOff }, localization: { showHideFilters }, }, setShowColumnFilters, state, }, title, ...rest }: Props$B<TData>) => react.JSX.Element;

interface Props$A<TData extends MRT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleFullScreenButton: <TData extends MRT_RowData>({ table: { options: { icons: { IconMaximize, IconMinimize }, localization: { toggleFullScreen }, }, setIsFullScreen, state, }, title, ...rest }: Props$A<TData>) => react.JSX.Element;

interface Props$z<TData extends MRT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleGlobalFilterButton: <TData extends MRT_RowData>({ table: { options: { icons: { IconSearch, IconSearchOff }, localization: { showHideSearch }, }, refs: { searchInputRef }, setShowGlobalFilter, state, }, title, ...rest }: Props$z<TData>) => react.JSX.Element;

interface Props$y<TData extends MRT_RowData, TValue = MRT_CellValue> {
    cell: MRT_Cell<TData, TValue>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleRowActionMenuButton: <TData extends MRT_RowData>({ cell, row, table, }: Props$y<TData>) => react.JSX.Element;

interface Props$x<TData extends MRT_RowData> extends TableTfootProps {
    columnVirtualizer?: MRT_ColumnVirtualizer;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableFooter: <TData extends MRT_RowData>({ columnVirtualizer, table, ...rest }: Props$x<TData>) => react.JSX.Element;

interface Props$w<TData extends MRT_RowData> extends TableThProps {
    footer: MRT_Header<TData>;
    renderedColumnIndex?: number;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableFooterCell: <TData extends MRT_RowData>({ footer, renderedColumnIndex, table, ...rest }: Props$w<TData>) => react.JSX.Element;

interface Props$v<TData extends MRT_RowData> extends TableTrProps {
    columnVirtualizer?: MRT_ColumnVirtualizer;
    footerGroup: MRT_HeaderGroup<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableFooterRow: <TData extends MRT_RowData>({ columnVirtualizer, footerGroup, table, ...rest }: Props$v<TData>) => react.JSX.Element | null;

interface Props$u<TData extends MRT_RowData> extends TableTheadProps {
    columnVirtualizer?: MRT_ColumnVirtualizer;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHead: <TData extends MRT_RowData>({ columnVirtualizer, table, ...rest }: Props$u<TData>) => react.JSX.Element;

interface Props$t<TData extends MRT_RowData> extends TableThProps {
    columnVirtualizer?: MRT_ColumnVirtualizer;
    header: MRT_Header<TData>;
    renderedHeaderIndex?: number;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCell: <TData extends MRT_RowData>({ columnVirtualizer, header, renderedHeaderIndex, table, ...rest }: Props$t<TData>) => react.JSX.Element;

interface Props$s<TData extends MRT_RowData> extends FlexProps {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCellFilterContainer: <TData extends MRT_RowData>({ header, table, ...rest }: Props$s<TData>) => react.JSX.Element;

interface Props$r<TData extends MRT_RowData> extends ActionIconProps {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCellFilterLabel: <TData extends MRT_RowData>({ header, table, ...rest }: Props$r<TData>) => react.JSX.Element;

interface Props$q<TData extends MRT_RowData, TValue = MRT_CellValue> extends ActionIconProps {
    column: MRT_Column<TData, TValue>;
    table: MRT_TableInstance<TData>;
    tableHeadCellRef: RefObject<HTMLTableCellElement>;
}
declare const MRT_TableHeadCellGrabHandle: <TData extends MRT_RowData>({ column, table, tableHeadCellRef, ...rest }: Props$q<TData>) => react.JSX.Element;

interface Props$p<TData extends MRT_RowData> extends BoxProps {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCellResizeHandle: <TData extends MRT_RowData>({ header, table, ...rest }: Props$p<TData>) => react.JSX.Element;

interface Props$o<TData extends MRT_RowData> extends ActionIconProps {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCellSortLabel: <TData extends MRT_RowData>({ header, table, ...rest }: Props$o<TData>) => react.JSX.Element;

interface Props$n<TData extends MRT_RowData> extends TableTrProps {
    columnVirtualizer?: MRT_ColumnVirtualizer;
    headerGroup: MRT_HeaderGroup<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadRow: <TData extends MRT_RowData>({ columnVirtualizer, headerGroup, table, ...rest }: Props$n<TData>) => react.JSX.Element;

interface PropsTextInput<TData extends MRT_RowData, TValue = MRT_CellValue> extends TextInputProps {
    cell: MRT_Cell<TData, TValue>;
    table: MRT_TableInstance<TData>;
}
interface PropsSelect<TData extends MRT_RowData, TValue = MRT_CellValue> extends SelectProps {
    cell: MRT_Cell<TData, TValue>;
    table: MRT_TableInstance<TData>;
}
interface PropsMultiSelect<TData extends MRT_RowData, TValue = MRT_CellValue> extends MultiSelectProps {
    cell: MRT_Cell<TData, TValue>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_EditCellTextInput: <TData extends MRT_RowData>({ cell, table, ...rest }: PropsMultiSelect<TData> | PropsSelect<TData> | PropsTextInput<TData>) => string | number | bigint | boolean | react.JSX.Element | Iterable<react.ReactNode> | Promise<string | number | bigint | boolean | react.ReactPortal | react.ReactElement<unknown, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null | undefined> | null | undefined;

interface Props$m<TData extends MRT_RowData, TValue = MRT_CellValue> extends CheckboxProps {
    column: MRT_Column<TData, TValue>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterCheckbox: <TData extends MRT_RowData>({ column, table, ...rest }: Props$m<TData>) => react.JSX.Element;

interface Props$l<TData extends MRT_RowData> extends BoxProps {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterRangeFields: <TData extends MRT_RowData>({ header, table, ...rest }: Props$l<TData>) => react.JSX.Element;

interface Props$k<TData extends MRT_RowData> extends RangeSliderProps {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterRangeSlider: <TData extends MRT_RowData>({ header, table, ...rest }: Props$k<TData>) => react.JSX.Element;

interface Props$j<TData extends MRT_RowData> extends TextInputProps {
    header: MRT_Header<TData>;
    rangeFilterIndex?: number;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterTextInput: <TData extends MRT_RowData>({ header, rangeFilterIndex, table, ...rest }: Props$j<TData>) => react.JSX.Element;

interface Props$i<TData extends MRT_RowData> extends TextInputProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_GlobalFilterTextInput: <TData extends MRT_RowData>({ table, ...rest }: Props$i<TData>) => react.JSX.Element;

interface Props$h<TData extends MRT_RowData> extends CheckboxProps {
    renderedRowIndex?: number;
    row?: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_SelectCheckbox: <TData extends MRT_RowData>({ renderedRowIndex, row, table, ...rest }: Props$h<TData>) => react.JSX.Element;

type TableInstanceProp<TData extends MRT_RowData> = {
    table: MRT_TableInstance<TData>;
};
type Props$g<TData extends MRT_RowData> = Xor<TableInstanceProp<TData>, MRT_TableOptions<TData>>;
declare const MantineReactTable: <TData extends MRT_RowData>(props: Props$g<TData>) => react.JSX.Element;

interface Props$f<TData extends MRT_RowData> extends MenuProps {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ColumnActionMenu: <TData extends MRT_RowData>({ header, table, ...rest }: Props$f<TData>) => react.JSX.Element;

declare const mrtFilterOptions: (localization: MRT_Localization) => Array<MRT_InternalFilterOption>;
interface Props$e<TData extends MRT_RowData> {
    header?: MRT_Header<TData>;
    onSelect?: () => void;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterOptionMenu: <TData extends MRT_RowData>({ header, onSelect, table, }: Props$e<TData>) => react.JSX.Element;

interface Props$d<TData extends MRT_RowData> extends ActionIconProps {
    handleEdit: (event: MouseEvent) => void;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_RowActionMenu: <TData extends MRT_RowData>({ handleEdit, row, table, ...rest }: Props$d<TData>) => react.JSX.Element;

interface Props$c<TData extends MRT_RowData> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ShowHideColumnsMenu: <TData extends MRT_RowData>({ table, }: Props$c<TData>) => react.JSX.Element;

interface Props$b<TData extends MRT_RowData, TValue = MRT_CellValue> {
    allColumns: Array<MRT_Column<TData>>;
    column: MRT_Column<TData, TValue>;
    hoveredColumn: MRT_Column<TData> | null;
    setHoveredColumn: Dispatch<SetStateAction<MRT_Column<TData> | null>>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ShowHideColumnsMenuItems: <TData extends MRT_RowData>({ allColumns, column, hoveredColumn, setHoveredColumn, table, }: Props$b<TData>) => react.JSX.Element | null;

interface Props$a<TData extends MRT_RowData> extends Partial<ModalProps> {
    open: boolean;
    table: MRT_TableInstance<TData>;
}
declare const MRT_EditRowModal: <TData extends MRT_RowData>({ open, table, ...rest }: Props$a<TData>) => react.JSX.Element;

interface Props$9<TData extends MRT_RowData> extends TableProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_Table: <TData extends MRT_RowData>({ table, ...rest }: Props$9<TData>) => react.JSX.Element;

interface Props$8<TData extends MRT_RowData> extends ScrollAreaAutosizeProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableContainer: <TData extends MRT_RowData>({ table, ...rest }: Props$8<TData>) => react.JSX.Element;

interface Props$7<TData extends MRT_RowData> extends PaperProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_TablePaper: <TData extends MRT_RowData>({ table, ...rest }: Props$7<TData>) => react.JSX.Element;

interface Props$6<TData extends MRT_RowData> extends BoxProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_BottomToolbar: <TData extends MRT_RowData>({ table, ...rest }: Props$6<TData>) => react.JSX.Element;

interface Props$5<TData extends MRT_RowData> extends Partial<ProgressProps> {
    isTopToolbar: boolean;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ProgressBar: <TData extends MRT_RowData>({ isTopToolbar, table, ...rest }: Props$5<TData>) => react.JSX.Element;

interface Props$4<TData extends MRT_RowData> extends Partial<PaginationProps> {
    position?: 'bottom' | 'top';
    table: MRT_TableInstance<TData>;
}
declare const MRT_TablePagination: <TData extends MRT_RowData>({ position, table, ...props }: Props$4<TData>) => react.JSX.Element;

interface Props$3<TData extends MRT_RowData> extends Partial<AlertProps> {
    stackAlertBanner?: boolean;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToolbarAlertBanner: <TData extends MRT_RowData>({ stackAlertBanner, table, ...rest }: Props$3<TData>) => react.JSX.Element;

interface Props$2<TData extends MRT_RowData> extends FlexProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToolbarDropZone: <TData extends MRT_RowData>({ table, ...rest }: Props$2<TData>) => react.JSX.Element;

interface Props$1<TData extends MRT_RowData> extends FlexProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToolbarInternalButtons: <TData extends MRT_RowData>({ table, ...rest }: Props$1<TData>) => react.JSX.Element;

interface Props<TData extends MRT_RowData> extends BoxProps {
    table: MRT_TableInstance<TData>;
}
declare const MRT_TopToolbar: <TData extends MRT_RowData>({ table, ...rest }: Props<TData>) => react.JSX.Element;

declare const useMantineReactTable: <TData extends MRT_RowData>(tableOptions: MRT_TableOptions<TData>) => MRT_TableInstance<TData>;

declare const useMRT_ColumnVirtualizer: <TData extends MRT_RowData, TScrollElement extends Element | Window = HTMLDivElement, TItemElement extends Element = HTMLTableCellElement>(table: MRT_TableInstance<TData>) => MRT_ColumnVirtualizer | undefined;

declare const useMRT_Effects: <TData extends MRT_RowData>(table: MRT_TableInstance<TData>) => void;

declare const useMRT_Rows: <TData extends MRT_RowData>(table: MRT_TableInstance<TData>) => Array<MRT_Row<TData>>;

declare const useMRT_RowVirtualizer: <TData extends MRT_RowData, TScrollElement extends Element | Window = HTMLDivElement, TItemElement extends Element = HTMLTableRowElement>(table: MRT_TableInstance<TData>, rows?: Array<MRT_Row<TData>>) => MRT_RowVirtualizer<TScrollElement, TItemElement> | undefined;

/**
 * The MRT hook that wraps the TanStack `useTable` hook and adds MRT-specific
 * state, refs, and helpers. State management is built on top of TanStack
 * Store atoms (`useCreateAtom` from `@tanstack/react-store`):
 *
 * - **TanStack-aware slices** (`columnOrder`, `columnResizing`, `grouping`,
 *   `pagination`) are passed via the `atoms` option on `useTable`. Library
 *   writes (e.g. `table.setSorting(...)`, `table.firstPage()`) flow directly
 *   through these atoms, and they're automatically tracked in
 *   `table.state` by the v9 store.
 * - **MRT-only slices** (`density`, `isFullScreen`, `creatingRow`,
 *   `editingCell`, `editingRow`, `draggingColumn`, `draggingRow`,
 *   `hoveredColumn`, `hoveredRow`, `globalFilterFn`, `columnFilterFns`,
 *   `showAlertBanner`, `showColumnFilters`, `showGlobalFilter`,
 *   `showToolbarDropZone`) live in atoms outside the v9 store and are
 *   merged into `table.state` after construction so MRT components can read
 *   them via the same `state` surface.
 *
 * @param definedTableOptions - table options with proper defaults set
 * @returns the MRT table instance
 */
declare const useMRT_TableInstance: <TData extends MRT_RowData>(definedTableOptions: MRT_DefinedTableOptions<TData>) => MRT_TableInstance<TData>;

declare const MRT_DefaultColumn: {
    readonly filterVariant: "text";
    readonly maxSize: 1000;
    readonly minSize: 40;
    readonly size: 180;
};
declare const MRT_DefaultDisplayColumn: {
    readonly columnDefType: "display";
    readonly enableClickToCopy: false;
    readonly enableColumnActions: false;
    readonly enableColumnDragging: false;
    readonly enableColumnFilter: false;
    readonly enableColumnOrdering: false;
    readonly enableEditing: false;
    readonly enableGlobalFilter: false;
    readonly enableGrouping: false;
    readonly enableHiding: false;
    readonly enableResizing: false;
    readonly enableSorting: false;
};
declare const useMRT_TableOptions: <TData extends MRT_RowData>(tableOptions: MRT_TableOptions<TData>) => MRT_DefinedTableOptions<TData>;

declare const getColumnId: <TData extends MRT_RowData>(columnDef: MRT_ColumnDef<TData>) => string;
declare const getAllLeafColumnDefs: <TData extends MRT_RowData>(columns: Array<MRT_ColumnDef<TData>>) => Array<MRT_ColumnDef<TData>>;
declare const prepareColumns: <TData extends MRT_RowData>({ columnDefs, tableOptions, }: {
    columnDefs: Array<MRT_ColumnDef<TData>>;
    tableOptions: MRT_DefinedTableOptions<TData>;
}) => Array<MRT_DefinedColumnDef<TData>>;
declare const reorderColumn: <TData extends MRT_RowData>(draggedColumn: MRT_Column<TData>, targetColumn: MRT_Column<TData>, columnOrder: MRT_ColumnOrderState) => MRT_ColumnOrderState;
declare const getDefaultColumnFilterFn: <TData extends MRT_RowData>(columnDef: MRT_ColumnDef<TData>) => MRT_FilterOption;

declare function defaultDisplayColumnProps<TData extends MRT_RowData>({ header, id, size, tableOptions, }: {
    header?: keyof MRT_Localization;
    id: MRT_DisplayColumnIds;
    size: number;
    tableOptions: MRT_DefinedTableOptions<TData>;
}): MRT_ColumnDef<TData>;
declare const showRowPinningColumn: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => boolean;
declare const showRowDragColumn: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => boolean;
declare const showRowExpandColumn: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => boolean;
declare const showRowActionsColumn: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => boolean;
declare const showRowSelectionColumn: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => boolean;
declare const showRowNumbersColumn: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => boolean;
declare const showRowSpacerColumn: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => boolean;
declare const getLeadingDisplayColumnIds: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => Array<MRT_DisplayColumnIds>;
declare const getTrailingDisplayColumnIds: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>) => Array<MRT_DisplayColumnIds>;
declare const getDefaultColumnOrderIds: <TData extends MRT_RowData>(tableOptions: MRT_StatefulTableOptions<TData>, reset?: boolean) => string[];

declare const getMRT_Rows: <TData extends MRT_RowData>(table: MRT_TableInstance<TData>, all?: boolean) => Array<MRT_Row<TData>>;
declare const getCanRankRows: <TData extends MRT_RowData>(table: MRT_TableInstance<TData>) => boolean | undefined;
declare const getIsRankingRows: <TData extends MRT_RowData>(table: MRT_TableInstance<TData>) => any;
declare const getIsRowSelected: <TData extends MRT_RowData>({ row, table, }: {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}) => boolean | undefined;
declare const getMRT_RowSelectionHandler: <TData extends MRT_RowData>({ renderedRowIndex, row, table, }: {
    renderedRowIndex?: number;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}) => (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLTableRowElement>, value?: boolean) => void;
declare const getMRT_SelectAllHandler: <TData extends MRT_RowData>({ table }: {
    table: MRT_TableInstance<TData>;
}) => (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>, value?: boolean, forceAll?: boolean) => void;

declare const parseCSSVarId: (id: string) => string;
declare const getPrimaryShade: (theme: MantineTheme) => number;
declare const getPrimaryColor: (theme: MantineTheme, shade?: MantineShade) => string;
declare function dataVariable(name: string, value: boolean | number | string | undefined): {
    [x: string]: string;
} | null;

declare const flexRender: (Comp: Renderable<any>, props: any) => JSX.Element | ReactNode;
/**
 * A helper utility for creating MRT column definitions with type inference
 * for each individual column's `TValue`. Mirrors v9's `createColumnHelper`
 * surface (`accessor`, `columns`, `display`, `group`) but bound to MRT's
 * column-def shape (extra MRT-specific props, `StockFeatures` pre-bound).
 *
 * From a JavaScript perspective, `display` / `group` / `columns` are identity
 * functions — they exist purely to anchor TypeScript inference.
 *
 * @example
 * ```tsx
 * const helper = createMRTColumnHelper<Person>()
 * const columns = helper.columns([
 *   helper.accessor('firstName', { header: 'First' }),
 *   helper.accessor((row) => row.lastName, { id: 'lastName' }),
 *   helper.display({ id: 'actions', header: 'Actions' }),
 * ])
 * ```
 */
declare function createMRTColumnHelper<TData extends MRT_RowData>(): MRT_ColumnHelper<TData>;
declare const createRow: <TData extends MRT_RowData>(table: MRT_TableInstance<TData>, originalRow?: TData, rowIndex?: number, depth?: number, subRows?: Array<MRT_Row<TData>>, parentId?: string) => MRT_Row<TData>;

declare const parseFromValuesOrFunc: <T, U>(fn: ((arg: U) => T) | T | undefined, arg: U) => T | undefined;

export { type HTMLPropsRef, type LiteralUnion, type MRT_AccessorColumnDef, type MRT_AccessorFnColumnDef, type MRT_AccessorKeyColumnDef, MRT_BottomToolbar, type MRT_Cell, type MRT_CellValue, type MRT_Column, type MRT_ColumnAccessorKey, MRT_ColumnActionMenu, type MRT_ColumnDef, type MRT_ColumnFilterFnsState, type MRT_ColumnFiltersState, type MRT_ColumnHelper, type MRT_ColumnOrderState, MRT_ColumnPinningButtons, type MRT_ColumnPinningState, type MRT_ColumnResizingState, type MRT_ColumnSizingState, type MRT_ColumnVirtualizer, type MRT_ColumnVisibilityState, MRT_CopyButton, type MRT_CreateTableFeature, MRT_DefaultColumn, MRT_DefaultDisplayColumn, type MRT_DefinedColumnDef, type MRT_DefinedTableOptions, type MRT_DensityState, type MRT_DisplayColumnDef, type MRT_DisplayColumnIds, MRT_EditActionButtons, MRT_EditCellTextInput, MRT_EditRowModal, MRT_ExpandAllButton, MRT_ExpandButton, type MRT_ExpandedState, MRT_FilterCheckbox, type MRT_FilterFn, MRT_FilterFns, type MRT_FilterOption, MRT_FilterOptionMenu, MRT_FilterRangeFields, MRT_FilterRangeSlider, MRT_FilterTextInput, type MRT_FilterTooltipValueFn, MRT_GlobalFilterTextInput, MRT_GrabHandleButton, type MRT_GroupColumnDef, type MRT_GroupingState, type MRT_Header, type MRT_HeaderGroup, type MRT_Icons, type MRT_IdentifiedColumnDef, type MRT_InternalFilterOption, type MRT_Localization, type MRT_PaginationProps, type MRT_PaginationState, MRT_ProgressBar, type MRT_Row, MRT_RowActionMenu, type MRT_RowAggregationFn, MRT_RowAggregationFns, type MRT_RowAggregationOption, type MRT_RowData, type MRT_RowModel, MRT_RowPinButton, type MRT_RowSelectionState, type MRT_RowVirtualizer, MRT_SelectCheckbox, MRT_ShowHideColumnsButton, MRT_ShowHideColumnsMenu, MRT_ShowHideColumnsMenuItems, type MRT_SortFn, MRT_SortFns, type MRT_SortingOption, type MRT_SortingState, type MRT_StatefulTableOptions, MRT_Table, MRT_TableBody, MRT_TableBodyCell, MRT_TableBodyCellValue, MRT_TableBodyEmptyRow, type MRT_TableBodyProps, MRT_TableBodyRow, MRT_TableBodyRowGrabHandle, MRT_TableBodyRowPinButton, MRT_TableContainer, MRT_TableDetailPanel, MRT_TableFooter, MRT_TableFooterCell, MRT_TableFooterRow, MRT_TableHead, MRT_TableHeadCell, MRT_TableHeadCellFilterContainer, MRT_TableHeadCellFilterLabel, MRT_TableHeadCellGrabHandle, MRT_TableHeadCellResizeHandle, MRT_TableHeadCellSortLabel, MRT_TableHeadRow, type MRT_TableInstance, type MRT_TableOptions, MRT_TablePagination, MRT_TablePaper, type MRT_TableState, MRT_ToggleDensePaddingButton, MRT_ToggleFiltersButton, MRT_ToggleFullScreenButton, MRT_ToggleGlobalFilterButton, MRT_ToggleRowActionMenuButton, MRT_ToolbarAlertBanner, MRT_ToolbarDropZone, MRT_ToolbarInternalButtons, MRT_TopToolbar, type MRT_Updater, type MRT_VirtualItem, type MRT_VirtualizerOptions, type MRT_VisibilityState, MantineReactTable, type MantineShade, Memo_MRT_TableBody, Memo_MRT_TableBodyCell, Memo_MRT_TableBodyRow, type Prettify, type Xor, createMRTColumnHelper, createRow, dataVariable, defaultDisplayColumnProps, flexRender, getAllLeafColumnDefs, getCanRankRows, getColumnId, getDefaultColumnFilterFn, getDefaultColumnOrderIds, getIsRankingRows, getIsRowSelected, getLeadingDisplayColumnIds, getMRT_RowSelectionHandler, getMRT_Rows, getMRT_SelectAllHandler, getPrimaryColor, getPrimaryShade, getTrailingDisplayColumnIds, localizedFilterOption, mrtFilterOptions, parseCSSVarId, parseFromValuesOrFunc, prepareColumns, rankGlobalFuzzy, reorderColumn, showRowActionsColumn, showRowDragColumn, showRowExpandColumn, showRowNumbersColumn, showRowPinningColumn, showRowSelectionColumn, showRowSpacerColumn, useMRT_ColumnVirtualizer, useMRT_Effects, useMRT_RowVirtualizer, useMRT_Rows, useMRT_TableInstance, useMRT_TableOptions, useMantineReactTable };
