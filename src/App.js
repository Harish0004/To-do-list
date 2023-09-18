import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import { useState, useEffect } from "react";
import "./Content.css";
import Additems from "./Additems.js";
import Searchitem from "./Searchitem.js";
import apiRequest from "./apiRequest.js";

function App() {
  const [newItems, SetnewItems] = useState("");
  const [items, setItems] = useState([]);

  const API_URL = "http://localhost:3500/items";

  // const [addnewitems, setnewitems] = useState("");

  const [search, setsearch] = useState("");

  const [fetcherror, setfetcherror] = useState(null);

  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const fetchitems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error("data not received");
        }
        let newList = await response.json();
        setItems(newList);
        console.log(items);
        setfetcherror(null);
      } catch (err) {
        setfetcherror(err.message);
      } finally {
        setisloading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchitems())();
    }, 500);
  }, []);

  const handlenewitems = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addlist = { id, checked: false, item };
    const newList = [...items, addlist];
    setItems(newList);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addlist),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setfetcherror(result);
  };

  const handlecheck = async (id) => {
    const newList = items.map((item) =>
      item.id === id
        ? { checked: !item.checked, item: item.item, id: item.id }
        : item
    );

    setItems(newList);

    const myItem = newList.filter((item) => item.id === id);

    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const requrl = `${API_URL}/${id}`;
    const result = await apiRequest(requrl, updateOption);
    if (result) setfetcherror(result);
  };

  const handledelete = async (id) => {
    const newList = items.filter((item) => item.id !== id);
    store(newList); // app is the parent. we are passing the functions and items to the content.
    // then content to the list_items
    setItems(newList);

    const deleteOption = {
      method: "DELETE",
    };
    const requrl = `${API_URL}/${id}`;
    const result = await apiRequest(requrl, deleteOption);
    if (result) setfetcherror(result);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    handlenewitems(newItems);
    SetnewItems("");
  };

  function store(newList) {
    setItems(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  }
  return (
    <div className="App">
      <Header title="proharish" />
      <Additems
        newItems={newItems}
        handlesubmit={handlesubmit}
        SetnewItems={SetnewItems}
      />
      <Searchitem search={search} setsearch={setsearch} />

      <main>
        {isloading && <p>Loading Items...</p>}
        {fetcherror && <p>{`Error: ${fetcherror}`}</p>}
        {!isloading && !fetcherror && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handlecheck={handlecheck}
            handledelete={handledelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
