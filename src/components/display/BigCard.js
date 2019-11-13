/// external modules ///
import React from "react";

/// internal modules ///
import Card         from "./Card";
import CardImage    from "./CardImage";
import CardBody     from "./CardBody";
import CardTitle    from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import CardText     from "./CardText";

/***************************************
  COMPONENTS
***************************************/
export function BigCard (props) {
  return (
    <Card subtype="big-card">
      <CardImage
        url={props.image.url}
        title={props.image.title}
      />
      <CardBody>
        <CardTitle>{props.body.title}</CardTitle>
        <CardSubtitle>{props.body.subtitle}</CardSubtitle>
        <CardText>{props.body.text}</CardText>
      </CardBody>
    </Card>
  );
}

/**************************************/
export default BigCard;
