import React from "react";
import { Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./Data";
import { useTheme } from "@mui/material/styles";
import Card from "./Card";

function Row1() {
    const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", md: "space-between" }}
    >
      <Card
        title={"12,361"}
        icon={<EmailIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        subTitle={"Emails Sent"}
        data={data1}
        scheme={"nivo"}
        percentage={"+14%"}
      />
      <Card
        title={"431,225"}
        icon={<PointOfSaleIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        subTitle={"Sales obtained"}
        data={data2}
        scheme={"category10"}
        percentage={"+21%"}
      />
      <Card
        title={"32,441"}
        icon={<PersonAddIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        subTitle={"New Clients"}
        data={data3}
        scheme={"accent"}
        percentage={"+5%"}
      />
      <Card
        title={"1,325,134"}
        icon={<TrafficIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        subTitle={"Traffic Received"}
        data={data4}
        scheme={"dark2"}
        percentage={"+43%"}
      />
    </Stack>
  );
}

export default Row1;
