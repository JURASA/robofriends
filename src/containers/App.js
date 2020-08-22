import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';

// We don't need to write React.Component because of destructuring. 
// Javascript knows Component is from React because we wrote {Component}
class App extends Component {
    // In order to create a state within react, we have to create a constructor,
    // and within it, we can declare a state
    constructor() {
        // This calls the constructor from component so that we can use the
        // "this" keyword.
        super()
        this.state = {
            // These are the things that can change and affect our app
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        // fyi fetch is a window method
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ robots: users}));
    }

    // We use arrow functions whenever we make our own methods on a component
    // because this ensures that the "this" values are according to where it
    // was created, which is the app. Otherwise, the event which happened
    // would be refering to what happened inside of the jsx tags within
    // SearchBox.js instead of within the App, App.js itself
    onSearchChange = (event) => {
        // Never do this.state.searchfield =. Use this instead:
        this.setState({ searchfield: event.target.value});
    }
    

    render() {
        // "event" is just the event itself but value actually gives us
        // what's inside of the searchbox
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        // If server is slow, add a loading bar
        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>;
            } else {
            // What we're doing is changing the state so that the searchfield 
            // always gets updated and now we're filetering the robots according
            // to the changed search field
            return(
                <div className='tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    {/* We have to say "this" for onSearchChange because we
                    are trying to see if the search changes for the "App" */}
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        {/* originally we used "this.state.robots" because we wanted
                        the CardList component to receive all the robots. Now that
                        we have a way to filter robots in app.js, we want to pass
                        down to the child node, CardList only what the use has 
                        typed down. */}
                        <CardList robots = {filteredRobots}/>   
                    </Scroll>
                </div>
                
            );
        }
        
    } 
}

export default App;

// PROPS are always inputs we get and we never change them
// STATE simply means the description of your app. A state is simply 
// an object that describes your application. The state is our robot 
// and whatever is entered into the searchbox, and we can change these values
// 
// PROPS are essentially things that come out of states.
// A parent feeds state into a child component, and as soon as a child 
// component receives a state, it's a property. That child can never 
// change that property. The parents just tells it what the state is and
// the child receives it as {robots}
//
// Thus, ALL react components are what are known as "pure functions" because
// Smart components usually have class syntax and are reactive




