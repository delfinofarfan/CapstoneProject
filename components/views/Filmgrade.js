import html from "html-literal";

export default st => `
<table id="football">
<tr><th>Name</th><th>Grade</th></tr>
${st.filmgrades
  .map(filmgrade => {
    return `<><td>${filmgrade.name}</td><td>${filmgrade.grade}</td>`;
  })
  .join("")}

</table>
`;
