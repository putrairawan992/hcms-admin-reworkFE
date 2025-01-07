const styles = {
  title: (pathName = '', href = '') => ({
    fontSize: '14px',
    fontWeight: pathName === href ? 'bold' : '700',
    cursor: 'pointer',
    marginBottom: '1rem',
    textAlign: 'center',
    color: pathName === href ? '#ae445a' : '#404041',
  }),
};

export default styles;
