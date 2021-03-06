import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partybuff',
  templateUrl: './partybuff.component.html',
  styleUrls: ['./partybuff.component.css']
})
export class PartyBuffComponent implements OnInit {

  constructor() { }

  today: Date = new Date();

  skills: any[] = [
    {
      isDisabled: "false",
      name: "连环计",
      ndes: "",
      pic: "../../assets/PTB/连环计.png",
      tiurl: "../../assets/PTB/学者.png", 
      lvl: "学者",
      classification: "../../assets/PTB/连环计b.png",
      cast: "15秒",
      recast: "120秒",
      content: "目标被暴击率提高10%"
    },
    {
      isDisabled: "false",
      name: "太阳神之衡",
      ndes: "",
      pic: "../../assets/PTB/太阳神之衡.png",
      tiurl: "../../assets/PTB/占星术师.png", 
      lvl: "占星术师",
      classification: "../../assets/PTB/太阳神之衡b.png",
      cast: "15秒",
      recast: "30秒",
      content: "自身或其他一名队员的攻击伤害提高<br>以近身攻击为主的职业提高6%，其他职业提高3%"
    },
    {
      isDisabled: "false",
      name: "放浪神之箭",
      ndes: "",
      pic: "../../assets/PTB/放浪神之箭.png",
      tiurl: "../../assets/PTB/占星术师.png", 
      lvl: "占星术师",
      classification: "../../assets/PTB/放浪神之箭b.png",
      cast: "15秒",
      recast: "30秒",
      content: "自身或其他一名队员的攻击伤害提高<br>以近身攻击为主的职业提高6%，其他职业提高3%"
    },
    {
      isDisabled: "false",
      name: "战争神之枪",
      ndes: "",
      pic: "../../assets/PTB/战争神之枪.png",
      tiurl: "../../assets/PTB/占星术师.png", 
      lvl: "占星术师",
      classification: "../../assets/PTB/战争神之枪b.png",
      cast: "15秒",
      recast: "30秒",
      content: "自身或其他一名队员的攻击伤害提高<br>以近身攻击为主的职业提高6%，其他职业提高3%"
    },
    {
      isDisabled: "false",
      name: "世界树之干",
      ndes: "",
      pic: "../../assets/PTB/世界树之干.png",
      tiurl: "../../assets/PTB/占星术师.png", 
      lvl: "占星术师",
      classification: "../../assets/PTB/世界树之干b.png",
      cast: "15秒",
      recast: "30秒",
      content: "自身或其他一名队员的攻击伤害提高<br>以远程攻击为主的职业提高6%，其他职业提高3%"
    },
    {
      isDisabled: "false",
      name: "河流神之瓶",
      ndes: "",
      pic: "../../assets/PTB/河流神之瓶.png",
      tiurl: "../../assets/PTB/占星术师.png", 
      lvl: "占星术师",
      classification: "../../assets/PTB/河流神之瓶b.png",
      cast: "15秒",
      recast: "30秒",
      content: "自身或其他一名队员的攻击伤害提高<br>以远程攻击为主的职业提高6%，其他职业提高3%"
    },
    {
      isDisabled: "false",
      name: "建筑神之塔",
      ndes: "",
      pic: "../../assets/PTB/建筑神之塔.png",
      tiurl: "../../assets/PTB/占星术师.png", 
      lvl: "占星术师",
      classification: "../../assets/PTB/建筑神之塔b.png",
      cast: "15秒",
      recast: "30秒",
      content: "自身或其他一名队员的攻击伤害提高<br>以远程攻击为主的职业提高6%，其他职业提高3%"
    },
    {
      isDisabled: "false",
      name: "占卜",
      ndes: "",
      pic: "../../assets/PTB/占卜.png",
      tiurl: "../../assets/PTB/占星术师.png", 
      lvl: "占星术师",
      classification: "../../assets/PTB/占卜b.png",
      cast: "15秒",
      recast: "120秒",
      content: "自身与周围队员的攻击伤害提高6%"
    },
    {
      isDisabled: "false",
      name: "义结金兰",
      ndes: "",
      pic: "../../assets/PTB/义结金兰.png",
      tiurl: "../../assets/PTB/武僧.png", 
      lvl: "武僧",
      classification: "../../assets/PTB/义结金兰b.png",
      cast: "15秒",
      recast: "120秒",
      content: "自身与周围队员的攻击伤害提高5%"
    },
    {
      isDisabled: "false",
      name: "战斗连祷",
      ndes: "",
      pic: "../../assets/PTB/战斗连祷.png",
      tiurl: "../../assets/PTB/龙骑士.png", 
      lvl: "龙骑士",
      classification: "../../assets/PTB/战斗连祷b.png",
      cast: "15秒",
      recast: "120秒",
      content: "自身与周围队员的暴击发动率提高10%"
    },
    {
      isDisabled: "false",
      name: "巨龙视线",
      ndes: "",
      pic: "../../assets/PTB/巨龙视线.png",
      tiurl: "../../assets/PTB/龙骑士.png", 
      lvl: "龙骑士",
      classification: "../../assets/PTB/巨龙视线b.png",
      cast: "20秒",
      recast: "120秒",
      content: "自身的攻击伤害提高10%<br>其他一名队员的攻击伤害提高5%"
    },
    {
      isDisabled: "false",
      name: "攻其不备",
      ndes: "",
      pic: "../../assets/PTB/攻其不备.png",
      tiurl: "../../assets/PTB/忍者.png", 
      lvl: "忍者",
      classification: "../../assets/PTB/攻其不备b.png",
      cast: "15秒",
      recast: "60秒",
      content: "目标所受伤害提高5%"
    },
    {
      isDisabled: "false",
      name: "奥术法环",
      ndes: "",
      pic: "../../assets/PTB/奥术法环.png",
      tiurl: "../../assets/PTB/钐镰客.png", 
      lvl: "钐镰客",
      classification: "../../assets/PTB/奥术法环b.png",
      cast: "20秒",
      recast: "120秒",
      content: "自身与周围队员的攻击伤害提升3%"
    },
    {
      isDisabled: "false",
      name: "贤者的叙事谣",
      ndes: "",
      pic: "../../assets/PTB/贤者的叙事谣.png",
      tiurl: "../../assets/PTB/吟游诗人.png", 
      lvl: "吟游诗人",
      classification: "../../assets/PTB/贤者的叙事谣b.png",
      cast: "45秒",
      recast: "120秒",
      content: "自身和周围队员的攻击伤害提高1%"
    },
    {
      isDisabled: "false",
      name: "军神的赞美歌",
      ndes: "",
      pic: "../../assets/PTB/军神的赞美歌.png",
      tiurl: "../../assets/PTB/吟游诗人.png", 
      lvl: "吟游诗人",
      classification: "../../assets/PTB/军神的赞美歌b.png",
      cast: "45秒",
      recast: "120秒",
      content: "自身和周围队员的直击发动率提高3%"
    },
    {
      isDisabled: "false",
      name: "放浪神的小步舞曲",
      ndes: "",
      pic: "../../assets/PTB/放浪神的小步舞曲.png",
      tiurl: "../../assets/PTB/吟游诗人.png", 
      lvl: "吟游诗人",
      classification: "../../assets/PTB/放浪神的小步舞曲b.png",
      cast: "45秒",
      recast: "120秒",
      content: "自身和周围队员的暴击发动率提高2%"
    },
    {
      isDisabled: "false",
      name: "战斗之声",
      ndes: "",
      pic: "../../assets/PTB/战斗之声.png",
      tiurl: "../../assets/PTB/吟游诗人.png", 
      lvl: "吟游诗人",
      classification: "../../assets/PTB/战斗之声b.png",
      cast: "15秒",
      recast: "120秒",
      content: "自身和周围队员的直击发动率提高20%"
    },
    {
      isDisabled: "false",
      name: "光神终曲",
      ndes: "",
      pic: "../../assets/PTB/光神终曲.png",
      tiurl: "../../assets/PTB/吟游诗人.png", 
      lvl: "吟游诗人",
      classification: "../../assets/PTB/光神终曲b.png",
      cast: "15秒",
      recast: "110秒",
      content: "自身和周围队员的攻击伤害提高2%/4%/6%"
    },
    {
      isDisabled: "false",
      name: "标准舞步结束",
      ndes: "",
      pic: "../../assets/PTB/标准舞步结束.png",
      tiurl: "../../assets/PTB/舞者.png", 
      lvl: "舞者",
      classification: "../../assets/PTB/标准舞步结束b.png",
      cast: "60秒",
      recast: "30秒",
      content: "自身与舞伴的攻击伤害提高0%/2%/5%"
    },
    {
      isDisabled: "false",
      name: "进攻之探戈",
      ndes: "",
      pic: "../../assets/PTB/进攻之探戈.png",
      tiurl: "../../assets/PTB/舞者.png", 
      lvl: "舞者",
      classification: "../../assets/PTB/进攻之探戈b.png",
      cast: "20秒",
      recast: "120秒",
      content: "自身与舞伴的暴击发动率和直击发动率提高20%"
    },
    {
      isDisabled: "false",
      name: "技巧舞步结束",
      ndes: "",
      pic: "../../assets/PTB/技巧舞步结束.png",
      tiurl: "../../assets/PTB/舞者.png", 
      lvl: "舞者",
      classification: "../../assets/PTB/技巧舞步结束b.png",
      cast: "20秒",
      recast: "120秒",
      content: "自身与周围队员的攻击伤害提高0%/1%/2%/3%/5%"
    },
    {
      isDisabled: "false",
      name: "炽热之光",
      ndes: "",
      pic: "../../assets/PTB/炽热之光.png",
      tiurl: "../../assets/PTB/召唤师.png", 
      lvl: "召唤师",
      classification: "../../assets/PTB/炽热之光b.png",
      cast: "30秒",
      recast: "120秒",
      content: "自身和周围队员的攻击伤害提高3%"
    },
    {
      isDisabled: "false",
      name: "鼓励",
      ndes: "",
      pic: "../../assets/PTB/鼓励.png",
      tiurl: "../../assets/PTB/赤魔法师.png", 
      lvl: "赤魔法师",
      classification: "../../assets/PTB/鼓励b.png",
      cast: "20秒",
      recast: "120秒",
      content: "自身和周围队员的攻击伤害提高5%"
    }
  ];

