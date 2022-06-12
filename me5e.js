import { me5e } from "./module/config.js";
import ME5EItemSheet from "./module/sheets/ME5EItemSheet.js";

Hooks.once("init", function(){
    console.log("ME5e | Initializing Mass Effect 5e System");

    CONFIG.me5e = me5e;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("me5e", ME5EItemSheet, {makeDefault: true});
});