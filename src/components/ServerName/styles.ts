import styled from "styled-components";
import { ExpandMore } from "@styled-icons/material/ExpandMore";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--secondary);
  justify-content: space-between;
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;
export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;
`;
