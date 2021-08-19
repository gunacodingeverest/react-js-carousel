import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Carousel, Image, Row, Button, Container } from "react-bootstrap";
import ImgMediaCard from "./card.js";

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) setIndex(2);
  };
  const onNextClick = () => {
    if (index === 2) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Row
          style={{ display: "flex", alignItems: "center", marginLeft: "1.1em" }}
        >
          <img
            src="https://www.logolynx.com/images/logolynx/c3/c312c7c6db1879a35d54f56363fdcbe9.png"
            style={{ height: "40px", marginBottom: "3px" }}
          />
          <h4 style={{ marginLeft: "13px" }}>UpComing Live Coaching</h4>
        </Row>
        <Row style={{ marginRight: "1px", marginRight: "2.8em" }}>
          <Button
            onClick={onPrevClick}
            style={{ backgroundColor: "grey", border: "0px" }}
          >
            <ArrowBackIosIcon />
          </Button>
          <Button
            onClick={onNextClick}
            style={{
              backgroundColor: "grey",
              border: "0px",
              marginLeft: "2em",
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Row>
      </Row>
      <Row>
        <Carousel
          style={{ marginTop: "2em" }}
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
        >
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ImgMediaCard
                title="Ibps PO & SBhing  Batch"
                classese="240+ live classes"
                days="4"
                color="green"
                ima="https://st.depositphotos.com/1003697/1677/i/950/depositphotos_16771243-stock-photo-soccer-players-team.jpg"
              />
              <ImgMediaCard
                title="Civil Junineer Batch2"
                classese="210+ live classes"
                days="5"
                ima="https://i.pinimg.com/originals/bc/12/39/bc1239d4268e05b9608dac8e71685860.jpg"
              />
              <ImgMediaCard
                title="UPSC CDS -2 2021g Batch3"
                classese="110+ live classes"
                days="3"
                ima="https://media.istockphoto.com/photos/american-football-teams-head-to-head-picture-id536674214?k=6&m=536674214&s=612x612&w=0&h=H8H0HOjfZigkF_g3aQmVew6JkhrV880OuQWbA5D9uDw="
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ImgMediaCard
                title="Ibps PO & SBI Paching  Batch4"
                classese="200+ live classes"
                days="2"
                ima="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzt_UpzYlnqFTRNg7ahi5Z0ZaDu71XLFmsw&usqp=CAU"
              />
              <ImgMediaCard
                title="Civil Junior Eng Batch5"
                classese="140+ live classes"
                days="5"
                ima="https://assets.khelnow.com/news/uploads/2021/05/Lead-Pic_7-May_2-1.jpg"
              />
              <ImgMediaCard
                title="UPSC CDS -2 2 Batch6"
                classese="210+ live classes"
                days="1"
                ima="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/3/28/w900X450/Igor_Stimac_AP.jpg?w=400&dpr=2.6"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ImgMediaCard
                title="Ibps PO & SB  Batch7"
                classese="940+ live classes"
                days="5"
                ima="https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-06/13/full/1623596554-1973.jpg&width=1200"
              />
              <ImgMediaCard
                title="Civil Junior Engineer Batch8"
                classese="140+ live classes"
                days="5"
                color="#3f51b5"
                ima="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4ncmaG-1bRNOsmKWiWWW4F5bwMsNzgDcxQ&usqp=CAU"
              />
              <ImgMediaCard
                title="UPSC CDS -2 2021 L Batch9"
                classese="290+ live classes"
                days="4"
                ima="https://cdn.mbl.is/frimg/1/5/26/1052609.jpg"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default App;
