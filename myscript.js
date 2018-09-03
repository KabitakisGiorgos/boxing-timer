var rounds=12,preperation=10,round=180,warning=10,rest=60;
var intervalId=0;
var Timer=0;
var paused=0;
var audioStart=new Audio('start_ring.mp3');
var audioStop=new Audio('stop_ring.mp3');
var audioWarning=new Audio('warning.mp3');

function openNav() {
    if($("#about").css("left") =="0px"){
        $("#about").css({"left":"-280px","opacity":"0.5","cursor":"context-menu"});
        $("#blog").css({"left":"-280px","opacity":"0.5","cursor":"context-menu"});
        $("#projects").css({"left":"-280px","opacity":"0.5","cursor":"context-menu"});
        $("#contact").css({"left":"-280px","opacity":"0.5","cursor":"context-menu"});
        $("#last").css({"left":"-280px","opacity":"0.5","cursor":"context-menu"});
        //set again sum of time
        $(".tablo").css('background-color','#222');
        $(".timer").css("color","white");
        $(".timer").html($("#time").html());
        $(".dynamic-content").html("");
        $(".dynamic-content2").html("");
        $(".circle").html("1");
        $(".circle2").css({'background-color':"white"});
        //call an angular expression again
        $("#start").prop('disabled',false);
    }
    else{
        $("#about").css({"left":"0px","opacity":"1","cursor":"pointer"});
        $("#blog").css({"left":"0px","opacity":"1","cursor":"pointer"});
        $("#projects").css({"left":"0px","opacity":"1","cursor":"pointer"});
        $("#contact").css({"left":"0px","opacity":"1","cursor":"pointer"});
        $("#last").css({"left":"0px","opacity":"1","cursor":"pointer"});
        $("#start").prop('disabled',true);
    }
}


function SetRounds(){
    if($("#about").css("left")=="-280px"){
        return;
    }
    $(".circle2").css({'background-color':"white"});
    $(".dynamic-content").html("");
    $(".dynamic-content2").html("");

    $(".circle").html("<div style='color:white;font-size:30px;'>Rounds</div>");
    $(".tablo").css('background-color','white');
    $(".timer").css("color","black");
    $(".timer").html(rounds);
    
   
    $(".dynamic-content").html("\
    <div class='col-sm-5'></div>\
    <div class='col-sm-6'><img class='arrowup' id='rup' draggable='false' onclick='uprounds()' src='up.png'></div>");
    $(".dynamic-content2").html("\
    <div class='col-sm-5'></div>\
    <div class='col-sm-6'><img class='arrowup' id='rDown' draggable='false'  onclick='downrounds()' src='down.png'></div>");
    
    $("#rDown").mousedown(function(event) {
        if(event.which==1){ intervalId = setInterval(downrounds, 200);}
    }).mouseup(function() {
        clearInterval(intervalId);
    }).mouseout(function() {
        clearInterval(intervalId);
    });

    $("#rup").mousedown(function(event) {
        if(event.which==1){intervalId = setInterval(uprounds, 200);}
    }).mouseup(function() {
        clearInterval(intervalId);
    }).mouseout(function() {
        clearInterval(intervalId);
    });
}



function SetPreparation(){

    if($("#about").css("left")=="-280px"){
        return;
    }
    $(".circle").html("<img style='width:100%;position:relative;top:-10px;'src='preparation.png'>");
    $(".circle2").css({'background-color':"#FF0"});
    $(".tablo").css('background-color','#FF0');
    $(".timer").css("color","black");
    computeSum(preperation,0);
    $(".dynamic-content").html("");
    $(".dynamic-content2").html("");
    add_arrows();//in each add arrow we put the 2 correct functions to be called in up and down buttons
    document.getElementsByClassName("arrowup")[0].addEventListener("click",function(){
        upPreperation(60);
    });

    document.getElementsByClassName("arrowup")[1].addEventListener("click",
    function(){
        upPreperation(1);}
    );
    
    document.getElementsByClassName("arrowup")[2].addEventListener("click",function(){
        downPreperation(60);
    });

    document.getElementsByClassName("arrowup")[3].addEventListener("click",
    function(){
        downPreperation(1);
    });
    
   button_function(upPreperation,downPreperation);
}

