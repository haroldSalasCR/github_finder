import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="container card">
          <div className="row">
            <div className="col text-center">
              <img
                src={avatar_url}
                className="rounded-circle mx-auto d-block"
                alt=""
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
              <a href={html_url} className="btn btn-dark mr-3">
                Visit Github profile
              </a>
            </div>
            <div className="col mx-auto d-block">
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}

              <ul>
                <li className="list-group-item">
                  {login && (
                    <Fragment>
                      <strong>Username: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li className="list-group-item">
                  {company && (
                    <Fragment>
                      <strong>Company: </strong> {company}
                    </Fragment>
                  )}
                </li>
                <li className="list-group-item">
                  {blog && (
                    <Fragment>
                      <strong>WebSite: </strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col text-center">
            <span className="badge badge-warning">Followers: {followers}</span>
            <span className="badge badge-success">Following: {following}</span>
            <span className="badge badge-info">
              Public Repos: {public_repos}
            </span>
            <span className="badge badge-danger">
              Public Gists: {public_gists}
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
