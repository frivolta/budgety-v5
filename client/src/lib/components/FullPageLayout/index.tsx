import React from "react";
import { FullPageContainer, FullPage } from "./styled";

interface Props {
  children: React.ReactNode;
}

export const FullPageLayout: React.FC<Props> = ({ children }) => {
  return (
    <FullPageContainer role="main">
      <FullPage>{children}</FullPage>
    </FullPageContainer>
  );
};
