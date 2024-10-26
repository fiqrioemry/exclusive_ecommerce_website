import React from "react";

const ProfileDetails = ({ user }) => {
  const { firstName, lastName, age, email, address } = user;
  return (
    <div className="rounded-md h-[235px] bg-white shadow-xl py-4 px-8">
      <div className="text-md font-semibold text-tertiary mb-6 uppercase">
        Your Profile
      </div>
      <div className="flex space-x-12">
        <div className="space-y-2 w-[30%] text-sm">
          <div>First name </div>
          <div>Last name</div>
          <div>Age</div>
          <div>Email</div>
          <div>Address</div>
        </div>

        <div className="space-y-2 w-[70%] text-sm">
          <div>: {firstName}</div>
          <div>: {lastName}</div>
          <div>: {age}</div>
          <div>: {email}</div>
          <div>
            : {address.address}, {address.city}, {address.state}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
