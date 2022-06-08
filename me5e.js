import ME5EItemSheet from "./module/sheets/ME5EItemSheet";

Hooks.once("init", function (){
    console.log("ME5e | Initializing Mass Effect 5e System");
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("me5e", ME5EItemSheet, {makeDefault: true});
}
)