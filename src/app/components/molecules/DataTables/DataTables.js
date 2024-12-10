import React, { useEffect } from 'react'
import styles from './DataTables.styles';
import DataTable, { createTheme } from 'react-data-table-component';


const DataTables = ({ data = [], columns = [], totalData = 0, page = 1, keyword = '' }) => {
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(keyword.toLowerCase())
    )
  );

  createTheme('transparentTheme', {
    background: {
      default: 'transparent', // Membuat latar belakang tabel transparan
    },
    context: {
      background: 'transparent',
      text: '#333',
    },
    divider: {
      default: '#ccc',
    },
    text: {
      primary: '#333',  // Warna teks utama
      secondary: '#666', // Warna teks sekunder
    },
    header: {
      background: {
        default: 'transparent', // Membuat latar belakang header transparan
      },
      text: '#AE445A', // Warna teks header
    },
    rows: {
      background: 'transparent',
      hover: 'rgba(0, 0, 0, 0.05)', // Warna saat di-hover
    },
  });

  const handlePageChange = (page) => {
    console.log(`Fetching data for page ${page}`);
  };

  return (
    <div style={{ overflowX: 'auto', backgroundColor: 'transparent' }}>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        responsive
        highlightOnHover
        theme="transparentTheme"
        paginationServer
        customStyles={styles}
        paginationTotalRows={totalData}
        paginationPerPage={10}
        paginationDefaultPage={page}
        onChangePage={handlePageChange}
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
      />
    </div>
  );
}

export default DataTables;