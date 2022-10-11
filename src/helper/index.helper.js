helpers = {
  sum: (a, b) => a + b,
  sortTable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default";
    const icons = {
      desc: "bx bx-sort-down",
      asc: "bx bx-sort-up",
      default: "bx bxs-sort-alt",
    };
    const types = {
      desc: "asc",
      asc: "desc",
      default: "desc",
    };
    let icon = icons[sortType];
    const type = types[sortType];

    return `<a href="?_sort&column=${field}&type=${type}"><i class='${icon}'></i></a>`;
  },
};

module.exports = helpers;
