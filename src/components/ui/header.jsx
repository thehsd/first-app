import React from "react";
import { Link, NavLink } from "react-router";
import useBasket from "../../store/basket-store";

function Header() {
  const { itemsCount } = useBasket();

  return (
    <header className="flex justify-between px-3 py-4 bg-gray-200">
      <ul className="flex flex-row gap-2">
        <li className="">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-sky-100 rounded-sm p-1"
                : isActive
                  ? "bg-sky-200 rounded-sm p-1"
                  : "bg-sky-50 rounded-sm p-1"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-sky-100 rounded-sm p-1"
                : isActive
                  ? "bg-sky-200 rounded-sm p-1"
                  : "bg-sky-50 rounded-sm p-1"
            }
          >
            products
          </NavLink>
        </li>
      </ul>

      <Link to={"/basket"}>basket {itemsCount}</Link>
    </header>
  );
}

export default Header;