function SetRound(){
    if($("#about").css("left")=="-280px"){
        return;
    }
    $(".circle").html("<img style='width:110%;position:relative;top:-10px;left:-5px;'src='round.png'>");
    $(".circle2").css({'background-color':"#0F0"});
    $(".tablo").css('background-color','#0F0');
    $(".timer").css("color","black");
    computeSum(round,1);
    $(".dynamic-content").html("");
    $(".dynamic-content2").html("");
    add_arrows();
    document.getElementsByClassName("arrowup")[0].addEventListener("click",function(){
        upRound(60);
    });

    document.getElementsByClassName("arrowup")[1].addEventListener("click",
    function(){
        upRound(1);}
    );
    
    document.getElementsByClassName("arrowup")[2].addEventListener("click",function(){
        downRound(60);
    });

    document.getElementsByClassName("arrowup")[3].addEventListener("click",
    function(){
        downRound(1);
    });
    button_function(upRound,downRound);
}
//HERE WRITITNGGG
function SetWarning(){
    if($("#about").css("left")=="-280px"){
        return;
    }
    $(".circle").html("<img style='width:110%;position:relative;top:-10px;left:-6px;' src='warning.png'>");
    $(".circle2").css({'background-color':"#F60"});
    $(".tablo").css('background-color','#F60');
    $(".timer").css("color","black");
    computeSum(warning,2);
    $(".dynamic-content").html("");
    $(".dynamic-content2").html("");
    add_arrows();
    document.getElementsByClassName("arrowup")[0].addEventListener("click",function(){
        upWarning(60);
    });

    document.getElementsByClassName("arrowup")[1].addEventListener("click",
    function(){
        upWarning(1);}
    );
    
    document.getElementsByClassName("arrowup")[2].addEventListener("click",function(){
        downWarning(60);
    });

    document.getElementsByClassName("arrowup")[3].addEventListener("click",
    function(){
        downWarning(1);
    });
    button_function(upWarning,downWarning);
}

function SetRest(){
    if($("#about").css("left")=="-280px"){
        return;
    }
    $(".circle").html("<img style='width:100%;position:relative;top:-10px;' src='rest.png'>");
    $(".circle2").css({'background-color':"#F00"});
    $(".tablo").css('background-color','#F00');
    $(".timer").css("color","black");
    computeSum(rest,3);
    $(".dynamic-content").html("");
    $(".dynamic-content2").html("");
    add_arrows();
    document.getElementsByClassName("arrowup")[0].addEventListener("click",function(){
        upRest(60);
    });

    document.getElementsByClassName("arrowup")[1].addEventListener("click",
    function(){
        upRest(1);}
    );
    
    document.getElementsByClassName("arrowup")[2].addEventListener("click",function(){
        downRest(60);
    });

    document.getElementsByClassName("arrowup")[3].addEventListener("click",
    function(){
        downRest(1);
    });
    button_function(upRest,downRest);
}


//TIME FUNCTIONS HERE________________________________________>
function uprounds(){//fixe the sum time
    if(rounds==24){
        rounds=1;
        $(".timer").html(rounds);
        $("#rounds").html(rounds);
        var sumtime=rounds*round+preperation+(rounds-1)*rest;
        var hours   = Math.floor(sumtime / 3600);
        var minutes = Math.floor((sumtime - (hours * 3600)) / 60);
        var seconds = sumtime - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        if(hours=="00"){
            $("#time").html(minutes+":"+seconds);
        }else{
            $("#time").html(hours+":"+minutes+":"+seconds);
        }
    }else{
        rounds=rounds+1;
        $(".timer").html(rounds);
        $("#rounds").html(rounds);
        var sumtime=rounds*round+preperation+(rounds-1)*rest;
        var hours   = Math.floor(sumtime / 3600);
        var minutes = Math.floor((sumtime - (hours * 3600)) / 60);
        var seconds = sumtime - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        if(hours=="00"){
            $("#time").html(minutes+":"+seconds);
        }else{
            $("#time").html(hours+":"+minutes+":"+seconds);
        }
    }
}

function downrounds(){//fixe the sum time
    if(rounds==1){
        rounds=24;
        $(".timer").html(rounds);
        $("#rounds").html(rounds);
        var sumtime=rounds*round+preperation+(rounds-1)*rest;
        var hours   = Math.floor(sumtime / 3600);
        var minutes = Math.floor((sumtime - (hours * 3600)) / 60);
        var seconds = sumtime - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        if(hours=="00"){
            $("#time").html(minutes+":"+seconds);
        }else{
            $("#time").html(hours+":"+minutes+":"+seconds);
        }
    }else{
        rounds=rounds-1;
        $(".timer").html(rounds);
        $("#rounds").html(rounds);
        var sumtime=rounds*round+preperation+(rounds-1)*rest;
        var hours   = Math.floor(sumtime / 3600);
        var minutes = Math.floor((sumtime - (hours * 3600)) / 60);
        var seconds = sumtime - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        if(hours=="00"){
            $("#time").html(minutes+":"+seconds);
        }else{
            $("#time").html(hours+":"+minutes+":"+seconds);
        }
    }
}

