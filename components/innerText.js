import React from "react";

function InnerTexts(props) {
  if (props.dirtyHtml) {
    let dirty = props.dirtyHtml;
    let clean = dirty.replace(/<[^>]*>?/gm, " ");
    if (clean.length > 250) {
      let tiny = clean.substring(0, 250) + "...";
      return <>{tiny}</>;
    } else return <>{clean}</>; 
  } else {
    return <> Esittely Teksti Puttuu </>;
  }
}

export default InnerTexts;
