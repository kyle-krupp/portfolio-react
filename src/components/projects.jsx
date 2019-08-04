import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/connect.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="http://developerconnectorapp.herokuapp.com/" target="_blank">Dev Connect</a></h3>
											<span>A small social network platform for developer collaboration & networking. <br>
											</br>Stack: React, Express, Node, MongoDB</span>
											<p className="icon">
												<span><a href="http://developerconnectorapp.herokuapp.com/" target="_blank"><i className="icon-link" /> Live Link</a></span>
												<span><a href="https://github.com/kyle-krupp/devconnector" target="_blank"><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							{/*<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/xray.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://rccxrayclub.squarespace.com/" target ='_blank'></a>RCC X-Ray Club</h3>
											<span>Calendar site built for the Roxbury Community College X-Ray Club. This site serves as a central inforation reSource for upcoming events
												and important documents. Built with Squarespace and maintained by the club members! </span>
											<p className="icon">
												<span><a href="https://rccxrayclub.squarespace.com/" target ='_blank'><i className="icon-link" /> Live Link</a></span>
											</p>
										</div>
									</div>
								</div>
		</div>*/}
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/bukitlogo.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://bukitlist.herokuapp.com/" target='_blank'>Bukit</a></h3>
											<span>A travel app for taking notes and fetching real time data on your locations. Architected the authentication and database strategy for a final group project. <br>
											</br>Stack: React, Express, Node, MongoDB</span>
											<p className="icon">
												<span><a href="https://bukitlist.herokuapp.com/" target='_blank'><i className="icon-link" /> Live Link</a></span>
												<span><a href="https://github.com/kyle-krupp/Bukit" target='_blank'><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/tappylogo.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://tranquil-fjord-50136.herokuapp.com/" target='_blank'>Tappy Hour</a></h3>
											<span>A Happy Hour web app for businesses to sign up and consumers to stay up-to-date on the latest deals in your area!
												<br></br>Stack: Node, Express, MySQL, Handlebars, jQuery</span>
											<p className="icon">
												<span><a href="https://tranquil-fjord-50136.herokuapp.com/" target='_blank'><i className="icon-link" /> Live LInk</a> </span>
												<span><a href="https://github.com/kyle-krupp/project-2" target='_blank'><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/logo_blue.png)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="https://andreweharding.github.io/Pu-Revu/" target='_blank'>Pu ReVu </a></h3>
											<span>A bathroom geolocater and review site + some in-app entertainment
												<br></br>Stack: jQuery, Firebase</span>
											<p className="icon">
												<span><a href="https://andreweharding.github.io/Pu-Revu/" target='_blank'><i className="icon-link" /> Live Link</a> </span>
												<span><a href="https://github.com/kyle-krupp/Pu-Revu" target='_blank'><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/train.gif)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="https://kyle-krupp.github.io/TrainSchedule/" target='_blank'>Train Scheduler </a></h3>
											<span>Schedule your trip to Hogwarts with this scheduling app!
												<br></br> jQuery, Moment JS, Firebase</span>
											<p className="icon">
												<span><a href="https://kyle-krupp.github.io/TrainSchedule/" target='_blank'><i className="icon-link" /> Live Link</a> </span>
												<span><a href="https://github.com/kyle-krupp/TrainSchedule" target='_blank'><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
