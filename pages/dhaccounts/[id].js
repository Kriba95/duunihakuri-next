import React, {useContext} from "react";
// import NoLogin from "../../../components/NoLogin";
// import { useCookies } from "react-cookie";
// import ProfileCard from "../../../components/ProfileCard";
import Sidebar from "../../components/Sidebar";
import IlmoitusTyo from '../../components/ilmoitusTyo';


import { useRouter } from 'next/router'
import { Context } from "../../context/state";
import { LoginContext } from "../../context/loginstate";





export default function Tyoprof() {
  // const [cookies, setCookies] = useCookies(["CIS_1"]);
  // const [users, setUsers] = useState(null);
  // const id = context.params.id;
  const router = useRouter()
  
  const { rootLoginState } = useContext(LoginContext);

  console.log(router.query);
 

  



  let value = {
    lol: router.query,
  }

    return (
      <>

        <div className="">
          <Sidebar />

          <div className="bg-gray-900  pt-56 pb-28 px-3 md:px-8 h-auto">
            {/* <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Sales"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div> */}
          </div>

          <div className="px-3 md:px-8 h-auto -mt-48">
            <div className="container mx-auto max-w-full">
              <div className="grid grid-cols-1 xl:grid-cols-1">
                <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                <IlmoitusTyo props={value}/>
              
                 </div>
                <div className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
                </div>
              </div>
            </div>
          </div>
        </div>



      </>
    );

}


