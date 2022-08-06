// ** MUI Imports
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made by `}
        SkaleDevs
      </Typography>
      {hidden ? null : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            "& :not(:last-child)": { mr: 4 },
          }}
        >
          <Link
            target="_blank"
            href="https://github.com/SkaleDevs/Seeker-Web-App-v1.0.git"
          >
            MIT License
          </Link>
          <Link target="_blank" href="mailto:sudhanshuvshekhar@gmail.com">
            Contact
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default FooterContent;
