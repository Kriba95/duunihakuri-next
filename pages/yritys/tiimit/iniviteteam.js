import React from "react";
import NoLogin from "../../../components/NoLogin";
import { useCookies } from "react-cookie";
import ProfileCard from "../../../components/ProfileCard";
import Sidebar from "../../../components/Sidebar";
import MyTeams from '../../../components/inviteTeamCard';



export default function InviteTeam() {
  // const [cookies, setCookies] = useCookies(["CIS_1"]);
  // const [users, setUsers] = useState(null);



    return (
      <>

        <div className="md:ml-64">
          <Sidebar />

          <div className="bg-gray-900  pt-56 pb-28 px-3 md:px-8 h-auto">
           
          </div>

          <div className="px-3 md:px-8 h-auto -mt-48">
            <div className="container mx-auto max-w-full">
              <div className="grid grid-cols-1 xl:grid-cols-6">
                <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                <MyTeams/>
                 </div>
                <div className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
                <ProfileCard />

                </div>
              </div>
            </div>
          </div>
        </div>



      </>
    );

}


