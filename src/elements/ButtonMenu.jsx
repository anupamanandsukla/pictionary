import { Menu, MenuItem } from "@mui/material";
import * as React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Button from "./Button";
export default function FilterDate(props) {

    const getDefaultOptions = (popupState) => {
        return props?.options.map(i => <MenuItem
            onClick={(e) => {
                props?.onClick(i?.code)
                popupState.close(e)
            }}
        >{i.name}</MenuItem>)
    }
    return (

        <>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <>
                        <Button
                            title="filter"
                            size="small"
                            variant="text"
                            {...bindTrigger(popupState)}
                        >
                            {props?.children}
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            {props?.options ?
                                getDefaultOptions(popupState)
                                : <MenuItem onClick=
                                    {popupState.close}>No option available</MenuItem>}

                        </Menu>
                    </>
                )}
            </PopupState>
        </>
    );
}
