import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { ImMobile } from 'react-icons/im';
import { GiRotaryPhone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h2>Pizza App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non
              iste ab debitis inventore aliquam saepe reiciendis quasi in
              accusamus, aperiam hic nihil voluptates incidunt numquam, mollitia
              dolorem est, enim praesentium quo. Voluptatem expedita sunt ipsum
              veritatis quos culpa libero reiciendis tempore minus laboriosam
              dignissimos, fuga provident ea illum consequatur nemo accusamus
              molestias unde quae deleniti earum voluptatibus iure suscipit.
              Quis est officia dolor eaque quos at, aut ad totam id, molestiae
              omnis aliquam corporis optio reprehenderit explicabo
              exercitationem ipsam cupiditate veritatis expedita. Facilis
              accusantium corporis, magni ad ullam explicabo error nulla minima
              culpa qui, amet iste aspernatur fugit eaque, quasi beatae esse
              dolorum delectus necessitatibus similique vel doloribus
              voluptatibus? Soluta odit, culpa, aliquid rerum amet architecto
              quis consequuntur tenetur perferendis pariatur voluptatum, cumque
              quaerat quibusdam a eius quo repudiandae reprehenderit nihil illo
              consequatur veritatis minima quia! Ipsum error laudantium facere
              veniam alias deleniti cupiditate pariatur tenetur rerum eius
              nesciunt dolorem, et voluptatem laboriosam quibusdam aliquid
              dolore beatae placeat accusantium sunt quod non reiciendis
              incidunt. Voluptates quam, ipsum totam repellat quae eaque
              architecto praesentium quasi earum impedit amet sequi libero
              dolorum suscipit optio cumque adipisci numquam eveniet repudiandae
              placeat et quaerat in cupiditate. Nihil, quibusdam iste dolore
              temporibus numquam ea!
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={6}>Contact Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><ImMobile/></td>
                  <td>Call</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <td><GiRotaryPhone/></td>
                  <td>Phone</td>
                  <td>0141-3355335</td>
                </tr>
                <tr>
                  <td><MdEmail/></td>
                  <td>Email</td>
                  <td>pizzaapp@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src="images/farmhouse.jpg" style={{width:'100%' , height:'70%'}}  />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
