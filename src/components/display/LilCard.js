/// external modules ///
import React from "react";

/// internal modules ///
import Card         from "./Card";
import CardImage    from "./CardImage";
import CardBody     from "./CardBody";
import CardTitle    from "./CardTitle";
import CardSubtitle from "./CardSubtitle";

/***************************************
  COMPONENTS
***************************************/
export function LilCard (props) {
  return (
    <Card subtype="lil-card">
      <CardImage
        url={props.image.url}
        url={props.image.title}
      />
      <CardBody>
        <CardTitle>{props.body.title}</CardTitle>
        <CardSubtitle>{props.body.subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
}

/**************************************/
export default LilCard;
