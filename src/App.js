import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Box</h1>
        <SearchBox
          onChange={(e) => this.setState({ searchField: e.target.value })}
          placeholder="Search Monster"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
