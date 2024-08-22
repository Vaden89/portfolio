import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className="p-6 flex items-center justify-between w-full">
      <div>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <title />{" "}
            <g id="Complete">
              {" "}
              <g id="sidebar-left">
                {" "}
                <g>
                  {" "}
                  <rect
                    data-name="Square"
                    fill="none"
                    height="18"
                    id="Square-2"
                    rx="2"
                    ry="2"
                    stroke="#ffffff"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    width="18"
                    x="3"
                    y="3"
                  />{" "}
                  <line
                    fill="none"
                    stroke="#ffffff"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    x1="9"
                    x2="9"
                    y1="21"
                    y2="3"
                  />{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <span className="border-b-2 text-2xl text-white">LOGO</span>
    </nav>
  );
};
