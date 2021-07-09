import { createContext, useState } from "react";
import moment from "moment";

export const DATE_CATEGORY = ["DAY", "WEEK", "MONTH", "YEAR"];

export const CategoryContext = createContext<CategoryProps>({
  selectedCategory: "",
  handlerCategory: (): void => {},
  today: moment(),
  setToday: () => {},
  now: moment(),
  setNow: () => {},
  criteria: moment().startOf("month"),
  setCriteria: () => {}
});

type CategoryProps = {
  selectedCategory: string;
  handlerCategory: Function;
  today: moment.Moment;
  setToday: Function;
  now: moment.Moment;
  setNow: Function;
  criteria: moment.Moment;
  setCriteria: Function;
};

const useCategory = (): [string, Function] => {
  const [selectedCategory, setSelectedCategory] = useState("MONTH");
  const handlerCategory = (e: Event): void => {
    setSelectedCategory((e.target as HTMLInputElement).value);
  };

  return [selectedCategory, handlerCategory];
};

export default useCategory;
