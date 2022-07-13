import React, { useEffect, useContext } from "react";

// import AvaaTyopaikka from "../components/AvaaTyoPaikka/AvaaTyopaikka";
// import Tiedot from "../components/AvaaTyoPaikka/Tiedot";
import { useCookies } from "react-cookie";
import { Context } from "../../context/state";

// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import Loading from "../components/Loading/Loading";
// import { Context } from "../context";

export default function Avaatyopaikka() {
  const [cookies, setCookie] = useCookies(["visited"]);
  const { rootState, getJobByID } = useContext(Context);

  // let params = useParams();
  // params = parseFloat(params.id);

  // const location = useLocation();
  // window.scrollTo(0, 0);

  // if (location.state === null) {
  //   if (rootState.oneTyoData === "" || rootState.oneTyoData[0].id !== params) {
  //    //console.log("Only Once");

  //     (async () => {
  //       await getJobByID(params);
  //     })();
  //    //console.log("strange");
  //   }
  //  //console.log("Ok");

  //  //console.log(rootState.oneTyoData);
  //   let companyData = rootState.oneTyoData[0];

  //   return (
  //     <>
  //       <Sidebar ifUserIs={"unknown"} />
  //       <br />
  //       <br /> <br />
  //       <br />
  //       {companyData ? (
  //         <>
  //           <Container>
  //             <Row>
  //               {/* <Search /> */}
  //               {/* Left Content */}
  //               {companyData ? (
  //                 <>
  //                   <Col xs={12} sm={12} md={5} lg={5} xl={4} xxl={4}>
  //                     <Tiedot companyData={companyData} />
  //                   </Col>

  //                   {/* Main Content */}
  //                   <Col xs={12} sm={12} md={7} lg={7} xl={8} xxl={8}>
  //                     <AvaaTyopaikka companyData={companyData} />
  //                   </Col>
  //                 </>
  //               ) : (
  //                 <></>
  //               )}
  //               {/* Right Content */}
  //             </Row>
  //           </Container>
  //         </>
  //       ) : (
  //         <Loading />
  //       )}
  //     </>
  //   );
  // } else {
  //   const { tyoId, pageData } = location.state;

  //   const id = parseInt(tyoId);
  //   let companyData = pageData.find((x) => x.id == id);
  //   let arr = cookies.visited;

  //   if (typeof arr == "undefined" || !(arr instanceof Array)) {
  //     arr = [id];
  //     setCookie("visited", arr, { path: "/" });
  //   } else {
  //     const arrs = cookies.visited;

  //     if (!arrs.includes(id)) {
  //       arrs.push(id);
  //     }
  //     setCookie("visited", arrs, { path: "/" });
  //   }
  //  //console.log(cookies.visited);

    return (
      <>
        {/* Left Sidebar */}

        <div>
          <div>
            {/* <Search /> */}
            {/* Left Content */}

            {/* Right Content */}
          </div>
        </div>
      </>
    )
  }
// }
