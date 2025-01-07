import React, { useEffect } from 'react';
import styles from './DataTables.styles';
import DataTable, { createTheme } from 'react-data-table-component';
import { noop } from '@/app/utils/helpers';
import ListEmpty from '../ListEmpty';

const DataTables = ({
  data = [],
  columns = [],
  loading = false,
  totalData = 0,
  page = 1,
  keyword = '',
  onChangePagination = noop,
}) => {
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(keyword.toLowerCase())
    )
  );

  createTheme('transparentTheme', {
    background: {
      default: 'transparent',
    },
    context: {
      background: 'transparent',
      text: '#333',
    },
    divider: {
      default: '#ccc',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
    header: {
      background: {
        default: 'transparent',
      },
      text: '#AE445A',
    },
    rows: {
      background: 'transparent',
      hover: 'rgba(0, 0, 0, 0.05)',
    },
  });

  const handlePageChange = (page) => {
    onChangePagination(page);
  };

  return (
    <div style={{ overflowX: 'auto', backgroundColor: 'transparent' }}>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        striped={true}
        responsive
        highlightOnHover
        theme="transparentTheme"
        paginationServer
        customStyles={styles}
        paginationTotalRows={totalData}
        paginationPerPage={10}
        progressPending={loading}
        progressComponent={<ListEmpty />}
        paginationDefaultPage={page}
        onChangePage={(page) => handlePageChange(page)}
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
      />
    </div>
  );
};

export default DataTables;
