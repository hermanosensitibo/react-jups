import React, { Component } from 'react'; 
import TopSection from './topSection';
import Music from './music';

class Homepage extends Component {
  	render() {
	    return (
			<div id="HOME" className="App">
				<h1>Homepage Content</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel felis molestie, malesuada leo quis, efficitur leo. Curabitur interdum, est ac eleifend aliquet, lacus lacus porta felis, quis vestibulum ligula turpis a nunc. Aenean volutpat velit arcu, non venenatis tortor pharetra sed. Pellentesque malesuada lacinia gravida. Pellentesque ullamcorper tortor sapien. Ut ut interdum neque. Suspendisse non magna nec nunc porta maximus. Curabitur in placerat orci. Fusce tortor mi, hendrerit vitae nunc non, fermentum rutrum dolor. Quisque quis mi est. Cras accumsan iaculis eleifend. Pellentesque nec blandit metus.
				</p>
				<p>Duis auctor volutpat varius. Nulla ornare dolor ipsum, et imperdiet massa posuere non. Fusce auctor velit ut urna vulputate placerat. Suspendisse potenti. Integer eget fringilla tellus. Nulla sed sodales lectus, a auctor turpis. Nam porta luctus hendrerit. Donec ac maximus leo, sit amet pretium quam.</p>
 		
				<TopSection/>
				<Music />
			</div>
	    );
  	}
}

export default Homepage;
