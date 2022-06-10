import html from "html-literal";

export default state => html`
  <table id="football">
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
    ${state.fscores
      .map(fscore => {
        return `<><td>${fscore.name}</td><td>${fscore.score}</td>`;
      })
      .join("")}
  </table>
`;
