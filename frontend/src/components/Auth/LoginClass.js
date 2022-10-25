import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { loginUser } from "../../redux/actions/userAction";
import { connect } from "react-redux";
// import { matchPath } from "react-router-dom"
import { createRoutesFromChildren } from "react-router"

// export const Component = withNavigation(({ history, location }) =>{

// })

// Class based component
export class Login extends Component {
  // Called when prop is reloaded
  componentDidMount() {
    console.log("Component did mount");
    console.log(this.props.user);
  }

  // Called when change in state
  componentDidUpdate() {
    const { loading, user, error } = this.props.user;
    console.log(loading, user, error);
    if (
      loading !== undefined &&
      user !== undefined &&
      error !== undefined &&
      this.state.loginIsClicked
    ) {
      if (!loading) {
        if (error !== "") {
          alert(error.message);
        } else if (user !== "") {
          alert("Logged In Successfully");
        }
      }
    }
    
    if (this.state.loginIsClicked) {
      this.setState({
        loginIsClicked: false,
      });
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      userCredentials: {
        email: "",
        password: "",
      },
      showPassword: false,
      loginIsClicked: false,
    };
  }

  loginChangeHandler = (e) => {
    this.setState({
      userCredentials: {
        ...this.state.userCredentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  loginSubmit = async (e) => {
    e.preventDefault();
    await this.props.loginUser(
      this.state.userCredentials.email,
      this.state.userCredentials.password
    );
    this.setState({
      loginIsClicked: true,
    });
  };

  render() {
    return (
      <>
        <div className="flex justify-center items-center h-[100vh] w-full border-2">
          <div className="flex flex-col justify-center items-center border-2 h-full w-1/4 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex flex-col justify-center items-center">
              <div className="text-2xl font-bold text-white">New User ?</div>
              <div className="text-center my-2 text-gray-300 italic">
                Register Yourself Now !
              </div>
              <div className="button">
                <Link to="/signup">
                  <button className="rounded-full border-2 px-4 py-2 text-white font-bold hover:bg-white hover:text-gray-400 my-4">
                    SIGN UP
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-stretch border-2 h-full w-3/4 bg-white">
            <div className="flex items-center justify-center flex-col my-12">
              <div className="text-4xl text-green-600 my-2">Welcome Back!</div>
              <div className="sub-heading my-2 text-lg text-gray-400 italic">
                Login with your Personal Information
              </div>
            </div>
            <form
              className="flex flex-col justify-center items-center"
              onChange={(e) => this.loginChangeHandler(e)}
              onSubmit={(e) => this.loginSubmit(e)}
            >
              <div className="flex items-center">
                <div className="absolute ml-2">
                  <EmailOutlinedIcon />
                </div>
                <input
                  style={{ width: "28rem" }}
                  className="bg-green-100 pl-12 py-3 my-2 rounded-md"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.userCredentials.email}
                />
              </div>

              <div className="flex items-center">
                <div className="absolute ml-2">
                  <LockOutlinedIcon />
                </div>
                <input
                  style={{ width: "28rem" }}
                  className="bg-green-100 pl-12 py-3 my-2 rounded-md"
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={this.state.userCredentials.password}
                />
                <div
                  className="absolute translate-x-96 cursor-pointer"
                  onClick={() => {
                    this.setState({
                      showPassword: !this.state.showPassword,
                    });
                  }}
                >
                  {this.state.showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </div>
              </div>
              <div className="flex">
                <Link to="/password/forgot" className="text-blue-400">
                  Forgot Password ?
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-full bg-green-500 py-3 px-16 mt-4 shadow-md text-white font-bold hover:bg-green-300"
                >
                  LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  
});

export default connect(mapStateToProps, {
  loginUser
})(Login);
