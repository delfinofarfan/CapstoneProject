import html from "html-literal";

export default state => html`
  <table id="football">
    <tr>
      <th>Name</th>
      <th>Fscore</th>
    </tr>
    ${state.fscores
      .map(fscore => {
        return `<td>${fscore.name}</td><td>${fscore.fscore}</td>`;
      })
      .join("")}
  </table>
`;
