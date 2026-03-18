import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import type { AdminSidebarProps } from '../../constants/types';
import AdminOverviewDropDown from '../Admin/DropDownMenus/AdminOverviewDropDown';
import AdminUsersManagementDropDown from '../Admin/DropDownMenus/AdminUsersManagementDropDown';
import { Button } from '../ui/button';

const AdminSidebar = ({ closeDrawer }: AdminSidebarProps) => {
  const [overviewToggle, setOverviewToggle] = useState(false);
  const [usersMgtToggle, setUsersMgtToggle] = useState(false);

  const handleOverviewToggle = () => {
    setOverviewToggle(!overviewToggle);
  };

  const handleUsersMgtToggle = () => {
    setUsersMgtToggle(!usersMgtToggle);
  };

  return (
    <>
      <div className="flex flex-col ml-5 gap-2 bg-secondary hover:bg-skyblue">
        <div
        // className={[studentMenuOpen ? 'mb-[1px]' : 'mb-[10px]', 'ml-5 '].join(
        //   ' '
        // )}
        >
          <Button className="cursor-pointer" onClick={handleOverviewToggle}>
            <div className="flex items-center gap-2">
              <span>
                {' '}
                {overviewToggle ? (
                  <IoIosArrowDown className="text-xl " />
                ) : (
                  <IoIosArrowUp className="text-xl " />
                )}
              </span>
              <span>OVERVIEW</span>
            </div>
          </Button>
          {overviewToggle && (
            <AdminOverviewDropDown closeDrawer={closeDrawer} />
          )}
        </div>

        <div>
          <Button className="cursor-pointer" onClick={handleUsersMgtToggle}>
            <div className="flex items-center gap-2">
              <span>
                {' '}
                {usersMgtToggle ? (
                  <IoIosArrowDown className="text-xl " />
                ) : (
                  <IoIosArrowUp className="text-xl " />
                )}
              </span>
              <span>User Management</span>
            </div>
          </Button>
          {usersMgtToggle && (
            <AdminUsersManagementDropDown closeDrawer={closeDrawer} />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
