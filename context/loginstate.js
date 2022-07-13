import React, { createContext, Component } from "react";
import axios from "axios";

export const LoginContext = createContext();
import { withCookies, Cookies } from "react-cookie";
import Router, { withRouter } from "next/router";


const baseURL = process.env.NODE_ENV === "development"
  ? "http://localhost/duunihakuri2.0-api/"
  : "/"

// Backend Ossi Api
const Axios = axios.create({
  baseURL
});

class LoginContextProvider extends Component {
  constructor(props) {
    super(props);
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
    loading: false

  };

  ///////////////////////////////////////////////////

  

  setProfile = async (props) => {
    console.log("Not Oks")
    // Työntekijä
   //console.log("gei")

    const { emp } = props;

    var postData = {
      emp: emp ? emp : 2,
    };

   //console.log("työntekijä");
   //console.log(postData);

    Axios.post("/api/ware/sure.php", {postData}, { withCredentials: true }).then(
      (response) => {
       console.log(response);
      }
    );
  };

  onLoginSuccess = async (res) => {
    console.log("Not Ok")
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
    console.log("Not Ok")
   //console.log("Login Failed:", res);
   //console.log(this.state);
  };

  onSignoutSuccess = async (props) => {
    console.log("Not Ok")
    alert("You have been logged out successfully");
    console.clear();
    this.setState({
      ShowloginButton: true,
      ShowlogoutButton: false,
    });
   //console.log(this.state);
  };

  registerUser = async (props) => {
    console.log("Not Ok")
    const { email, password } = props;
    var postData = {
      email: email,
      password: password,
    };
    const { cookies } = this.props;

    Axios.post("/api/ware/register.php", postData).then((response) => {
      if (response.data.status === 201) {
        Router.push("/oma-profiili/kuka-olen/");
        cookies.set("CIS_1", "1", { path: "/"});

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
    console.log("Not Ok")
    console.log(props)

    const { email, password, mndCc } = props;

    var postData = {
      email: email ? email : null,
      password: password ? password : null,
      mndCc: mndCc ? mndCc : null,

    };

    const { cookies } = this.props;

    Axios.post("/api/passwordreset.php", postData).then((response) => {
      console.log(response)

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
    console.log("Not Ok")
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
        console.log(response)
        if (response.data.success === 1) {
          // this.getUserData();
          // cookies.set("CIS_1", "1", { path: "/" });
          let isAuthenticated = "Kikkeli";

          localStorage.setItem("auth", JSON.stringify(isAuthenticated))
          
          this.setState({
           hasValue: true,
          });
         

          Axios.defaults.headers.common["Authorization"] =
            "bearer " + response.data.token;

          Axios.get("/api/ware/user-info.php", { withCredentials: true }).then(
            (response) => {
              let MaxAgeSeconds = response.data.expire - Math.round(+new Date()/1000);
              cookies.set("CIS_id", response.data.user.id, { path: "/", maxAge: MaxAgeSeconds  });
              if (response.data.user.isEmp === 0) {
                Router.push("/oma-profiili/kuka-olen/");
              } else {
                Router.push("/oma-profiili/");
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
        if (response.data.success === 0){
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
    console.log("Not Ok")
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
    console.log("Not Ok")
   console.log("gei")

   //console.log("Needs if stament from cookies if logged in");
    Axios.post("/api/ware/isLoggedIn.php", {}, { withCredentials: true }).then(
      (response) => {
        console.log("response.data");

        console.table(response.data);
        if (response.data.success === 1) {
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
    console.log("Not Ok")
   console.log("Not Ok")
    // const { cookies } = this.props;
   //console.log(cookies.CIS_id)

    Axios.post("/api/ware/profile.php", {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
         this.setState({
          theUser: res.data,
        });
      })
      .catch((err) => {
        // //console.log(err.response);
      });
  };
  
  sendUserData = async (props) => {
    this.getUserData()

  //   console.log("Not Ok")
  //  console.log(props)
    const { cookies } = this.props;

    let postData = {
      ...props, 
      proifleUpdate: true,
    }

    Axios.post(
      "/api/ware/profile.php",
      { postData },
      { withCredentials: true }
    ).then((response) => {   
      
      console.log(response)
      if (response.status === 200) {
        console.log("proiflephp Fetch OK")
      }

    });
  };


getIlmoitukset = async (props) => { 

  console.log("fuck you alll")
  
  let postData = props;

  Axios.post(
    "/api/getIlmoitukset.php",
    { postData },
    { withCredentials: true }
  ).then((response) => {   
    
    if (response.status === 200) {

      this.setState({
        ilmoitukset: response.data,

      })


    }

  })
} 


  
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
    };
    return (
      <LoginContext.Provider value={contextValue}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default withRouter(withCookies(LoginContextProvider));
