import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 2, sm: "17px" }}
        bgcolor="#f5f5f5"
        color="#585858"
        display="flex"
        justifyContent={"space-between"}
      >
        <p>&copy; {currentYear} SYMPTOM CHECKER INC </p>
        <Link href="/" color="inherit">
          Terms and Conditions
        </Link>
        <Link href="/" color="inherit">
          Security
        </Link>
        <Link href="/" color="inherit">
          Privacy Policy
        </Link>
        <Link href="/" color="inherit">
          Contact
        </Link>
      </Box>
    </footer>
  );
}
export default Footer;
