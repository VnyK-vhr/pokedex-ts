import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const SearchBar = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "100%",
  backgroundColor: alpha(theme.palette.background.default, 0.3),
  borderRadius: theme.shape.borderRadius,
  marginLeft: theme.spacing(2.5),

  ".MuiInputBase-input": {
    padding: theme.spacing(1, 0),
    width: "100%",
  },

  ".MuiSvgIcon-root": {
    margin: theme.spacing("auto", 1),
  },

  [theme.breakpoints.up("sm")]: {
    width: "35ch",
    flexGrow: 0,
    marginLeft: "auto",
  },
}));
