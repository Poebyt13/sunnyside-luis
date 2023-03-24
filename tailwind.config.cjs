
/** @type {import('tailwindcss').Config, } */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}","index.html"],
  theme: {
    extend: {
      fontFamily: {
        "Barlow" : "Barlow, sans-serif",
        "Fraunces" : "Fraunces, sans-serif",
      },
      colors: {
        // PRIMARY COLORS
        "Primary-softRed" : "hsl(7, 99%, 70%)",
        "Primary-yellow" : "hsl(51, 100%, 49%)",
        "Primary-DesaturatedCyan" : "hsl(167, 40%, 24%)",
        "Primary-darkBlue" : "hsl(198, 62%, 26%)",
        "Primary-moderateCyan" : "hsl(168, 34%, 41%)",
        
        // NEUTRAL COLORS
        "MyNeutral-desaturateBlue" : "hsl(212, 27%, 19%)",
        "MyNeutral-VeryDarkGrayishBlue" : "hsl(213, 9%, 39%)",
        "MyNeutral-DarkGrayishBlue" : "hsl(232, 10%, 55%)",
        "MyNeutral-Blue" : "hsl(210, 4%, 67%)",
      },
      backgroundImage:{
        "imgCone" : "url('../assets/desktop/image-gallery-cone.jpg')",
        "imgMilk" : "url('../assets/desktop/image-gallery-milkbottles.jpg')",
        "imgOrange" : "url('../assets/desktop/image-gallery-orange.jpg')",
        "imgSugarCubes" : "url('../assets/desktop/image-gallery-sugarcubes.jpg')",

        "imgDesign" : "url('../assets/desktop/image-graphic-design.jpg')",
        "image-header" : "url('../assets/desktop/image-header.jpg')",
        "image-photography" : "url('../assets/desktop/image-photography.jpg')",
        "image-stand-out" : "url('../assets/desktop/image-stand-out.jpg')",
        "image-transform" : "url('../assets/desktop/image-transform.jpg')",
      }
    },
  },
  plugins: [],
}
