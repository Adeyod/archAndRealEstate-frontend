import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import type { AdminSidebarProps } from '../../../constants/types';
const PaymentManagementDropDown = ({ closeDrawer }: AdminSidebarProps) => {
  return (
    <div className="flex flex-col ml-6 gap-1 mt-2">
      <NavLink
        className={({ isActive }) =>
          [
            'py-1 rounded-md transition-colors flex gap-1 items-center',
            isActive ? 'bg-yellow-700 text-white' : 'hover:bg-yellow-600',
          ].join(' ')
        }
        to="/dashboard/super-admin/payments"
        onClick={() => closeDrawer?.()}
      >
        <ArrowRight size={18} />
        Payments
      </NavLink>
    </div>
  );
};

export default PaymentManagementDropDown;
