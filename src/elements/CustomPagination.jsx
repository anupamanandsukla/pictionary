import * as React from "react";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridToolbarColumnsButton
} from "@mui/x-data-grid";

import { Pagination, TablePagination } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useGlobalContext } from "../context/GlobalContext";
import Button from "./Button";

function CustomToolbar() {
  return (<GridToolbarColumnsButton
    variant="outlined"
    color="success"
    style={{
      margin: "12px"
    }}
  />);
}

export default function CustomPagination(props) {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const { dispatch } = useGlobalContext();
  React.useEffect(() => {
    if (Array.from(apiRef.current.getSelectedRows()).length > 0) {
      dispatch({
        type: "SET_ROW_SELECT",
        payload: {
          rowSelect: false,
        },
      });
    } else {
      dispatch({
        type: "SET_ROW_SELECT",
        payload: {
          rowSelect: true,
        },
      });
    }
  }, [Array.from(apiRef.current.getSelectedRows()).length > 0])
  let role = localStorage.getItem('roles') === 'SuperAdmin'
  return (
    <div className="flex justify-between items-center py-1 w-full">
      <div className="flex items-center">
        <Button
          variant="outline"
          className='my-0 mx-1 flex items-center gap-2'
          onClick={() => {
            apiRef.current.exportDataAsCsv();
          }}
          disabled={Array.from(apiRef.current.getSelectedRows()).length > 0 ? false : true}>
          <DownloadIcon fontSize="inherit" /> Export
        </Button>
        <CustomToolbar />
      </div>

      <TablePagination
        rowsPerPageOptions={props?.rowsPerPageOptions ? props?.rowsPerPageOptions : [5, 10, 25, 50, 100]}
        component="div"
        count={apiRef.current.state.pagination.rowCount}
        defaultPage={1}
        rowsPerPage={apiRef.current.state.pagination.pageSize}
        page={page}
        onPageChange={(event, value) => apiRef.current.setPage(value)}
        onRowsPerPageChange={(event, value) =>
          apiRef.current.setPageSize(value.props.value)
        }
        // labelRowsPerPage={"Listing per Page"}
        labelDisplayedRows={(props) => {
          return props.count ? `Showing ${props.from}-${props.to} of ${props.count}` : "";
        }}
        sx={{
          "& .MuiTablePagination-select": {
            outline: "1px solid #A6A6A6",
          },
          "& .MuiInputBase-input": {
            borderRadius: "4px",
          },
          "& .MuiTablePagination-actions":
          {
            display: "none",
          },
        }}
      />
      <Pagination
        count={pageCount}
        page={page + 1}
        variant="outlined"
        shape="rounded"
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        defaultPage={1}
        showFirstButton
        showLastButton
      />

    </div >
  );
}
