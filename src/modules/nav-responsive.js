class Navigation {
  constructor() {
    this.template = `
    <nav class="container-fluid">
        <ul class="nav__menu">
            <li class="menu__item">
                <a class="nostyle" href="#">Inwestycja</a>
            </li>
            <li class="menu__item">
                <a class="nostyle" href="#">Dostępność</a>
            </li>
            <li class="menu__item">
                <a class="nostyle" href="#">Rzuty mieszkań</a>
            </li>
            <li class="menu__item">
                <a class="nostyle" href="#">Kontakt</a>
            </li>
            <a href="javascript:void(0);" class="menu__icon" onclick="myFunction()">
                <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
            </a>
        </ul>
    </nav>
    `;
  }
}

export default Navigation;
