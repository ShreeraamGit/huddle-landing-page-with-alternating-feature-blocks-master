module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "pattern-1": "url('/images/bg-hero-desktop.svg')",
                "pattern-2": "url('/images/bg-hero-mobile.svg')"
            },
            fontFamily: {
                'heading': ['Poppins'],
                'content': ['sans-serif']
            },
            colors: {
                'button': 'hsl(322, 100%, 66%)',
                'button-hover': 'hsl(300, 69%, 71%)',
                'blue': 'hsl(193, 100%, 96%)',
                'greyish-blue':'hsl(208, 11%, 55%)',
                'dark-cyan':'hsl(192, 100%, 9%)'
            },
        }
    },
    plugins: [],
}