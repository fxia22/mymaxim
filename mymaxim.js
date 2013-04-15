// Copyright 2013 edwardtoday <edwardtoday@gmail.com>
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

jQuery(function($)
{
  function init()
  {
    var arrMaximDefault = [
      "一个人的价值, 在于他贡献了什么, 而不在于他获得了什么。  @爱因斯坦",
      "兴趣是最好的老师。	@爱因斯坦",
      "知识上的投资总能得到最好的回报。	@本杰明.富兰克林",
      "Stay hungry. Stay foolish.	@史蒂夫.乔布斯",
      "这辈子没法做太多的事情, 所以每一件都要做到精彩绝伦!	@史蒂夫.乔布斯",
      "我每天都自问: '如果今天是我生命的最后一天, 我还会做今天打算做的事情吗?'	@史蒂夫.乔布斯",
      "想要成功, 就要学会在机遇从头顶上飞过时跳起来并抓住它 -- 这样逮到机遇的概率才大!	@比尔.盖茨",
      "在这个世界上, 人所处的绝境, 在很多情况下, 都不是生存的绝境, 而是精神的绝境!",
      "没有人可以回到过去重新开始, 但谁都可以从现在开始, 书写一个全然不同的结局!",
      "一生中最大的两个财富是: 你的才华和你的时间。	才华越来越多而时间越来越少。我们的一生就是用时间来换取才华。",
      "大多数人在20到30岁就已经过完自己的一生。	一过了这个年龄段, 他们就变成自己的影子, 以后的生命只是在不断重复自己。	@《约翰·克里斯朵夫》罗曼.罗兰",
      "预测未来最好的方法就是去创造未来。	@林肯 (美国前总统)",
      "学习不是填满水桶, 而是点燃火焰!	Education is not the filling of a pail but the lighting of a fire.	@叶芝 (爱尔兰诗人)",
      "宁鸣而死, 不默而生	@范仲淹",
      "想得到你从未拥有过的东西, 就必须去做你从未做过的事情。",
      "你若不想做, 总会找到借口; 你若想做, 总会找到方法	@阿拉伯谚语",
      "授人以鱼不如授人以渔!	授人以鱼只救一时之急, 授人以渔则可解一生之需。	(这也是本博客的宗旨)",
      "未经反思的人生不值得去过!	@苏格拉底 (古希腊哲学家)",
      "我唯一能确定的就是自己的无知!	@苏格拉底 (古希腊哲学家)",
      "真正的无知不是知识的贫乏, 而是拒绝获取知识!	@波普尔 (哲学家)",
      "活着, 如同生命最后一天般活着; 学习, 如同永远活着般学习。	@圣雄甘地 (印度国父)",
      "读书是在别人思想的帮助下建立自己的思想	@鲁巴金",
      "不要盲目地崇拜任何权威, 因为你总能找到相反的权威。	@罗素 (哲学家 数学家)",
      "想象力比知识更重要!	因为知识是有限的, 而想象力概括着世界的一切, 推动着进步, 并且是知识进化的源泉。	@爱因斯坦",
      "你要按你所想的去生活; 否则, 你迟早会按你所生活的去想!",
      "许多人宁愿死, 也不愿思考 -- 事实上他们也确实到死都没有思考。	@罗素 (哲学家 数学家)",
      "只有两样东西可能是无限的: 宇宙的大小和人类的愚蠢。不过, 对于前者我不太确定 :)	@爱因斯坦",
      "编程的艺术就是处理复杂性的艺术。	@Edsger Dijkstra (图灵奖得主)",
      "简单即是美!	Simple is beautiful",
      "优秀软件的作用是让复杂的东西看起来简单!	@Grady Booch (UML创始人之一)",
      "简单是可靠的先决条件!	Simplicity is prerequisite for reliability.	@Edsger Dijkstra (图灵奖得主)",
      "设计软件有两种方法: 一种是简单到极致而明显没有缺陷; 另一种是复杂到极致以至于没有明显的缺陷。前者要难得多!	@C.A.R.Hoare",
      "最纯粹、最抽象的设计难题就是设计桥梁。你面对的问题是: 如何用最少的材料, 跨越给定的距离。	@保罗.格雷汉姆 (知名黑客 硅谷牛人)",
      "更好的工具未必能做出更好的设计!",
      "好的设计在不断地演化, 差的设计在不断地打补丁。",
      "在不同的层次审视你的设计!",
      "在软件'可重用'之前先得'可用'!	@Ralph Johnson (设计模式四人帮之一)",
      "假如程序代码和注释不一致, 那么很可能两者都是错的!	@Norm Schryer",
      "好的程序代码本身就是最好的文档!	@Steve McConnell (《代码大全》作者)",
      "你写下的任何代码, 在六个月以后去看的话, 都像是别人写的。	@Tom Cargill",
      "程序必须首先让人类可以理解, 然后顺便让机器能执行。	@Abelson / Sussman",
      "不能影响你编程观点的语言, 不值得你去学。	@Alan Perlis",
      "世界上只有两种编程语言: 一种充满了人们的抱怨; 另一种没人使用。	@Bjarne Stroustrup (C++之父)",
      "没有哪种编程语言能阻止程序员写出糟糕的代码, 不管这种语言的结构有多么好。	@Larry Flon",
      "C语言诡异离奇, 缺陷重重, 但却获得了巨大的成功!	@Dennis Ritchie (C语言之父 Unix之父)",
      "(相对C而言)在C++里, 想搬起石头砸自己的脚更为困难了。	不过一旦你真这么做了, 整条腿都得报销!	@Bjarne Stroustrup (C++之父)",
      "过早的优化是万恶之源!	Premature optimization is the root of all evil.	@Donald Knuth (算法大牛 图灵奖得主)",
      "Tape is Dead, Disk is Tape, Flash is Disk, RAM Locality is King!	@Jim Gray (数据库大牛 图灵奖得主)",
      "在进度落后的项目中增加人手只会导致进度更加落后!	@Fred Brooks (图灵奖得主 《人月神话》作者)",
      "用代码行数测算软件开发进度如同按重量测算飞机的制造进度。	@比尔.盖茨",
      "如果调试(Debug)是去除Bug的过程, 那么编程就是制造Bug的过程。	@Edsger Dijkstra (图灵奖得主)",
      "不懂电脑的人是发现Bug的天才 -- 不过这些Bug都难以复现!",
      "乐观主义是软件开发的职业病, 用户反馈则是其治疗方法。	@Kent Beck (Extreme Programming之父)",
      "以用户为中心, 其它一切纷至沓来!	@Google 信条",
      "软件就像'性'一样, 免费的时候更好!	Software is like sex; it's better when it's free.	@Linus Torvalds (Linux之父)",
      "若批评不自由, 则赞美无意义!	@法国《费加罗报》的宗旨",
      "牺牲基本自由来换取暂时的安全, 最后既得不到安全也得不到自由!	@本杰明.富兰克林",
      "在大欺骗的时代, 说出真相就是革命行为!	@乔治.奥威尔 (《1984》作者)",
      "艺术家用谎言陈述事实, 政治家用谎言掩盖真相。	Artists use lies to tell the truth, while politicians use them to cover the truth up.	@《V字仇杀队》",
      "谁控制过去, 谁就控制未来; 谁控制现在, 谁就控制过去。	Who controls the past controls the future; who controls the present controls the past.	@《1984》乔治.奥威尔",
      "党可以宣布'2+2=5', 而你就不得不相信它。	@《1984》乔治.奥威尔",
      "所谓的自由就是'允许说2+2=4'的自由。	Freedom is the freedom to say that two plus two make four.	@《1984》乔治.奥威尔",
      "在民主国家, 最高原则是全民的利益而不是统治者的利益。	服从民主国家的统治权并不会使人变为奴隶, 而是使人变为公民。	@斯宾诺莎",
      "国家为人而立, 而非人为国家而活。	国家的最高使命是保护个人, 使其有机会发展成为有创造才能的人。	@爱因斯坦",
      "如果政府不能解决问题, 那它本身就成为问题!	@里根 (美国前总统)",
      "民众不应该害怕他们的政府, 政府才应该害怕它的民众!	People should not be afraid of their governments. Governments should be afraid of their people.	@《V怪客／V字仇杀队》",
      "制造恐惧是专制政府的终极武器!	@《V怪客／V字仇杀队》",
      "将愚人从他们所敬拜的锁链下解放出来是非常困难的。	@伏尔泰 (法国启蒙思想家)",
      "解放一个习惯于被奴役的民族比奴役一个习惯于自由的民族更难!	@孟德斯鸠 (法国启蒙思想家)",
      "一旦你习惯了戴面具的生活, 你的脸将变得跟面具一样。	@《V怪客／V字仇杀队》",
      "革命以前, 做奴隶; 革命后不久, 受了奴隶的骗, 变成他们的奴隶!	@鲁迅",
      "你可以暂时地蒙骗所有人, 也可以永久地蒙骗部分人, 但不可能永久地蒙骗所有人。	You can fool all the people some of the time, some of the people all the time, but you cannot fool all the people all the time.	@林肯 (美国前总统)",
      "古代愚民政策是不许人民受教育, 现代愚民政策是只许人民受洗脑教育",
      "洗脑教育要塑造的, 不是铁屋中沉睡的人, 而是装睡的人。	因为沉睡的人你总有办法唤醒; 但是你永远无法唤醒装睡的人!",
      "全中国只有一所学校, 就是党校 -- 其它的学校都是分校!	@陈丹青",
      "小时候一个劲地教你做好人, 长大了一个劲地教你做坏人	这就是中国式教育",
      "以前学英语是为了更好地了解外国, 现在学英语是为了更好地了解中国!",
      "共产主义是一种伪科学, 演变成一种伪宗教, 最终表现为僵化的集权式的邪恶政治集团!	@Richard Pipes (《共产主义实录》作者)",
      "共产主义最大的优越性体现在: 可以克服别的主义下根本不存在的困难。",
      "世上最难的两件事: 把自己的思想装进别人的脑袋, 把别人的钱装进自己的口袋 -- 共产党都做到了!",
      "专政与民主是对立的统一, 人民民主是基础, 只有充分民主才能有专政, 离开民主就是法西斯专政!	@胡耀邦",
      "如果人民不欢迎我们, 我们就该下台了!	@胡耀邦",
      "民主是自下而上争取的, 不是自上而下给与的!	@方励之 (科学家 政治异议人士)",
      "当你试图了解你的祖国, 你已经走上了犯罪道路!	@艾未未 (艺术家 政治异议人士)",
      "中共是这样的政党 -- 既千方百计阻止你知道真相, 又千方百计指责你不明真相 :)",
      "中国共产党是一心一意为人民服务的政党 -- 你想不让它服务都不行。",
      "美国人来了, 既有面包也有自由; 苏俄来了, 只有面包没有自由; 中共来了, 既没面包也没自由!	@胡适 (文学家)",
      "中国没有多少'人民内部矛盾', 主要是'党和人民的矛盾'。党反复提'人民内部矛盾', 其实是挑拨离间!",
      "天朝知识分子分三类: 1 沉默的大多数 2 公共知识分子 3 '公公'知识分子",
      "欧美的精英们已经不再为生存而担忧, 不用因恐惧而说话。而中国的精英们还在为民主自由而耗尽精力甚至生命!",
      "如果鲁迅活在这个年代: 他的博客首先会被和谐, 然后被请喝茶谈话, 最后以煽动颠覆国家罪被捕入狱...",
      "如果让中宣部的官员和卫生部的官员对调, 那么中国既有了言论自由, 也有了食品安全。",
      "中国的核心竞争力就是压榨劳动力!	@谢国忠 (经济学家)",
      "不是具有中国特色的社会主义, 而是具有中国特色的社会达尔文主义!",
      "拜金不可怕, 可怕的是在一个不吃不喝也要几百年才能买房的社会却不许拜金;	低俗不可怕, 可怕的是在一个几千万男生找不到女友, 同龄少女都被老男人包养的国度却不准低俗!",
      "中国人最悲哀的就是: 刚被历史的车轮碾过, 还没来得及爬起来, 发现历史在倒车...",
      "中国人民是伟大的	用全球7%的耕地养活了全球50%的公务员, 并承受全球70%的官员腐败...",
      "道德在书本里, 榜样在电视里, 国土在肺里, 爱情在房产证里, 幸福感在梦里...	这就是中国特色",
      "一群超级富豪在人民大会堂里开两会 -- 他们管自己叫'无产阶级先锋队'",
      "罗马城之所以是这样的罗马城是因为市民就是这样的市民!	This City is what it is because our citizens are what they are.	@柏拉图",
      "雪崩时, 没有一片雪花觉得自己有责任。	@伏尔泰",
      "千万别以为自己可以逃避, 我们的每一步都决定着最后的结局, 我们的脚正在走向自己选定的终点。	@米兰.昆德拉 (作家)",
      "真正的猛士敢于在一个不正常的国家做一个正常的人",
      "每当有事情发生: 懦夫会问: '这么做安全吗?' 患得患失者会问: '这么做明智吗?' 虚荣者会问: '这么做受欢迎吗?' 但是良知只会问: '这么做正确吗?'	@马丁.路德.金 (美国人权领袖)",
      "人道主义的含义是: 从不以人作为牺牲来达到某一目的!	@施韦策 (诺贝尔和平奖得主)",
      "郭敬明和唐骏的共同点是: 他们这类人越成功, 就说明我们这个社会越失败!",
      "所谓'摸着石头过河'就是: 群众都过河了, 干部还在那里假装摸石头!",
      "自由有许多困难, 民主亦非完美。然而, 我们从未建造一堵墙, 把我们的人民关在里面, 不准他们离开。	@《在柏林墙下的演说》 (演讲者 美国前总统肯尼迪)",
      "这些(监狱的)围墙很有趣。起初你痛恨它; 然后你逐渐习惯它; 足够长时间后, 你开始依赖它 -- 这就是体制化!	@电影《肖申克的救赎》",
      "Google重新发明了搜索, Facebook重新发明了社交, Apple重新发明了手机, Amazon重新发明了书籍...天朝重新发明了局域网!",
      "几十年来, 朝鲜的领导人只有一个, 叫'金正日'; 几十年来, 天朝的领导人也只有一个, 叫'敏感词'",
      "翻墙和OX的相似之处:	一旦会做就老想做; 做第一次之后觉得天地豁然开朗; 每次做都有快感; 觉得不会做的都是SB!",
      "用人不在于如何减少人的短处, 而在于如何发挥人的长处。	@彼得.杜拉克 (管理学之父)",
      "企业最大的资产是人!	@松下幸之助 (号称日本经营之神)",
      "你想雇用的人必须具备3种品质: 正直诚实、聪明能干和精力充沛。如果缺少第1种, 后2种品质会要你命!	@巴菲特",
      "只有偏执狂才能生存!	@Andy Grove (英特尔创始人之一, 前任CEO)",
      "领袖和跟风者的区别就在于创新!	@史蒂夫.乔布斯",
      "我的管理风格既不是美国的个人主义, 也不是日本的共识主义, 而是独特的达尔文主义(适者生存)!	@比尔.盖茨",
      "我们没有不懂技术的管理人员 -- 因为寻求技术和管理的平衡毫不费力!	@比尔.盖茨",
      "伟大的车工值得给他几倍于普通车工的薪水。但一个伟大的程序员, 其价值相当于普通程序员的1万倍!	@比尔.盖茨",
      "唯一不变的是变化本身!",
      "我的投资密诀就是: 在别人贪婪时恐惧, 在别人恐惧时贪婪!	@巴菲特",
      "投资是预测资产收益的活动, 而投机是预测市场心理的活动。	@凯恩斯",
      "投资风险来自于: 你不知道你在做什么 :)	@巴菲特"
    ];


    var arrMaxim = arrMaximDefault;
    var str = arrMaxim[Math.floor(Math.random() * arrMaxim.length)];
    str = str.replace(/\t/g, "<br/>");
    str = str.replace(/@/g, "<small>");
    var chLeft = String.fromCharCode(60);
    var chRight = String.fromCharCode(62);
    str = str.replace("http:", chLeft+"a href='http:");
    str = str.replace("html", "html'"+chRight+"相关帖子"+chLeft+"/a"+chRight);
    $("blockquote.pull-right").children("p.maxim").html(str);
  }

  $(document).ready(
    function()
    {
      try
      {
        init();
      }
      catch(err)
      {
      }
    }
  );

});