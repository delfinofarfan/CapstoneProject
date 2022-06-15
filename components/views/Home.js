import html from "html-literal";

export default state => html`
  <section>
    <h1 class="text-box">Fantasy Football made EASY</h1>
    <p class="home">
      The Farfan Fantasy Football Score (FFF Score) takes the burden off the
      player, and informs them of the best player to select during their rookie
      drafts. Our product is intended for
      <b
        >Fantasy Football, Dynasty Fantasy Football, and Devy Fantasy
        Football.</b
      >
    </p>
    <a href="/Testimonials" class="testButton">User Testimonials</a>
    <h4 class="text-box">
      Weather in ${state.weather.city} ${state.weather.temp}F, feels like
      ${state.weather.feelsLike}F
    </h4>
  </section>
`;
