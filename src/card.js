import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import NotesIcon from "@material-ui/icons/Notes";
import AddIcon from "@material-ui/icons/Add";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { Row, Container, Col } from "react-bootstrap";
import "./card.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
});

export default function ImgMediaCard({ title, classese, days, ima }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ borderRadius: "5px" }}
      style={{ margin: "2em" }}
    >
      <CardActionArea>
        <div class="image">
          <h6
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Facebook
            <span style={{ color: "red", fontWeight: "bold" }}>
              {" "}
              <AddIcon style={{ color: "red" }} /> Select
            </span>
          </h6>

          <h5 style={{ color: "white" }}>{title}</h5>
          <img style={{ height: "13.2em" }} src={ima} />
        </div>
        <p
          style={{
            backgroundImage: "linear-gradient(to right, #4880EC, green)",
            color: "white",
            display: "flex",
            padding: "10px",
          }}
        >
          <QueryBuilderIcon
            style={{ marginRight: "10px", marginLeft: "12px" }}
          />{" "}
          {days} days left to enroll
        </p>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            style={{ fontWeight: "bold", marginBottom: "40px" }}
          >
            {title}
          </Typography>
          <Container>
            <Row style={{ marginBottom: "10px" }}>
              <Col style={{ display: "flex", justifyContent: "space-between" }}>
                <Row>
                  <LiveTvIcon style={{ color: "red" }} />
                  {classese}
                </Row>
              </Col>
            </Row>
            <Row style={{ marginBottom: "30px" }}>
              <Col style={{ display: "flex", justifyContent: "space-between" }}>
                <Row>
                  <QuestionAnswerIcon style={{ color: "orange" }} />
                  9000+ questions
                </Row>
                <Row style={{ marginRight: "10px" }}>
                  <NotesIcon style={{ color: "red" }} />
                  120+ notes
                </Row>
              </Col>
            </Row>
          </Container>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
