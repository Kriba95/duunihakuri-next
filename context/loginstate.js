import React, { createContext, Component } from "react";
import axios from "axios";
import toast, { useToaster } from "react-hot-toast";

export const LoginContext = createContext();
import { withCookies, Cookies } from "react-cookie";
import Router, { withRouter } from "next/router";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost/duunihakuri2.0-api/"
    : "/";

// Backend Ossi Api
const Axios = axios.create({
  baseURL,
});

class LoginContextProvider extends Component {
  constructor(props) {
    super(props);
    console.log("call ---> this.isLoggedIn()");
    this.isLoggedIn();
  }

  state = {
    ilmoitukset: false,
    hasValue: false,
    isAuth: false,
    selectUserType: false,
    ShowloginButton: true,
    ShowlogoutButton: false,
    NShowloginButton: true,
    NShowlogoutButton: false,
    log: "",
    eko: "",
    inValidPass: false,
    inValidEmail: false,
    errorType: false,
    token: false,
    theUser: {
      username: "",
      email: "",
      kaupunki: "",
      koulutus: "",
      maakunta: "",
      nimi: "",
      nykyinentyo: "",
      osoite: "",
      postinumero: "",
      sukunimi: "",
      tietoaMinusta: "",
    },
    loading: false,
  };

  ///////////////////////////////////////////////////

  setProfile = async (props) => {
    console.log("this.setProfile");
    // Työntekijä
    //console.log("gei")

    const { emp } = props;

    var postData = {
      emp: emp ? emp : 2,
    };

    //console.log("työntekijä");
    //console.log(postData);

    Axios.post(
      "/api/ware/sure.php",
      { postData },
      { withCredentials: true }
    ).then((response) => {
      console.log("setProfile.response");
    });
  };

  onLoginSuccess = async (res) => {
    console.log("this.onLoginSuccess");
    //console.log("Login Success:", res.profileObj);
    this.setState({
      ShowloginButton: false,
      ShowlogoutButton: true,
      isAuth: true,
      login: res.profileObj,
    });
    //console.log(this.state);
  };

  onLoginFailure = async (res) => {
    console.log("this.onLoginFailure");
    //console.log("Login Failed:", res);
    //console.log(this.state);
  };

  onSignoutSuccess = async (props) => {
    console.log("this.onSignoutSuccess");
    alert("You have been logged out successfully");
    this.setState({
      ShowloginButton: true,
      ShowlogoutButton: false,
    });
    //console.log(this.state);
  };

  registerUser = async (props) => {
    console.log("this.registerUser");

    const { email, password } = props;
    var postData = {
      email: email,
      password: password,
    };
    const { cookies } = this.props;

    Axios.post("/api/ware/register.php", postData).then((response) => {
      console.log("this.registerUser.response");

      if (response.data.status === 201) {
        this.loginUser(postData);

        Router.push("/oma-profiili/kuka-olen/");
        cookies.set("CIS_1", "1", { path: "/" });

        this.setState({
          isAuth: true,
          selectUserType: true,
          log: response.data.message,
        });
      }
      if (response.data.status === 422) {
        this.setState({
          log: response.data.message,
          errorType: response.data.ErrorType,
        });
      }
    });
  };

  resetPassword = async (props) => {
    console.log("this.resetPassword");

    const { email, password, mndCc } = props;

    var postData = {
      email: email ? email : null,
      password: password ? password : null,
      mndCc: mndCc ? mndCc : null,
    };

    const { cookies } = this.props;

    Axios.post("/api/passwordreset.php", postData).then((response) => {
      console.log("this.resetPassword.response");
      if (response.data.status === 200) {
        // Router.push("/oma-profiili/kuka-olen/");
        // cookies.set("CIS_1", "1", { path: "/" });
        this.setState({
          isAuth: response.data.isAuth,
          errorType: response.data.errorType,
          eko: response.data.eko,
          log: response.data.log,
        });
      }

      if (response.data.status === 201) {
        Router.push("/oma-profiili/kuka-olen/");
        cookies.set("CIS_1", "1", { path: "/" });
        this.setState({
          isAuth: response.data.isAuth,
          selectUserType: true,
          eko: response.data.eko,
          log: response.data.log,
        });
      }

      if (response.data.status === 422) {
        this.setState({
          log: response.data.log,
          errorType: response.data.errorType,
        });
      }
    });
  };

