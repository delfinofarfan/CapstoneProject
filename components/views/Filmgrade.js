import html from "html-literal";

export default state => html`
  <table id="football">
    <tr>
      <th>Name</th>
      <th>Film Grade</th>
    </tr>
    ${state.filmgrade
      .map(filmgrade => {
        return `<tr><td>${filmgrade.player}</td><td>${filmgrade.filmgrade}</td></tr>`;
      })
      .join("")}
  </table>
`;
