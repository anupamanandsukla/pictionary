import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "@mui/material";
import * as React from "react";
import Text from "./Text";
import Button from "./Button";


export default function ButtonDropdown(props) {
  const { options, variant, groupTitle, onChange, value } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedText, setSelectedText] = React.useState();

  React.useEffect(() => {
    let name = options.find((option) => option.code === value)
    setSelectedText(prev => name);
  }, [value, options])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (option) => {
    if (option) setSelectedText(option);
    handleClose();
    onChange(option?.code)
  };

  return (
    <div>
      <Button
        title={props.title}
        onClick={handleClick}
        variant={"outline"}
        className={`max-w-max h-8 text-xs flex justify-between items-center`}
      >
        {props.children ? props.children : <>
          {selectedText?.Icon} {selectedText?.name} <KeyboardArrowDownIcon fontSize="small" />
        </>}
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{
          style: {
            padding: "4px",
            maxHeight: "250px",
          },
        }}>
        {groupTitle && (
          <div className="pt-1 mb-2 pl-3">
            <Text fontSize="10px">{groupTitle}</Text>
          </div>
        )}

        {options?.map((option) => {
          return (
            <div
              key={option?.code}
              className={`p-0 my-0.5 rounded text-sm hover:bg-gray-200 hover:dark:bg-opacity-50 cursor-pointer text-left ${option.name === selectedText?.name ? 'bg-gray-300' : ''}`}
              onClick={() => handleChange(option)}>
              <div className="py-1 px-2 flex items-center gap-4">
                {option?.Icon}
                <Text className='text-xs'
                >{option.name}</Text>
              </div>
            </div>
          );
        })}
      </Menu>
    </div>
  );
}
