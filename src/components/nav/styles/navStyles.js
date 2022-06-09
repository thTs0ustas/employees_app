const navStyles = {
  appBar: { height: '10vh', display: 'flex', justifyContent: 'center' },
  logo: { display: { xs: 'none', md: 'flex' }, mr: 1 },
  logo2: { display: { md: 'none', xs: 'flex' }, mr: 1 },

  typography: {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  typography2: {
    mr: 2,
    display: { md: 'none', xs: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  iconBox: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
  iconBox2: { flexGrow: 1, display: { md: 'flex', xs: 'none' } },
  menu: {
    display: { xs: 'block', md: 'none' },
  },
  menuItem: { textDecoration: 'none', color: 'inherit' },
  button: { my: 2, color: 'white', display: 'block', textDecoration: 'none' },
};

export { navStyles };
