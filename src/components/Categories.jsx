import styled from "styled-components";
import { categories } from "../data";
import { mobil } from "../responsive";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  display: flex;
  ${mobil({ padding: "0px", flexDirection: "column" })}
  padding: 20px;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
