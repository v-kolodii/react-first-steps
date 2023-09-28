import './App.css';
import MyComponent from './components/MyComponent';
import CommentList from './components/CommentList';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <ul>
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
      </ul>
    </div>
  );
}

export default App;
