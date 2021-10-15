import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-red-mage',
  templateUrl: './red-mage.component.html',
  styleUrls: ['./red-mage.component.css']
})
export class RedMageComponent implements OnInit {

  skills: any[] = [
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_01.png',
      isSpecialSkill:false, name:'回刺', lvl: 1, type: '战技', spellTime: '即时', recastTime: 2.5, cost: '-', distance: 3, range: 0,
      affect: `对目标发动物理攻击　威力：130<br>平衡量谱中黑魔元与白魔元都在30点以上时，该技能变为魔回刺`,
      changed: `技能变为魔回刺的条件从「黑魔元与白魔元都在30点以上」变更为「黑魔元与白魔元都在20点以上」`
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_02.png',
      isSpecialSkill:false, name:'摇荡', lvl: 2, type: '魔法', spellTime: '2秒', recastTime: 2.5, cost: '魔力200', distance: 25, range: 0,
      affect: `对目标发动无属性魔法攻击　威力：180<br>追加效果：获得3点黑魔元与3点白魔元`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_03.png',
      nisSpecialSkill:false, ame:'赤闪雷', lvl: 4, type: '魔法', spellTime: '5秒', recastTime: 2.5, cost: '魔力300', distance: 25, range: 0,
      affect: `对目标发动雷属性魔法攻击　威力：370<br>追加效果：获得11点黑魔元<br>追加效果（发动几率50%）：赤火炎预备　持续时间：30秒`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_04.png',
      isSpecialSkill:false, name:'短兵相接', lvl: 6, type: '能力', spellTime: '即时', recastTime: 40, cost: '-', distance: 25, range: 0,
      affect: `冲向目标并发动物理攻击　威力：130<br>止步状态下无法发动`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_05.png',
      isSpecialSkill:false, name:'赤疾风', lvl: 10, type: '魔法', spellTime: '5秒', recastTime: 2.5, cost: '魔力300', distance: 25, range: 0,
      affect: `对目标发动风属性魔法攻击　威力：370<br>追加效果：获得11点白魔元<br>追加效果（发动几率50%）：赤飞石预备　持续时间：30秒`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_06.png',
      isSpecialSkill:false, name:'散碎', lvl: 15, type: '魔法', spellTime: '5秒', recastTime: 2.5, cost: '魔力400', distance: 25, range: 5,
      affect: `对目标及其周围的敌人发动无属性范围魔法攻击　威力：120<br>追加效果：获得3点黑魔元与3点白魔元`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_07.png',
      isSpecialSkill:false, name:'赤震雷', lvl: 18, type: '魔法', spellTime: '2秒', recastTime: 2.5, cost: '魔力400', distance: 25, range: 5,
      affect: `对目标及其周围敌人发动雷属性魔法攻击　威力：120<br>追加效果：获得7点黑魔元`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_08.png',
      isSpecialSkill:false, name:'赤烈风', lvl: 22, type: '魔法', spellTime: '2秒', recastTime: 2.5, cost: '魔力400', distance: 25, range: 5,
      affect: `对目标及其周围敌人发动风属性魔法攻击　威力：120<br>追加效果：获得7点白魔元`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_09.png',
      isSpecialSkill:false, name:'赤火炎', lvl: 26, type: '魔法', spellTime: '2秒', recastTime: 2.5, cost: '魔力200', distance: 25, range: 0,
      affect: `对目标发动火属性魔法攻击　威力：300<br>追加效果：获得9点黑魔元<br>发动条件：赤火炎预备状态中`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_10.png',
      isSpecialSkill:false, name:'赤飞石', lvl: 30, type: '魔法', spellTime: '2秒', recastTime: 2.5, cost: '魔力200', distance: 25, range: 0,
      affect: `对目标发动土属性魔法攻击　威力：300<br>追加效果：获得9点白魔元<br>发动条件：赤飞石预备状态中`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_11.png',
      isSpecialSkill:false, name:'交击斩', lvl: 35, type: '战技', spellTime: '即时', recastTime: 2.5, cost: '-', distance: 3, range: 0,
      affect: `对目标发动物理攻击　威力：100<br>连击条件：回刺或魔回刺　连击中威力：150<br>平衡量谱中黑魔元与白魔元都在25点以上时，该技能变为魔交击斩`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_12.png',
      isSpecialSkill:false, name:'移转', lvl: 40, type: '能力', spellTime: '即时', recastTime: 35, cost: '-', distance: 5, range: 0,
      affect: `对目标发动物理攻击　威力：200<br>追加效果：后跳15米距离<br>止步状态下无法发动<br>与交剑共享复唱时间`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_13.png',
      isSpecialSkill:false, name:'飞刺', lvl: 45, type: '能力', spellTime: '即时', recastTime: 25, cost: '-', distance: 25, range: 0,
      affect: `对目标发动物理攻击　威力：440`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_14.png',
      isSpecialSkill:false, name:'连攻', lvl: 50, type: '战技', spellTime: '即时', recastTime: 2.5, cost: '-', distance: 3, range: 0,
      affect: `对目标发动物理攻击　威力：100<br>连击条件：交击斩或魔交击斩<br>连击中威力：230<br>平衡量谱中黑魔元与白魔元都在25点以上时，该技能变为魔连攻`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_15.png',
      isSpecialSkill:false, name:'促进', lvl: 50, type: '能力', spellTime: '即时', recastTime: 55, cost: '-', distance: 0, range: 0,
      affect: `一定时间内，前3次能附加赤火炎预备状态与赤飞石预备状态的技能追加效果发动率变为100%<br>持续时间：20秒`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_16.png',
      isSpecialSkill:false, name:'划圆斩', lvl: 52, type: '战技', spellTime: '即时', recastTime: 2.5, cost: '-', distance: 8, range: 8,
      affect: `向目标所在方向发出扇形范围物理攻击　威力：60<br>平衡量谱中黑魔元与白魔元都在20点以上时，该技能变为魔划圆斩`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_17.png',
      isSpecialSkill:false, name:'赤治疗', lvl: 54, type: '魔法', spellTime: '2秒', recastTime: 2.5, cost: '魔力500', distance: 30, range: 0,
      affect: `恢复目标的体力　恢复力：350`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_18.png',
      isSpecialSkill:false, name:'六分反击', lvl: 56, type: '能力', spellTime: '即时', recastTime: 35, cost: '-', distance: 25, range: 6,
      affect: `对目标及其周围敌人发动范围物理攻击　威力：400`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_19.png',
      isSpecialSkill:false, name:'鼓励', lvl: 58, type: '能力', spellTime: '即时', recastTime: 120, cost: '-', distance: 0, range: 15,
      affect: `一定时间内，自身发动魔法攻击造成的伤害提高10%<br>持续时间：20秒<br>此效果每4秒降低2%<br>追加效果：令周围队员发动物理攻击造成的伤害提高10%
      <br>持续时间：20秒<br>此效果每4秒降低2%`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_20.png',
      isSpecialSkill:true, name:'倍增', lvl: 60, type: '能力', spellTime: '即时', recastTime: 110, cost: '-', distance: 0, range: 0,
      affect: `当前平衡量谱中积累的量值翻倍<br>追加效果：重置短兵相接和转移以及交剑的复唱时间<br>追加效果：自身发动魔法攻击造成的伤害提高5%
      <br>持续时间：10秒<br>此技能会中断连击`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_21.png',
      isSpecialSkill:false, name:'震荡', lvl: 62, type: '魔法', spellTime: '2秒', recastTime: 2.5, cost: '魔力200', distance: 25, range: 0,
      affect: `对目标发动无属性魔法攻击　威力：290<br>追加效果：获得3点黑魔元与3点白魔元`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_22.png',
      isSpecialSkill:false, name:'赤复活', lvl: 64, type: '魔法', spellTime: '10秒', recastTime: 2.5, cost: '魔力2400', distance: 30, range: 0,
      affect: `令无法战斗的目标以衰弱状态重新振作起来`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_23.png',
      isSpecialSkill:false, name:'冲击', lvl: 66, type: '魔法', spellTime: '5秒', recastTime: 2.5, cost: '魔力400', distance: 25, range: 5,
      affect: `对目标及其周围敌人发动无属性范围魔法攻击　威力：220<br>追加效果：获得3点黑魔元与3点白魔元`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_24.png',
      isSpecialSkill:false, name:'赤核爆', lvl: 68, type: '魔法', spellTime: '即时', recastTime: 2.5, cost: '魔力400', distance: 25, range: 0,
      affect: `对目标发动火属性魔法攻击　威力：600<br>连击条件：魔连攻<br>追加效果：获得21点黑魔元<br>追加效果（发动几率20%）：赤火炎预备　持续时间：30秒
      <br>发动时白魔元高于黑魔元则100%发动追加效果<br>发动条件：魔连攻成功时<br>若满足发动条件，则赤闪雷变为赤核爆<br><br>※该技能无法设置到热键栏`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_25.png',
      isSpecialSkill:true, name:'赤神圣', lvl: 70, type: '魔法', spellTime: '即时', recastTime: 2.5, cost: '魔力400', distance: 25, range: 0,
      affect: `对目标发动无属性魔法攻击　威力：600<br>连击条件：魔连攻<br>追加效果：获得21点白魔元<br>追加效果（发动几率20%）：赤飞石预备　持续时间：30秒
      <br>发动时黑魔元高于白魔元则100%发动追加效果<br>发动条件：魔连攻成功时<br>若满足发动条件，则赤疾风变为赤神圣<br><br>※该技能无法设置到热键栏`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_26.png',
      isSpecialSkill:false, name:'交剑', lvl: 72, type: '能力', spellTime: '即时', recastTime: 35, cost: '-', distance: 3, range: 0,
      affect: `对目标发动物理攻击　威力：150<br>与移转共享复唱时间`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_27.png',
      isSpecialSkill:false, name:'续斩', lvl: 76, type: '战技', spellTime: '即时', recastTime: 2.5, cost: '-', distance: 3, range: 0,
      affect: `对目标发动物理攻击　威力：100<br>平衡量谱中黑魔元与白魔元都在5点以上时，该技能变为魔续斩`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_28.png',
      isSpecialSkill:false, name:'焦热', lvl: 80, type: '魔法', spellTime: '即时', recastTime: 2.5, cost: '魔力400', distance: 25, range: 0,
      affect: `对目标发动无属性魔法攻击　威力：700<br>连击条件：赤核爆或赤神圣<br>追加效果：获得7点黑魔元与7点白魔元<br>发动条件：赤核爆或赤神圣成功时
      <br>满足发动条件后，震荡变为焦热<br><br>※该技能无法设置到热键栏`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_29.png',
      isSpecialSkill:false, name:'魔回刺', lvl: 1, type: '战技', spellTime: '即时', recastTime: 1.5, cost: '「黑魔元」30<br />「白魔元」30', distance: 3, range: 0,
      affect: `对目标发动无属性魔法攻击　威力：220<br>发动条件：黑魔元、白魔元各30点<br><br>※该技能无法设置到热键栏`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_30.png',
      isSpecialSkill:false, name:'魔交击斩', lvl: 35, type: '战技', spellTime: '即时', recastTime: 1.5, cost: '「黑魔元」25<br />「白魔元」25', distance: 3, range: 0,
      affect: `对目标发动无属性魔法攻击　威力：100<br>连击条件：回刺或魔回刺　连击中威力：290<br>发动条件：黑魔元、白魔元各25点<br><br>※该技能无法设置到热键栏`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_31.png',
      isSpecialSkill:false, name:'魔连攻', lvl: 50, type: '战技', spellTime: '即时', recastTime: 2.2, cost: '「黑魔元」25<br />「白魔元」25', distance: 3, range: 0,
      affect: `对目标发动无属性魔法攻击　威力：100<br>连击条件：魔交击斩<br>连击中威力：470<br>发动条件：黑魔元、白魔元各25点<br><br>※该技能无法设置到热键栏`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_32.png',
      isSpecialSkill:false, name:'魔划圆斩', lvl: 52, type: '战技', spellTime: '即时', recastTime: 1.5, cost: '「黑魔元」20<br />「白魔元」20', distance: 8, range: 8,
      affect: `向目标所在方向发出扇形范围魔法攻击　威力：200<br>发动条件：黑魔元、白魔元各20点<br><br>※该技能无法设置到热键栏`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Action_33.png',
      isSpecialSkill:false, name:'魔续斩', lvl: 76, type: '战技', spellTime: '即时', recastTime: 2.2, cost: '「黑魔元」5<br />「白魔元」5', distance: 25, range: 0,
      affect: `对目标发动无属性魔法攻击　威力：300<br>发动条件：黑魔元与白魔元各5点<br><br>※该技能无法设置到热键栏`,
      changed: ``
    },
  ]; 

  roleSkills: any[] = [
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Black Mage/Magical Ranged DPS Role Action_01.png',
      name:'昏乱', lvl: 8, isDoubleRole:false, type: '能力', spellTime: '即时', recastTime: 90, cost: '-', distance: 25, range: 0,
      affect: `一定时间内，令目标的智力与精神降低10% <br> 持续时间：10秒`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Black Mage/Magical Ranged DPS Role Action_01.png',
      name:'昏乱', lvl: 1, isDoubleRole:true, type: '能力', spellTime: '即时', recastTime: 90, cost: '-', distance: 25, range: 0,
      affect: `一定时间内，令目标的智力与精神降低10% <br> 持续时间：10秒`,
      changed: ``
    },
  ];


  traits: any[] = [
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Trait_01.png',
      name:'连续咏唱', lvl: 1, 
      affect: `发动有咏唱时间的魔法时，对自身附加连续咏唱状态
      <br />连续咏唱效果：下次咏唱魔法不需要咏唱时间
      <br />若在持续时间中发动自动攻击或能力之外的技能，会立即解除连续咏唱状态`,
      changed: ``
    },
    {
      pic: 'https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Red Mage/Trait_01.png',
      name:'连续咏唱', lvl: 1, 
      affect: `发动有咏唱时间的魔法时，对自身附加连续咏唱状态
      <br />连续咏唱效果：下次咏唱魔法不需要咏唱时间
      <br />若在持续时间中发动自动攻击或能力之外的技能，会立即解除连续咏唱状态`,
      changed: ``
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
