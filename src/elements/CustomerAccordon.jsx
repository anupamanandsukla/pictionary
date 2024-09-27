import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Text from "./Text";
import { WarningAmberSvg } from "../utils/svg";

const CustomerAccordon = (props) => {
  const {
    title,
    subTitle,
    isExpired,
    children,
    icon,
    width,
    mandatory = false,
    defaultExpanded,
    liveicon,
    expanded: expandedparent
  } = props;
  const [expanded, setexpanded] = useState(!defaultExpanded)

  useEffect(() => {
    if (expandedparent !== undefined) setexpanded(prev => !expandedparent)
  }, [expandedparent])


  return (
    <Box my={"12px"} width={width ? width : "100%"}>
      <Accordion
        expanded={expanded}
        onChange={() => setexpanded(!expanded)}
        sx={{
          width: width || "inherit",
          "& .MuiAccordionSummary-root.Mui-expanded": {
            minHeight: "48px",
          },
          "& .MuiAccordionSummary-content.Mui-expanded": {
            margin: "14px",
          },
        }}
        style={{
          borderRadius: "8px",
          border: "0 !important",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          sx={{
            background: "var(--primarya)",
            border: "1px solid #F4F4F4",
            borderRadius: "8px",
          }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Text mr={"8px"} mandatory={mandatory} fontSize="16px" semiBold>
            {title}
          </Text>
          {(liveicon || liveicon === 0) && <WiMoonFull fill={liveicon == 1 ? '#17972C' : 'red'} />}
          {icon && (
            <WarningAmberSvg className="text-orange-500"
            />
          )}

          {subTitle?.remainingDays && <Box ml="auto"
            display={'flex'}
            gap={'4px'}>
            <Text ml={"auto"} fontSize="12px">
              Valid Till:
            </Text>
            <Text fontSize="12px" color={subTitle?.isExpired ? 'red' : '#17972C'}>{subTitle?.remainingDays}</Text>
          </Box>
          }
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CustomerAccordon;

export function WiMoonFull(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} width="1.2em" height="1.2em" viewBox="0 0 30 30" ><path d="M3.74 14.44c0 2.04.5 3.93 1.51 5.65s2.37 3.1 4.1 4.1S12.96 25.7 15 25.7s3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1s1.51-3.61 1.51-5.65s-.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09S17.04 3.19 15 3.19s-3.92.51-5.65 1.51s-3.1 2.37-4.1 4.09s-1.51 3.61-1.51 5.65"></path></svg>
  )
}



