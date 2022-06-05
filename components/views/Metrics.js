import html from "html-literal";

export default st => `
<table id="football">
<tr><th>Name</th><th>Height</th><th>Weight</th><th>Fourtytime</th><th>Vertical</th></tr>
${st.metrics
  .map(metric => {
    return `<><td>${metric.name}</td><td>${metric.height}</td><td>${metric.weight}</td><td>${metric.fourtytime}</td><td>${metric.vertical}</td>`;
  })
  .join("")}

</table>
`;
