import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeadBG from '../../Assets/img/HeadBG.jpg'; 
import Logo from '../../Assets/img/GTE-LOGO.png'; 
import Icon from '../../Assets/img/Icon.png';
import bigIcon from '../../Assets/img/bigIcon.png';

var sectionStyle = { backgroundImage: "url(" + HeadBG + ")" };  

class Header extends Component {
	constructor() {
		super();
		this.state = { 
			scrollClass: "navbar navbar-default navbar-fixed-top default"
		}; 
	  	this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement; 
		const windowBottom = windowHeight + window.pageYOffset;
		if (windowHeight == windowBottom) {
		  this.setState({scrollClass: "navbar navbar-default navbar-fixed-top default"});
		} else {
		  this.setState({scrollClass: "navbar navbar-default navbar-fixed-top colored"}); 
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	scrollToTop() { 
		window.scrollTo(0, 0);  
	}; 
	render() {
	return (
	  	<header>   
	  		<div class="main-container">
		      	<nav className={this.state.scrollClass} role="navigation">
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
				        <li><Link to="/#HOME">Home</Link></li>
				        <li><Link to="/#ABOUT">About</Link></li>
				        <li><Link to="/#MUSIC">Music</Link></li> 
				      </ul>
				    </div> 
				  </div> 
				</nav>
				<div className="fixedBG">
			      	<div className="fullHeight" style={ sectionStyle }>
			      		<img className="centered bigIcon" src={ bigIcon }/> 
			      		<img className="centered Icon" src={ Icon }/>
		      		</div> 
	      		</div>
			</div>
			<div className="scrollToTop" onClick={ this.scrollToTop }>
				<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
			</div>
	  	</header>
	);
	}
}

export default Header;
