import "./Menu.css";

const items = ["Sign up", "Message", "Checkbox"];

const activeMenuItem = {
  background: "#517EE7",
  color: "#fff",
  border: "none",
};

export type Props = {
  activePage: number;
};

export const Menu = ({ activePage }: Props) => {
  return (
    <div className='menu'>
      {items.map((item, index) => {
        return (
          <div key={index} className={`menu-item${index + 1} menu-item`}>
            <div
              className='menu-number'
              style={activePage === index ? activeMenuItem : undefined}
            >
              {index + 1}
            </div>
            <p
              className='menu-content'
              style={activePage === index ? { color: "#2b2144" } : undefined}
            >
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
};
