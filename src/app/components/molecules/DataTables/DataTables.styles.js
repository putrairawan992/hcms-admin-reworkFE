const styles = {
  header: {
    style: {
      backgroundColor: 'transparent', // Warna latar belakang header
      color: '#AE445A',          // Warna teks header
      fontSize: '16px',          // Ukuran font header
      fontWeight: '700',        // Ketebalan font header
      lineHeight: '19px'
    },
  },
  headCells: {
    style: {
      backgroundColor: 'transparent',
      padding: '10px',            // Jarak dalam
      color: '#AE445A',          // Warna teks header
      fontSize: '16px',          // Ukuran font header
      fontWeight: '700',        // Ketebalan font header
      lineHeight: '19px'
    },
  },
  rows: {
    style: {
      backgroundColor: 'transparent',  // Menghilangkan warna latar belakang
      '&:nth-of-type(odd)': {
        backgroundColor: 'transparent', // Tidak ada warna untuk baris ganjil
      },
      '&:hover': {
        backgroundColor: 'transparent', // Tidak ada warna saat di-hover
      },
    },
  },
  cells: {
    style: {
      padding: '10px',           // Jarak dalam
      color: '#333',            // Warna teks sel
      fontSize: '16px',         // Ukuran font sel
    },
  }
};

export default styles;
