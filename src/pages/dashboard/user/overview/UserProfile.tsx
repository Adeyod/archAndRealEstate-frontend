import { useSelector } from 'react-redux';
import ImageComponent from '../../../../components/ImageComponent';
import {
  profileImageContainerStyle,
  profileImageStyle,
} from '../../../../constants/styles';
import type { UserState } from '../../../../constants/types';

const UserProfile = () => {
  const { currentUser } = useSelector(
    (state: { user: UserState }) => state.user,
  );
  console.log('currentUser:', currentUser);
  const imageObj = currentUser.profileImage && {
    src: currentUser.profileImage.url,
    alt: `${currentUser.firstName}`,
  };
  return (
    <div className="w-full flex flex-col gap-4 items-center px-10">
      <div className="">
        <ImageComponent
          imageObj={imageObj}
          imageStyle={profileImageStyle}
          imageContainerStyle={profileImageContainerStyle}
        />
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between space-y-2 bg-sidebar p-2">
        <div className="w-full md:w-[45%] space-y-2">
          <div className="text-sm flex justify-between">
            <span className="uppercase  font-bold underline">Name:</span>
            <span className="capitalize">{currentUser.firstName}</span>
          </div>
          <div className="text-sm flex justify-between">
            <span className="uppercase  font-bold underline">Email:</span>
            <span className="">{currentUser.email}</span>
          </div>
        </div>

        <div className="w-full md:w-[45%] space-y-2">
          <div className="text-sm flex justify-between">
            <span className="uppercase  font-bold underline">Phone:</span>
            <span className="capitalize">{currentUser.phone || ''}</span>
          </div>
          <div className="text-sm flex justify-between">
            <span className="uppercase  font-bold underline">
              Home Address:
            </span>
            <span className="capitalize">{currentUser.address || ''}</span>
          </div>
          <div className="text-sm flex justify-between">
            <span className="uppercase  font-bold underline">City:</span>
            <span className="">{currentUser.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