  loginUser = async (props) => {
    console.log("this.loginUser");

    this.setState({
      loading: true,
    });
    //console.log("gei")

    const { email, password } = props;
    const { cookies } = this.props;

    var postData = {
      email: email,
      password: password,
    };

    Axios.post("/api/ware/login.php", { withCredentials: true, postData }).then(
      (response) => {
        console.log("this.loginUser.res");
        if (response.data.success === 1) {
          // this.getUserData();
          // cookies.set("CIS_1", "1", { path: "/" });
          let isAuthenticated = "Kikkeli";

          localStorage.setItem("auth", JSON.stringify(isAuthenticated));

          this.setState({
            hasValue: true,
          });

          Axios.defaults.headers.common["Authorization"] =
            "bearer " + response.data.token;

          Axios.get("/api/ware/user-info.php", { withCredentials: true }).then(
            (response) => {
              console.log("this.loginUseruser-info.php.response");

              let MaxAgeSeconds =
                response.data.expire - Math.round(+new Date() / 1000);
              cookies.set("CIS_id", response.data.user.id, {
                path: "/",
                maxAge: MaxAgeSeconds,
              });
              if (response.data.user.isEmp === "0") {
                Router.push("/oma-profiili/kuka-olen/");
              } else {
                Router.push("/oma-profiili/asetukset");
              }
            }
          );

          this.setState({
            log: response.data.message,
            errorType: false,
            isAuth: true,
            loading: false,
          });

          if (response.data.status === 422) {
            this.setState({
              log: response.data.message,
              errorType: response.data.ErrorType,
              loading: false,
            });
          }
        }
        if (response.data.success === 0) {
          this.setState({
            log: response.data.log,
            errorType: response.data.errorType,
            isAuth: response.data.isAuth,
            loading: false,
          });
        }
      }
    );
  };

  onSignout = async () => {
    console.log("Not Ok");
    //console.log("gei")

    const { cookies } = this.props;

    cookies.remove("CIS_1", "1", { path: "/" }); // setting the cookie
    cookies.remove("CIS_id", { path: "/" }); // setting the cookie

    Axios.post("/api/ware/logout.php", {}, { withCredentials: true })
      .then((res) => {
        // //console.log(res);
        location = "/";
      })
      .catch((err) => {
        // //console.log(err.response);
      });
  };

  isLoggedIn = async () => {
    console.log("this.isLoggedIn");

    //console.log("Needs if stament from cookies if logged in");
    Axios.post("/api/ware/isLoggedIn.php", {}, { withCredentials: true }).then(
      (response) => {
        console.log("this.isLoggedIn.res");

        if (response.data.success === 1) {
          console.log("call.getUserData");

          this.getUserData();
          this.setState({
            NShowloginButton: false,
            NShowlogoutButton: true,
            isAuth: true,
            hasValue: true,
          });
        }
      }
    );
    ////console.log(this.state);
  };

  getUserData = async () => {
    console.log("this.getUserData");

    // const { cookies } = this.props;
    //console.log(cookies.CIS_id)

    Axios.post("/api/ware/profile.php", {}, { withCredentials: true })
      .then((res) => {
        console.log("getUserData.res");
        if (res.data === 0) {
          Router.push("/login");
        } else {
          this.setState({
            theUser: res.data,
          });
        }
      })
      .catch((err) => {
        // //console.log(err.response);
      });
  };

  sendUserData = async (props) => {
    console.log("sendUserData");
    this.getUserData();

    const { cookies } = this.props;

    let postData = {
      ...props,
      proifleUpdate: true,
    };

    Axios.post(
      "/api/ware/profile.php",
      { postData },
      { withCredentials: true }
    ).then((response) => {
      console.log(response);
      if (response.status === 200) {
        this.setState({
          theUser: response.data,
        });
        console.log("proiflephp Fetch OK");
      }
    });
  };

  getIlmoitukset = async (props) => {
    console.log("getIlmoitukset");
    let postData = props;
    Axios.post(
      "/api/getIlmoitukset.php",
      { postData },
      { withCredentials: true }
    ).then((res) => {
      console.log(res.data);

      if (res.data === 0) {
        Router.push("/login");
      }
      if (res.status === 200) {
        if (res.data[0] === false) {
          this.setState({
            ilmoitukset: false,
          });

        } else {
          this.setState({
            ilmoitukset: res.data,
          });
        }
      }
    });
  };

  deleteIlmoitus = async (propsID) => {
    console.log("deleteIlmoitus");

    let postData = {
      props: propsID,
    };
    console.log(postData);

    Axios.post(
      "/api/deleteIlmoitus.php",
      { propsID },
      { withCredentials: true }
    ).then((res) => {
      Router.push("/yritys/tyo");

      // if (res.data === 0) {

      // }
      if (res.status === 200) {
        toast("Ilmoitus poistettu");

        console.log(res);
      }
    });
  };

  ////////////////////////////////////////////////////

  render() {
    const contextValue = {
      rootLoginState: this.state,
      getUserData: this.getUserData,
      sendUserData: this.sendUserData,
      onSignout: this.onSignout,
      setProfile: this.setProfile,
      onLoginSuccess: this.onLoginSuccess,
      onLoginFailure: this.onLoginFailure,
      onSignoutSuccess: this.onSignoutSuccess,
      registerUser: this.registerUser,
      resetPassword: this.resetPassword,
      loginUser: this.loginUser,
      isLoggedIn: this.isLoggedIn,
      getIlmoitukset: this.getIlmoitukset,
      deleteIlmoitus: this.deleteIlmoitus,
    };
    return (
      <LoginContext.Provider value={contextValue}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default withRouter(withCookies(LoginContextProvider));
