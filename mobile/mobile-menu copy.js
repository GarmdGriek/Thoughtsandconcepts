function mobilemenu() {
    //windows size test
        var menuMainId = ["juli-list","concept-list"];
        var menuItemsUL =["menu-blog","menu-Concepts"];
        for (let index = 0; index < menuMainId.length; index++) {
            var menuList = document.getElementById(menuMainId[index]); 
            var menuUlist =document.createElement("ul");
            menuUlist.setAttribute("id", menuItemsUL[index]);
            menuList.appendChild(menuUlist);           
        }
        var headerText =["menu","Enquiries"]; //Header titles and links
        var headerLink=["<a href=/mobile/mobile-menu.html>","<a href=mailto:nicolai.imset+website@gmail.com?subject=Enquiry target=\"_blank\">"]; //Header titles and links
        var menuBlog =["Creating the blog", "Make the navigation easy","Making Decisions","Weekend!!!","Menu work","Redesign","Javascript simplification", "It's been a few days","vacation","Home sweet home"]; //blog titles and links
        var menublogLink=["<a href=/blogpost/20200701-creating-the-blog.html>", "<a href=/blogpost/20200702-make-the-navigation-easy.html>","<a href=/blogpost/20200703-making-decisions.html>","<a href=/blogpost/20200704-weekend.html>","<a href=/blogpost/20200704-menu-work.html>","<a href=/blogpost/20200706-redesign.html>","<a href=/blogpost/20200708-javascript-simplification.html>","<a href=/blogpost/20200716-few-days.html>","<a href=/blogpost/20200717-vacation.html>","<a href=/blogpost/20200725-home-again.html>"]; //blog titles and links        
        var menuConceptsText =["<h3>Website plans</h3>"]; //Ideas and plans titles and links
        var menuConceptsLink=["<a href=/blogpost/20200703-website-plans.html>"]; //Ideas and plans titles and links
        var menuMainId = ["header-nav","menu-blog","menu-Concepts"]; //ids being used on site
        var menuItems =[headerText,menuBlog,menuConceptsText]; //array in array for titles and links
        var menuLinks =[headerLink,menublogLink,menuConceptsLink]; //array in array for titles and links

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
    };
