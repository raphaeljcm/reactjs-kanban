import styled from "styled-components";

interface DivProps {
  done?: boolean;
}

export const Container = styled.div<DivProps>`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? .6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, .05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background-color: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;