  roleSkills: any[] = [
    {
      isDisabled: "false",
      name: "内丹",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/2pih1KRjQsYAb_j4w7GkRFyglk.png",
      tiurl: "",
      tname: "",
      ticon: [
        { "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png', tname: '近战职业' },
        { "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/oWWxUIO2KagIEhDXy0541MRD7M.png', tname: '远程物理职业' }
      ],
      lvl: "",
      classification: "能力",
      cast: "即时",
      recast: "120秒",
      cost: "-",
      distant: "0",
      range: "0",
      rangeType: "zero",
      content: "恢复自身体力<br>恢复力：500",
      change: ""
    },
    {
      isDisabled: "false",
      name: "扫腿",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/h-Vwg7qPNp0rAE9sbya2c9SGC4.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png",
      tname: "近战职业",
      ticon: [{ "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png', tname: '近战职业' }],
      lvl: "Lv10",
      classification: "能力",
      cast: "即时",
      recast: "40秒",
      cost: "-",
      distant: "3",
      range: "0",
      rangeType: "zero",
      content: "令目标陷入眩晕状态　持续时间：3秒",
      change: "习得等级从16变更为10。"
    },
    {
      isDisabled: "false",
      name: "浴血",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/-V15O-XUiGmZcZZepHWlHSHngQ.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png",
      tname: "近战职业",
      ticon: [{ "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png', tname: '近战职业' }],
      lvl: "Lv12",
      classification: "能力",
      cast: "即时",
      recast: "90秒",
      cost: "-",
      distant: "0",
      range: "0",
      rangeType: "zero",
      content: "一定时间内，将自身物理攻击所造成伤害的一部分转化为自身的体力<BR>持续时间：20秒",
      change: "习得等级从32变更为12。"
    },
    {
      isDisabled: "false",
      name: "牵制",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/QZtAkrjZrFAcpoQbZ4PawsdbH4.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png",
      tname: "近战职业",
      ticon: [{ "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png', tname: '近战职业' }],
      lvl: "Lv22",
      classification: "能力",
      cast: "即时",
      recast: "90秒",
      cost: "-",
      distant: "10",
      range: "0",
      rangeType: "zero",
      content: "一定时间内，令目标的力量与灵巧降低10%<BR>持续时间：10秒",
      change: "习得等级从40变更为22。<br>复唱时间从120秒变更为90秒。"
    },
    {
      isDisabled: "false",
      name: "亲疏自行",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/6Y_LOLWQWJSjGvQYoaGNhNaP-I.png",
      tiurl: "",
      tname: "",
      ticon: [
        { "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/rFrCBcRe9YrmPvb4fZkuFksSLw.png', tname: '防护职业' },
        { "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png', tname: '近战职业' },
        { "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/oWWxUIO2KagIEhDXy0541MRD7M.png', tname: '远程物理职业' }
      ],
      lvl: "Lv32",
      classification: "能力",
      cast: "即时",
      recast: "120秒",
      cost: "-",
      distant: "0",
      range: "0",
      rangeType: "zero",
      content: "为自身张开一个防护罩，一定时间内令除特定攻击之外其他所有击退与吸引效果失效　持续时间：6秒<BR>防护罩追加效果（受到物理攻击时，发动几率100%）：攻击者减速20%　持续时间：15秒",
      change: "习得等级从12变更为32。<br>复唱时间从60秒变更为120秒。<br>适应职业新增防护职业和远程物理职业。<br>效果时间从5秒变更为6秒。"
    },
    {
      isDisabled: "false",
      name: "真北",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/XZP5ljS8oyG6Fc82vyjrpY36Uk.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png",
      tname: "近战职业",
      ticon: [{ "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png', tname: '近战职业' }],
      lvl: "Lv50",
      classification: "能力",
      cast: "即时",
      recast: "45秒",
      cost: "-",
      distant: "0",
      range: "0",
      rangeType: "zero",
      content: "一定时间内无视技能的方向要求　持续时间：10秒<BR>积蓄次数：2",
      change: "习得等级从48变更为50。<br>复唱时间从90秒变更为45秒。<br>效果时间从15秒变更为10秒。<br>新增“积蓄次数：2”。"
    }
  ];


  traits: any[] = [
    {
      isDisabled: "false",
      name: "疾风迅雷",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Monk/Trait_00.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
      tname: "格斗家",
      ticon: "",
      lvl: "Lv1",
      classification: "",
      cast: "",
      recast: "",
      cost: "",
      distant: "",
      range: "",
      rangeType: "zero",
      content: "自动攻击间隔、战技与魔法的咏唱及复唱时间缩短5%",
      "type": "new",
      change: ""
    },
    {
      isDisabled: "false",
      name: "疾风迅雷效果提高",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Monk/Trait_01.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
      tname: "格斗家",
      ticon: "",
      lvl: "Lv20",
      classification: "",
      cast: "",
      recast: "",
      cost: "",
      distant: "",
      range: "",
      rangeType: "zero",
      content: "自动攻击间隔、战技与魔法的咏唱及复唱时间缩短10%",
      "type": "new",
      change: "「疾风迅雷可以累积到2档」变更为「自动攻击间隔、战技与魔法的咏唱及复唱时间缩短10%」"
    },
    {
      isDisabled: "false",
      name: "疾风迅雷效果提高II",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Monk/Trait_02.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
      tname: "格斗家",
      ticon: "",
      lvl: "Lv40",
      classification: "",
      cast: "",
      recast: "",
      cost: "",
      distant: "",
      range: "",
      rangeType: "zero",
      content: "自动攻击间隔、战技与魔法的咏唱及复唱时间缩短15%",
      "type": "new",
      change: "「疾风迅雷可以累积到3档」变更为「自动攻击间隔、战技与魔法的咏唱及复唱时间缩短15%」"
    },
    {
      isDisabled: "false",
      name: "斗气积累提高",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Monk/Trait_03.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
      tname: "武僧",
      ticon: "",
      lvl: "Lv62",
      classification: "",
      cast: "",
      recast: "",
      cost: "",
      distant: "",
      range: "",
      rangeType: "zero",
      content: "对自身附加斗气状态<BR>发动条件：战技暴击时（发动几率80%）",
      change: "斗气积累的发动几率从50%变更为80%。"
    },
    {
      isDisabled: "false",
      name: "罗刹冲精通",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Monk/Trait_04.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
      tname: "武僧",
      ticon: "",
      lvl: "Lv66",
      classification: "",
      cast: "",
      recast: "",
      cost: "",
      distant: "",
      range: "",
      rangeType: "zero",
      content: "罗刹冲变为积蓄技能<BR>积蓄次数：2",
      change: "效果更新。"
    },
    {
      isDisabled: "false",
      name: "红莲体势效果提高",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Monk/Trait_05.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
      tname: "武僧",
      ticon: "",
      lvl: "Lv72",
      classification: "",
      cast: "",
      recast: "",
      cost: "",
      distant: "",
      range: "",
      rangeType: "zero",
      content: "效果量提高到10%",
      change: ""
    },
    {
      isDisabled: "false",
      name: "斗气积累提高II",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Monk/Trait_06.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
      tname: "武僧",
      ticon: "",
      lvl: "Lv74",
      classification: "",
      cast: "",
      recast: "",
      cost: "",
      distant: "",
      range: "",
      rangeType: "zero",
      content: "对自身附加斗气状态的几率上升到100%<BR>发动条件：战技暴击时",
      change: "对自身附加斗气状态的上升几率从70%变更为100%。"
    },
    {
      isDisabled: "false",
      name: "疾风迅雷效果提高II",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Monk/Trait_08.png",
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
      tname: "武僧",
      ticon: "",
      lvl: "Lv76",
      classification: "",
      cast: "",
      recast: "",
      cost: "",
      distant: "",
      range: "",
      rangeType: "zero",
      content: "自动攻击间隔、战技与魔法的咏唱及复唱时间缩短20%",
      "type": "new",
      change: ""
    }];


  ngOnInit(): void {
  }

  //获取攻击范围图标
  getRangeImage(rangeType: string) {
    return "../../assets/rangeUI/" + rangeType + ".png";
  }

}
