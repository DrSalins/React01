import "./App.css";
import NAMES from "./components/data.json";
// import { PostForm } from "./components/PostForm";
// import { PostList } from "./components/PostList";
// import { Form } from "./components/Form";
// import "./appStyles.css";
// import styles from "./appStyle.module.css";
// import { StyleSheet } from "./components/StyleSheet";
// import { Inline } from "./components/inline";
// import { Greet } from "./components/Greet";
// import { Message } from "./components/Message";
// import { Clicker } from "./components/ClickHandler";
// import { ParentComponent } from "./components/ParentComponent";
// import { UserGreeting } from "./components/UserGreeting";
// import { NameList } from "./components/NameList";
import { useState, useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };
  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list...</p>}
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
}

export default App;
{
  /* <Greet name="Bruce" heroName="Batman" />
<Greet name="Clark" heroName="Superman">
  <button>Click Here!</button>
</Greet>
<Greet name="Diana" heroName="WonderWoman">
  <p>This is children props</p>
</Greet> */
}
{
  /* <Message /> */
}
{
  /* <Clicker/> */
}
{
  /* <ParentComponent /> */
}
{
  /* <UserGreeting /> */
}
{
  /* <NameList/> */
}
{
  /* <StyleSheet /> */
}
{
  /* <Inline /> */
}
{
  /* <h1 className="error">Error</h1>
<h1 className={styles.success}>Success</h1> */
}
{
  /* <Form /> */
}
{
  /* <PostForm />
<PostList /> */
}
