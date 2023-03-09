import { useState } from "react";
import Header from "./components/Header";
import Search from "./pages/Search";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="">
      <Header search={search} setSearch={setSearch} />
      <Search search={search} />
    </div>
  );
}

export default App;
