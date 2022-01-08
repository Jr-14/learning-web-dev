import * as React from 'react';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 2,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'John',
      url: 'https://www.youtube.com',
      author: 'John Requizo',
      num_comments: 1,
      points: 10,
      objectID: 0,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log('The App Renders');

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />
      <hr/>
      <List list={searchedStories}/>
    </div>
  );
}

const List = (props) => {
  console.log('The List renders');

  return (
    <ul>
      {props.list.map((item) => {
        return (
          <Item key={item.objectID} item={item} />
        );
      })}
    </ul>
  );
}

const Item = (props) => {
  console.log('The Item renders');

  return (
    <li> 
      <span>
        <a href={props.item.url}>{props.item.title} </a>
      </span>
      <span>{props.item.author} </span>
      <span>Number of comments: {props.item.num_comments} </span>
      <span>{props.item.points} </span>
    </li>
  );
};


const Search = (props) => {
  console.log('The Search renders');
  const {search, onSearch} = props; // Basic Destructuring of the props object
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
        id="search" 
        type="text" 
        value={search}
        onChange={onSearch} />
    </div>
  );
};

export default App;
