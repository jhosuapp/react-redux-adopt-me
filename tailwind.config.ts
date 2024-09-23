import type { Config } from 'tailwindcss'
import { Colors } from './app/config/';
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: Colors,
      fontFamily: {
        plusJakarta: ['var(--font-plusJakarta)']
      },
      fontSize: {
        'title': '32px',
      },
      maxWidth: {
        'container': '100%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            foreground: Colors.utility.black
          },
          secondary: {
            foreground: Colors.utility.black,
            DEFAULT: Colors.utility.white,
          }
        },
      },
    }
  })],
}
export default config
