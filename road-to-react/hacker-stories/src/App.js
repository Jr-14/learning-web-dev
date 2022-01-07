import * as React from 'react';


const getTitle = (title) => {
  return title;
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
    <li key={props.item.objectID}>
      <span>
        <a href={props.item.url}>{props.item.title} </a>
      </span>
      <span>{props.item.author} </span>
      <span>Number of comments: {props.item.num_comments} </span>
      <span>{props.item.points} </span>
    </li>
  );
};

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

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  console.log('The App Renders');

  return (
    <div>
      <h1> Hello {getTitle('React')}</h1>

      <Search onSearch={handleSearch} />
      <hr/>
      <List list={stories}/>
    </div>
  );
}

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };

  console.log('The Search renders');

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong> {searchTerm}</strong>
      </p>
    </div>
  );
}

export default App;
