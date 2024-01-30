$(document).ready(function(){

    $name = $(".name");
    $c_term = $(".terminal");
    $home = $(".home");
    $home_ls = $(".home-ls");

    $about = $(".about");

    $links = $(".links");

    $educations = $(".educations");

    $certificates = $(".certificates");
    $certificates_ls = $(".certificates-ls");

    $python = $(".python");
    $js = $(".JS");
    $ml = $(".ML");

    $projects = $(".projects");
    $projects_ls = $(".projects-ls");
    $notes = $(".notes");
    $uber = $(".uber");
    $blogger = $(".blogger");

    $allterm = $(".allterm");
    $c_unfold = $(".unfold");
    $c_cancel = $(".cancel");
    $mini = $(".minimize");

    $err = $(".error");
    $skill = $(".skill");

    $add = $(".add");
    $add.hide(); //for animation
    $add.show(500); //for animation

    $name.hide(); //for animation
    $name.show(500); //for animation

    $term = $c_term.clone(true);
    $term.css("display","block");

    $cancel = $c_cancel.clone(true);
    $cancel.css("display","block");
    $term.append($cancel);
    $cancel.hide();

    $c_mini = $mini.clone(true);
    $c_mini.css("display","block");
    $term.append($c_mini);
    $c_mini.hide();

    $c_br = $(".br");
    $br = $c_br.clone(true);
    $term.append($br);
    $br.hide();

    $c_home = $home.clone(true);
    $term.append($c_home);
    $c_home.css("display","block");
    $c_home.hide();

    $unfold = $c_unfold.clone(true);
    $term.append($unfold);
    $unfold.css("display","flex");


    $allterm.append($term);

    $add.on("click",function(){

        $add.fadeToggle(20);
        $add.fadeToggle(20);

        if($allterm.children().length==0){
            $allterm.css("width","auto");
        }
        else{
            $allterm.css("width","50%");
        }

        $term = $c_term.clone(true);
        $term.css("display","block");

        $cancel = $c_cancel.clone(true);
        $c_mini = $mini.clone(true);
        $unfold = $c_unfold.clone(true);
        $c_home = $home.clone(true);

        $cancel.css("display","block");
        $term.append($cancel);
        $cancel.hide();

        $c_mini.css("display","block");
        $term.append($c_mini);
        $c_mini.hide();

        $br = $c_br.clone(true);
        $term.append($br);
        $br.hide();

        $term.append($c_home);
        $c_home.css("display","block");
        $c_home.hide();

        $term.append($unfold);
        $unfold.css("display","flex");    


        $allterm.append($term);
    });

    $(".unfold").on("click",function(){
        $("body").addClass("blur");
        $name.addClass("nameblur");

        $term = $(this).parent();

        $term.hide();//for animation

        $alltermchild = $allterm.children().not($term).hide();
        $term.css("width","800px");
        $term.css("height","95%");
        $term.show(500); //for animation

        $c_cancel = $term.find(".cancel");
        $c_mini = $term.find(".minimize");

        $add.hide();
        $(this).hide();

        $allchild = $term.children();
        $allchild.not(".unfold").show();
        
        $(".cmd_home").focus();
    });

    $(".minimize").on("click",function(){

        $("body").removeClass("blur"); //blurring background and name
        $name.removeClass("nameblur"); //blurring background and name

        $alltermchild = $allterm.children().show();

        $term = $(this).parent();
        $unfold = $term.find(".unfold");
        $term.css("width","200px");
        $term.css("height","20%");

        $name.hide();
        $name.show(500);//for animation
        $add.show(500);
        $unfold.show();


        $allchild = $term.children();
        $allchild.not(".unfold").hide();
    });

    $(".allterm").on("click", ".cancel", function(){
        $("body").removeClass("blur"); //blurring background and name
        $name.removeClass("nameblur"); //blurring background and name

        $(this).parent().remove();
        $alltermchild = $allterm.children().show();
        if($alltermchild.length==1 || $alltermchild.length == 0){
            $allterm.css("width","auto");
        }

        $name.hide();
        $name.show(500);
        $add.show(500);
    });
    
    $(".cmd_home").on("keypress",function(event){
        if(event.which===13){

            $vari = $(this).val();
            $vari = $vari.toLowerCase();

            if($vari == "ls"){

                $(this).attr("disabled","disabled");
                $c_home_ls = $home_ls.clone(true);
                $c_home_ls.css("display","flex");
                $term.append($c_home_ls);

                $c_home = $home.clone(true);
                $c_home.css("value","");
                $term.append($c_home);
                $c_home.css("display","block");
                $(".cmd_home").focus();
            }
            else if($vari==="cat about.txt"){
                $(this).attr("disabled","disabled");
                $c_about = $about.clone(true);
                $term.append($c_about);
                $c_about.css("display","block");

                $c_home = $home.clone(true);
                $c_home.attr("value","");
                $term.append($c_home);
                $c_home.css("display","block");
                $(".cmd_home").focus();
            }
            else if($vari==="cat skills.txt"){
                $(this).attr("disabled","disabled");
                $c_skill = $skill.clone(true);
                $c_skill.css("display","block");
                $term.append($c_skill);

                $c_home = $home.clone(true);
                $c_home.attr("value","");
                $term.append($c_home);
                $c_home.css("display","block");
                $(".cmd_home").focus();
            }
            else if($vari==="cat links.txt"){
                $(this).attr("disabled","disabled");
                $c_links = $links.clone(true);
                $c_links.css("display","flex");
                $term.append($c_links);
                
                $c_home = $home.clone(true);
                $c_home.attr("value","");
                $term.append($c_home);
                $c_home.css("display","block");
                $(".cmd_home").focus();
            }
            else if($vari==="cat educations.txt"){
                $(this).attr("disabled","disabled");
                $c_educations = $educations.clone(true);
                $c_educations.css("display","flex");
                $term.append($c_educations);
                
                $c_home = $home.clone(true);
                $c_home.attr("value","");
                $term.append($c_home);
                $c_home.css("display","block");
                $(".cmd_home").focus();
            }
            else if($vari === "cd projects"){
                $(this).attr("disabled","disabled");
                $c_projects = $projects.clone(true);
                $c_projects.css("display","block");
                $c_projects.attr("value","");
                $term.append($c_projects);
                $(".cmd_projects").focus();
            }
            else if($vari === "cd certificates"){
                $(this).attr("disabled","disabled");
                $c_certificates = $certificates.clone(true);
                $c_certificates.css("display","block");
                $c_certificates.attr("value","");
                $term.append($c_certificates);
                $(".cmd_certificates").focus();
            }
            else if($vari == "cd--"){
                $(this).attr("disabled","disabled");
                $c_home = $home.clone(true);
                $c_home.css("display","block");
                $term.append($c_home);
                $(".cmd_home").focus();
            }
            else{
                $(this).attr("disabled","disabled");
                $c_err = $err.clone();
                $c_err.css("display","block");
                $term.append($c_err);

                $c_home = $home.clone(true);
                $c_home.attr("value","");
                $term.append($c_home);
                $c_home.css("display","block");
                $(".cmd_home").focus();
            }
        }
    });
    $(".cmd_projects").on("keypress",function(event){
        if(event.which==13){

            $vari = $(this).val();
            $vari = $vari.toLowerCase();

            if($vari == "ls"){
                $(this).attr("disabled","disabled");
                $c_projects_ls = $projects_ls.clone(true);
                $c_projects_ls.css("display","flex");
                $term.append($c_projects_ls);

                $c_projects = $projects.clone(true);
                $c_projects.css("value","");
                $term.append($c_projects);
                $c_projects.css("display","block");
                $(".cmd_projects").focus();
            }
            else if($vari==="cat notes_application.txt"){
                $(this).attr("disabled","disabled");
                $c_notes = $notes.clone(true);
                $c_notes.css("display","block");
                $term.append($c_notes);
               
                $c_projects = $projects.clone(true);
                $c_projects.css("value","");
                $term.append($c_projects);
                $c_projects.css("display","block");
                $(".cmd_projects").focus();
            }
            else if($vari==="cat blogger.txt"){
                $(this).attr("disabled","disabled");
                $c_blog = $blogger.clone(true);
                $c_blog.css("display","block");
                $term.append($c_blog);
                
                $c_projects = $projects.clone(true);
                $c_projects.css("value","");
                $term.append($c_projects);
                $c_projects.css("display","block");
                $(".cmd_projects").focus();
            }
            else if($vari==="cat uber_data_analysis.txt"){
                $(this).attr("disabled","disabled");
                $c_uber = $uber.clone(true);
                $c_uber.css("display","block");
                $term.append($c_uber);
                
                $c_projects = $projects.clone(true);
                $c_projects.css("value","");
                $term.append($c_projects);
                $c_projects.css("display","block");
                $(".cmd_projects").focus();
            }
            else if($vari == "cd--"){
                $(this).attr("disabled","disabled");
                $c_home = $home.clone(true);
                $c_home.css("display","block");
                $term.append($c_home);
                $(".cmd_home").focus();
            }
            else{
                $(this).attr("disabled","disabled");
                $c_err = $err.clone();
                $c_err.css("display","block");
                $term.append($c_err);
                $c_projects = $projects.clone(true);
                $c_projects.css("value","");
                $term.append($c_projects);
                $c_projects.css("display","block");
                $(".cmd_projects").focus();
            }
        }
    });
    $(".cmd_certificates").on("keypress",function(event){
        if(event.which==13){
            $vari = $(this).val();
            $vari = $vari.toLowerCase();
            if($vari == "ls"){
                $(this).attr("disabled","disabled");
                $c_certificates_ls = $certificates_ls.clone(true);
                $c_certificates_ls.css("display","flex");
                $term.append($c_certificates_ls);

                $c_certificates = $certificates.clone(true);
                $c_certificates.css("value","");
                $term.append($c_certificates);
                $c_certificates.css("display","block");
                $(".cmd_cetificates").focus();
            }
            else if($vari==="cat python.txt"){
                $(this).attr("disabled","disabled");
                $c_python = $python.clone(true);
                $c_python.css("display","block");
                $term.append($c_python);
                
                $c_certificates = $certificates.clone(true);
                $c_certificates.css("value","");
                $term.append($c_certificates);
                $c_certificates.css("display","block");
                $(".cmd_cetificates").focus();
            }
            else if($vari==="cat javascript.txt"){
                $(this).attr("disabled","disabled");
                $c_js = $js.clone(true);
                $c_js.css("display","block");
                $term.append($c_js);
                
                $c_certificates = $certificates.clone(true);
                $c_certificates.css("value","");
                $term.append($c_certificates);
                $c_certificates.css("display","block");
                $(".cmd_cetificates").focus();
            }
            else if($vari==="cat machine_learning.txt"){
                $(this).attr("disabled","disabled");
                $c_ml = $ml.clone(true);
                $c_ml.css("display","block");
                $term.append($c_ml);
                
                $c_certificates = $certificates.clone(true);
                $c_certificates.css("value","");
                $term.append($c_certificates);
                $c_certificates.css("display","block");
                $(".cmd_cetificates").focus();
            }
            else if($vari == "cd--"){
                $(this).attr("disabled","disabled");
                $c_home = $home.clone(true);
                $c_home.css("display","block");
                $term.append($c_home);
                $(".cmd_home").focus();
            }
            else{
                $(this).attr("disabled","disabled");
                $c_err = $err.clone();
                $c_err.css("display","block");
                $term.append($c_err);

                $c_certificates = $certificates.clone(true);
                $c_certificates.css("value","");
                $term.append($c_certificates);
                $c_certificates.css("display","block");
                $(".cmd_certificates").focus();
            }
        }
    });
});