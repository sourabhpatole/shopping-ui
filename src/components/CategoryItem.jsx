import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobil } from "../responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 72vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobil({ height: "25vh" })}
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  margin: 3px;
  border: none;
  padding: 10px;
  color: grey;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
