import React, { useContext } from "react";
import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  PersonOutline,
  SettingsOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
const Topbar = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        {/* Search Box */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search">
            <IconButton type="button" sx={{ p: 2 }}>
              <Search />
            </IconButton>
          </InputBase>
        </Box>
        <Box display="flex" justifyContent="center">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />{" "}
          </IconButton>
          <IconButton>
            <PersonOutline />
          </IconButton>
        </Box>{" "}
      </Box>
    </>
  );
};

export default Topbar;
