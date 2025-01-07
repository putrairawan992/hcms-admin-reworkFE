const styles = {
  header: {
    style: {
      color: '#AE445A',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '19px',
      minWidth: '20px',
    },
  },
  headCells: {
    style: {
      backgroundColor: 'transparent',
      padding: '10px',
      color: '#AE445A',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '19px',
      minWidth: '20px',
    },
  },
  rows: {
    style: {
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      backgroundColor: 'transparent',
      '&:nth-of-type(odd)': {
        backgroundColor: 'transparent',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  cells: {
    style: {
      padding: '10px',
      color: '#333',
      fontSize: '16px',
      whiteSpace: 'normal',
      wordBreak: 'break-word',
    },
  },
};

export default styles;
