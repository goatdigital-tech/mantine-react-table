import { forwardRef } from 'react';
import ArrowDownDoubleIcon from '@hugeicons/core-free-icons/ArrowDownDoubleIcon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import CancelCircleIcon from '@hugeicons/core-free-icons/CancelCircleIcon';
import ChevronDownIcon from '@hugeicons/core-free-icons/ChevronDownIcon';
import ChevronLeftIcon from '@hugeicons/core-free-icons/ChevronLeftIcon';
import ChevronRightIcon from '@hugeicons/core-free-icons/ChevronRightIcon';
import CleanIcon from '@hugeicons/core-free-icons/CleanIcon';
import Copy01Icon from '@hugeicons/core-free-icons/Copy01Icon';
import Edit01Icon from '@hugeicons/core-free-icons/Edit01Icon';
import EyeOffIcon from '@hugeicons/core-free-icons/EyeOffIcon';
import FilterEditIcon from '@hugeicons/core-free-icons/FilterEditIcon';
import FilterIcon from '@hugeicons/core-free-icons/FilterIcon';
import FilterRemoveIcon from '@hugeicons/core-free-icons/FilterRemoveIcon';
import FitToScreenIcon from '@hugeicons/core-free-icons/FitToScreenIcon';
import GripHorizontalIcon from '@hugeicons/core-free-icons/GripHorizontalIcon';
import LayoutThreeColumnIcon from '@hugeicons/core-free-icons/LayoutThreeColumnIcon';
import Maximize01Icon from '@hugeicons/core-free-icons/Maximize01Icon';
import Menu01Icon from '@hugeicons/core-free-icons/Menu01Icon';
import Menu02Icon from '@hugeicons/core-free-icons/Menu02Icon';
import Menu03Icon from '@hugeicons/core-free-icons/Menu03Icon';
import Minimize01Icon from '@hugeicons/core-free-icons/Minimize01Icon';
import MoreHorizontalIcon from '@hugeicons/core-free-icons/MoreHorizontalIcon';
import MoreVerticalIcon from '@hugeicons/core-free-icons/MoreVerticalIcon';
import NextIcon from '@hugeicons/core-free-icons/NextIcon';
import PinIcon from '@hugeicons/core-free-icons/PinIcon';
import PinOffIcon from '@hugeicons/core-free-icons/PinOffIcon';
import PreviousIcon from '@hugeicons/core-free-icons/PreviousIcon';
import SaveIcon from '@hugeicons/core-free-icons/SaveIcon';
import SearchIcon from '@hugeicons/core-free-icons/Search01Icon';
import SearchRemoveIcon from '@hugeicons/core-free-icons/SearchRemoveIcon';
import SortByDown01Icon from '@hugeicons/core-free-icons/SortByDown01Icon';
import SortByUp01Icon from '@hugeicons/core-free-icons/SortByUp01Icon';
import Sorting01Icon from '@hugeicons/core-free-icons/Sorting01Icon';
import { HugeiconsIcon, type HugeiconsIconProps } from '@hugeicons/react';

type MantineReactTableIconProps = Omit<HugeiconsIconProps, 'icon'>;

export type MRT_IconKeys =
  | 'IconArrowAutofitContent'
  | 'IconArrowsSort'
  | 'IconBaselineDensityLarge'
  | 'IconBaselineDensityMedium'
  | 'IconBaselineDensitySmall'
  | 'IconBoxMultiple'
  | 'IconChevronDown'
  | 'IconChevronLeft'
  | 'IconChevronLeftPipe'
  | 'IconChevronRight'
  | 'IconChevronRightPipe'
  | 'IconChevronsDown'
  | 'IconCircleX'
  | 'IconClearAll'
  | 'IconColumns'
  | 'IconDeviceFloppy'
  | 'IconDots'
  | 'IconDotsVertical'
  | 'IconEdit'
  | 'IconEyeOff'
  | 'IconFilter'
  | 'IconFilterCog'
  | 'IconFilterOff'
  | 'IconGripHorizontal'
  | 'IconMaximize'
  | 'IconMinimize'
  | 'IconPinned'
  | 'IconPinnedOff'
  | 'IconSearch'
  | 'IconSearchOff'
  | 'IconSortAscending'
  | 'IconSortDescending'
  | 'IconX';

export type MRT_Icons = Record<MRT_IconKeys, any>;

