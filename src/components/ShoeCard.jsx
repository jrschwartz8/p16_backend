import { Card, Button, ButtonGroup } from "react-bootstrap";

function ShoeCard(props) {
  let url = props.url;
  let shoeName = props.name;
  let color = props.color;
  let brand = props.brand;
  return (
    <Card>
      <Card.Img variant="top" src={url}/>
      <Card.Body>
        <Card.Title>{shoeName}</Card.Title>
        <Card.Text>{`Color: ${color}`}</Card.Text>
        <Card.Text>{`Brand: ${brand}`}</Card.Text>

        <ButtonGroup className="mt-3">
          {/* This is so they can view a shoe in greater detail. such as select sizes*/}
          <Button variant="primary">View</Button>
          
          {/* Add to cart right away */}
          <Button variant="secondary">Add To Cart</Button>
        </ButtonGroup>
      </Card.Body>
      
    </Card>
  )
}

export default ShoeCard;