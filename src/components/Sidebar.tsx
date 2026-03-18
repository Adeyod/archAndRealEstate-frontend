import { useSelector } from 'react-redux';
import type { SidebarComponentsProps, UserState } from '../constants/types';
import AdminSidebar from './SidebarComponents/AdminSidebar';

const Sidebar = ({ sideToggle }: SidebarComponentsProps) => {
  const { currentUser } = useSelector(
    (state: { user: UserState }) => state.user
  );

  return (
    <div
      className={[
        sideToggle ? 'w-0' : 'min-w-55',
        'bg-secondary pt-10 border-r h-full relative bottom-0 mb-32 transition-all duration-300 hidden md:flex overflow-y-auto',
      ].join(' ')}
    >
      {currentUser?.role === 'admin' && <AdminSidebar />}
    </div>
  );
};

export default Sidebar;
