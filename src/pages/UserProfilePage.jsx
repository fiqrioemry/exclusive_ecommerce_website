import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileDetails from "../components/user_profile/ProfileDetails";
import HistoryDetails from "../components/user_profile/HistoryDetails";

const UserProfilePage = () => {
  const { user } = useSelector((state) => state.user);
  const [activeTabs, setActiveTabs] = useState("profile");

  const handleTabs = (e) => {
    setActiveTabs(e.target.value);
  };

  console.log(activeTabs);
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto space-y-12">
        {/* navigation path info */}
        <div className="flex items-center justify-between px-2">
          {/* path info */}
          <div>
            <Link>Home</Link> / userprofile / emilys
          </div>
          {/* profile info */}
          <div>
            Welcome : <span className="text-tertiary">Emilys Pane</span>
          </div>
        </div>

        <div className="flex flex-wrap">
          {/* navigation box */}
          <div className="w-full md:w-[20%] px-2 mb-6">
            <div className="w-full shadow-xl rounded-md bg-white">
              <div className="text-center  text-md font-medium uppercase  py-4 border-b-2">
                my account
              </div>
              <div className=" flex md:flex-col flex-row items-center justify-between">
                <button
                  onClick={handleTabs}
                  value="profile"
                  className={`${
                    activeTabs === "profile" ? "text-tertiary" : ""
                  } w-full text-center py-4 rounded-bl-md md:rounded-none hover:text-tertiary duration-300`}
                >
                  My Profile
                </button>
                <button
                  onClick={handleTabs}
                  value="history"
                  className={`${
                    activeTabs === "history" ? "text-tertiary" : ""
                  } w-full text-center py-4 rounded-bl-md md:rounded-none hover:text-tertiary duration-300`}
                >
                  My History
                </button>
              </div>
            </div>
          </div>

          {/* content details */}
          <div className="w-full md:w-[80%] px-2">
            {activeTabs === "profile" && <ProfileDetails user={user} />}
            {activeTabs === "history" && <HistoryDetails />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;
