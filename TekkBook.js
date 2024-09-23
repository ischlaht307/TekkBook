cfg.Portriat;
cfg.Dark;
// Importing modules which include our Pages!
app.Import("HomePage", "./Home.page.md.js");
app.Import("SettingsPage", "./Settings.page.md.js");
app.Import("CodePage", "./Code.page.md.js");
app.Import("StudioPage", "./Studio.page.md.js");
app.Import("ConfigurationPack", "./Config.packages.md.js");

class Main extends App
{      
    constructor(){
        super();
            this.app = ConfigurationPack;
            
//Page Instances and routing initializers-------------==========
            this.ho_Page= new HomePage(this);
            this.se_Page = new SettingsPage(this);
            this.st_Page = new StudioPage(this);
            this.co_Page = new CodePage(this);
            //this.curPage = this.app.	Preferences();
            this.Nav = {};
            this.Nav.history = [];

    }
    
    
    onStart()
    {
        this.app.AppSystem.init();
    
        this.rootLay = ui.addLayout("main","linear","fillxy, hcenter")
        this.createBar()
        this.createDrawer()

        this.viewPager = ui.addLayout( this.rootLay, "frame", "", 1, 0.8 )
        
        this.ho_Page.show();
    }


    showPage( name )
    {
        this.ho_Page.hide()
        this.se_Page.hide()

        switch( name ) {
            case "HomePage": this.ho_Page.show(); break
            case "SettingsPage": this.se_Page.show(); break
        }
    }



    createBar()
    {
        this.bar = ui.addAppBar( this.rootLay, "My App", "menu" )
        this.bar.setOnMenu( () => { this.drawer.show() } )
    }



    createDrawer()
    {
        this.layDrawer = ui.addLayout( null, "Linear" )

        this.txt = ui.addText(this.layDrawer, "My App", "vcenter,center,h5", 1, 0.1 )
        this.txt.backColor = "#2196f3";
        this.txt.textColor = "white";

        //(Icons can be found here - https://fonts.google.com/icons)
        var menus1 = [["home", "HomePage"], ["settings", "SettingsPage"]];
        this.lstMenu = ui.addList( this.layDrawer, menus1, "icon", 1 );
        this.lstMenu.setOnTouch( this.onMenu );

        var drawerWidth = platform.mobile ? 0.6 : 0.2;
        this.drawer = ui.addDrawer( this.layDrawer, "left", drawerWidth );
        this.drawer.setOnClose( ()=>{ console.log("onClose") } );
    }
    onMenu( title, body, icon, index )
    {
        this.drawer.hide();
        this.showPage( title );
    }
}



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//