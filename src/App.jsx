import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import GreetList from './components/GreetList';
import Header from './components/Header';
import withNav from './hocs/withNav';
import Greet from './models/Greet';

const AppHeader = withNav(Header);
const MemoList = memo(GreetList);

function App() {
  const [count, setCount] = useState(0);
  const [greet, setGreet] = useState(new Greet());
  const [linkRef, setLinkRef] = useState(null);
  const [greetList, setGreetList] = useState([]);

  const updateCount = useCallback(
    () => setCount((count) => count + 1),
    [count]
  );
  const updateGreet = useCallback(
    ({ target: { value } }) =>
      setGreet({
        ...greet,
        words: value,
      }),
    // Be carefull to manage dependecies on useCallback or useMemo
    // [greetList, greet]
    [greet]
  );
  // Use useCallback instead see on line 70
  const submitGreet = useCallback(() => {
    if (greet.words.length === 0) return alert('Must have greet!');
    // Dont forget add unique data for key field
    // setGreetList([...greetList, greet]);
    setGreetList([...greetList, { ...greet, created: new Date().getTime() }]);
  }, [greetList, greet]);

  useEffect(() => {
    // Updating
    if (linkRef !== null) {
      setGreet({
        ...greet,
        title: linkRef.children[0].getAttribute('alt'),
        url: linkRef.getAttribute('href'),
      });
    }
  }, [greet.words]);

  const multiCount = useMemo(() => {
    console.log('Multi count compute');
    return count * 2;
  }, [count]);

  return (
    <div className="App">
      <AppHeader
        greet={greet.words}
        setLinkRef={setLinkRef}
        render={() => <h3>Welcome</h3>}
      >
        <p>Have a nice day</p>
      </AppHeader>
      <h1>{greet.words}</h1>
      <button onClick={updateCount}>count is {count}</button>
      {multiCount}
      <br />
      <input type="text" value={greet.words} onChange={updateGreet} />
      <br />
      {/* Dont forget memorize with useCallback */}
      {/* <button
        onClick={() => {
          if (greet.words.length === 0) return alert('Must have greet!');
          setGreetList([...greetList, greet]);
        }}
      > */}
      <button onClick={submitGreet}>Submit</button>
      <MemoList data={greetList} />
    </div>
  );
}

export default App;
