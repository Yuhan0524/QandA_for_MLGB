function load2D_bg(){
    var background = document.getElementById("background");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var yValue = calcValue(y, window.innerHeight);
            var xValue = calcValue(x, window.innerWidth);
            
                    
            background.style.backgroundPositionX = xValue * 1 -200+ "px ";
            background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
        })
    },false);

}

function load2D_bg2(){
    var background = document.getElementById("background2");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var yValue = calcValue(y, window.innerHeight);
            var xValue = calcValue(x, window.innerWidth);
            
            background.style.backgroundPositionX = xValue *1 -200+ "px ";
            background.style.backgroundPositionY =  (-yValue * 0.75-50 ) + "px";
        })
    },false);

}

function load2D_bg2_2(){
    var background = document.getElementById("background2");
    document.onmousemove=function(){
        console.log(window.outerHeight);
        background.style.opacity=1-(getMousePos()/window.outerHeight*2.5);
    }
}

function getMousePos(event) {
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    return y;
}

function load2D_lihui(){
    var background = document.getElementById("lihui");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 2).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
    function(_ref) {
        var x = _ref.x,
        y = _ref.y;
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {
            var xValue = calcValue(x, window.innerWidth);

            background.style.left = xValue * 0.7-100 + "px";
            
        })
    },false);

}


var i=0;

function Q1(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if(i==0){
        var str1 = 'NTU MAP';
        var res1=str1.link('https://maps.ntu.edu.sg/#/ntu/venues');
        i=1;
        slogan.style.height="400px";
        slogan2.innerHTML="Q NTU XXX 怎么走？校车怎么看？<br> A 请在"+res1+"中搜索地点, 校车路线请下载uWave自行查看<br>Q XXX 营业至几点?<br>A 请在Google Map或浏览器上搜索该地点，大部分均可看到营业时间<br>\
        Q XXX 在哪里买?<br> A 学校最近的商场为Boonlay的Jurong Point（179 199终点站直达），西部较大的商场在Jurong east（坐巴士到地铁站，之后坐地铁到Jurong East），也可使用Shopee Amazon 淘宝等进行网购<br>\
        Q ART/非处方药哪里能买?<br> A 学校Cheers/711/Prime/Giant均有售卖，校外可以去屈臣氏或Guardian<br>\
        Q 学校里有没有和树洞一样的软件去吐槽/交友/八卦？<br> A Reddit的NTU板块可以轻松实现这个目的，但注意请勿泄露NTU的内部信息<br>\
        "
        

    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="这里是MLGB酱带来的Q&A环节！(≧▽≦)";
    }
    
}

function Q2(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if(i==0){
        var str1 = 'STARS';
        var res1=str1.link('https://wish.wis.ntu.edu.sg/pls/webexe/ldap_login.login?w_url=https://wish.wis.ntu.edu.sg/pls/webexe/aus_stars_planner.main');
        i=1;
        slogan.style.height="400px";
        slogan2.innerHTML="Q 大一怎么选课/为什么选不了课/怎么加课?<br>A 大一新生课程是学校排好的，自行去"+res1+" 查看，如果想要加课，请在ADD & DROP期间选择BDE（不同学院要求不同，具体可询问自己的学院）<br>\
        Q 检验高中成绩单是怎么一回事？<br>A 这个是会抽查的，一般会让你的高中用高中的邮箱/实体地址发送email/mail给NTU的指定部门。内容包含你申请的资料，如果是国际考试（比如CB）需要送分，其他考试则需要成绩单<br>具体可以咨询  sbsoh@ntu.edu.sg  Soh-Yong Sew Boye<br>\
        Q 考试安装的浏览器能不能在ipad上用?<br>A 不行\
        "
        
    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="这里是MLGB酱带来的Q&A环节！(≧▽≦)";
    }
    
}


function Q3(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if(i==0){
        var str1 = 'ServiceNow';
        var res1=str1.link('https://ntuadminonestop.service-now.com/ntussp');
        i=1;
        slogan.style.height="400px";
        slogan2.innerHTML="Q 有和住宿相关的问题怎么办？<br>A 我忘了交宿舍费/我忘了接收宿舍offer/因为身体原因我想换房间/我舍友是大坏蛋我想换房间/我的房间里有阿飘我想换房间等与住宿有关问题可在"+res1+"上进行服务申请<br>\
        直接联系住宿请电邮OCHug：och-ug@ntu.edu.sg<br>\
        或拨打电话： 6790 5155<br>\
        Q Hall key/fob collection需要预约吗？<br>\
        A 如果是自己领取的话不需要，只需在工作时间内walkin就好。如果是他人代领的话则需要在"+res1+"里提交申请（proxy）预约领取\
        "
        
    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="这里是MLGB酱带来的Q&A环节！(≧▽≦)";
    }
    
}

