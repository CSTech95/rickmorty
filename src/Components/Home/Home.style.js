import React from "react";
import styled from "styled-components";

import { colors } from "../Colors";

const { grey } = colors;

export const Div = styled.div`
  height: 100%;
  background: ${grey};
  position: relative;

  div.footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }

  div.header {
    position: absolute;
    top: 0px;
    width: 100%;
  }
`;
