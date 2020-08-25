import React, { ReactNode } from "react";
import { Box } from "grommet";

interface Props {
  children: ReactNode;
}
export const Header = (props: Props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);
