import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../state/userSlice";

const Layout = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [_, __, removeCookie] = useCookies();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showMenu = !!currentUser;

  return (
    <div class="rounded-lg shadow bg-base-200 drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        class="drawer-toggle"
        checked={checked}
      />

      {/* Content with drawer header */}
      <div class="flex flex-col h-screen drawer-content">
        {/* Navbar */}
        <div class="w-full navbar bg-base-100 shadow">
          {showMenu && (
            <div class="flex-none lg:hidden">
              <label
                for="my-drawer-3"
                class="btn btn-square btn-ghost"
                onClick={() => setChecked(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          )}

          {/* Header */}
          <div class="flex-1 px-2 mx-2">
            <h1 class="text-lg text-primary">PYRS Judging</h1>
          </div>
          {showMenu && (
            <div class="flex-none hidden lg:block">
              <ul class="menu horizontal">
                <li>
                  <Link to="/teamjudging" class="rounded-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                    <span class="ml-2 font-bold">JUDGE</span>
                  </Link>
                </li>
                <li>
                  <Link to="/teams" class="rounded-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span class="ml-2 font-bold">TEAMS</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div class="h-screen p-6 flex-auto justify-center">{children}</div>
      </div>

      {/* Side menu */}
      <div class="drawer-side">
        <label
          for="my-drawer-3"
          class="drawer-overlay"
          onClick={() => setChecked(false)}
        ></label>
        <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
          <li onClick={() => setChecked(false)}>
            <Link to="/teams">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span class="font-semibold">Teams List</span>
            </Link>
          </li>
          <li onClick={() => setChecked(false)}>
            <Link to="/score" class="drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              <span class="font-semibold">Score a Team</span>
            </Link>
          </li>
          <li
            onClick={() => {
              setChecked(false);
              removeCookie("user");
              dispatch(logout());
              navigate("/login");
            }}
          >
            <Link to="/teams">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span class="font-semibold">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
