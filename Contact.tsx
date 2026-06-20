/** @import must precede all other statements */
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Unispace:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 10%;

    --card: 0 0% 100%;
    --card-foreground: 0 0% 10%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 10%;

    --primary: 0 0% 10%;
    --primary-foreground: 0 0% 92%;

    --secondary: 0 0% 92%;
    --secondary-foreground: 0 0% 10%;

    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 46%;

    --accent: 0 0% 92%;
    --accent-foreground: 0 0% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 0 0% 10%;

    --radius: 0.625rem;

    /* Artifex brand tokens */
    --artifex-white: #EAEAEA;
    --artifex-black: #191919;
    --artifex-navy: #0F1A31;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'IBM Plex Sans', -apple-system, Roboto, Helvetica, sans-serif;
  }

  :where(p, span, li, h1, h2, h3, h4, h5, h6, a, button, label, td, th) {
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  pre,
  code {
    overflow-x: auto;
    white-space: pre;
  }
}
