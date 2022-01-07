import * as React from 'react';


const getTitle = (title) => {
  return title;
}

const List = (props) => {
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

  return (
    <div>
      <h1> Hello {getTitle('React')}</h1>

      <Search />
      <hr/>
      <List list={stories}/>
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
