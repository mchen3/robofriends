import React, {Component} from 'react';
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

import './App.css';
import Scroll from '../components/Scroll';

// parameter state comes from index.js provider store state(rootReducers)
// State is from <Provider store/> in index.js
const mapStateToProps = (state) => {
  return {

      // Add the state properties from Provider to the properties 
      // of this object, this.prop. The State is from Reducer.js. 
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
  }
}
// dispatch the DOM changes to call an action. note mapStateToProps returns object, 
// mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {

    // onSearchChange() and onRequestRobots are added to this.prop

    // dispatching methods from actions, to reducers
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),

    // differrent from top. It's a property like top, but doesn't just dispatch
    onRequestRobots: () =>  dispatch(requestRobots())
  }
}

class App extends Component  {
  // constructor() {
  //   super();
  //  this.state =  {
  //   robots: []
  //  }
  //}

  componentDidMount() {
     this.props.onRequestRobots();

    //  fetch('https://jsonplaceholder.typicode.com/users')
    //  .then(response=>response.json())
    //  .then(users =>  this.setState({robots: users}));
  }

  // Must change to below othewise 'event' refers to the one from searchbar
  // so this.state is no in Searchbox
  // onSearchChange(event) {
  // onSearchChange = (event) => {
  //   //console.log(event.target.value );
  //   this.setState({ searchfield: event.target.value });
  // }

  // everytime you change state, render will get called again, henec instantenous changes
  render() {

    // const {robots} = this.state;
    // Use destruturing properties so you don't to do 
    // this.props.onSearchChange(), just use onSearch
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      // includes is substring, so pressing j will return back john, not exact name
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
     })

    return isPending ?
      <h1>Loading</h1> :
       (
        <div className="tc">
          <h1 className='f2'> Robot Friends </h1>
          
          {/* // This "App" is an object, so must use 'this.onSearchChange' instead
          // of just 'onSearchChange' */}
          <Searchbox searchChange={onSearchChange}/>

          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>

        </div>
      );

  }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
  promise
    .then(result => result + '!')
    .then(result2 =>  {
      throw Error;
      console.log(result2);
    })
    .catch(() => console.log("Error happen"))  
      

  // Test promises 

  const promise = new Promise ((resolve, reject) => {
    if(true) {
    resolve("Stuff worked");
  } else {
       reject("Error");
  }
  })
  
  promise
    .then(result => result + '!')
    .then(result2 =>  {
      throw Error;
      console.log(result2);
    })
    .catch(() => console.log("Error happen"))  
      

const urls = [
'https://jsonplaceholdersss.typicode.com/posts',
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => 
  fetch(url).then(result => result.json())
)).then(data => {
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
}).catch(() => console.log('errors'))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=>response.json())
// .then(users =>  console.log(users));

*/