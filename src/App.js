import React from 'react';

import CardList from './components/card-list/card-list';
import SearchBar from './components/search-bar/search-bar';

import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonster = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()),
		);

		return (
			<div className='App'>
				<SearchBar
					placeholder='search monsters'
					handleChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonster}></CardList>
			</div>
		);
	}
}

export default App;
