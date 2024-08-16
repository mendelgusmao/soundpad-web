import React, { Fragment } from "react";

const style = {
    display: "inline-block",
    marginLeft: "5px",
    marginRight: "5px",
    marginBottom: "-2px",
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: "0.5px",
    borderColor: "white",
    height: "10px",
    width: "10px",
    position: 'absolute',
    left: '3px', // Ajuste conforme necessário para afastar o ponto da margem esquerda
    bottom: '0.75em',
    // top: '50%',
    // transform: 'translateY(-50%)', // Centraliza verticalmente o StatusDot
}

type Props = {
    enabled: boolean;
    color: string;
}

const StatusDot = (props: Props) => {
    const styles = {
        ...style,
        backgroundColor: props.color,
        zIndex: -1,
    };
  
    return props.enabled ? (
      <Fragment>
        <span style={styles} />
      </Fragment>
    ) : null;
  };
  
  export default StatusDot;