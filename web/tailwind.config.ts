import type { Config } from 'tailwindcss'
import { addDynamicIconSelectors } from '@iconify/tailwind'

const config: Config = {
  content: [
    './src/component/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    //https://daisyui.com/docs/install
    require('daisyui'),
    
    //https://iconify.design/docs/usage/css/tailwind
    //https://marketplace.visualstudio.com/items?itemName=antfu.iconify
    addDynamicIconSelectors()
  ]
}
export default config