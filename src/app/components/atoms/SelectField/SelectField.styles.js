const styles = {
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '20px',
    textAlign: 'left',
    color: '#404041',
  },
  select: (color) => ({
    width: '100%',
    minWidth: '100%',
    flex: 1,
    borderRadius: '10px',
    border: '1px solid #ae445a',
    background: '#ffffff',
    marginTop: '8px',
    fontSize: '14px',
    fontWeight: '700',
    color: color === '' ? '#B6B6B6' : '#ae445a',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }),
};

export default styles