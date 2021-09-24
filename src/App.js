import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <Router>
          <Switch>
            <Route path="/post/:id">
              <Post post={data[0]} />
            </Route>
            <Route path="/">
              <Posts posts={data} />
            </Route>
          </Switch>
          <Redirect from="/articles" to="/" />
        </Router>
      </section>
    </div>
  );
}

const Posts = (props) => {
  const history = useHistory();
  return (
    <div>
      <div>
        {props.posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </div>
      <p>Visited pages: {history.length}</p>
    </div>
  );
};

const Post = () => {
  const { id } = useParams();
  const index = data.findIndex((post) => post.id === id);
  const post = data[index];
  const nextPost = data[(index + 1) % data.length];

  const location = useLocation();

  return (
    <div>
      <h1>{post.title}</h1>
      <h6>{post.side}</h6>
      <p>{post.body}</p>
      <aside>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to={`/post/${nextPost.id}`}>{nextPost.title}</Link>
        </p>
        <p>Current location: {location.pathname}</p>
        <p>{nextPost.side}</p>
      </aside>
    </div>
  );
};

const data = [
  {
    id: "1",
    title: "My First Post",
    body: "My First Post Body",
    side: "My First Post Side",
  },
  {
    id: "2",
    title: "My Second Post",
    body: "My Second Post Body",
    side: "My Second Post Side",
  },
  {
    id: "3",
    title: "My Other Post",
    body: "My Other Post Body",
    side: "My Other Post Side",
  },
];

export default App;
