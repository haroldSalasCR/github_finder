import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    const resp = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ users: resp.data, loading: false });

    console.log(this.state.users);
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });

    const resp = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({ users: resp.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
