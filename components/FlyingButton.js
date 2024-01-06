import styled from "styled-components";
import { ButtonStyle } from "./Button";
import { primary } from "@/lib/colors";
import FlyingButtonOriginal from "react-flying-item";
import { useContext } from "react";
import { CartContext } from "@/lib/CartContext";

const FlyingButtonWrapper = styled.div`
  button {
    ${ButtonStyle}
    ${(props) =>
      props.main
        ? `
        background-color: ${primary};
        color: white;
        `
        : `
        background-color: transparent;
        border: 1px solid ${primary};
        color: ${primary};
    `}
    ${(props) =>
      props.white &&
      `
      background-color: white;
      border: 1px solid white;
      color: #222;
    `}
  }
`;
export default function FlyingButton(props) {
  const { addProduct } = useContext(CartContext);
  return (
    <FlyingButtonWrapper
      white={props.white}
      main={props.main}
      onClick={() => addProduct(props._id)}
    >
      <FlyingButtonOriginal
        {...props}
        targetTop={"5%"}
        targetLeft={"85%"}
        flyingItemStyling={{
          width: "auto",
          height: "auto",
          maxwidth: "60px",
          maxHeight: "60px",
          borderRadius: 0,
        }}
      />
    </FlyingButtonWrapper>
  );
}
