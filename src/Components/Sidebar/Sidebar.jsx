import { SideLinks } from "../../helper/utils";
import { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  return (
    <aside className="sidebar">
      <article>
        {SideLinks.map(({ name, icon, href }, idx) => {
          return (
            <a
              key={idx}
              href={href}
              className={activeMenu === idx ? "btn-active" : "btn:normal"}
              onClick={() => setActiveMenu(idx)}
            >
              {icon} {name}
            </a>
          );
        })}
      </article>
    </aside>
  );
};

export default Sidebar;