function downPreperation (addtime){
    var minutes=Math.floor(preperation/60);
    var seconds=preperation-minutes*60;
    if(addtime==60){
        if(minutes==0){
            preperation=59*60+seconds;
            computeSum(preperation,0);
        }else{
            preperation=preperation-addtime;
            computeSum(preperation,0);
        }
    }else if(addtime==1){
        if(seconds==0&&minutes!=0){
            preperation=preperation-1;
            computeSum(preperation,0);
        }else if(preperation!=0){
            preperation=preperation-addtime;
            computeSum(preperation,0);
        }
    }
}

function upPreperation (addtime){
    var minutes=Math.floor(preperation/60);
    var seconds=preperation-minutes*60;
    if(addtime==60){
        if(minutes==59){
            preperation=seconds;
            computeSum(preperation,0);
        }else{
            preperation=preperation+addtime;
            computeSum(preperation,0);
        }
    }else if(addtime==1){
        if(seconds==59&&minutes!=59){
            preperation=preperation+1;
            computeSum(preperation,0);
        }else if(preperation<60*60-1){
            preperation=preperation+addtime;
            computeSum(preperation,0);
        }
    }
}

function downRound (addtime){
    var minutes=Math.floor(round/60);
    var seconds=round-minutes*60;
    if(addtime==60){
        if(minutes==0){
            round=59*60+seconds;
            computeSum(round,1);
        }else{
            round=round-addtime;
            computeSum(round,1);
        }
    }else if(addtime==1){
        if(seconds==0&&minutes!=0){
            round=round-1;
            computeSum(round,1);
        }else if(round!=0){
            round=round-addtime;
            computeSum(round,1);
        }
    }
}

 
function upRound (addtime){
    var minutes=Math.floor(round/60);
    var seconds=round-minutes*60;
    if(addtime==60){
        if(minutes==59){
            round=seconds;
            computeSum(round,1);
        }else{
            round=round+addtime;
            computeSum(round,1);
        }
    }else if(addtime==1){
        if(seconds==59&&minutes!=59){
            round=round+1;
            computeSum(round,1);
        }else if(round<60*60-1){
            round=round+addtime;
            computeSum(round,1);
        }
    }
}

//HERE
function downWarning (addtime){
    var minutes=Math.floor(warning/60);
    var seconds=warning-minutes*60;
    if(addtime==60){
        if(minutes==0){
            warning=59*60+seconds;
            computeSum(warning,2);
        }else{
            warning=warning-addtime;
            computeSum(warning,2);
        }
    }else if(addtime==1){
        if(seconds==0&&minutes!=0){
            warning=warning-1;
            computeSum(warning,2);
        }else if(warning!=0){
            warning=warning-addtime;
            computeSum(warning,2);
        }
    }
}

function upWarning (addtime){
    var minutes=Math.floor(warning/60);
    var seconds=warning-minutes*60;
    if(addtime==60){
        if(minutes==59){
            warning=seconds;
            computeSum(warning,2);
        }else{
            warning=warning+addtime;
            computeSum(warning,2);
        }
    }else if(addtime==1){
        if(seconds==59&&minutes!=59){
            warning=warning+1;
            computeSum(warning,2);
        }else if(warning<60*60-1){
            warning=warning+addtime;
            computeSum(warning,2);
        }
    }
}


function downRest (addtime){
    var minutes=Math.floor(rest/60);
    var seconds=rest-minutes*60;
    if(addtime==60){
        if(minutes==0){
            rest=59*60+seconds;
            computeSum(rest,3);
        }else{
            rest=rest-addtime;
            computeSum(rest,3);
        }
    }else if(addtime==1){
        if(seconds==0&&minutes!=0){
            rest=rest-1;
            computeSum(rest,3);
        }else if(rest!=0){
            rest=rest-addtime;
            computeSum(rest,3);
        }
    }
}

function upRest (addtime){
    var minutes=Math.floor(rest/60);
    var seconds=rest-minutes*60;
    if(addtime==60){
        if(minutes==59){
            rest=seconds;
            computeSum(rest,3);
        }else{
            rest=rest+addtime;
            computeSum(rest,3);
        }
    }else if(addtime==1){
        if(seconds==59&&minutes!=59){
            rest=rest+1;
            computeSum(rest,3);
        }else if(rest<60*60-1){
            rest=rest+addtime;
            computeSum(rest,3);
        }
    }
}

