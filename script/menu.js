function menu() {
    //windows size test
    var w = window.innerWidth;
    if (w>1000){
        var menuMainId = ["September-list","August-list","juli-list","presence-list","uds-list","concept-list","interest-list"]
        var menuItemsUL =["menu-september","menu-august","menu-juli","menu-presence","menu-unstructured","menu-Concepts","menu-Interests"]
        var menuHeading =["September","August","July","My Presence", "Unstructured Data", "Concepts", "Interests"]
        for (let i = 0; i < menuMainId.length; i++) {
            var mainId = document.getElementById("menu-left");
            var mainList = document.createElement("li");
            mainList.setAttribute("id", menuMainId[i]);
            mainId.appendChild(mainList);
            var menuList = document.getElementById(menuMainId[i]); 
            var menuUlist = document.createElement("h4");
            menuUlist.setAttribute("id", menuItemsUL[i]+"h4");
            menuList.appendChild(menuUlist);
            document.getElementById(menuItemsUL[i]+"h4").innerHTML = menuHeading[i]; 
            menuUlist = document.createElement("ul");
            menuUlist.setAttribute("id", menuItemsUL[i]);
            menuList.appendChild(menuUlist);
          }
        var headerText =["Home","About me","Enquiries","Sign in"]; //Header titles and links
        var headerLink=["<a href=/index.html>","<a href=/about.html>","<a href=mailto:nicolai.imset+website@gmail.com?subject=Enquiry target=\"_blank\">","<a href=/login.html>"]; //Header titles and links
        var menuJuli=["01. Creating the blog", "02. Make the navigation easy","03. Making Decisions","04. Weekend!!!","04. Menu work","06. Redesign","08. Javascript simplification", "16. It's been a few days","17. vacation","25. Home sweet home"]; //blog titles and links
        var menuJuliLink=["<a href=/blogpost/20200701-creating-the-blog.html>", "<a href=/blogpost/20200702-make-the-navigation-easy.html>","<a href=/blogpost/20200703-making-decisions.html>","<a href=/blogpost/20200704-weekend.html>","<a href=/blogpost/20200704-menu-work.html>","<a href=/blogpost/20200706-redesign.html>","<a href=/blogpost/20200708-javascript-simplification.html>","<a href=/blogpost/20200716-few-days.html>","<a href=/blogpost/20200717-vacation.html>","<a href=/blogpost/20200725-home-again.html>"]; //blog titles and links
        var menuAugust=["13. Back to work"]; //blog titles and links
        var menuAugustLink=["<a href=/blogpost/20200813-back-to-work.html>"]; //blog titles and links
        var menuSeptember=["2. A month and a Tesla"]; //blog titles and links
        var menuSeptemberLink=["<a href=/blogpost/20200902-a-month-and-a-tesla.html>"]; //blog titles and links
        var menuPresenceText =["Twitter", "LinkedIn","Facebook","StackOverflow","FreeCodeCamp.org"]; //Social presence titles and links
        var menuPresenceLink=["<a href=https://twitter.com/NicolaiImset target=\"_blank\">", "<a href=https://www.linkedin.com/in/nicolaiimset/ target=\"_blank\">","<a href=https://www.facebook.com/nicolai.imset target=\"_blank\">","<a href=https://stackoverflow.com/users/13789221/nicolai-imset target=\"_blank\">","<a href=https://www.freecodecamp.org/fccd7f7b8c8-3869-4fe1-b908-d364e64f59e3 target=\"_blank\">"]; //Social presence titles and links
        var menuUnstructuredText=["Dell+Cloudera","PowerScale","ECS","DataIQ","Streaming"]; //dell UDS titles and links
        var menuUnstructuredLink=["<a href=/blogpost/20200706-delltech-uds-cloudera.html>","<a href=https://www.delltechnologies.com/en-us/storage/powerscale.htm target=\"_blank\">","<a href=https://www.delltechnologies.com/en-us/storage/ecs/index.htm target=\"_blank\">","<a href=https://www.delltechnologies.com/en-us/storage/dataiq.htm target=\"_blank\">", "<a href=https://www.delltechnologies.com/en-us/storage/streaming-data-platform.htm target=\"blank\">"]; //dell UDS titles and links
        var menuConceptsText =["Website plans"]; //Ideas and plans titles and links
        var menuConceptsLink=["<a href=/blogpost/20200703-website-plans.html>"]; //Ideas and plans titles and links
        var menuInterestsText =["Family History","Electric Vehicles","Folding @home - Covid19","Gmail hacks"]; //Hobbies and interests title and links
        var menuInterestsLink=["<a href=https://www.myheritage.no/site-69479721/imset target=\"_blank\">","<a href=https://www.lelandwest.com/history-of-the-electric-vehicle.cfm#:~:text=One%20known%20electric%20motor%20was,used%20to%20drive%20a%20carriage. target=\"_blank\">","<a href=https://stats.foldingathome.org/donor/GarmdGriek target=\"_blank\">","<a href=https://smallbusiness.chron.com/gmail-email-address-tricks-41619.html target=\"_blank\">"]; //Hobbies and interests title and links
        var menuMainId = ["header-nav","menu-september","menu-august","menu-juli","menu-presence","menu-unstructured","menu-Concepts","menu-Interests"]; //ids being used on site
        var menuItems =[headerText,menuSeptember,menuAugust,menuJuli,menuPresenceText,menuUnstructuredText,menuConceptsText,menuInterestsText]; //array in array for titles and links
        var menuLinks =[headerLink,menuSeptemberLink,menuAugustLink,menuJuliLink,menuPresenceLink,menuUnstructuredLink,menuConceptsLink,menuInterestsLink]; //array in array for titles and links

        for (let mainIndex = 0; mainIndex < menuItems.length; mainIndex++) {
            var title=menuItems[mainIndex];
            var link=menuLinks[mainIndex];
            var menuId="";
            for (let index = 0; index < title.length; index++) {
                menuId= mainIndex+""+index;
                var menuList = document.getElementById(menuMainId[mainIndex]);
                var listItem = document.createElement("li");
                listItem.setAttribute("id", menuId);
                listItem.appendChild(document.createTextNode("Loading ..."));
                menuList.appendChild(listItem);
                document.getElementById(menuId).innerHTML = link[index]+" "+title[index];
            }   
                
        }

    } else {
        var headerText =["menu","Enquiries"]; //Header titles and links
        var headerLink=["<a href=/mobile/mobile-menu.html>","<a href=mailto:nicolai.imset+website@gmail.com?subject=Enquiry target=\"_blank\">"]; //Header titles and links
        var menuMainId = ["header-nav"]; //ids being used on site
        var menuItems =[headerText]; //array in array for titles and links
        var menuLinks =[headerLink]; //array in array for titles and links

        for (let mainIndex = 0; mainIndex < menuItems.length; mainIndex++) {
            var title=menuItems[mainIndex];
            var link=menuLinks[mainIndex];
            var menuId="";
            for (let index = 0; index < title.length; index++) {
                menuId= mainIndex+""+index;
                var menuList = document.getElementById(menuMainId[mainIndex]);
                var listItem = document.createElement("li");
                listItem.setAttribute("id", menuId);
                listItem.appendChild(document.createTextNode("Loading ..."));
                menuList.appendChild(listItem);
                document.getElementById(menuId).innerHTML = link[index]+" "+title[index];
            }   
                
        }
    }
};
