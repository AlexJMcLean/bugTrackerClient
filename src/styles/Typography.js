import { createGlobalStyle } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;600&display=swap');
</style>;

const Typography = createGlobalStyle`

  :root {
    --font: "Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    --title-font-size: clamp(20px,5vw,50px);
    --h2-font-size: clamp(16px, 3vw, 25px);
    --text-font-size: clamp(12px, 1vw, 16px);
  }

  body {
    font-family: var(--font);
    color: var(--darkGrey);
    font-size: var(--text-font-size);
  }
  h1 {
    font-size: var(--title-font-size);
    color: var(--black);
    margin: 0 0 16px;  
  }
  .h1-small{
      font-size: var(--h2-font-size);
    }
  h2 {
    font-size: var(--h2-font-size);
  }
  .accent {
    color: var(--purple);
  }
`;

export default Typography;
