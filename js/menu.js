class Menu {
  constructor(elem, afterClick) {
    this._elem = elem;
    this._clickCleanUp = afterClick;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    alert("save");
  }

  load() {
    alert("load");
  }

  search() {
    alert("search");
  }

  onClick(e) {
    e.preventDefault();

    const action = e.target.dataset.action;
    if (action) {
      this[action]();
    }

    this._clickCleanUp();
  }
}

const generateMenu = (id, afterClick) => {
  const container = document.getElementById(id);

  container.innerHTML = `
  <div class="vertical-menu">
      <a data-action='save'>Save</a>
      <a data-action='load'">Load</a>
      <a data-action='search'>Search</a>
  </div>`;

  const menu = new Menu(container, afterClick);
};
