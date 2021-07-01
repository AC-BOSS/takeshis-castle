import { Switch, Route, Redirect } from "react-router-dom";
import About from './components/About';
import Events from "./components/Events";
import Cast from "./components/Cast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
	return (
		<>
			<Header/>
			<Switch>
				<Route path='/about'>
					<About/>
				</Route>
				<Route path='/events'>
					<Events/>
				</Route>
				<Route path='/cast'>
					<Cast/>
				</Route>
				<Route path='*'>
					<Redirect to='/about'/>
				</Route>
			</Switch>
			<Footer/>
		</>
  	);
}

export default App;
