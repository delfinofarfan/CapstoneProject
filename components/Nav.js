import html from "html-literal";
// import logo from "../assets/img/clearlogo.png";
export default links => html`
  <nav>
    <i class="fa fa-window-close"></i>
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )}
    </ul>
  </nav>
`;
{
  /* <li class="nav-img"> */
}
{
  /* <a href="/Home"> */
}
// <img src="${logo}" />
// </a>
// </li>
