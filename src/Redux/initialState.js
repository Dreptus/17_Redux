const initialState = {
  columns: [
    {
      id: '1',
      title: 'Books',
      icon: 'book',
      listId: '1',
    },
    {
      id: '2',
      title: 'Movies',
      icon: 'film',
      listId: '1',
    },
    {
      id: '3',
      title: 'Games',
      icon: 'gamepad',
      listId: '1',
    },
    { id: '4',
      title: 'Songs',
      icon: 'music',
      listId: '2',
    },
    {}
  ],

  cards: [
    { id: '1', columnId: '1', title: 'This is Going to Hurt', isFavorite:false},
    { id: '2', columnId: '1', title: 'Interpreter of Maladies', isFavorite:false },
    { id: '3', columnId: '2', title: 'Harry Potter', isFavorite:false },
    { id: '4', columnId: '2', title: 'Star Wars', isFavorite:false },
    { id: '5', columnId: '3', title: 'The Witcher', isFavorite:false },
    { id: '6', columnId: '3', title: 'Skyrim', isFavorite:false }
  ],

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
  {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
  }
],

  searchString: '',

};

export default initialState;