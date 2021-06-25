import { createContext, useState } from "react";

export const DATE_CATEGORY = ["DAY", "WEEK", "MONTH", "YEAR"];

export const CategoryContext = createContext<CategoryProps>({ selectedCategory: '', handlerCategory: (): void => { } });
type CategoryProps = {
    selectedCategory: string;
    handlerCategory: Function;
}

const useCategory = (): [string, Function] => {
    const [selectedCategory, setSelectedCategory] = useState("MONTH");
    const handlerCategory = (e: Event): void => {
        setSelectedCategory((e.target as HTMLInputElement).value);
    }
    return [selectedCategory, handlerCategory];
};
export default useCategory;
