import * as React from 'react';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  const initialStories = [
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

  const getAsyncStories = () => {
    return new Promise((resolve) => {
      setTimeout( 
        () => resolve({data: {stories: initialStories}}), 
        2000
      )
    });
  };

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    getAsyncStories().then(result => {
      setStories(result.data.stories);
    });
  }, []);

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  };

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

      <InputWithLabel id="search" value={searchTerm} isFocused onInputChange={handleSearch}><strong>Search:</strong> </InputWithLabel>
      <hr/>
      <List list={searchedStories} onRemoveItem={handleRemoveStory}/>
    </div>
  );
}

const List = ({list, onRemoveItem}) => {
  console.log('The List renders');

  return (
    <ul>
      {list.map((item) => {
        return (
          <Item 
            key={item.objectID} 
            item={item} 
            onRemoveItem={onRemoveItem}
          />
        );
      })}
    </ul>
  );
}

const Item = ({item, onRemoveItem}) => {
  console.log('The Item renders');

  return (
    <li> 
      <span>
        <a href={item.url}>{item.title} </a>
      </span>
      <span>{item.author} </span>
      <span>Number of comments: {item.num_comments} </span>
      <span>{item.points} </span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </span>
    </li>
  );
};


const InputWithLabel = ({
  id, 
  value, 
  type='text', 
  onInputChange,
  isFocused,
  children
}) => {
  console.log('The InputWithLabel' + {id} + ' renders');

  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <React.Fragment>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input 
        ref={inputRef}
        id={id} 
        type={type} 
        value={value}
        onChange={onInputChange} />
    </React.Fragment>
  );
};

export default App;
