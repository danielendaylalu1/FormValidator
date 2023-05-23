import Form from "./components/Form";
import Header from "./components/Header";
import classes from "./app.module.css"

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
