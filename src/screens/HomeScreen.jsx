import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import { useEffect } from "react";
import { getAllPizzas } from "../actions/pizzaAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate=useSelector(state => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        { loading ? (<h1>Loading...</h1>)
        : error ? (<h1>Error while fetching data...</h1>)
        : (
          <Row>
          {pizzas.map((pizza) => (
            <Col md={4}>
              <Pizza pizza={pizza} />
            </Col>
          ))}
        </Row>
        )  
      }
        
      </Container>
    </>
  );
};

export default HomeScreen;
