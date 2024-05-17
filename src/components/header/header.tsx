import { Box, Container } from "@/components";
import { StyledHeader } from "./style";

export const Header = () => {
     return (
          <StyledHeader>
               <Box as={Container}>Header</Box>
          </StyledHeader>
     );
};
