import { useState } from "react";
import Nav from "./components/Navigation/Nav";
// import { injectGlobal } from "styled-components";
import YearCalendar from "./components/calendar/year/YearCalendar";
import moment from "moment";
function App() {
  //   injectGlobal`
  // body {
  //   margin: 0;
  //   padding: 0;
  // }
  // `;

  const [category, setCategory] = useState({
    DAY: false,
    WEEK: false,
    MONTH: true,
    YEAR: false
  });

  const onChange = (e: any) => {
    setCategory({
      DAY: false,
      WEEK: false,
      MONTH: false,
      YEAR: false,
      [e.target.value]: true
    });
  };

  console.log("category : ", category);
  const [selectedDate, setDate] = useState(() => moment());

  return (
    <div>
      <Nav category={category} onChange={onChange} />
      <YearCalendar year={selectedDate.year()} />
    </div>
  );
}
export default App;
