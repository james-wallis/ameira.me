module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      width: {
        'overlap': '110%',
        '14': '3.5rem',
        '33%': '33%',
        '50%': '50%',
        '90vw': '90vw',
        '95vw': '95vw',
      },
      maxWidth: {
        'overlap': '110%',
      },
      height: {
        overlap: '110%',
        'p-item': '60vh',
        '14': '3.5rem',
        '50vh': '50vh',
      },
      minHeight: {
        'p-item': '450px',
        '1/2': '50vh',
      },
      backgroundColor: {
        'pink-custom': '#DBC8BE',
        'grey-custom': '#F7F7F7',
        'img-tint': 'rgba(0, 0, 0, 0.7);',
      },
      textColor: {
        'pink-custom': '#DBC8BE',
        'grey-custom': '#F7F7F7',
      },
      borderColor: {
        'pink-custom': '#DBC8BE',
        'grey-custom': '#F7F7F7',
      },
      backgroundOpacity: {
        '80': '0.8',
        '90': '0.9',
        'nav': '0.95',
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    fontFamily: {
      title: 'Playfair Display, serif',
      nav: 'Playfair Display, serif',
      body: 'Raleway, serif',
    },
  },
}
