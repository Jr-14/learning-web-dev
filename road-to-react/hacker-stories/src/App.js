import * as React from 'react';

const list = [
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

const getTitle = (title) => {
  return title;
}

const List = () => {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author} </span>
            <span>Number of comments: {item.num_comments} </span>
            <span>{item.points} </span>
          </li>
        );
      })}
    </ul>
  );
}

const App = () => {
  return (
    <div>
      <h1> Hello {getTitle('React')}</h1>

      <Search />
      <hr/>
      <List />
    </div>
  );
}

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

export default App;
