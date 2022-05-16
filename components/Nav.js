import html from "html-literal";

export default links => html`
  <nav id="nav-background">
    <a href="index.html"><img src="pictures/clearlogo.png"/></a>
    <i class="fa fa-window-close"></i>
    <ul class="nav-links">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title ="${link.title}" data-navigo>${link.text}</a><li>`
      )}
    </ul>
  </nav>
`;
