/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        accent: '#00FF00',
        text: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3'
        }
      },
      fontFamily: {
        'tt-firs': ['TT Firs', 'sans-serif'],
        'tt-firs-neue': ['"TT Firs Neue"', 'sans-serif'],
      },
      fontSize: {
        // Kleinere Größen für UI-Elemente und Nebentexte
        'fluid-xxsm': 'clamp(0.75rem, 1vw, 0.875rem)',      // 12px - 14px
        'fluid-xsm': 'clamp(0.875rem, 1.2vw, 1rem)',        // 14px - 16px
        'fluid-sm': 'clamp(1rem, 1.5vw, 1.125rem)',         // 16px - 18px
        
        // Basis-Textgrößen
        'fluid-base': 'clamp(1.125rem, 1.8vw, 1.25rem)',    // 18px - 20px
        'fluid-lg': 'clamp(1.25rem, 2vw, 1.5rem)',          // 20px - 24px
        
        // Überschriften
        'fluid-xl': 'clamp(1.5rem, 2.5vw, 2rem)',           // 24px - 32px
        'fluid-2xl': 'clamp(2rem, 3.5vw, 2.5rem)',          // 32px - 40px
        'fluid-3xl': 'clamp(2.5rem, 5vw, 3.5rem)',          // 40px - 56px
        'fluid-4xl': 'clamp(3.5rem, 7vw, 5rem)',            // 56px - 80px
        
        // Spezielle Navigation und UI-Elemente bleiben unverändert
        'nav-title': 'clamp(2rem, min(7vh, 7vw), 7rem)',
        'nav-title-large': 'clamp(2rem, 5vw, 4.5rem)',
        'nav-contact': 'clamp(14px, 1.5vw, 20px)',
        'nav-social': 'clamp(20px, 3vw, 30px)',
        'wow-headline': 'clamp(1.5rem, 2.5vw, 2.032rem)',
        'wow-main': 'clamp(5rem, 15vw, 11.25rem)',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'wider': '0.05em',
        'wow': '0.01em',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--tw-prose-body)',
            '[class~="lead"]': {
              color: 'var(--tw-prose-body)',
            },
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: '600',
            },
            hr: {
              borderColor: 'var(--tw-prose-hr)',
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
            },
            h1: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '800',
            },
            h2: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
            },
            h3: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            code: {
              color: 'var(--tw-prose-code)',
              fontWeight: '600',
            },
            pre: {
              color: 'var(--tw-prose-pre-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
            },
            ol: {
              listStyleType: 'decimal',
              '> li': {
                paddingLeft: '1.5em',
              },
            },
            ul: {
              listStyleType: 'disc',
              '> li': {
                paddingLeft: '1.5em',
              },
            },
          },
        },
      },
      fontWeight: {
        light: 300,
        medium: 500,
      },
      spacing: {
        'nav-top': 'clamp(28px, 4vh, 36px)',
        'nav-padding': 'clamp(64px, 12vh, 96px)',
        'nav-spacing': '2rem',
        'nav-bottom': 'clamp(28px, 5vh, 48px)'
      },
      lineHeight: {
        'wow': '1.1',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}