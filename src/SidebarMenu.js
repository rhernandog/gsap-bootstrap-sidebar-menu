import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// gsap
import { TweenLite, TimelineLite } from "gsap";
import "./styles/main.scss";

const menuItems = [
  { type: "link", url: "/", title: "Dashboard", icon: "fa-th-large" },
  { type: "link", url: "/account", title: "Account", icon: "fa-user" },
  { type: "divider", title: "divider-1" },
  { type: "link", url: "/products", title: "Products", icon: "fa-box" },
  { type: "link", url: "/stores", title: "Stores", icon: "fa-store-alt" },
  { type: "link", url: "/categories", title: "Categories", icon: "fa-tags" },
  { type: "divider", title: "divider-2" },
  { type: "link", url: "/settings", title: "Settings", icon: "fa-tools" },
];

class SidebarMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.drawer = null;
    this.menuBtn = null;
    this.contentVeil = null;
    
    this.drawerTween = new TimelineLite({
      paused: true
    });
    
    this.toggleContentVeil = this.toggleContentVeil.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.veilClickHandler = this.veilClickHandler.bind(this);
  }

  toggleContentVeil() {
    TweenLite.set( this.contentVeil, {
      autoAlpha: this.drawerTween.reversed() ? 0 : 0.25
    });
  }

  toggleDrawer() {
    this.drawerTween.reversed( !this.drawerTween.reversed() );
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  veilClickHandler(e) {
    e.stopPropagation();
    this.toggleDrawer();
  }

  componentDidMount() {
    this.drawerTween
      .call(this.toggleContentVeil)
      .to( this.drawer, 0.25, {
        x: 0, ease: Power1.easeOut
      })
      .to( this.menuBtn, 0.25, {
        x: 170, ease: Power1.easeOut
      }, 0)
      .reverse();
  }

  render() {
    return <nav aria-label="main-menu">

      <div className="container-fluid menu-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="h2 text-right mt-2">Shopping List App</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="drawer"
        ref={ e => this.drawer = e }
        aria-expanded={this.state.menuOpen}
        data-testid="menuDrawer"
      >
        <div className="drawer-header">
          <h5 className="pl-3">Menu</h5>
        </div>

        <div className="menu-container py-3"
          role="menu-bar"
        >
          {
            menuItems.map( e => {
              if( e.type == "divider" ) {
                return <div className="divider" key={e.title}></div>;
              } else {
                return <NavLink key={e.title}
                  exact
                  to={e.url}
                  className="menu-item"
                  onClick={this.toggleDrawer}
                  role="menu-item"
                  data-testid={ e.testId ? e.testId : "" }
                >
                  { e.icon ? <i className={`fas ${e.icon} mr-3`}></i> : null }{e.title}
                </NavLink>;
              }
            })
          }
        </div>

      </div>

      <button className="btn shadow-sml menu-button"
        ref={ e => this.menuBtn = e }
        onClick={ this.toggleDrawer }
        role="button"
        data-testid="menuBtn"
      >
        <i className={`fas ${this.state.menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      <div className="content-veil"
        ref={ e => this.contentVeil = e }
        onClick={ this.veilClickHandler }
        data-testid="contentVeil"
      ></div>

    </nav>;
  }

}

export default SidebarMenu;
