import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS', body: 'Description'},
    {id: 3, title: 'JS', body: 'Description'}
  ])

  return (
    <div className="App">
      <form>
        {/*<input>*/}
      </form>
      <PostList posts={posts} title={"Post List"}/>
    </div>
  )
}

export default App;
