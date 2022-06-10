import html from "html-literal";

export default state => html`
  <table id="football">
    <tr>
      <th>Name</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Fourtytime</th>
      <th>Vertical</th>
    </tr>
    ${state.metrics
      .map(metric => {
        return `<><td>${metric.name}</td><td>${metric.height}</td><td>${metric.weight}</td><td>${metric.fourtytime}</td><td>${metric.vertical}</td>`;
      })
      .join("")}
  </table>
`;