function Q4(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if(i==0){
        var str1 = '链接';
        var res1=str1.link('https://mp.weixin.qq.com/s/g0jMu8gAK0dOsdL2j1chfg');
        i=1;
        slogan.style.height="400px";
        slogan2.innerHTML="Q 关于学校体检问题，约不上NTU Fullerton，想去外面做怎么办?<br>\
        A\
        这类属于HC (health checkup），需携带两个纸质版表格，去医院说明是student pass checkup + uni matriculation。\
        jurong的raffles med，holland V，bugis总院都可以做，其他地方很多不能做X光，建议提前咨询，做X光需在4：30之前过去。\
        做完后ica表格线上提交，matriculation表格自己交到ntu Fullerton<br>\
        Q 关于NTU的保险我想知道信息？<br>\
        A 详细信息可以点开"+res1+"去查看<br>\
        概述：NTU自带保险包括人身意外保险（GPAI)，住院及外科保险（GHSI），医疗计划，和学生旅行险\
        "
        
    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="这里是MLGB酱带来的Q&A环节！(≧▽≦)";
    }
    
}

function Q5(){
    var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
    if(i==0){
        i=1;
        slogan.style.height="400px";
        slogan2.innerHTML="Q 在哪里买电话卡?<br>\
        A 可以选择在机场外所有地方购买电话卡（如711 cheers等超市）。711可使用护照直接购买，cmlink等请到拿到STP之后到官网上购买<br>\
        Q 银行卡怎么办理，办哪个比较好?<br>\
        A 都很好，dbs可以用ipa开银行卡，网上申请就可以了，中行和工行卡可以免手续费从国内转钱（未成年只能办OCBC）<br>\
        Q 我东西丢了/被偷了/我遇到紧急情况了/我想投诉 怎么办？<br>\
        A 最快方法（t1）：安全事件直接拨打999呼叫警察部队，如遇火警/医疗特情请拨打995呼叫民防部队（可以讲中文）<br>\
        如果不是非常紧急或者无紧急情况可拨打校园安保热线：6790 5200<br>\
        如在宿舍区域内遗失可拨打宿舍行政办公室电话（请在工作时间内拨打）：<br>\
        Hall 1 & 2	67905161 ||\
        Hall 3 & 16	67905163<br>\
        Hall 4 & 5	67905165 ||\
        Hall 6 & Crescent & Pioneer	67905766<br>\
        Hall 8 & 9	67906320 ||\
        Hall 10 & 11	67906432<br>\
        Hall 12 & 13	67904246 ||\
        Hall 14 & 15	67904370<br>\
        Hall 7 & Saraca & Tamarind	69047116/69047117<br>\
        Binjai & Tanjong & Banyan	65921897<br>\
        "
        
    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="这里是MLGB酱带来的Q&A环节！(≧▽≦)";
    }
}

    function Q6(){
        var slogan = document.getElementById("slogan");
        var slogan2 = document.getElementById("slogan2");
        if(i==0){
            i=1;
            slogan.style.height="400px";
            slogan2.innerHTML="Q 我在路边看到食物和水果可以拿吗？<br>A 不可以，这是贡品<br>\
            Q 喂猫犯法吗（户外）喂鸽子犯法吗？喂xx犯法吗？<br>A 不犯法，但是你喂完剩垃圾和喂猫吃垃圾犯法<br>喂鸽子是犯法的，可以罚款到2000新币<br>NTU校园里的猫有专人喂食,不要瞎投喂,撸猫随意<br>\
            Q 电话/telegram诈骗好频繁啊嘤嘤嘤，我的个人信息暴露了吗？<br>A 新加坡很常见，所有人都会遇到，与你/你的电话卡/卖电话卡的商家没有任何关系<br>看到+65开头的电话可以直接挂断，telegram也请直接block掉\
            "
            
        } else {
            i=0;
            slogan.style.height="50px";
            slogan2.innerHTML="这里是MLGB酱带来的Q&A环节！(≧▽≦)";
        }
    
}