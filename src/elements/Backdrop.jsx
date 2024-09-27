import * as React from "react";
import { Backdrop } from "@mui/material";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { SvgSpinners90Ring } from "../utils/svg";

export default ({ loading }) => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!!isFetching || !!loading || !!isMutating}
      onClick={null}
    >
      <SvgSpinners90Ring className="w-8 h-8" />
    </Backdrop>
  );
};
