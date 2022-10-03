import Clock from "./Clock"
import styled from "styled-components"
export default function Header() {

  return (
    <HeaderWrap>
      <Clock />
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  display:flex;
  justify-content: center;
`;
