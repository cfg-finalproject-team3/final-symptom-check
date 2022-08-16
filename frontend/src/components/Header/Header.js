import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link, Navigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuthState } from "../../context/AuthProvider";

const Header = (props) => {
  const { auth, setAuth } = useAuthState();
  const drawerWidth = 240;

  const navItems = auth?.authenticated
    ? [
        {
          name: "Logout",
          route: "/",
        },
      ]
    : [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Contact", route: "/contact" },
        { name: "Login", route: "/login" },
        { name: "Register", route: "/register" },
      ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Symptom Checker
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          //dynamic routing, using the array properties as the route, either
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => {
             if ( item.name === "Logout") {
              setAuth({ authenticated: false })
             }

            }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none", bgcolor: "#000" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            sx={{
              height: 50,
              display: { xs: "none", sm: "block" },
            }}
            alt="Symptom Checker"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1660085845/symptom%20checker/4__1_-removebg-preview_1_ipkmfc.png"
          />
          <Box
            component="div"
            sx={{
              height: 64,
              flexGrow: 1,
            }}
          />

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.route} style={{ textDecoration: "none" }}>
                <Button
                  key={item.name}
                  sx={{
                    color: "#2B6DDF",
                    fontWeight: "bold",
                    ...(item.name === "Register"
                      ? {
                          borderRadius: 10,
                          bgcolor: "#2368AD",
                          color: "#ffffff",
                        }
                      : {}),
                  }}
                  onClick={() => {
                    if ( item.name === "Logout") {
                      setAuth({ authenticated: false })
                     }
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
