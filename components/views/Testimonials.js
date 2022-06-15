import html from "html-literal";

export default state => html`
  <p class="text-box">
    "This product has allowed me to spend more time with my family, and I'm
    still able to compete within my league" - Cam H.
  </p>
  <p class="text-box">
    "I can't <b>BELIEVE</b> how much information I was missing out on! FFF has
    allowed me to become more competitive than ever!" - Jeff G.
  </p>
  <p class="text-box">
    this is where the quote goes${state.data.content} ${state.data.firstname}
    ${state.data.lastname}
  </p>
`;
