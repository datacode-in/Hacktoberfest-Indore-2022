window.onload = function () {
  fetch("./data.json")
    .then((response) => response.json())
    .then((profiles) => {
      new gridjs.Grid({
        columns: [
          {
            name: "Image",
            formatter: (cell) =>
              gridjs.html(`<img height="80" width="80" src="${cell}"/>`),
          },
          {
            name: "Github",
            formatter: (cell) =>
              gridjs.html(
                `<a href="https://github.com/${cell}" target="_blank">${cell}</a>`
              ),
          },
          "Firstname",
          "Lastname",
          "About",
        ],
        data: profiles.data,
        className: {
          table: "table-body",
        },
      }).render(document.getElementById("table"));
    })
    .catch((err) => console.log(err));
};