function computeSum(time,secondary)
{//Here fix time Working Time mode
    var minutes=Math.floor(time/60);
    var seconds=time-minutes*60;
    if(minutes<10) minutes="0"+minutes;
    if(seconds<10) seconds="0"+seconds;
    $(".timer").html(minutes+":"+seconds);
    $(".settings").eq(secondary).html(minutes+":"+seconds);
    var sumtime=rounds*round+preperation+(rounds-1)*rest;
    
    var hours   = Math.floor(sumtime / 3600);
    var minutes = Math.floor((sumtime - (hours * 3600)) / 60);
    var seconds = sumtime - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    if(hours=="00"){
        $("#time").html(minutes+":"+seconds);
    }else{
        $("#time").html(hours+":"+minutes+":"+seconds);
    }
}

function add_arrows(){
    $(".dynamic-content").html("\
    <div  class='col-sm-3'></div>\
    <div  class='col-sm-1'><img id='1up' class='arrowup' draggable='false' src='up.png'></div>\
    <div  class='col-sm-3'></div>\
    <div  class='col-sm-1'><img id='2up' class='arrowup' draggable='false' src='up.png'></div>\
    ");

    $(".dynamic-content2").html("\
    <div  class='col-sm-3'></div>\
    <div  class='col-sm-1'><img id='1down' class='arrowup' draggable='false' src='down.png'></div>\
    <div  class='col-sm-3'></div>\
    <div  class='col-sm-1'><img id='2down' class='arrowup' draggable='false' src='down.png'></div>\
    ");
}

function test1(){
    $("#pause").css("visibility","visible");
}

function test2(){
    $("#pause").css("visibility","hidden");
}

function playnpause(){
    if(paused==0){
        $("#pause").attr("src","play.png")
        document.getElementsByClassName("tablo")[0].removeEventListener("mouseover",test1);
        document.getElementsByClassName("tablo")[0].removeEventListener("mouseout",test2);
        test1();
      //  clearInterval(Timer);
        paused=1;
    }else{
        document.getElementsByClassName("tablo")[0].addEventListener("mouseover", test1);
        document.getElementsByClassName("tablo")[0].addEventListener("mouseout",test2);
        $("#pause").attr("src","pause.png");
        paused=0;
    }
}


function start(){
    //here put phases
    $(".circle").html("1");
    if(document.getElementById("start").getAttribute("data-text")=="ΤΕΛΟΣ"){
        stop();//in stop clear play or pause
        return;
    }
    $(".tablo").prepend('<img id="pause" src="pause.png">');
    document.getElementsByClassName("tablo")[0].addEventListener("mouseover", test1);
    document.getElementsByClassName("tablo")[0].addEventListener("mouseout",test2);
    document.getElementsByClassName("tablo")[0].addEventListener("click", playnpause);

    button_properties();
    var i=1;
    var test=0;
    
    function setStart(phase,color){//#FF0'
        if(color=="#0F0"){
            audioStart.play();
        }else if(color=="#F00"){
            audioStop.play();
        }
        $(".tablo").css('background-color',color);
        $(".timer").css('color',"black");
        $(".circle2").css({'background-color':color});
        var test=phase-i;
        var minutes=Math.floor(test/60);
        var seconds=test-minutes*60;
        if(minutes<10) minutes="0"+minutes;
        if(seconds<10) seconds="0"+seconds;
        $(".timer").html(minutes+":"+seconds);
        i++;
    }

    function actualAction(roundCounter){
            setStart(round,"#0F0");
            Timer=setInterval(function(){
                    if(paused!=1){
                        if(test==warning){//fix here warning
                            if(warning!=0){
                                $(".tablo").css('background-color','#F60');
                                $(".circle2").css({'background-color':'#F60'});
                                audioWarning.play();
                            }
                        }
                        test=round-i;
                        
                        minutes=Math.floor(test/60);
                        var seconds=test-minutes*60;
                        if(minutes<10) minutes="0"+minutes;
                        if(seconds<10) seconds="0"+seconds;
                        $(".timer").html(minutes+":"+seconds);
                        i++;
                        if(test<=0){
                            clearInterval(Timer);
                            i=0;
                            if(roundCounter==1) {//Here the hole match ends fix the button for sure and put an over logo :) 
                                end_session();//here will need some further fix for sure
                                return;
                            }
                            setStart(rest,"#F00");
                            Timer=setInterval(function(){
                                if(paused!=1){
                                    test=rest-i;
                                    
                                    minutes=Math.floor(test/60);
                                    var seconds=test-minutes*60;
                                    if(minutes<10) minutes="0"+minutes;
                                    if(seconds<10) seconds="0"+seconds;
                                    $(".timer").html(minutes+":"+seconds);
                                    i++;
                                    if(test<=0){
                                        clearInterval(Timer);
                                        i=0;
                                        actualAction(roundCounter-1);
                                        $(".circle").html(parseInt($(".circle").html())+1);
                                    }
                                }
                            },999);
                        }
                }
            },999);
            return;
    }

    if(preperation!=0){
        setStart(preperation,"#FF0");
        Timer=setInterval(function(){
            if(paused!=1){
                test=preperation-i;
                minutes=Math.floor(test/60);
                var seconds=test-minutes*60;
                if(minutes<10) minutes="0"+minutes;
                if(seconds<10) seconds="0"+seconds;
                $(".timer").html(minutes+":"+seconds);
                i++;
                if(test<=0){
                    clearInterval(Timer);
                    i=0;
                    actualAction(rounds);
                }
            }
            },999);
    }else{//here the same
        i=1;
        actualAction(rounds);
    }
}


