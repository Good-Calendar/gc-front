import Nav from "./components/Navigation/Nav";
import useCategory, { CategoryContext } from "./components/useCategory";
// import { injectGlobal } from "styled-components";

function App() {
  // const [category, handlerCategory] = useCategory();
  // const categoryProps = { category, handlerCategory };

  const [selectedCategory, handlerCategory] = useCategory();
  const categoryProps = { selectedCategory, handlerCategory };
  const CategoryProvider = CategoryContext.Provider;
  return (
    <  >
      <CategoryProvider value={categoryProps}>
        <Nav />
      </CategoryProvider>
    </ >
  );
}

export default App;
