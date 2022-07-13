import React, { Component } from "react";
import InfinitScroll from "react-infinite-scroll-component"; // import { div, div, div } from "react-bootstrap";
import InnerTexts from "./innerText";
import Link from "next/link";
import { withCookies } from "react-cookie"; // import { Link } from "react-router-dom";
import { withRouter } from "next/router";
import Loading from "./Loading/Loading"; // import GoogleAds from "../GoogleAds/GoogleAds";
import Eituloksia from './Eituloksia';

class Scrollez extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      count: 20,
      start: 1,
      msg: "",
      userInput: "",
    };

    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.fetchNextUserInput = this.fetchNextUserInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchSubmit = this.fetchSubmit.bind(this);
    this.fetchRandom = this.fetchRandom.bind(this);
    this.push = this.push.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      this.setState({
        users: this.state.users,
      });
    }
  }

  fetchNextUserInput(event) {
    this.setState({ start: this.state.start + 1 });
    this.props.fetchNextUserInput(this.state);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  fetchSubmit(event) {
    event.preventDefault();
    this.props.fetchSubmit(this.state);
  }

  fetchRandom(event) {
   //console.log("fetchRandom");
    this.props.fetchRandom(this.state);
  }

  onUserInputChange(e) {
    const produit = e.target.value;
    this.setState({
      userInput: produit,
    });
    this.props.onUserInputChange(produit);
  }

  push(event) {
   //console.log(event.target.id);
  }

  // state = {  // getting the cookie
  // };

  render() {
    const { user } = this.state;
   //console.log(user);
    return (
      <>
        <div xs={12} sm={12} md={12} lg={12} xl={9} xxl={8}>
          <div className="images">
            <InfinitScroll
              dataLength={this.props.data.tyopaikkaData}
              next={this.fetchNextUserInput}
              hasMore={true}
              loader={this.fetchRandom}
            >
              <>
                {this.props.data.nodata === "" ? (
                  <>
                    {this.props.data.tyopaikkaData ? (
                      <>
                        <div className="container mx-auto mt-32">
                          <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                            <time className="text-lg font-semibold text-gray-900 dark:text-white">
                              Hakutulokset
                            </time>
                            <hr className="text-white" />
                            <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                              {this.props.data.tyopaikkaData.map((item, i) => (
                                <li key={i}>
                                  <Link href={"/ilmoitus/" + item.id}>
                                    <a
                                      onClick={this.push}
                                      className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                      {item.image === "0" || "noImage" ? null : (
                                        <img
                                          className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0"
                                          src="/docs/images/people/profile-picture-3.jpg"
                                          alt="Bonnie Green image"
                                        />
                                      )}
                                      <div className="text-gray-600 dark:text-gray-400">
                                        <div className="text-base font-normal">
                                          <span className="font-medium text-gray-900 dark:text-white">
                                            {item.shortTitle}
                                          </span>{" "}
                                        </div>
                                        <div className="text-sm font-normal">
                                          {" "}
                                          <InnerTexts dirtyHtml={item.body} />
                                        </div>
                                        <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                          <svg
                                            className="mr-1 w-3 h-3"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                                              clipRule="evenodd"
                                            />
                                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                          </svg>
                                          Private
                                        </span>
                                      </div>
                                    </a>
                                  </Link>
                                </li>

                                // is = this.state.user.search(item.id),
                                ////console.log(this.state.user.search(item.id)),

                                //   <section key={i} className="text-gray-600 body-font overflow-hidden">

                                //       <div className="p-4 flex flex-col items-start">
                                //         <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{item.cityNames}</span>
                                //         <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{item.shortTitle}</h2>
                                //         <p className="leading-relaxed mb-8">craft beer pork chic.</p>
                                //         <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                //           <a className="text-indigo-500 inline-flex items-center">Learn More
                                //             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                //               <path d="M5 12h14" />
                                //               <path d="M12 5l7 7-7 7" />
                                //             </svg>
                                //           </a>
                                //           <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                //             <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                //               <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                //               <circle cx={12} cy={12} r={3} />
                                //             </svg>1.2K
                                //           </span>
                                //           <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                //             <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                //               <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                //             </svg>6
                                //           </span>
                                //         </div>
                                //         <a className="inline-flex items-center">
                                //           <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                //           <span className="flex-grow flex flex-col pl-4">
                                //             <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                //             <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                //           </span>
                                //         </a>
                                //       </div>
                                //       <hr />
                                // </section>
                              ))}{" "}
                            </ol>{" "}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Loading />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {this.props.data.nodata === "null" ? (
                      <>    
                        <Eituloksia/>
                      </>
                    ) : (
                      <> {/* <AloitaUusi /> */}</>
                    )}
                  </>
                )}
              </>
            </InfinitScroll>
          </div>
        </div>

        {this.props.data.nodata === "etsi" ? (
          <>
<Loading />
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default withRouter(withCookies(Scrollez));
