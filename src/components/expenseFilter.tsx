import ExpenseTable from "./expenseTable";
const ExpenseFilter = () => {
  return (
    <>
      <div className="left-side-menu">
        <div className="h-100" data-simplebar>
          <div className="user-box text-center">
            <img
              src="src/assets/images/users/user-1.jpg"
              alt="user-img"
              title="Mat Helme"
              className="rounded-circle img-thumbnail avatar-md"
            />
            <div className="dropdown">
              <a
                href="#"
                className="user-name dropdown-toggle h5 mt-2 mb-1 d-block"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nowak Helme
              </a>
              <div className="dropdown-menu user-pro-dropdown">
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <i className="fe-user me-1"></i>
                  <span>My Account</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <i className="fe-settings me-1"></i>
                  <span>Settings</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <i className="fe-lock me-1"></i>
                  <span>Lock Screen</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <i className="fe-log-out me-1"></i>
                  <span>Logout</span>
                </a>
              </div>
            </div>

            <p className="text-muted left-user-info">Admin Head</p>

            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-muted left-user-info">
                  <i className="mdi mdi-cog"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="#">
                  <i className="mdi mdi-power"></i>
                </a>
              </li>
            </ul>
          </div>

          <div id="sidebar-menu">
            <ul id="side-menu">
              <li className="menu-title">Navigation</li>

              <li>
                <a href="index.html">
                  <i className="mdi mdi-view-dashboard-outline"></i>
                  <span className="badge bg-success rounded-pill float-end">
                    9+
                  </span>
                  <span> Dashboard </span>
                </a>
              </li>

              <li className="menu-title mt-2">Apps</li>

              <li>
                <a href="apps-calendar.html">
                  <i className="mdi mdi-calendar-blank-outline"></i>
                  <span> Calendar </span>
                </a>
              </li>

              <li>
                <a href="apps-chat.html">
                  <i className="mdi mdi-forum-outline"></i>
                  <span> Chat </span>
                </a>
              </li>

              <li>
                <a href="#email" data-bs-toggle="collapse">
                  <i className="mdi mdi-email-outline"></i>
                  <span> Email </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="email">
                  <ul className="nav-second-level">
                    <li>
                      <a href="email-inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="email-templates.html">Email Templates</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarTasks" data-bs-toggle="collapse">
                  <i className="mdi mdi-clipboard-outline"></i>
                  <span> Tasks </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarTasks">
                  <ul className="nav-second-level">
                    <li>
                      <a href="task-kanban-board.html">Kanban Board</a>
                    </li>
                    <li>
                      <a href="task-details.html">Details</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="apps-projects.html">
                  <i className="mdi mdi-briefcase-variant-outline"></i>
                  <span> Projects </span>
                </a>
              </li>

              <li>
                <a href="#contacts" data-bs-toggle="collapse">
                  <i className="mdi mdi-book-open-page-variant-outline"></i>
                  <span> Contacts </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="contacts">
                  <ul className="nav-second-level">
                    <li>
                      <a href="contacts-list.html">Members List</a>
                    </li>
                    <li>
                      <a href="contacts-profile.html">Profile</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-title mt-2">Custom</li>

              <li>
                <a href="#sidebarAuth" data-bs-toggle="collapse">
                  <i className="mdi mdi-account-multiple-plus-outline"></i>
                  <span> Auth Pages </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarAuth">
                  <ul className="nav-second-level">
                    <li>
                      <a href="auth-login.html">Log In</a>
                    </li>
                    <li>
                      <a href="auth-register.html">Register</a>
                    </li>
                    <li>
                      <a href="auth-recoverpw.html">Recover Password</a>
                    </li>
                    <li>
                      <a href="auth-lock-screen.html">Lock Screen</a>
                    </li>
                    <li>
                      <a href="auth-confirm-mail.html">Confirm Mail</a>
                    </li>
                    <li>
                      <a href="auth-logout.html">Logout</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarExpages" data-bs-toggle="collapse">
                  <i className="mdi mdi-file-multiple-outline"></i>
                  <span> Extra Pages </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarExpages">
                  <ul className="nav-second-level">
                    <li>
                      <a href="pages-starter.html">Starter</a>
                    </li>
                    <li>
                      <a href="pages-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="pages-timeline.html">Timeline</a>
                    </li>
                    <li>
                      <a href="pages-invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="pages-faqs.html">FAQs</a>
                    </li>
                    <li>
                      <a href="pages-gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="pages-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="pages-500.html">Error 500</a>
                    </li>
                    <li>
                      <a href="pages-maintenance.html">Maintenance</a>
                    </li>
                    <li>
                      <a href="pages-coming-soon.html">Coming Soon</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarLayouts" data-bs-toggle="collapse">
                  <i className="mdi mdi-dock-window"></i>
                  <span> Layouts </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarLayouts">
                  <ul className="nav-second-level">
                    <li>
                      <a href="layouts-horizontal.html">Horizontal</a>
                    </li>
                    <li>
                      <a href="layouts-preloader.html">Preloader</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-title mt-2">Components</li>

              <li>
                <a href="#sidebarBaseui" data-bs-toggle="collapse">
                  <i className="mdi mdi-briefcase-outline"></i>
                  <span> Base UI </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarBaseui">
                  <ul className="nav-second-level">
                    <li>
                      <a href="ui-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="ui-cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="ui-avatars.html">Avatars</a>
                    </li>
                    <li>
                      <a href="ui-tabs-accordions.html">Tabs & Accordions</a>
                    </li>
                    <li>
                      <a href="ui-modals.html">Modals</a>
                    </li>
                    <li>
                      <a href="ui-progress.html">Progress</a>
                    </li>
                    <li>
                      <a href="ui-notifications.html">Notifications</a>
                    </li>
                    <li>
                      <a href="ui-offcanvas.html">Offcanvas</a>
                    </li>
                    <li>
                      <a href="ui-placeholders.html">Placeholders</a>
                    </li>
                    <li>
                      <a href="ui-spinners.html">Spinners</a>
                    </li>
                    <li>
                      <a href="ui-images.html">Images</a>
                    </li>
                    <li>
                      <a href="ui-carousel.html">Carousel</a>
                    </li>
                    <li>
                      <a href="ui-video.html">Embed Video</a>
                    </li>
                    <li>
                      <a href="ui-dropdowns.html">Dropdowns</a>
                    </li>
                    <li>
                      <a href="ui-tooltips-popovers.html">
                        Tooltips & Popovers
                      </a>
                    </li>
                    <li>
                      <a href="ui-general.html">General UI</a>
                    </li>
                    <li>
                      <a href="ui-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="ui-grid.html">Grid</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="widgets.html">
                  <i className="mdi mdi-gift-outline"></i>
                  <span> Widgets </span>
                </a>
              </li>

              <li>
                <a href="#sidebarExtendedui" data-bs-toggle="collapse">
                  <i className="mdi mdi-layers-outline"></i>
                  <span className="badge bg-info float-end">Hot</span>
                  <span> Extended UI </span>
                </a>
                <div className="collapse" id="sidebarExtendedui">
                  <ul className="nav-second-level">
                    <li>
                      <a href="extended-range-slider.html">Range Slider</a>
                    </li>
                    <li>
                      <a href="extended-sweet-alert.html">Sweet Alert</a>
                    </li>
                    <li>
                      <a href="extended-draggable-cards.html">
                        Draggable Cards
                      </a>
                    </li>
                    <li>
                      <a href="extended-tour.html">Tour Page</a>
                    </li>
                    <li>
                      <a href="extended-notification.html">Notification</a>
                    </li>
                    <li>
                      <a href="extended-treeview.html">Tree View</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarIcons" data-bs-toggle="collapse">
                  <i className="mdi mdi-shield-outline"></i>
                  <span> Icons </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarIcons">
                  <ul className="nav-second-level">
                    <li>
                      <a href="icons-feather.html">Feather Icons</a>
                    </li>
                    <li>
                      <a href="icons-mdi.html">Material Design Icons</a>
                    </li>
                    <li>
                      <a href="icons-dripicons.html">Dripicons</a>
                    </li>
                    <li>
                      <a href="icons-font-awesome.html">Font Awesome 5</a>
                    </li>
                    <li>
                      <a href="icons-themify.html">Themify</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarForms" data-bs-toggle="collapse">
                  <i className="mdi mdi-texture"></i>
                  <span> Forms </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarForms">
                  <ul className="nav-second-level">
                    <li>
                      <a href="forms-elements.html">General Elements</a>
                    </li>
                    <li>
                      <a href="forms-advanced.html">Advanced</a>
                    </li>
                    <li>
                      <a href="forms-validation.html">Validation</a>
                    </li>
                    <li>
                      <a href="forms-wizard.html">Wizard</a>
                    </li>
                    <li>
                      <a href="forms-quilljs.html">Quilljs Editor</a>
                    </li>
                    <li>
                      <a href="forms-pickers.html">Picker</a>
                    </li>
                    <li>
                      <a href="forms-file-uploads.html">File Uploads</a>
                    </li>
                    <li>
                      <a href="forms-x-editable.html">X Editable</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarTables" data-bs-toggle="collapse">
                  <i className="mdi mdi-table"></i>
                  <span> Tables </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarTables">
                  <ul className="nav-second-level">
                    <li>
                      <a href="tables-basic.html">Basic Tables</a>
                    </li>
                    <li>
                      <a href="tables-datatables.html">Data Tables</a>
                    </li>
                    <li>
                      <a href="tables-editable.html">Editable Tables</a>
                    </li>
                    <li>
                      <a href="tables-responsive.html">Responsive Tables</a>
                    </li>
                    <li>
                      <a href="tables-tablesaw.html">Tablesaw Tables</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarCharts" data-bs-toggle="collapse">
                  <i className="mdi mdi-chart-donut-variant"></i>
                  <span> Charts </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarCharts">
                  <ul className="nav-second-level">
                    <li>
                      <a href="charts-flot.html">Flot Charts</a>
                    </li>
                    <li>
                      <a href="charts-morris.html">Morris Charts</a>
                    </li>
                    <li>
                      <a href="charts-chartjs.html">Chartjs Charts</a>
                    </li>
                    <li>
                      <a href="charts-chartist.html">Chartist Charts</a>
                    </li>
                    <li>
                      <a href="charts-sparklines.html">Sparkline Charts</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarMaps" data-bs-toggle="collapse">
                  <i className="mdi mdi-map-outline"></i>
                  <span> Maps </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarMaps">
                  <ul className="nav-second-level">
                    <li>
                      <a href="maps-google.html">Google Maps</a>
                    </li>
                    <li>
                      <a href="maps-vector.html">Vector Maps</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#sidebarMultilevel" data-bs-toggle="collapse">
                  <i className="mdi mdi-share-variant"></i>
                  <span> Multi Level </span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="collapse" id="sidebarMultilevel">
                  <ul className="nav-second-level">
                    <li>
                      <a href="#sidebarMultilevel2" data-bs-toggle="collapse">
                        Second Level <span className="menu-arrow"></span>
                      </a>
                      <div className="collapse" id="sidebarMultilevel2">
                        <ul className="nav-second-level">
                          <li>
                            <a href="javascript: void(0);">Item 1</a>
                          </li>
                          <li>
                            <a href="javascript: void(0);">Item 2</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#sidebarMultilevel3" data-bs-toggle="collapse">
                        Third Level <span className="menu-arrow"></span>
                      </a>
                      <div className="collapse" id="sidebarMultilevel3">
                        <ul className="nav-second-level">
                          <li>
                            <a href="javascript: void(0);">Item 1</a>
                          </li>
                          <li>
                            <a
                              href="#sidebarMultilevel4"
                              data-bs-toggle="collapse"
                            >
                              Item 2 <span className="menu-arrow"></span>
                            </a>
                            <div className="collapse" id="sidebarMultilevel4">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="javascript: void(0);">Item 1</a>
                                </li>
                                <li>
                                  <a href="javascript: void(0);">Item 2</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <ExpenseTable />
    </>
  );
};

export default ExpenseFilter;
