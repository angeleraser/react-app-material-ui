import { CssBaseline } from "@material-ui/core";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const { AppBarMUI } = require("./components/AppBar/AppBar");
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBarMUI />
      <Posts />
      <Form />
    </div>
  );
}

export default App;
