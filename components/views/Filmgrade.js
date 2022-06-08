import html from "html-literal";

export default state => html`
  <table id="football">
    <tr>
      <th>Name</th>
      <th>Grade</th>
    </tr>
    ${state.filmgrade
      .map(filmgrade => {
        return `<><td>${filmgrade.name}</td><td>${filmgrade.grade}</td>`;
      })
      .join("")}
  </table>
`;
