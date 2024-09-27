import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import CustomPagination from "./CustomPagination";
import { Tooltip } from "@mui/material";
import { useTheme } from "./theme-provider";

export default function DataTable(props) {
  const {
    columns,
    rows,
    processRowUpdate,
    handleProcessRowUpdateError,
    loading,
    page = 0,
    pageSize = 10,
    onPageSize,
    onPage,
    onSelectionModelChange,
    totalCount,
    isNoCheckBox,
    hideFooter = false,
    selectionModel = undefined,
  } = props;

  const CustomNoRowsOverlay = () => {
    return (
      <div className="h-full w-full flex justify-center items-center">
        {loading ? "Fetching data..." : "There are no records to display"}
      </div>
    );
  };
  const { theme } = useTheme()

  return (
    <DataGrid
      hideFooter={hideFooter}
      checkboxSelection={isNoCheckBox ? false : true}
      sx={() => sx(theme)}
      rows={rows?.map((ele, index) => ({ ...ele, id: (ele?.id) ?? index }))}
      columns={columns?.map((column) => ({
        minWidth: 120,
        ...column, // Spread the original column object here,
        renderCell: (params) => column.renderCell ? column.renderCell(params) : <Tooltip title={(params.value && typeof params?.value === 'string') ? params.value : ""}>
          {column.renderCell ? column.renderCell(params) : params.value}
        </Tooltip>

      }))}
      columnSelectorIcon={false}

      components={{
        Pagination: CustomPagination,
        NoRowsOverlay: CustomNoRowsOverlay,
      }}
      disableColumnFilter
      columnMenuIcon={false}
      // disableColumnSelector
      disableColumnMenu
      disableSelectionOnClick
      pageSize={pageSize}
      page={page}
      onPageSizeChange={(newPageSize) => {
        onPageSize && onPageSize(newPageSize);
      }}
      onPageChange={(newPage) => {
        onPage && onPage(newPage);
      }}
      loading={loading}
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      pagination
      experimentalFeatures={{ newEditingApi: true }}
      processRowUpdate={processRowUpdate}
      onProcessRowUpdateError={handleProcessRowUpdateError}
      initialState={{
        pinnedColumns: { right: ["actions"] },
        columns: {
          columnVisibilityModel: props?.hideColumnIntially ? props.hideColumnIntially : {},
        },
      }}
      onSelectionModelChange={onSelectionModelChange}
      selectionModel={selectionModel}
      rowCount={totalCount}
      paginationMode="server"
      getRowHeight={(row) => 'auto'}
      disableAutosize={true}
    />
  );
}


let sx = (theme) => {
  return ({
    "& .MuiDataGrid-columnSeparator": {
      opacity: 0,
      visibility: "hidden",
    },
    "& .MuiDataGrid-columnHeaders": {
      borderRadius: "10px",
      height: "42px",
      minHeight: "42px !important",
      outline: "none !important",
      fontWeight: 500,
      background: 'var(--primarya)'
    },
    "&.MuiDataGrid-root": {
      border: "none",
      overflowX: "scroll",
      fontSize: "12px",
    },
    "& .MuiDataGrid-sortIcon, .MuiDataGrid-filterIcon": {
      visibility: "visible",
      opacity: "1 !important",
      fontSize: "14px",
    },
    "& .MuiDataGrid-columnHeader, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell,  .MuiDataGrid-cell:focus ":
    {
      outline: "none !important",
      border: "none",
      justifyContent: "center",
      whiteSpace: "normal !important",
      wordBreak: "break-word !important",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontSize: "13px",
      fontWeight: 500,
    },
    "&. MuiDataGrid-row": {
      overflowX: "scroll",
      OverflowY: "hidden",
    },
    "& .MuiDataGrid-cell": {
      border: "none",
      justifyContent: "center",
    },
    "& .MuiDataGrid-cell.MuiDataGrid-cell--editing": {
      boxShadow: "none",
    },
    "& .MuiDataGrid-row.Mui-hovered": {
      opacity: "0.8",
    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      justifyContent: "center",
    },
  })
}
