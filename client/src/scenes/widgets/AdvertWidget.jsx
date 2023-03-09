import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>PizzaHut</Typography>
        <Typography color={medium}>www.pizzahut.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Order Pizza Hut delivery now! ✓ Check Pizza Hut menu and prices ✓ Order
        online, get you food delivered to your home or office ✓ Fast order &
        easy payment.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
