import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutline,
  CalendarToday,
  HelpOutline,
  BarChartOutlined,
  PieChartOutline,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { tokens } from "../../theme";
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          background: `transparent !important`,
        },
        "& .pro-sidebar-item": {
          padding: `5px 35px 5px 28px !important`,
        },
        "& .pro-sidebar-item:hover": {
          padding: `#868dfb !important`,
        },
        "& .pro-menu-item-active": {
          color: `6870fa !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* User */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {" "}
                <img
                  alt="profile-user"
                  src="../../../public/assets/logo.jpg"
                  height="100px"
                  width="100px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                {" "}
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="500"
                  sx={{ m: "10px 0px 0px 0px" }}
                >
                  PersonName
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* MenuItems */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}></Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
