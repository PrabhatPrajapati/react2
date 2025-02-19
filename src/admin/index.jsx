import React from "react";
import SideBar from "./components/sideBar";
import { X, Pencil } from "lucide-react";
import bottle from "../assets/bottle.png";
import { useState } from "react";
import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";
import folder from "../assets/folder.png";
import notifications from "../assets/notifications.png";
import Vectorr from "../assets/Vectorr.png";
import Vectorrr from "../assets/Vectorrr.png";
import Vectorrrr from "../assets/Vectorrrr.png";
import { useEffect } from "react";
// import notifications from '../../public/assets/plugins/bootstrap/css/bootstrap.min.css'

{
  /* <link rel="stylesheet" href="./public/assets/plugins/bootstrap/css/bootstrap.min.css"></link> */
}
const index = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Create a <link> element
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/plugins/bootstrap/css/bootstrap.min.css"; // ✅ Correct Path
    link.id = "bootstrap-cdn"; // Assign an ID for easy removal

    // Append to the <head>
    document.head.appendChild(link);

    return () => {
      // Cleanup: Remove the link when the component unmounts
      const existingLink = document.getElementById("bootstrap-cdn");
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return (
    <>
      <div class="connect-container align-content-stretch d-flex flex-wrap">
        {/* <div class="page-sidebar">
          <div class="logo-box">
            <a href="#" class="logo-text">
              Connect
            </a>
            <a href="#" id="sidebar-close">
              <i class="material-icons">close</i>
            </a>{" "}
            <a href="#" id="sidebar-state">
              <i class="material-icons">adjust</i>
              <i class="material-icons compact-sidebar-icon">
                panorama_fish_eye
              </i>
            </a>
          </div>
          <div class="page-sidebar-inner slimscroll">
            <ul class="accordion-menu">
              <li class="sidebar-title">Apps</li>
              <li class="active-page">
                <a href="index.html" class="active">
                  <i class="material-icons-outlined">dashboard</i>Dashboard
                </a>
              </li>
              <li>
                <a href="mailbox.html">
                  <i class="material-icons-outlined">inbox</i>Mailbox
                </a>
              </li>
              <li>
                <a href="profile.html">
                  <i class="material-icons-outlined">account_circle</i>Profile
                </a>
              </li>
              <li>
                <a href="file-manager.html">
                  <i class="material-icons">cloud_queue</i>File Manager
                </a>
              </li>
              <li>
                <a href="calendar.html">
                  <i class="material-icons-outlined">calendar_today</i>Calendar
                </a>
              </li>
              <li>
                <a href="todo.html">
                  <i class="material-icons">done</i>Todo
                </a>
              </li>
              <li class="sidebar-title">UI Elements</li>
              <li>
                <a href="#">
                  <i class="material-icons">text_format</i>Styles
                  <i class="material-icons has-sub-menu">add</i>
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="styles-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="styles-code.html">Code</a>
                  </li>
                  <li>
                    <a href="styles-tables.html">Tables</a>
                  </li>
                  <li>
                    <a href="styles-icons.html">Icons</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  <i class="material-icons">apps</i>Components
                  <i class="material-icons has-sub-menu">add</i>
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="ui-alerts.html">Alerts</a>
                  </li>
                  <li>
                    <a href="ui-badge.html">Badge</a>
                  </li>
                  <li>
                    <a href="ui-breadcrumb.html">Breadcrumb</a>
                  </li>
                  <li>
                    <a href="ui-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="ui-card.html">Card</a>
                  </li>
                  <li>
                    <a href="ui-collapse.html">Collapse</a>
                  </li>
                  <li>
                    <a href="ui-dropdowns.html">Dropdowns</a>
                  </li>
                  <li>
                    <a href="ui-list-group.html">List Group</a>
                  </li>
                  <li>
                    <a href="ui-modal.html">Modal</a>
                  </li>
                  <li>
                    <a href="ui-pagination.html">Pagination</a>
                  </li>
                  <li>
                    <a href="ui-popovers.html">Popovers</a>
                  </li>
                  <li>
                    <a href="ui-progress.html">Progress</a>
                  </li>
                  <li>
                    <a href="ui-spinners.html">Spinners</a>
                  </li>
                  <li>
                    <a href="ui-toast.html">Toast</a>
                  </li>
                  <li>
                    <a href="ui-tooltips.html">Tooltips</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i class="material-icons">card_giftcard</i>Extended
                  <i class="material-icons has-sub-menu">add</i>
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="extended-select2.html">Select2</a>
                  </li>
                  <li>
                    <a href="extended-datatables.html">Data Tables</a>
                  </li>
                  <li>
                    <a href="extended-blockui.html">Block UI</a>
                  </li>
                  <li>
                    <a href="extended-session.html">Session Timeout</a>
                  </li>
                  <li>
                    <a href="extended-tree.html">Tree View</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="charts.html">
                  <i class="material-icons">bar_chart</i>Charts
                </a>
              </li>
              <li>
                <a href="forms.html">
                  <i class="material-icons">input</i>Forms
                </a>
              </li>
              <li class="sidebar-title">Other</li>
              <li>
                <a href="">
                  <i class="material-icons">star_border</i>Pages
                  <i class="material-icons has-sub-menu">add</i>
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="500.html">500</a>
                  </li>
                  <li>
                    <a href="sign-in.html">Sign In</a>
                  </li>
                  <li>
                    <a href="sign-up.html">Sign Up</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i class="material-icons">bookmark_border</i>Documentation
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="material-icons">access_time</i>Change Log
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <SideBar />
        <div class="page-container">
          <div class="page-header">
            <nav
              className="flex items-center justify-between px-8 py-5  border-b w-full h-[84px]"
              style={{ left: "280px" }}
            >
              {/* Search Bar */}
              <div className="flex items-center border rounded-lg px-4 py-2  w-[267px] h-[48px] ">
                <img
                  src={Vectorrrr}
                  alt="Logout"
                  className="w-[17px] h-[17px] cursor-pointer mr-5 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none font-[700px] bg-transparent x-grow text-[12px] text-gray-600"
                />
                <img
                  src={Vectorr}
                  alt="Logout"
                  className="w-[20px] h-[18px] cursor-pointer mr-5 text-gray-400"
                />
                <img
                  src={Vectorrr}
                  alt="Mic"
                  className="w-[14px] h-[19px] cursor-pointer text-gray-400"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex space-x-10">
                <a href="#" className="font-semibold text-[12px] text-black">
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-[#7A8699] text-[12px] hover:text-black"
                >
                  Credit Request
                </a>
                <a
                  href="#"
                  className="text-[#7A8699] text-[12px] hover:text-black"
                >
                  EPR
                </a>
                <a
                  href="#"
                  className="text-[#7A8699] text-[12px] hover:text-black"
                >
                  Offers
                </a>
                <a
                  href="#"
                  className="text-[#7A8699] text-[12px] hover:text-black"
                >
                  History
                </a>
              </div>

              {/* Icons */}
              <div className="flex space-x-4 text-gray-500">
                <img
                  src={folder}
                  alt="Folder"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src={notifications}
                  alt="Bell"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </nav>

            {/* <nav class="navbar navbar-expand">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <ul class="navbar-nav">
                <li class="nav-item small-screens-sidebar-link">
                  <a href="#" class="nav-link">
                    <i class="material-icons-outlined">menu</i>
                  </a>
                </li>
                <li class="nav-item nav-profile dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="../../assets/images/avatars/profile-image-1.png"
                      alt="profile image"
                    />
                    <span>Nancy Moore</span>
                    <i class="material-icons dropdown-icon">
                      keyboard_arrow_down
                    </i>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Calendar
                      <span class="badge badge-pill badge-info float-right">
                        2
                      </span>
                    </a>
                    <a class="dropdown-item" href="#">
                      Settings &amp Privacy
                    </a>
                    <a class="dropdown-item" href="#">
                      Switch Account
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="material-icons-outlined">mail</i>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="material-icons-outlined">notifications</i>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link" id="dark-theme-toggle">
                    <i class="material-icons-outlined">brightness_2</i>
                    <i class="material-icons">brightness_2</i>
                  </a>
                </li>
              </ul>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Tasks
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Reports
                    </a>
                  </li>
                </ul>
              </div>
              <div class="navbar-search">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      name="search"
                      id="nav-search"
                      placeholder="Search..."
                    />
                  </div>
                </form>
              </div>
            </nav> */}
          </div>
          <div class="page-content">
            <div class="page-info">
              {/* <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Apps</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav> */}
              {/* <div class="page-options">
                <a href="#" class="btn btn-secondary">
                  Settings
                </a>
                <a href="#" class="btn btn-primary">
                  Upgrade
                </a>
              </div> */}
            </div>
            {/* <div class="main-wrapper">
              <div class="row stats-row">
                <div class="col-lg-4 col-md-12">
                  <div class="card card-transparent stats-card">
                    <div class="card-body">
                      <div class="stats-info">
                        <h5 class="card-title">
                          $3,089.67
                          <span class="stats-change stats-change-danger">
                            -8%
                          </span>
                        </h5>
                        <p class="stats-text">Total revenue for last 20 days</p>
                      </div>
                      <div class="stats-icon change-danger">
                        <i class="material-icons">trending_down</i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="card card-transparent stats-card">
                    <div class="card-body">
                      <div class="stats-info">
                        <h5 class="card-title">
                          168,047
                          <span class="stats-change stats-change-success">
                            +16%
                          </span>
                        </h5>
                        <p class="stats-text">
                          Unique visitors in current period
                        </p>
                      </div>
                      <div class="stats-icon change-success">
                        <i class="material-icons">trending_up</i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="card card-transparent stats-card">
                    <div class="card-body">
                      <div class="stats-info">
                        <h5 class="card-title">
                          47,350
                          <span class="stats-change stats-change-success">
                            +12%
                          </span>
                        </h5>
                        <p class="stats-text">
                          Total investments in this month
                        </p>
                      </div>
                      <div class="stats-icon change-success">
                        <i class="material-icons">trending_up</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="alert alert-info no-m" role="alert">
                      Data has been updated 35 minutes ago, go to the reports
                      page to access data history.
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        Server Load
                        <span class="card-title-helper">Optimal</span>
                      </h5>
                      <div class="server-load row">
                        <div class="server-stat col-sm-4">
                          <p>167GB</p>
                          <span>Usage</span>
                        </div>
                        <div class="server-stat col-sm-4">
                          <p>320GB</p>
                          <span>Space</span>
                        </div>
                        <div class="server-stat col-sm-4">
                          <p>57.4%</p>
                          <span>CPU</span>
                        </div>
                      </div>
                      <div id="server-load-chart"></div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="card card-transactions">
                    <div class="card-body">
                      <h5 class="card-title">
                        Transactions
                        <a
                          href="#"
                          class="card-title-helper blockui-transactions"
                        >
                          <i class="material-icons">refresh</i>
                        </a>
                      </h5>
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Company</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0776</td>
                              <td>Sale Management</td>
                              <td>$18, 560</td>
                              <td>
                                <span class="badge badge-success">
                                  Finished
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>0759</td>
                              <td>Dropbox</td>
                              <td>$40, 672</td>
                              <td>
                                <span class="badge badge-warning">Waiting</span>
                              </td>
                            </tr>
                            <tr>
                              <td>0741</td>
                              <td>Social Media</td>
                              <td>$13, 378</td>
                              <td>
                                <span class="badge badge-info">
                                  In Progress
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>0740</td>
                              <td>Envato Market</td>
                              <td>$17, 456</td>
                              <td>
                                <span class="badge badge-info">
                                  In Progress
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>0735</td>
                              <td>Graphic Design</td>
                              <td>$29, 999</td>
                              <td>
                                <span class="badge badge-secondary">
                                  Canceled
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div class="page-footer">
            <div class="row">
              <div class="col-md-12">
                <span class="footer-text">2019 © stacks</span>
              </div>
            </div>
          </div> */}

          <div className="mt-6 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="  rounded-lg border shadow-lg p-4 bg-white relative"
              >
                {/* Edit & Close Buttons - Shifted Left */}
                <div className="absolute top-[-15px] right-[16px] flex space-x-2">
                  <button className="w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200">
                    <Pencil size={12} className="text-gray-600" />
                  </button>
                  <button className="w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200">
                    <X size={12} className="text-red-600" />
                  </button>
                </div>

                {/* Image & Title Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src={bottle}
                    alt="Plastic Waste"
                    className="w-[80px] h-[80px] rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-green-600 font-light text-xs mb-1">
                      2024-2025
                    </p>
                    <h4 className="text-base font-medium leading-tight">
                      Plastic credit - Cat I available
                    </h4>
                    <p className="text-gray-500 text-sm">Plastic Waste</p>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex justify-center items-center ">
                  <div className="mt-3 bg-[#F3F8FC] rounded-[6px] w-[327px] h-[258px] p-1">
                    <div className="grid grid-cols-2 gap-y-3 text-sm p-2 px-2">
                      <div className="text-left space-y-1">
                        <p className="font-medium text-xs">EPR Reg. Number</p>
                        <p className="text-gray-700">E1234567</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-medium text-xs">Recycler Type</p>
                        <p className="text-gray-700">Category I</p>
                      </div>
                      <div className="text-left space-y-1">
                        <p className="font-medium text-xs">Product Type</p>
                        <p className="text-gray-700">Recycler</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-medium text-xs">Credit Type</p>
                        <p className="text-gray-700">Recycling</p>
                      </div>
                      <div className="text-left space-y-1">
                        <p className="font-medium text-xs">Unit</p>
                        <p className="text-gray-700">Tonne</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-medium text-xs">Credit Available</p>
                        <p className="text-gray-700">1000</p>
                      </div>
                      <div className="text-left space-y-1">
                        <p className="font-medium text-xs">Minimum Purchase</p>
                        <p className="text-gray-700">150</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-medium text-xs">
                          Price per credit (Rs.)
                        </p>
                        <p className="text-gray-700">INR 1000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
