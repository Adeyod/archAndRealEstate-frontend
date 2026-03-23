import DataTable, { type TableColumn } from 'react-data-table-component';
// import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { CurrentUserType, ReusableTableProps } from '../constants/types';
import { capitalizeFirstLetter, formatDate } from '../hooks/functions';
// import ReusableModal from './ReusableModal';
import { Eye, MoreHorizontal } from 'lucide-react';
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CircularLoader } from './Loader';
import MyCustomTooltip from './MyCustomTooltip';
import { Separator } from './ui/separator';

const ReusableTable: React.FC<ReusableTableProps> = ({
  data,
  loading,
  title,
  totalRows,
  onPageChange,
  userRole,
  roleToFetch,
}) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isAddFeeModalOpen, setIsAddFeeModalOpen] = useState(false);

  const dropdownRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const isChosenRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);
  const isAllSelected =
    selectedIds?.length === data?.length && data?.length > 0;

  // const closeDropdown = () => {
  //   setOpenDropdownId(null);
  // };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      const allIds = data.map((item) => item._id.toString());
      setSelectedIds(allIds);
    }
  };

  const handleSelectOne = (rowId: string) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(rowId)
        ? prevSelected.filter((id) => id !== rowId)
        : [...prevSelected, rowId],
    );
  };

  const handleToggleDropdown = (rowId: string) => {
    setOpenDropdownId((prevId) => (prevId === rowId ? null : rowId));
  };

  // const handleToggleModal = (rowId: string) => {
  //   setIsModalOpen(true);

  //   setActiveRowId(rowId);
  //   setOpenDropdownId(null);
  //   console.log('rowId:', rowId);
  // };

  // useEffect(() => {
  //   const updateDropdownPositions = () => {
  //     const newMap: Record<string, boolean> = {};
  //     Object.entries(dropdownRefs.current).forEach(([id, el]) => {
  //       if (el) {
  //         const rect = el.getBoundingClientRect();
  //         const spaceBelow = window.innerHeight - rect.bottom;
  //         newMap[id] = spaceBelow < 150;
  //       }
  //     });
  //     setDropUpMap(newMap);
  //   };

  //   updateDropdownPositions();
  //   window.addEventListener('resize', updateDropdownPositions);
  //   return () => window.removeEventListener('resize', updateDropdownPositions);
  // }, [data]);

  const handleCopyId = async (id: string) => {
    try {
      await navigator.clipboard.writeText(id);
      setOpenDropdownId(null);
      console.log('Copied ID:', id);
    } catch (error) {
      console.log('Failed to copy ID', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as Node;

      // If no dropdown is open, do nothing
      if (!openDropdownId) return;

      const triggerButton = dropdownRefs.current[openDropdownId];
      const dropdownEl = dropdownContainerRef.current;

      const clickedInsideButton =
        triggerButton && triggerButton.contains(clickedElement);

      const clickedInsideDropdown =
        dropdownEl && dropdownEl.contains(clickedElement);

      if (!clickedInsideButton && !clickedInsideDropdown) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdownId]);

  const renderDropdown = (rowId: string, row: CurrentUserType) => {
    // const isDropUp = dropUpMap[rowId] ?? false;
    const anchor = dropdownRefs.current[rowId];

    if (!anchor) return null;

    console.log(row);

    const rect = anchor.getBoundingClientRect();

    const DROPDOWN_WIDTH = 174;
    const VIEWPORT_PADDING = 28;

    const dropdownHeight = dropdownContainerRef.current?.offsetHeight ?? 200;

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    const shouldDropUp =
      spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;

    const left = Math.min(
      rect.left,
      window.innerWidth - DROPDOWN_WIDTH - VIEWPORT_PADDING,
    );

    // const top = isDropUp ? rect.top - 100 : rect.bottom + 4;
    let top = shouldDropUp ? rect.top - dropdownHeight - 4 : rect.bottom + 4;

    top = Math.max(
      VIEWPORT_PADDING,
      Math.min(top, window.innerHeight - dropdownHeight - VIEWPORT_PADDING),
    );

    const style = {
      position: 'absolute' as const,
      // top: isDropUp ? rect.top - 100 : rect.bottom,
      // left: rect.left,
      top,
      left,
      zIndex: 9999,
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderRadius: '0.5rem',
      width: `${DROPDOWN_WIDTH}px`,
      gap: '10px',
      padding: '0.5rem',
    };

    return createPortal(
      <div
        ref={dropdownContainerRef}
        style={style}
        className="flex flex-col items-start rounded border text-start text-[13px]"
      >
        <p>Actions</p>
        <button
          onClick={() => handleCopyId(rowId)}
          className="block hover:bg-mustard hover:rounded px-1 hover:text-white cursor-pointer text-gray-700"
        >
          Copy ID
        </button>
        <Separator />

        {/* {(userRole === 'super-admin' || userRole === 'admin') &&
          roleToFetch === 'students' && (
            <div>
              <button
                onClick={() => {
                  if (!row.active_class_enrolment) return;
                  setIsAddFeeModalOpen(true);
                  setActiveRowId(rowId);
                  closeDropdown();
                }}
                disabled={!row.active_class_enrolment}
                className={`block px-4 py-2 text-sm rounded transition
          ${
            row.active_class_enrolment
              ? 'text-gray-700 hover:bg-gray-100 cursor-pointer'
              : 'text-gray-400 cursor-not-allowed bg-gray-50'
          }
        `}
              >
                Add Fee
              </button>
            </div>
          )} */}
      </div>,
      document.getElementById('dropdown-root')!,
    );
  };

  const statusColumn: TableColumn<CurrentUserType> = {
    name: 'Status',
    sortable: true,
    width: '85px',
    grow: 0,
    cell: (row) => {
      const status = row.status;
      const isActive = status === 'active';

      return (
        <span className={`${isActive ? 'text-green-600' : 'text-red-600'}`}>
          {capitalizeFirstLetter(row.status)}
        </span>
      );
    },
  };

  const columns: TableColumn<CurrentUserType>[] = [
    {
      name: (
        <button className="text-[18px]" onClick={handleSelectAll}>
          {isAllSelected ? (
            <MdOutlineCheckBox />
          ) : (
            <MdOutlineCheckBoxOutlineBlank />
          )}
        </button>
      ),
      width: '50px',
      grow: 0,
      // selector: (row) => row.status,
      // sortable: true,

      cell: (row) => {
        const rowId = String(row._id);
        const isChecked = selectedIds.includes(rowId);

        return (
          <div className="relative inline-block text-left">
            <button
              onClick={() => handleSelectOne(rowId)}
              ref={(el) => {
                isChosenRefs.current[rowId] = el;
              }}
              className="text-[18px]"
            >
              {isChecked ? (
                <MdOutlineCheckBox />
              ) : (
                <MdOutlineCheckBoxOutlineBlank />
              )}
            </button>
          </div>
        );
      },
    },

    ...(roleToFetch !== 'parents' ? [statusColumn] : []),
    {
      name: 'Verified',
      // selector: (row) => (row.is_verified ? 'True' : 'False'),
      sortable: true,
      width: '90px',
      grow: 0,
      cell: (row) => {
        const isVerified = row.isVerified ? 'True' : 'False';

        return (
          <span
            className={
              row.isVerified === true ? 'text-green-600' : 'text-red-600'
            }
          >
            {isVerified}
          </span>
        );
      },
    },
    {
      name: 'First Name',
      selector: (row) => capitalizeFirstLetter(row.firstName || ''),
      sortable: true,
      width: '110px',
      grow: 0,
    },
    {
      name: 'Last Name',
      selector: (row) => capitalizeFirstLetter(row.lastName || ''),
      sortable: true,
      width: '110px',
      grow: 0,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
      width: '220px',
      grow: 0,
    },
    {
      name: 'Date Created',
      selector: (row) => formatDate(row.createdAt),
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => {
        const rowId = String(row._id);
        const isOpen = openDropdownId === rowId;

        return (
          <div className="relative inline-block text-left">
            <div className="flex items-center gap-2 justify-center">
              <MyCustomTooltip
                content="View Details"
                bgColor="bg-teal"
                textColor="text-white"
              >
                <Link
                  to={`/dashboard/${userRole}/${roleToFetch}/${rowId}`}
                  className="bg-teal text-white px-3 py-1 rounded cursor-pointer"
                >
                  <Eye size={18} />
                </Link>
              </MyCustomTooltip>

              <button
                onClick={() => handleToggleDropdown(rowId)}
                ref={(el) => {
                  dropdownRefs.current[rowId] = el;
                }}
                className=" text-gray-600 text-3xl px-3 cursor-pointer"
              >
                <MoreHorizontal />
              </button>
            </div>
            {isOpen && renderDropdown(rowId, row)}
          </div>
        );
      },
    },
  ];

  return (
    <div className="">
      <DataTable
        title={title}
        columns={columns}
        data={data}
        progressPending={loading}
        progressComponent={<CircularLoader text="Loading..." />}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangePage={onPageChange}
      />

      {/* <ReusableModal
        isOpen={isSubjectTeachingAssignmentModalOpen}
        onClose={() => setIsSubjectTeachingAssignmentModalOpen(false)}
        title="Teacher Subject Assignment Form"
        modalStyle={teacherSubjectAssignmentFormModalStyle}
      >
        {activeRowId && (
          <TeacherSubjectAssignmentForm
            isModalOpen={isSubjectTeachingAssignmentModalOpen}
            setIsModalOpen={setIsSubjectTeachingAssignmentModalOpen}
            teacherId={Object(activeRowId)}
          />
        )}
      </ReusableModal> */}
    </div>
  );
};

export default ReusableTable;
