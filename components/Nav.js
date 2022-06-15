import html from "html-literal";
import logo from "../assets/img/clearlogo.png";
export default links => html`
  <nav id="nav-background">
    <i class="fa fa-window-close"></i>
    <ul class="nav">
      <a href="/Home">
        <img src="${logo}" />
      </a>
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a><li>`
      )}
    </ul>
  </nav>
`;
