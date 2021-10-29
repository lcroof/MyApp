import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {

  constructor() { }

  skills: any[] = [
    {
       name: "毁灭", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_01.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv1", 
       classification: "魔法", 
       cast: "1.5秒", 
       recast: "2.5秒", 
       cost: "魔力200", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：160", 
       change: "咏唱时间改为1.5秒"
    }, 
    {
       name: "毒菌", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_02.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv2", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "魔力400", 
       distant: "25", 
       range:0, 
       content: "对目标附加无属性持续伤害状态<BR>威力：20　持续时间：30秒", 
       change: ""
    }, 
    {
       name: "医术", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_03.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv4", 
       classification: "魔法", 
       cast: "1.5秒", 
       recast: "2.5秒", 
       cost: "魔力400", 
       distant: "30", 
       range:0, 
       content: "恢复目标的体力　恢复力：400", 
       change: ""
    }, 
    {
       name: "召唤", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_04.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv4", 
       classification: "能力", 
       cast: "即时", 
       recast: "3秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "召唤擅长远程范围攻击的召唤兽<BR>与召唤II、召唤III,召唤II共享复唱时间", 
       change: ""
    }, 
    {
       name: "瘴气", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_05.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv6", 
       classification: "魔法", 
       cast: "2.5秒", 
       recast: "2.5秒", 
       cost: "魔力500", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：20<BR>追加效果：无属性持续伤害<BR>威力：20　持续时间：30秒", 
       change: ""
    }, 
    {
       name: "灵攻I", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_06.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv10", 
       classification: "魔法", 
       cast: "即时", 
       recast: "30秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "令当前同行的召唤兽发动灵攻I对应的技能<BR>积蓄次数：2<BR>发动条件：自身处于战斗状态且召唤兽处于同行状态", 
       change: ""
    }, 
    {
       name: "复生", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_07.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv12", 
       classification: "魔法", 
       cast: "8秒", 
       recast: "2.5秒", 
       cost: "魔力2400", 
       distant: "30", 
       range:0, 
       content: "令无法战斗的目标以衰弱状态重新振作起来", 
       change: ""
    }, 
    {
       name: "召唤II", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_08.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv15", 
       classification: "能力", 
       cast: "即时", 
       recast: "3秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "召唤擅长辅助召唤师的召唤兽<BR>与召唤、召唤III,召唤共享复唱时间", 
       change: ""
    }, 
    {
       name: "溃烂爆发", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_09.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv18", 
       classification: "能力", 
       cast: "即时", 
       recast: "5秒", 
       cost: "「以太超流」1", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击<BR>该技能威力随自身在目标身上附加的毒菌、瘴气系持续伤害状态数量而变化<BR>无持续伤害时威力：100<BR>1种持续伤害时威力：200<BR>2种持续伤害时威力：300<BR>发动条件：以太超流", 
       change: ""
    }, 
    {
       name: "能量吸收", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_10.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv18", 
       classification: "能力", 
       cast: "即时", 
       recast: "30秒", 
       cost: "-", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：150<BR>追加效果：恢复伤害量一定比例的体力<BR>同时恢复自身魔力<BR>追加效果：获得10点异想以太<BR>发动条件：以太超流", 
       change: ""
    }, 
    {
       name: "猛毒菌", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_11.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv26", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "魔力600", 
       distant: "25", 
       range:0, 
       content: "对目标附加无属性持续伤害状态<BR>威力：30　持续时间：30秒", 
       change: ""
    }, 
    {
       name: "灾祸", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_12.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv30", 
       classification: "能力", 
       cast: "即时", 
       recast: "10秒", 
       cost: "-", 
       distant: "25", 
       range: "8", 
       content: "令目标所带的毒菌、瘴气系持续伤害状态向周围扩散对目标之外的敌人威力降低60%。<BR>持续时间：扩散时各状态的剩余持续时间<BR>自身没有对目标施加毒菌、瘴气系持续伤害状态时无效<BR>追加效果（发动几率15%）：令各状态以原本持续时间扩散", 
       change: ""
    }, 
    {
       name: "召唤III", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_13.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv30", 
       classification: "能力", 
       cast: "即时", 
       recast: "3秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "召唤擅长近身单体攻击的召唤兽<BR>与召唤、召唤II共享复唱时间", 
       change: ""
    }, 
    {
       name: "能量抽取", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_14.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv35", 
       classification: "能力", 
       cast: "即时", 
       recast: "30秒", 
       cost: "-", 
       distant: "25", 
       range: "5", 
       content: "对目标及其周围的敌人发动无属性范围魔法攻击　威力：40<BR>追加效果：2档以太超流<BR>与能量吸收共享复唱时间", 
       change: ""
    }, 
    {
       name: "毁坏", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_15.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv38", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "魔力400", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：160", 
       change: ""
    }, 
    {
       name: "迸裂", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_16.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv40", 
       classification: "魔法", 
       cast: "2.5秒", 
       recast: "2.5秒", 
       cost: "魔力400", 
       distant: "25", 
       range: "5", 
       content: "对目标及其周围的敌人发动无属性范围魔法攻击　威力：70", 
       change: ""
    }, 
    {
       name: "灵攻II", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_17.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv40", 
       classification: "魔法", 
       cast: "即时", 
       recast: "30秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "令当前同行的召唤兽发动灵攻II对应的技能<BR>积蓄次数：2<BR>发动条件：自身处于战斗状态且召唤兽处于同行状态", 
       change: ""
    }, 
    {
       name: "内力迸发", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_18.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv50", 
       classification: "能力", 
       cast: "即时", 
       recast: "120秒", 
       cost: "-", 
       distant: "30", 
       range:0, 
       content: "令当前同行的召唤兽发动其最强技能<BR>发动条件：自身处于战斗状态且召唤兽处于同行状态", 
       change: ""
    }, 
    {
       name: "痛苦核爆", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_19.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv52", 
       classification: "能力", 
       cast: "即时", 
       recast: "5秒", 
       cost: "「以太超流」1", 
       distant: "25", 
       range: "5", 
       content: "对目标及其周围敌人发动无属性范围魔法攻击　威力：130<BR>发动条件：以太超流", 
       change: ""
    }, 
    {
       name: "毁荡", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_20.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv54", 
       classification: "魔法", 
       cast: "2.5秒", 
       recast: "2.5秒", 
       cost: "魔力200", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：200", 
       change: ""
    }, 
    {
       name: "三重灾祸", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_21.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv56", 
       classification: "能力", 
       cast: "即时", 
       recast: "50秒", 
       cost: "-", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：150<BR>追加效果：对目标同时施放剧毒菌和瘴暍<BR>持续时间：各魔法单独施放时的持续时间", 
       change: ""
    }, 
    {
       name: "龙神附体", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_22.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv58", 
       classification: "能力", 
       cast: "即时", 
       recast: "55秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "一定时间内，自身的魔法咏唱时间缩短2.5秒<BR>持续时间：15秒<BR>持续时间结束后获得附体深度<BR>追加效果：发动时重置三重灾祸的复唱时间<BR>发动条件：自身处于战斗状态且亚灵神巴哈姆特不处于显现状态，附身深度不满2档,<BR>发动条件：自身处于战斗状态<BR>与不死鸟附体共享复唱时间", 
       change: ""
    }, 
    {
       name: "死星核爆", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_23.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv60", 
       classification: "能力", 
       cast: "即时", 
       recast: "15秒", 
       cost: "-", 
       distant: "25", 
       range: "5", 
       content: "对目标及其周围敌人发动无属性范围魔法攻击　威力：400<BR>攻击复数敌人时，对目标之外的敌人威力降低50%<BR>发动后会取消龙神附体状态<BR>发动条件：龙神附体状态中", 
       change: ""
    }, 
    {
       name: "毁绝", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_24.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv62", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "魔力200", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：300<BR>发动条件：毁坏强化状态中<BR><BR>※该技能无法设置到热键栏", 
       change: ""
    }, 
    {
       name: "以太契约", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_25.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv64", 
       classification: "能力", 
       cast: "即时", 
       recast: "180秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "命令召唤兽发动灵护<BR>发动条件：召唤兽处于同行状态", 
       change: ""
    }, 
    {
       name: "灵护", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_26.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv64", 
       classification: "能力", 
       cast: "即时", 
       recast: "-", 
       cost: "-", 
       distant:0, 
       range: "15", 
       content: "为召唤兽周围的队员附加灵护状态<BR>灵护效果：攻击造成的伤害提高5%<BR>持续时间：15秒<BR><BR>※该技能无法设置到热键栏", 
       change: ""
    }, 
    {
       name: "剧毒菌", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_27.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv66", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "魔力600", 
       distant: "25", 
       range:0, 
       content: "对目标附加无属性持续伤害状态<BR>威力：45　持续时间：30秒", 
       change: ""
    }, 
    {
       name: "瘴暍", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_28.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv66", 
       classification: "魔法", 
       cast: "2.5秒", 
       recast: "2.5秒", 
       cost: "魔力500", 
       distant: "25", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：45<BR>追加效果：无属性持续伤害<BR>威力：45　持续时间：30秒", 
       change: ""
    }, 
    {
       name: "龙神召唤", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_29.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv70", 
       classification: "能力", 
       cast: "即时", 
       recast: "30秒", 
       cost: "「附体深度」2", 
       distant:0, 
       range:0, 
       content: "令亚灵神巴哈姆特显现　显现时间：20秒<BR>当召唤者使用魔法攻击目标时，亚灵神巴哈姆特会发动真龙波<BR>亚灵神巴哈姆特显现时，之前召唤出的召唤兽会被暂时回收，并在显现时间结束后再次出现<BR>发动条件：召唤兽处于同行状态，且附体深度为2档<BR>龙神附体状态中无法发动", 
       change: ""
    }, 
    {
       name: "真龙波", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_30.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv70", 
       classification: "魔法", 
       cast: "即时", 
       recast: "1.5秒", 
       cost: "-", 
       distant: "100", 
       range:0, 
       content: "对目标发动无属性魔法攻击　威力：150<BR>发动条件：亚灵神巴哈姆特显现中<BR><BR>※该技能无法设置到热键栏", 
       change: ""
    }, 
    {
       name: "龙神迸发", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_31.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv70", 
       classification: "能力", 
       cast: "即时", 
       recast: "10秒", 
       cost: "-", 
       distant: "25", 
       range:0, 
       content: "命令显现的亚灵神巴哈姆特发动死亡轮回<BR>发动条件：亚灵神巴哈姆特显现中<BR>与不死鸟迸发共享复唱时间", 
       change: ""
    }, 
    {
       name: "死亡轮回", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_32.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv70", 
       classification: "能力", 
       cast: "即时", 
       recast: "-", 
       cost: "-", 
       distant: "100", 
       range: "5", 
       content: "对目标及其周围敌人发动无属性范围魔法攻击　威力：650<BR>攻击复数敌人时，对目标之外的敌人威力降低50%<BR>发动条件：亚灵神巴哈姆特显现中<BR><BR>※该技能无法设置到热键栏", 
       change: ""
    }, 
    {
       name: "不死鸟召唤", 
       ndes: "", 
       pic: "../../assets/SMN/不死鸟召唤.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "魔法", 
       cast: "即时", 
       recast: "60秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "进入不死鸟附体状态并令亚灵神不死鸟显现<BR>持续时间：15秒<BR>亚灵神不死鸟显现时发动不死鸟之翼<BR>另外，召唤后亚灵神不死鸟会发动赤炎攻击目标<BR>追加效果：毁荡变为灵泉之炎，三重灾祸变为炼狱之炎<BR>追加效果：对自身附加红宝石奥秘、绿宝石奥秘、黄宝石奥秘状态<BR>发动条件：自身处于战斗状态，且宝石兽处于同行状态<BR>亚灵神不死鸟显现时，之前召唤出的宝石兽会被暂时回收，并在显现时间结束后再次出现<BR><BR>※该技能无法设置到热键栏", 
       change: "重做，不死鸟期间不再需要交替使用灵泉之炎与炼狱之炎，仅区分单体与AOE<BR>技能说明持续时间为20秒，但实机演示以及技能循环推测应为15秒"
    }, 
    {
       name: "灵泉之炎", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_34.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "魔力200", 
       distant: "25", 
       range:0, 
       content: "对目标发动火属性魔法攻击　威力：430<BR>发动条件：不死鸟附体状态中<BR><BR>※该技能无法设置到热键栏", 
       change: "重做为单独的单体技能，不在为连击"
    }, 
    {
       name: "炼狱之炎", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_35.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "魔力300", 
       distant: "25", 
       range: "8", 
       content: "对目标及其周围敌人发动火属性魔法攻击　威力：180<BR>发动条件：不死鸟附体状态中<BR><BR>※该技能无法设置到热键栏", 
       change: "重做为单独的AOE技能，不在为连击"
    }, 
    {
       name: "Rekindle<BR>再生之炎", 
       ndes: "", 
       pic: "../../assets/SMN/再生之炎.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "能力", 
       cast: "即时", 
       recast: "20秒", 
       cost: "-", 
       distant:"30", 
       range: 0, 
       content: "持续恢复周围队员的体力<BR>恢复力：100　持续时间：21秒<BR><BR>※该技能无法设置到热键栏", 
       change: "星极超流在不死鸟附体期间的替换技能，学习不死鸟召唤后习得"
    }, 
    {
       name: "不死鸟之翼", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_37.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "能力", 
       cast: "即时", 
       recast: "-", 
       cost: "-", 
       distant:0, 
       range: "15", 
       content: "持续恢复周围队员的体力<BR>恢复力：100　持续时间：21秒<BR><BR>※该技能无法设置到热键栏", 
       change: "暂不可知是否还存在召唤兽系数"
    }, 
    {
       name: "赤焰", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_38.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "魔法", 
       cast: "即时", 
       recast: "1.5秒", 
       cost: "-", 
       distant: "100", 
       range:0, 
       content: "对目标发动火属性魔法攻击　威力：150<BR>发动条件：亚灵神不死鸟显现中<BR><BR>※该技能无法设置到热键栏", 
       change: "改为全自动触发,但不清楚天启是否会影响触发次数,暂不可知是否还存在召唤兽系数"
    }, 
    {
       name: "不死鸟迸发", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_36.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "能力", 
       cast: "即时", 
       recast: "8秒", 
       cost: "-", 
       distant: "25", 
       range:0, 
       content: "命令显现的亚灵神不死鸟发动天启<BR>发动条件：亚灵神不死鸟显现中<BR>满足发动条件后，龙神迸发变为不死鸟迸发<BR>与龙神迸发共享复唱时间<BR><BR>※该技能无法设置到热键栏", 
       change: "CD修改为8秒，使在15秒不死鸟期间可以使用两次"
    }, 
    {
       name: "天启", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Action_39.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "能力", 
       cast: "即时", 
       recast: "-", 
       cost: "-", 
       distant: "100", 
       range: "5", 
       content: "对目标及其周围的敌人发动火属性范围魔法攻击　威力：650<BR>攻击复数敌人时，对目标之外的敌人威力降低60%<BR>发动条件：亚灵神不死鸟显现中<BR><BR>※该技能无法设置到热键栏", 
       change: "暂不可知是否还存在召唤兽系数"
    }, 
    {
       name: "Ruby Catastrophe<BR>红宝石之灾", 
       ndes: "", 
       pic: "../../assets/SMN/红宝石之灾.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv82", 
       classification: "能力", 
       cast: "2.8秒", 
       recast: "2.5秒", 
       cost: "「火属性以太」 1", 
       distant:"25", 
       range: 0, 
       content: "对目标及其周围敌人发动火属性范围魔法攻击　威力：180<BR>发动条件：火属性以太<BR><BR>※该技能无法设置到热键栏", 
       change: "宝石之耀火属性以太下衍生技"
    }, 
    {
       name: "Topaz Catastrophe<BR>黄宝石之灾", 
       ndes: "", 
       pic: "../../assets/SMN/黄宝石之灾.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv82", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "「土属性以太」 1", 
       distant:"25", 
       range: 0, 
       content: "对目标及其周围敌人发动土属性范围魔法攻击　威力：140<BR>追加效果：山崩预备<BR>持续时间：永久<BR>山崩预备状态在使用其他属性召唤技能时结束<BR>发动条件：土属性以太<BR><BR>※该技能无法设置到热键栏", 
       change: "宝石之耀土属性以太下衍生技"
    }, 
    {
       name: "Emerald Catastrophe<BR>绿宝石之灾", 
       ndes: "", 
       pic: "../../assets/SMN/绿宝石之灾.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv82", 
       classification: "魔法", 
       cast: "即时", 
       recast: "1.5秒", 
       cost: "「风属性以太」 1", 
       distant:"25", 
       range: "", 
       content: "对目标及其周围敌人发动风属性范围魔法攻击　威力：100<BR>发动条件：风属性以太<BR><BR>※该技能无法设置到热键栏", 
       change: "宝石之耀风属性以太下衍生技"
    }, 
    {
       name: "深红旋风", 
       ndes: "", 
       pic: "../../assets/SMN/深红旋风.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv86", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "-", 
       distant:"25", 
       range: "5", 
       content: "冲向目标并对目标及其周围敌人造成火属性范围魔法攻击  威力：430<BR>攻击复数目标时，对目标之外的敌人威力降低65%<BR>发动条件：深红旋风预备状态中<BR>止步状态下无法发动<BR><BR>※该技能无法设置到热键栏", 
       change: "星极超流在深红旋风预备状态下的替换技能，带有突进效果，与深红打击为2连击"
    }, 
    {
       name: "Crimson Strike<BR>深红强袭", 
       ndes: "", 
       pic: "../../assets/SMN/深红强袭.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv86", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "-", 
       distant:"3", 
       range: "5", 
       content: "对目标及其周围敌人造成火属性范围魔法攻击　威力：430<BR>攻击复数敌人时，对目标之外的敌人威力降低65%<BR>连击条件：深红旋风<BR><BR>※该技能无法设置到热键栏", 
       change: "近战第二连"
    }, 
    {
       name: "山崩", 
       ndes: "", 
       pic: "../../assets/SMN/山崩.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv86", 
       classification: "能力", 
       cast: "即时", 
       recast: "1秒", 
       cost: "-", 
       distant:"25", 
       range: "5", 
       content: "对目标及其周围敌人造成土属性范围魔法攻击  威力：150<BR>攻击复数目标时，对目标之外的敌人威力降低70%<BR>发动条件：山崩预备状态中<BR><BR>※该技能无法设置到热键栏", 
       change: "星极超流在山崩预备状态下的替换技能"
    }, 
    {
       name: "螺旋气流", 
       ndes: "", 
       pic: "../../assets/SMN/螺旋气流.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv86", 
       classification: "魔法", 
       cast: "即时", 
       recast: "3秒", 
       cost: "3.5秒", 
       distant:"25", 
       range: 0, 
       content: "对目标及其周围敌人造成风属性范围魔法攻击  威力：430<BR>攻击复数目标时，对目标之外的敌人威力降低65%<BR>追加效果：以目标为中心产生伤害区域<BR>威力：30　持续时间：12秒<BR>发动条件：螺旋气流预备状态中<BR><BR>※该技能无法设置到热键栏", 
       change: "星极超流在螺旋气流预备状态下的替换技能"
    }, 
    {
       name: "Summon Ifrit II<BR>火神召唤II", 
       ndes: "", 
       pic: "../../assets/SMN/火神召唤II.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv90", 
       classification: "魔法", 
       cast: "即时", 
       recast: "2.5秒", 
       cost: "-", 
       distant:"25", 
       range: 0, 
       content: "召唤火神伊芙利特，令其发动地狱之火炎<BR>对目标及其周围敌人造成火属性范围魔法伤害  威力：700<BR>攻击复数敌人时，对目标之外的敌人威力降低60%<BR>追加效果：2档火属性以太<BR>火属性以太效果：宝石之光和宝石之耀变为火属性魔法<BR>持续时间：30秒<BR>追加效果：深红旋风预备<BR>持续时间：永久<BR>深红旋风可用状态在使用其他属性召唤技能时结束<BR>发动条件：红宝石奥秘，且宝石兽处于同行状态<BR>不能在自身附加了土属性以太或风属性以太时使用", 
       change: "新技能，上位替换火神召唤"
    }, 
    {
      name: "Summon Ifrit II<BR>土神召唤II", 
      ndes: "", 
      pic: "../../assets/SMN/土神召唤II.png", 
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
      tname: "召唤师", 
      ticon: "", 
      lvl: "Lv90", 
      classification: "魔法", 
      cast: "即时", 
      recast: "2.5秒", 
      cost: "-", 
      distant:"25", 
      range: 0, 
      content: "召唤土神泰坦，令其发动大地之怒<BR>对目标及其周围敌人造成土属性范围魔法伤害  威力：700<BR>攻击复数敌人时，对目标之外的敌人威力降低60%<BR>追加效果：4档土属性以太<BR>土属性以太效果：宝石之光和宝石之耀变为土属性魔法<BR>持续时间：30秒<BR>发动条件：黄宝石奥秘，且宝石兽处于同行状态<BR>不能在自身附加了火属性以太或风属性以太时使用", 
      change: "新技能，上位替换土神召唤"
    }, 
    {
      name: "Summon Titan II<BR>风神召唤II", 
      ndes: "", 
      pic: "../../assets/SMN/风神召唤II.png", 
      tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
      tname: "召唤师", 
      ticon: "", 
      lvl: "Lv90", 
      classification: "魔法", 
      cast: "即时", 
      recast: "2.5秒", 
      cost: "-", 
      distant:"25", 
      range: 0, 
      content: "召唤风神迦楼罗，令其发动大气爆发<BR>对目标及其周围敌人造成风属性范围魔法伤害  威力：700<BR>攻击复数敌人时，对目标之外的敌人威力降低60%<BR>追加效果：4档风属性以太<BR>风属性以太效果：宝石之光和宝石之耀变为风属性魔法<BR>持续时间：30秒<BR>追加效果：螺旋气流预备<BR>持续时间：永久<BR>螺旋气流可用状态在使用其他属性召唤技能时结束<BR>发动条件：绿宝石奥秘，且宝石兽处于同行状态<BR>不能在自身附加了火属性以太或土属性以太时使用", 
      change: "新技能，上位替换风神召唤"
    }
];

  roleSkills: any[] = [
    {
       name: "昏乱", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Black Mage/Magical Ranged DPS Role Action_01.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/8Dnf8Wy9IyxIt21y6lrE5atKt0.png", 
       tname: "远程魔法职业", 
       ticon: [
          {
            "url": "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/8Dnf8Wy9IyxIt21y6lrE5atKt0.png", 
           tname: "远程魔法职业"
          }
        ], 
       lvl: "Lv8", 
       classification: "能力", 
       cast: "即时", 
       recast: "90秒", 
       cost: "-", 
       distant: "25", 
       range:0, 
       content: "一定时间内，令目标的智力与精神降低10%<BR>持续时间：10秒", 
       change: ""
    }, 
    {
       name: "即刻咏唱", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Black Mage/Magical Ranged DPS Role Action_02.png", 
       tiurl: "", 
       tname: "", 
       ticon: [
            {
                "url": "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/V5xx3kfnREBO-2xWbTUW2Csy_Q.png", 
               tname: "治疗职业"
            }, 
            {
                "url": "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/8Dnf8Wy9IyxIt21y6lrE5atKt0.png", 
               tname: "远程魔法职业"
            }
        ], 
       lvl: "Lv18", 
       classification: "能力", 
       cast: "即时", 
       recast: "60秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "一定时间内，下次咏唱的魔法没有任何咏唱时间<BR>持续时间：10秒", 
       change: ""
    }, 
    {
       name: "醒梦", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Black Mage/Magical Ranged DPS Role Action_03.png", 
       tiurl: "", 
       tname: "", 
       ticon: [
            {
                "url": "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/V5xx3kfnREBO-2xWbTUW2Csy_Q.png", 
               tname: "治疗职业"
            }, 
            {
                "url": "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/8Dnf8Wy9IyxIt21y6lrE5atKt0.png", 
               tname: "远程魔法职业"
            }
        ], 
       lvl: "Lv24", 
       classification: "能力", 
       cast: "即时", 
       recast: "60秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "持续恢复自身魔力<BR>效果量：50　持续时间：21秒", 
       change: ""
    }, 
    {
       name: "沉稳咏唱", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Black Mage/Magical Ranged DPS Role Action_04.png", 
       tiurl: "", 
       tname: "", 
       ticon: [
            {
                "url": "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/V5xx3kfnREBO-2xWbTUW2Csy_Q.png", 
               tname: "治疗职业"
            }, 
            {
                "url": "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/8Dnf8Wy9IyxIt21y6lrE5atKt0.png", 
               tname: "远程魔法职业"
            }
        ], 
       lvl: "Lv44", 
       classification: "能力", 
       cast: "即时", 
       recast: "120秒", 
       cost: "-", 
       distant:0, 
       range:0, 
       content: "一定时间内，咏唱的魔法不会被任何妨碍打断<BR>同时，令除特定攻击之外其他所有击退与吸引效果失效<BR>持续时间：6秒", 
       change: ""
    }
];



  traits: any[] = [
    {
       name: "技能效果提高", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_01.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv20", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "除自动攻击外的技能造成的伤害提高至基本值的1.1倍，恢复技能的恢复量也提高至基本值的1.1倍", 
       change: ""
    }, 
    {
       name: "毒菌精通", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_02.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv26", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "毒菌变为猛毒菌", 
       change: ""
    }, 
    {
       name: "技能效果提高II", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_03.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/_3v-EDzckpsEC39oe0t4A8pLJk.png", 
       tname: "秘术师", 
       ticon: "", 
       lvl: "Lv40", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "除自动攻击外的技能造成的伤害提高至基本值的1.3倍，恢复技能的恢复量也提高至基本值的1.3倍", 
       change: ""
    }, 
    {
       name: "毁灭精通", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_04.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv54", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "毁灭变为毁荡", 
       change: ""
    }, 
    {
       name: "毁坏效果提高", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_05.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv62", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "对自身附加毁坏强化状态<BR>毁坏变为毁绝<BR>最多可积累到4档　持续时间：永久<BR>发动条件：发动灵攻I攻击技能时", 
       change: ""
    }, 
    {
       name: "毒菌精通II", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_06.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv66", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "猛毒菌变为剧毒菌，瘴气变为瘴暍", 
       change: ""
    }, 
    {
       name: "内力迸发效果提高", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_07.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv68", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "内力迸发的复唱时间缩短到120秒", 
       change: ""
    }, 
    {
       name: "龙神附体效果提高", 
       ndes: "通过特职任务获得", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_08.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv70", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "自身附体深度加深1档<BR>发动条件：龙神附体状态结束时", 
       change: ""
    }, 
    {
       name: "龙神附体效果提高II", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_09.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv72", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "对自身附加2档附体深度状态<BR>发动条件：龙神附体状态结束时", 
       change: ""
    }, 
    {
       name: "灵攻效果提高", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_10.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv74", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "发动灵攻II攻击技能时，可同时发动毁坏效果提高特性", 
       change: ""
    }, 
    {
       name: "迸裂效果提高", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_14.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv76", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "迸裂的威力提高到90", 
       change: ""
    }, 
    {
       name: "灾祸效果提高", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_12.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv78", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "灾祸追加效果的发动几率变为100%", 
       change: ""
    }, 
    {
       name: "不死鸟附体效果提高", 
       ndes: "", 
       pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Summoner/Trait_13.png", 
       tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png", 
       tname: "召唤师", 
       ticon: "", 
       lvl: "Lv80", 
       classification: "", 
       cast: "", 
       recast: "", 
       cost: "", 
       distant: "", 
       range: "", 
       content: "可使亚灵神不死鸟显现　显现时间：20秒<BR>亚灵神不死鸟显现时发动不死鸟之翼<BR>另外，当召唤者对敌人发动魔法攻击时，亚灵神不死鸟将同时发动赤焰<BR>之前召唤出的召唤兽会在亚灵神不死鸟显现时被召回，显现时间结束后会被再次召唤<BR>发动条件：召唤兽处于同行状态并发动不死鸟附体时", 
       change: ""
    }
];

  ngOnInit(): void {
  }

}
