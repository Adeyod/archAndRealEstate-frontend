import { FiSidebar } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/images/kayBrooksImgRemoveBg.png';
import { navbarImageStyle } from '../constants/styles';
import type { SidebarComponentsProps, UserState } from '../constants/types';
import { formattedUserRole, roleRedirectMap } from '../hooks/functions';
import useLogout from '../hooks/useLogout';
import ImageComponent from './ImageComponent';
import MobileNav from './MobileNav';

const Navbar = ({ handleSideToggle }: SidebarComponentsProps) => {
  const { currentUser } = useSelector(
    (state: { user: UserState }) => state.user,
  );

  const handleLogout = useLogout();

  const imageObj = currentUser?.profileImage && {
    src: currentUser?.profileImage?.url,
    alt: `${currentUser?.firstName}`,
  };

  const redirectRole = currentUser?.role
    ? roleRedirectMap[currentUser?.role]
    : '/';

  return (
    <div className="bg-gray-50 border-b-gray-700 border-b">
      <div className="flex justify-between px-5 h-17.5 items-center">
        <div className="flex items-center gap-22">
          <Link to="/" className="text-xl">
            <img src={logo} alt="logo" className="h-20" />
          </Link>
          {currentUser && (
            <button className="hidden md:flex" onClick={handleSideToggle}>
              <FiSidebar className="text-2xl" />
            </button>
          )}
        </div>

        <div className="">
          {currentUser && (
            <p className="font-bold uppercase items-center text-[12px]">
              {formattedUserRole(currentUser.role)} Dashboard
            </p>
          )}
        </div>

        <div className="flex items-center rounded-md z-9999">
          {/* WIDE SCREEN */}
          <div className="hidden md:flex gap-3">
            {currentUser && currentUser !== null && (
              <div className="flex gap-4">
                <Link to={redirectRole}>
                  <ImageComponent
                    imageObj={imageObj}
                    imageStyle={navbarImageStyle}
                    imageContainerStyle={''}
                  />
                </Link>
                <button className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* SMALL SCREEN */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
