muban.mxone5.二级.desc = '.video-info-items:eq(3)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
var rule={
    title:'吼吼[飞]',
    模板:'mxone5',
    host:'https://www.hoho.tv',
    // url:'/vod/show/fyclass/page/fypage.html',
    url:'/vod/show/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}/page/fypage{{fl.year}}',
    filter: {
        "1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"6"},{"n":"喜剧片","v":"7"},{"n":"爱情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"恐怖片","v":"10"},{"n":"剧情片","v":"11"},{"n":"战争片","v":"12"},{"n":"灾难片","v":"29"},{"n":"悬疑片","v":"32"},{"n":"冒险片","v":"30"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"动作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"剧情","v":"/class/剧情"},{"n":"战争","v":"/class/战争"},{"n":"警匪","v":"/class/警匪"},{"n":"犯罪","v":"/class/犯罪"},{"n":"动画","v":"/class/动画"},{"n":"奇幻","v":"/class/奇幻"},{"n":"武侠","v":"/class/武侠"},{"n":"冒险","v":"/class/冒险"},{"n":"枪战","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"经典","v":"/class/经典"},{"n":"青春","v":"/class/青春"},{"n":"文艺","v":"/class/文艺"},{"n":"微电影","v":"/class/微电影"},{"n":"古装","v":"/class/古装"},{"n":"历史","v":"/class/历史"},{"n":"运动","v":"/class/运动"},{"n":"农村","v":"/class/农村"},{"n":"儿童","v":"/class/儿童"},{"n":"网络电影","v":"/class/网络电影"},{"n":"Top美剧","v":"/class/Top美剧"}]},{"key":"year","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"港台剧","v":"14"},{"n":"日韩剧","v":"15"},{"n":"美剧","v":"16"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"悬疑","v":"/class/悬疑"},{"n":"刑侦","v":"/class/刑侦"},{"n":"古装","v":"/class/古装"},{"n":"战争","v":"/class/战争"},{"n":"爱情","v":"/class/爱情"},{"n":"喜剧","v":"/class/喜剧"},{"n":"家庭","v":"/class/家庭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"动作","v":"/class/动作"},{"n":"奇幻","v":"/class/奇幻"},{"n":"剧情","v":"/class/剧情"},{"n":"历史","v":"/class/历史"},{"n":"经典","v":"/class/经典"},{"n":"乡村","v":"/class/乡村"},{"n":"商战","v":"/class/商战"},{"n":"网剧","v":"/class/网剧"},{"n":"其他","v":"/class/其他"},{"n":"Top美剧","v":"/class/Top美剧"}]},{"key":"year","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"泰国","v":"/area/泰国"},{"n":"英国","v":"/area/英国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"选秀","v":"/class/选秀"},{"n":"情感","v":"/class/情感"},{"n":"访谈","v":"/class/访谈"},{"n":"播报","v":"/class/播报"},{"n":"旅游","v":"/class/旅游"},{"n":"音乐","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"纪实","v":"/class/纪实"},{"n":"曲艺","v":"/class/曲艺"},{"n":"生活","v":"/class/生活"},{"n":"游戏互动","v":"/class/游戏互动"},{"n":"财经","v":"/class/财经"},{"n":"求职","v":"/class/求职"}]},{"key":"year","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"港台","v":"/area/港台"},{"n":"日韩","v":"/area/日韩"},{"n":"欧美","v":"/area/欧美"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"情感","v":"/class/情感"},{"n":"科幻","v":"/class/科幻"},{"n":"热血","v":"/class/热血"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒险","v":"/class/冒险"},{"n":"萝莉","v":"/class/萝莉"},{"n":"校园","v":"/class/校园"},{"n":"动作","v":"/class/动作"},{"n":"机战","v":"/class/机战"},{"n":"运动","v":"/class/运动"},{"n":"战争","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"},{"n":"社会","v":"/class/社会"},{"n":"原创","v":"/class/原创"},{"n":"亲子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"励志","v":"/class/励志"},{"n":"其他","v":"/class/其他"}]},{"key":"year","name":"地区","value":[{"n":"全部","v":""},{"n":"国产","v":"/area/国产"},{"n":"日本","v":"/area/日本"},{"n":"欧美","v":"/area/欧美"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "20":[{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "37":[{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]
    },
    filter_def:{
        1:{cateId:'1',by:'/by/time'},
        2:{cateId:'2',by:'/by/time'},
        3:{cateId:'3',by:'/by/time'},
        4:{cateId:'4',by:'/by/time'},
        20:{cateId:'20',by:'/by/time'},
        37:{cateId:'37',by:'/by/time'}
    },
    searchUrl:'/vod/search/page/fypage/wd/**.html',
    class_parse:'.nav-menu-items&&li;a&&title;a&&href;.*/(.*?).html',
    lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
    推荐: '*',
    double: false, // 推荐内容是否双层定位
    一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-caption&&span:eq(0)&&Text;a&&href',
    搜索: '.module-items .module-search-item;.lazyload&&alt;*;.video-serial&&Text;.video-serial&&href',
}
