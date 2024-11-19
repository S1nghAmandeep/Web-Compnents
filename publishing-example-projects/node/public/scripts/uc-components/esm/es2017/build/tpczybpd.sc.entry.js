/*! Built with http://stenciljs.com */
import { h } from '../mycomponent.core.js';

class Spinner {
    render() {
        return (h("div", { class: "loader" }));
    }
    static get is() { return "uc-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".loader.sc-uc-spinner{position:relative;width:120px;height:120px;border-radius:50%;-webkit-box-shadow:inset 0 0 20px -5px hsla(0,0%,51.4%,.5),inset 0 -40px 40px -20px rgba(255,235,235,.5);box-shadow:inset 0 0 20px -5px hsla(0,0%,51.4%,.5),inset 0 -40px 40px -20px rgba(255,235,235,.5);background:linear-gradient(#ff3d00 120px,transparent 0) no-repeat;background-position:0 120px;-webkit-animation:fillLq 10s linear infinite alternate;animation:fillLq 10s linear infinite alternate}.loader.sc-uc-spinner:before{position:absolute;content:\"\";width:40%;height:25%;top:20px;left:10px;background:hsla(0,0%,100%,.1);border-radius:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}\@-webkit-keyframes fillLq{0%,10%{background-position:0 120px}90%,to{background-position:0 0}}\@keyframes fillLq{0%,10%{background-position:0 120px}90%,to{background-position:0 0}}"; }
}

export { Spinner as UcSpinner };
