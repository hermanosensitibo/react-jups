import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeadBG from '../../Assets/img/HeadBG.jpg'; 
import Logo from '../../Assets/img/GTE-LOGO.png'; 
import Icon from '../../Assets/img/Icon.png';
import bigIcon from '../../Assets/img/bigIcon.png';

var sectionStyle = { backgroundImage: "url(" + HeadBG + ")" }; 

class Header extends Component {
  render() {
    return (
      	<header> 
      		<div class="main-container">
		      	<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
				  <div className="container"> 
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#"><img className="logo" src={ Logo }/></a>
				    </div>
				 
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav navbar-right">
				        <li><Link to="/">Home</Link></li>
				        <li><Link to="/Music">Music</Link></li> 
				      </ul>
				    </div> 
				  </div> 
				</nav>
		      	<div className="fullHeight" style={ sectionStyle }>
		      		<img className="centered bigIcon" src={ bigIcon }/> 
		      		<img className="centered Icon" src={ Icon }/>
				</div>
			</div>
      	</header>
    );
  }
}

export default Header;