const createMantineReactTableIcon = (
  icon: HugeiconsIconProps['icon'],
  displayName: string,
) => {
  const MantineReactTableIcon = forwardRef<
    SVGSVGElement,
    MantineReactTableIconProps
  >(
    (
      { color = 'currentColor', size = 18, strokeWidth = 1.5, ...props },
      ref,
    ) => (
      <HugeiconsIcon
        {...props}
        color={color}
        icon={icon}
        ref={ref}
        size={size}
        strokeWidth={strokeWidth}
      />
    ),
  );

  MantineReactTableIcon.displayName = displayName;

  return MantineReactTableIcon;
};

export const MRT_Default_Icons: MRT_Icons = {
  IconArrowAutofitContent: createMantineReactTableIcon(
    FitToScreenIcon,
    'MRTArrowAutofitContentIcon',
  ),
  IconArrowsSort: createMantineReactTableIcon(
    Sorting01Icon,
    'MRTArrowsSortIcon',
  ),
  IconBaselineDensityLarge: createMantineReactTableIcon(
    Menu01Icon,
    'MRTDensityLargeIcon',
  ),
  IconBaselineDensityMedium: createMantineReactTableIcon(
    Menu02Icon,
    'MRTDensityMediumIcon',
  ),
  IconBaselineDensitySmall: createMantineReactTableIcon(
    Menu03Icon,
    'MRTDensitySmallIcon',
  ),
  IconBoxMultiple: createMantineReactTableIcon(
    Copy01Icon,
    'MRTBoxMultipleIcon',
  ),
  IconChevronDown: createMantineReactTableIcon(
    ChevronDownIcon,
    'MRTChevronDownIcon',
  ),
  IconChevronLeft: createMantineReactTableIcon(
    ChevronLeftIcon,
    'MRTChevronLeftIcon',
  ),
  IconChevronLeftPipe: createMantineReactTableIcon(
    PreviousIcon,
    'MRTChevronLeftPipeIcon',
  ),
  IconChevronRight: createMantineReactTableIcon(
    ChevronRightIcon,
    'MRTChevronRightIcon',
  ),
  IconChevronRightPipe: createMantineReactTableIcon(
    NextIcon,
    'MRTChevronRightPipeIcon',
  ),
  IconChevronsDown: createMantineReactTableIcon(
    ArrowDownDoubleIcon,
    'MRTChevronsDownIcon',
  ),
  IconCircleX: createMantineReactTableIcon(CancelCircleIcon, 'MRTCircleXIcon'),
  IconClearAll: createMantineReactTableIcon(CleanIcon, 'MRTClearAllIcon'),
  IconColumns: createMantineReactTableIcon(
    LayoutThreeColumnIcon,
    'MRTColumnsIcon',
  ),
  IconDeviceFloppy: createMantineReactTableIcon(SaveIcon, 'MRTSaveIcon'),
  IconDots: createMantineReactTableIcon(MoreHorizontalIcon, 'MRTDotsIcon'),
  IconDotsVertical: createMantineReactTableIcon(
    MoreVerticalIcon,
    'MRTDotsVerticalIcon',
  ),
  IconEdit: createMantineReactTableIcon(Edit01Icon, 'MRTEditIcon'),
  IconEyeOff: createMantineReactTableIcon(EyeOffIcon, 'MRTEyeOffIcon'),
  IconFilter: createMantineReactTableIcon(FilterIcon, 'MRTFilterIcon'),
  IconFilterCog: createMantineReactTableIcon(
    FilterEditIcon,
    'MRTFilterCogIcon',
  ),
  IconFilterOff: createMantineReactTableIcon(
    FilterRemoveIcon,
    'MRTFilterOffIcon',
  ),
  IconGripHorizontal: createMantineReactTableIcon(
    GripHorizontalIcon,
    'MRTGripHorizontalIcon',
  ),
  IconMaximize: createMantineReactTableIcon(Maximize01Icon, 'MRTMaximizeIcon'),
  IconMinimize: createMantineReactTableIcon(Minimize01Icon, 'MRTMinimizeIcon'),
  IconPinned: createMantineReactTableIcon(PinIcon, 'MRTPinnedIcon'),
  IconPinnedOff: createMantineReactTableIcon(PinOffIcon, 'MRTPinnedOffIcon'),
  IconSearch: createMantineReactTableIcon(SearchIcon, 'MRTSearchIcon'),
  IconSearchOff: createMantineReactTableIcon(
    SearchRemoveIcon,
    'MRTSearchOffIcon',
  ),
  IconSortAscending: createMantineReactTableIcon(
    SortByUp01Icon,
    'MRTSortAscendingIcon',
  ),
  IconSortDescending: createMantineReactTableIcon(
    SortByDown01Icon,
    'MRTSortDescendingIcon',
  ),
  IconX: createMantineReactTableIcon(Cancel01Icon, 'MRTXIcon'),
};
