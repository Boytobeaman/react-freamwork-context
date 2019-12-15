import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { APP_URL_NAME } from '../config/global';

class Testb extends Component {
  render(){
    return(
      <div className="container not-found-wrap">
        <div className="text-center">
          <div className='rounded bg-white p-3'>
            <h1>404</h1>
            <h4>NOT FOUND</h4>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link className="btn btn-danger" role="button" aria-pressed="true" to={APP_URL_NAME}>
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Testb