import { Box } from "@mui/material";
const Text = (props) => {
  const { children, ...rest } = props;

  return <Box
    className="text-wrap m-0 text-sm"
    {...rest}
    sx={{
      '&after': props?.mandatory ? {
        content: "*",
        color: "red",
        fontWeight: "bold",
        marginLeft: "4px",
      } : {},
    }}
  >{props?.mandatory ? <span className="text-red-500 font-medium ml">*</span> : ''}{children}</Box>;
};

export default Text;
