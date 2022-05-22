import html from "html-literal";

export default links => html`
  <nav id="nav-background">
    <img src="assets/img/clearlogo.png" />
    <i class="fa fa-window-close"></i>
    <ul class="nav">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a><li>`
      )}
    </ul>
  </nav>
`;
