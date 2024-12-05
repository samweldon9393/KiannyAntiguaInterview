/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './*.html'],
  theme: {
    extend: {
        fontFamily:{
            body: ['Faculty Glyphic']
        },
        colors:{
            'forest': '#021800',
            'orng': '#fff4e1',
            'dorng': {
                100: '#e0cdad',
                200: '#3d3830',
            }
        }
    },
  },
  plugins: [],
}

