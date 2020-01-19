import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/home/home';
import Config from './config';
import Navi from './components/navbar/Navi.js';
import AboutUs from './components/aboutus/AboutUs'
import Calendar from './components/calendar/Calendar'
import Membership from './components/membership/Membership'
import ContactUs from './components/contactus/ContactUs'
import Events from './components/events/Events';
import Projects from './components/projects/Projects'
import Professional from './components/professional/Professional';
import Board from './components/board/Board';
import HeaderCarousel from './components/headercarousel/HeaderCarousel.js';
import Body from './components/body/Body.js';
import FooterCarousel from './components/footercarousel/FooterCarousel.js';

class App extends React.Component {


  constructor(props){
    super(props)
    this.state={
      error: null,
      isLoaded: false,
      calendarEvents:[]
    }
  }

  componentDidMount() {
    // TODO: Make this configurable and change the "timeMin" parameter dynamically.
    fetch("https://www.googleapis.com/calendar/v3/calendars/acm.calstatela%40gmail.com/events?orderBy=startTime&singleEvents=true&timeMin=2019-08-22T15%3A17%3A00%2B00%3A00&key=" + Config.api_key)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            calendarEvents : result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){
    return (
      <div>
        <BrowserRouter>
          <Navi/>
          <Route exact path='/' component={Home}/>
          {/*<Route exact path='/' render={() => <Body state={this.state}/>}/>*/}
          <Route path='/aboutus' component={AboutUs}/>
          <Route path='/calendar' component={Calendar}/>
          <Route path='/membership' component={Membership}/>
          <Route path='/contactus' component={ContactUs}/>
          <Route path='/events' component={Events}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/professional' component={Professional}/>
          <Route path='/board' component={Board}/>
        </BrowserRouter>
        <FooterCarousel/>
      </div>
    );
  }
}

export default App;