function button_properties(){
    $("#Ebutton").prop('disabled',true);
    $("#start").html("<span>ΤΕΛΟΣ</span>");
    document.getElementById("start").setAttribute("data-text","ΤΕΛΟΣ");
    $("#start").css("color",'red');
    $("#start").removeClass("button--winona2");
}

function stop (){
    clearInterval(Timer);
    test2();
    $(".circle").html("1");
    $("#Ebutton").prop('disabled',false);
    $("#start").addClass("button--winona2");
    $("#start").css("color",'white');
    $("#start").html("<span>ΑΡΧΗ</span>");
    document.getElementById("start").setAttribute("data-text","ΑΡΧΗ");
    $(".tablo").css('background-color','#222');
    $(".timer").css('color',"white");
    $(".circle2").css({'background-color':"white"});
    $(".timer").html($("#time").html());
    document.getElementsByClassName("tablo")[0].removeEventListener("mouseover",test1);
    document.getElementsByClassName("tablo")[0].removeEventListener("mouseout",test2);
    document.getElementsByClassName("tablo")[0].removeEventListener("click", playnpause);
}

function end_session(){
    audioStop.play();
    clearInterval(Timer);
    test2();
    $("#start").addClass("button--winona2");
    $("#Ebutton").prop('disabled',false);
    $("#start").css("color",'white');
    $("#start").html("<span>ΑΡΧΗ</span>");
    document.getElementById("start").setAttribute("data-text","ΑΡΧΗ");
    $(".tablo").css('background-color','#F00');
    $(".timer").css('color',"white");
    $(".circle2").css({'background-color':"#F00"});
    $(".timer").html("<div class='overText'>Game Over</div>\
    <img class='overPic' src='game_over.jpg'>\
    <img class='sign' src='signature.png'>\
    ");
    document.getElementsByClassName("tablo")[0].removeEventListener("mouseover",test1);
    document.getElementsByClassName("tablo")[0].removeEventListener("mouseout",test2);
    document.getElementsByClassName("tablo")[0].removeEventListener("click", playnpause);
}


function button_function(fname1,fname2){

    $("#1up").mousedown(function(event) {
        if(event.which==1){ intervalId = setInterval(function() { fname1(60); }, 200);} 
    }).mouseup(function() {
        clearInterval(intervalId);
    }).mouseout(function() {
        clearInterval(intervalId);
    });

    $("#2up").mousedown(function(event) {
        if(event.which==1){intervalId = setInterval(function() { fname1(1); }, 200);}
    }).mouseup(function() {
        clearInterval(intervalId);
    }).mouseout(function() {
        clearInterval(intervalId);
    });

    $("#1down").mousedown(function(event) {
        if(event.which==1){  intervalId = setInterval(function() { fname2(60); }, 200);}
    }).mouseup(function() {
        clearInterval(intervalId);
    }).mouseout(function() {
        clearInterval(intervalId);
    });

    $("#2down").mousedown(function(event) {
        if(event.which==1){   intervalId = setInterval(function() { fname2(1); }, 200); }
    }).mouseup(function() {
        clearInterval(intervalId);
    }).mouseout(function() {
        clearInterval(intervalId);
    });
}
