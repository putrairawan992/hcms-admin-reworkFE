const style = {
  container: {
    background: 'linear-gradient(90deg, #f1f5fe 0%, #ffffff 98.82%)',
    boxShadow: '5px 0px 10px 0px #b3b9c5',
    borderRadius: '30px',
    width: '100%',
    height: 'max-content',
  },
  header: {
    backgroundColor: '#AE445A',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header2: {
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  headerTitle: {
    fontSize: '22px',
    fontWeight: '900',
    color: '#FFFFFF',
  },
  tableAllowance: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '0',
    textAlign: 'center',
    backgroundColor: '#3AB471',
    color: '#FFFFFF',
    flex: 1,
    padding: '0px 20px 20px 0px'
  },
  textTableAllowance: {
    gridColumn: 'span 12',
    padding: '10px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cellAllowance: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '0',
    textAlign: 'center',
    flex: 1
  },
  tableDeduction: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '0',
    textAlign: 'center',
    backgroundColor: '#AE445A',
    color: '#FFFFFF',
    flex: 1,
    paddingBottom: '20px'
  },
  textTableDeduction: {
    gridColumn: 'span 10',
    padding: '10px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cellDeduction: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '0',
    textAlign: 'center',
    flex: 1
  },
  tableCompany: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gap: '0',
    textAlign: 'center',
    backgroundColor: '#3B78C2',
    color: '#FFFFFF',
    flex: 1,
    paddingBottom: '20px'
  },
  textTableCompany: {
    gridColumn: 'span 8',
    padding: '10px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cellCompany: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gap: '0',
    textAlign: 'center',
    flex: 1
  },
};

export default style;