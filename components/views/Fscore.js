import html from "html-literal";

export default state => html`
  <table id="football">
    <tr>
      <th>Name</th>
      <th>FFF Score</th>
    </tr>
    ${state.fscores
      .map(fscore => {
        return `<tr><td>${fscore.name}</td><td>${fscore.fscore}</td></tr>`;
      })
      .join("")}
  </table>
`;
