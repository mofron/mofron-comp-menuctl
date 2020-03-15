/**
 * @file mofron-comp-menuctl/index.js
 * @brief menu controller component for mofron
 * @license MIT
 */
const Menu = require("mofron-comp-menu");

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (key-value) component config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("MenuCtl");

	    /* init config */
            this.confmng().add("contents", { type: "Component", list: true });

            /* set config */
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    this.menu(new Menu());
	    this.child(this.menu());
	    /* set select event */
	    let sel = (m,i,c) => {
                try {
                    let conts = c.contents();
		    for (let cidx in conts) {
                        conts[cidx].visible((cidx == i) ? true : false);
		    }
		} catch (e) {
                    console.error(e.stack);
                    throw e;
		}
	    }
            this.menu().selectEvent(sel,this);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * menu componnet setter/getter
     * 
     * @param (mofron-comp-menu) menu component
     *                           undefined: call as getter
     * @return (mofron-comp-menu) menu component
     * @type parameter
     */
    menu (prm) {
        try {
            return this.innerComp("menu", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * menu items setter/getter
     * 
     * @param (mixed) array: menu item list
     *                mofron.class.Component: menu item contents
     * @param (key-value) menu item config
     * @type parameter
     */
    menuItem (prm, cnf) {
        try {
            this.menu().item(prm, cnf);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * contents when menu is clicked
     * 
     * @param (mixed) array: contents list
     *                mofron.class.Component: contents component
     * @return (array) contents list
     * @type parameter
     */
    contents (prm) {
        try {
	    let ret = this.confmng("contents", prm);
	    if (undefined === ret) {
                this.child(prm);
	    }
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
