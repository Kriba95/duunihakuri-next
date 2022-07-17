import React, { createContext, Component } from "react";
import axios from "axios";

export const Context = createContext();

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost/duunihakuri2.0-api/"
    : "/";

// Backend Ossi Api
const Axios = axios.create({
  baseURL,
});

// http://localhost/duunihakuri2.0-api/

export default class ContextProvider extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  }

  // Root State
  state = {
    count: 20,
    start: 1,
    tyopaikkaData: "",
    oneTyoData: "",
    topdata: "",
    object: {},
    users: {},
    nodata: "etsi",
    msg: "",
    userInput: "",
    city: "",
    ala: "",
    ShowloginButton: true,
    ShowlogoutButton: false,
    loading: false,
    login: "",
    counter: 1,
  };

  ///////////////////////////////////////////////////
  // counter = async (props) => {
  //   Axios.get("https://api.countapi.xyz/hit/duunihakuri.fi/visits").then(
  //     (response) => {
  //       // console.log(response.data.value);
  //       this.setState({
  //         tyopaikkaData: response.data.value,
  //       });
  //     }
  //   );
  // };

  TyoData = async (props) => {
    var postData = {
      city: "mikkeli",
      page: "1",
    };

    const TyoData = await Axios.post("/api/limitsearch.php", postData);
    if (TyoData) {
      this.setState({
        tyopaikkaData: TyoData.data,
      });
    }
    return TyoData.data;
  };

  fetchRandomUsers = async (props) => {
    //console.log("at state fetch")

    var postData = {
      ala: "null",
      city: "Mikkeli",
      page: this.state.start,
      count: this.state.count,
    };

    Axios.post("/api/limitsearch.php", postData).then((response) => {
      this.setState({ tyopaikkaData: response.data, nodata: "" });
    });
  };

  fetchNextUsers = async (props) => {
    //console.log(this.state);

    const { count, start, citys, ala } = props;
    this.setState({ start: this.state.start + 1 }, () => {
      const { count, city, ala } = this.state;
      var postData = {
        city: city ? city : "null",
        ala: ala ? ala : "null",
        page: start,
        count: count,
      };

      Axios.post("/api/limitsearch.php", postData).then((response) => {
        this.setState({
          tyopaikkaData: this.state.tyopaikkaData.concat(response.data),
        });
      });
    });
  };

  handleSubmit = async (event) => {
    this.setState(
      { tyopaikkaData: "", nodata: "", city: event.citys, ala: event.ala },
      () => {
        const { count, city, ala } = this.state;
        var postData = {
          city: city ? city : "null",
          ala: ala ? ala : "null",
          page: 1,
          count: count,
        };
        Axios.post("/api/limitsearch.php", postData).then((response) => {
          if (response.data.length === 0) {
            this.setState({ nodata: "null" });
          } else {
            this.setState({ tyopaikkaData: response.data, nodata: "" });
          }
        });
      }
    );
  };

  searchArea = async (data) => {
    var postData = {
      city: data.citys,
    };
    const haku = await Axios.post("/api/searchArea.php", postData);
    if (haku) {
      this.setState({
        tyopaikkaData: haku.data,
        searchData: postData,
        loading: true,
      });
    }
    return haku.data;
  };
  getJobByID = async (props) => {
    //console.log("hei");
    var postData = {
      id: props,
    };
    Axios.post("/api/yksittainen.php", postData).then((response) => {
      this.setState({ oneTyoData: response.data, nodata: "etsi" });
    });
  };

  onLoginSuccess = async (res) => {
    //console.log("Login Success:", res.profileObj);
    this.setState({
      ShowloginButton: false,
      ShowlogoutButton: true,
      login: res.profileObj,
    });
    // setShowloginButton(false);
    // setShowlogoutButton(true);
    // const router = useRouter();
    //console.log(this.state)

    // router.push("/kuka-olen");
  };

  onLoginFailure = async (res) => {
    //console.log("Login Failed:", res);
    //console.log(this.state)
  };

  onSignoutSuccess = async (props) => {
    alert("You have been logged out successfully");
    console.clear();
    this.setState({
      ShowloginButton: true,
      ShowlogoutButton: false,
    });
  };

  handleSubmitS = async (data) => {
    //console.log("Login Failed:", res);
    console.log(data);

    if (data.save === 1) {

      let datas = {data: data.data, save: 1}
      console.log("state Save ilmoitus");
      Axios.post("/api/post.php", { datas }, { withCredentials: true }).then(
        (response) => {
          console.log(response);
        }
      );

    } else {
      this.setState({
        ilmoitus: data,
      });

      Axios.post("/api/post.php", { data }, { withCredentials: true }).then(
        (response) => {
          console.log(response);
        }
      );
    }
  };

  ////////////////////////////////////////////////////

  render() {
    const contextValue = {
      rootState: this.state,
      counter: this.counter,
      onLoginSuccess: this.onLoginSuccess,
      onLoginFailure: this.onLoginFailure,
      onSignoutSuccess: this.onSignoutSuccess,
      getJobByID: this.getJobByID,
      TyoData: this.TyoData,
      searchArea: this.searchArea,
      fetchRandomUsers: this.fetchRandomUsers,
      fetchNextUsers: this.fetchNextUsers,
      handleSubmit: this.handleSubmit,
      handleSubmitS: this.handleSubmitS,
    };
    return (
      <Context.Provider value={contextValue}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
