import * as React from "react";
import { Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Divider, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

import Text from "./Text";

// const options = [
//   "Create a merge commit",
//   "Squash and merge",
//   "Rebase and merge",
// ];

export default function SplitButton({ title, options, onMenuClick }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex] = React.useState(1);

  const handleClick = () => {
    onMenuClick(selectedIndex);
  };

  // const handleMenuItemClick = (event, index) => {
  //   setSelectedIndex(index);
  //   setOpen(false);
  //   onMenuClick(index);
  // };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        size="small"
        aria-label="split button">
        <Button
          startIcon={<PersonAddAltIcon fontSize="14px" />}
          sx={{ textTransform: "none" }}
          onClick={handleClick}>
          {title}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options?.map((option, index) => (
                    <React.Fragment>
                      <Box display="flex" alignItems="center">
                        <MenuItem
                          key={option.text}
                          // selected={index === selectedIndex}
                          onClick={
                            option.isFileUpload
                              ? null
                              : () => option.onClick(option)
                          }>
                          <img
                            style={{ marginRight: "8px" }}
                            src={option.Icon}
                            alt="option-icon"
                          />
                          {option?.isFileUpload ? (
                            <React.Fragment>
                              <label htmlFor={`contained-button-file`}>
                                <input
                                  style={{ display: "none" }}
                                  id={`contained-button-file`}
                                  type="file"
                                  onChange={(e) => option.onClick(e)}
                                />
                                <Text fontSize="14px">{option.label}</Text>
                              </label>
                            </React.Fragment>
                          ) : (
                            <Text fontSize="14px">{option.label}</Text>
                          )}
                        </MenuItem>
                      </Box>
                      {options.length - 1 !== index && <Divider />}
                    </React.Fragment>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
