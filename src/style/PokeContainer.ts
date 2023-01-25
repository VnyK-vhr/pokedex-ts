import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PokeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 8),
  margin: theme.spacing("auto", 0),

  "img.poke_img": {
    width: "33%",
    boxShadow: theme.shadows[20],
    borderRadius: "50px",
    backgroundColor: "#ffffff30",
  },
  ".poke_info": {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    textTransform: "capitalize",
    ".title_box": {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: theme.spacing(1),
      borderBottom: "1px solid #fff",
    },
    ".poke_stats": {
      display: "flex",
      height: "100%",
      padding: theme.spacing(3, 0),
      ".other": {
        margin: theme.spacing("auto", 0),
        padding: theme.spacing(2),
      },
      ".stats": {
        width: "65%",
        marginLeft: "auto",
        padding: theme.spacing(2, 0, 2, 2),
        borderLeft: "5px solid #ffffff3f",
        ".MuiChip-root": {
          backgroundColor: "#ffffff8f",
        },
      },
    },
  },

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 4),
    ".poke_info": {
      width: "60%",
      marginLeft: theme.spacing(3),
    },
    "img.poke_img": {
      width: "40%",
    },
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(0, 2),

    "img.poke_img": {
      width: "50%",
      margin: "auto",
      marginTop: theme.spacing(2),
    },

    ".poke_info": {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(0),
      width: "100%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0),
    "img.poke_img": {
      width: "90%",
    },
    ".poke_info": {
      ".title_box": {
        ".MuiTypography-h1": {
          fontSize: "3rem",
        },
        ".MuiTypography-h2": {
          fontSize: "2rem",
        },
      },
      ".poke_stats": {
        padding: 0,
        flexDirection: "column",
        ".other": {
          padding: theme.spacing(0),
          display: "flex",
          justifyContent: "space-between",
        },
        ".stats": {
          width: "100%",
          marginTop: theme.spacing(1),
          padding: theme.spacing(0, 2),
          marginLeft: "none",
          ".MuiTypography-h3": {
            fontSize: "2rem",
          },
        },
      },
    },
  },
}));
