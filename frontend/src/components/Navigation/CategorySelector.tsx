import { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext, DATE_CATEGORY } from '../useCategory';

const Btn = styled.button < { selected: boolean } > `
    width: 5rem;
    border-radius: 8px;
    color: ${props => props.selected ? "white" : "black"};
    background-color: ${props => props.selected ? "red" : "white"};
`;

const CategorySelector = () => {
    const { selectedCategory, handlerCategory } = useContext(CategoryContext);
    return (
        <>
            {DATE_CATEGORY.map(category =>
                <Btn
                    key={category}
                    value={category}
                    selected={selectedCategory === category}
                    onClick={e => handlerCategory(e)}
                >{category}</Btn>
            )}
        </>
    );
};

export default CategorySelector;