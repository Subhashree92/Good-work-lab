import React,{Component} from 'react';
class Search extends Component {
    token = null;
    state = {
      query: "",
      people: []
    };
  
    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };
  
    search = query => {
      const url = `http://www.mocky.io/v2/5ba8efb23100007200c2750c`;
      const token = {};
      this.token = token;
  
      fetch(url)
        .then(results => results.json())
        .then(data => {
         
            this.setState({ people: data.results });
          
        });
    };
  
    componentDidMount() {
      this.search("");
    }
  
    render() {
      return (
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search for..."
            onChange={this.onChange}
          />
          {this.state.people.map(person => (
            <ul key={person.name}>
              <li>{person.name}</li>
            </ul>
          ))}
        </form>
      );
    }
  }
  export default Search;