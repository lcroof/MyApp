import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragoon',
  templateUrl: './dragoon.component.html',
  styleUrls: ['./dragoon.component.css']
})
export class DragoonComponent implements OnInit {

  constructor() { }

  today: Date = new Date();

  skills: any[] = [
    {
        name: "精准刺",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_01.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/k_Q1zZVmdBmR240Xj6jDJGMiMA.png",
        tname: "枪术师",
        ticon: "",
        lvl: "Lv1",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：230",
        change: "威力从290变更为230"
    },
    {
        name: "贯通刺",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_02.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/k_Q1zZVmdBmR240Xj6jDJGMiMA.png",
        tname: "枪术师",
        ticon: "",
        lvl: "Lv4",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：130<BR>连击条件：精准刺　连击中威力：280",
        change: "威力从140变更为130<br>连击中威力从350变更为280"
    },
    {
        name: "龙剑",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_03.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/k_Q1zZVmdBmR240Xj6jDJGMiMA.png",
        tname: "枪术师",
        ticon: "",
        lvl: "Lv6",
        classification: "能力",
        cast: "即时",
        recast: "45秒",
        cost: "-",
        distant: "0",
        range: "0",
        rangeType: "zero",
        content: "效果时间内，自身发动的1次战技必定打出暴击，并且恢复自身体力<BR>该效果不适用于持续伤害等状态<BR>持续时间：5秒<BR>积蓄次数：2",
        change: "新增「积蓄次数：2」"
    },
    {
        name: "贯穿尖",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_04.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/k_Q1zZVmdBmR240Xj6jDJGMiMA.png",
        tname: "枪术师",
        ticon: "",
        lvl: "Lv15",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "20",
        range: "0",
        rangeType: "zero",
        content: "对目标发动远程物理攻击　威力：150",
        change: "射程距离从15米变更为20米"
    },
    {
        name: "开膛枪",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_05.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/k_Q1zZVmdBmR240Xj6jDJGMiMA.png",
        tname: "枪术师",
        ticon: "",
        lvl: "Lv18",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：140<BR>连击条件：精准刺　连击中威力：250<BR>连击成功：龙枪<BR>持续时间：30秒<BR>龙枪效果：攻击伤害提高10%",
        change: "威力从150变更为140<br>连击中威力从320变更为250<br>连击成功时，效果从「攻击伤害提高10%」变更为「龙枪 持续时间：30秒 龙枪效果：攻击伤害提高10%」"
    },
    {
        name: "直刺",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_06.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/k_Q1zZVmdBmR240Xj6jDJGMiMA.png",
        tname: "枪术师",
        ticon: "",
        lvl: "Lv26",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：100<BR>连击条件：贯通刺　连击中威力：400<BR>连击成功：龙牙龙爪预备<BR>持续时间：30秒<BR>该效果在执行了战技时自动解除",
        change: "连击中威力从530变更为400<br>「“苍天龙血”状态中连击成功」变更为「连击成功」<br>持续时间从10秒变更为30秒<br>连击成功时，效果从「龙牙龙爪效果提高」变更为「龙牙龙爪预备」"
    },
    {
        name: "猛枪",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_07.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/k_Q1zZVmdBmR240Xj6jDJGMiMA.png",
        tname: "枪术师",
        ticon: "",
        lvl: "Lv30",
        classification: "能力",
        cast: "即时",
        recast: "60秒",
        cost: "-",
        distant: "0",
        range: "0",
        rangeType: "zero",
        content: "一定时间内，自身发动攻击造成的伤害提高10%<BR>持续时间：20秒",
        change: "效果量从15%变更为10%<br>复唱时间从90秒变更为60秒"
    },
    {
        name: "跳跃",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_08.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv30",
        classification: "能力",
        cast: "即时",
        recast: "30秒",
        cost: "-",
        distant: "20",
        range: "0",
        rangeType: "zero",
        content: "跳起接近目标并发动物理攻击　威力：320<BR>攻击之后回到原位<BR>追加效果：幻象冲预备<BR>持续时间：15秒<BR>止步状态下无法发动",
        change: "威力从310变更为320"
    },
    {
        name: "回避跳跃",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_09.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv35",
        classification: "能力",
        cast: "即时",
        recast: "30秒",
        cost: "-",
        distant: "0",
        range: "0",
        rangeType: "zero",
        content: "向身后跳出15米距离<BR>止步状态下无法发动",
        change: ""
    },
    {
        name: "死天枪",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_10.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv40",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "10",
        range: "10",
        rangeType: "line",
        content: "向目标所在方向发出直线范围物理攻击　威力：110",
        change: "威力从170变更为110"
    },
    {
        name: "破碎冲",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_11.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv45",
        classification: "能力",
        cast: "即时",
        recast: "60秒",
        cost: "-",
        distant: "20",
        range: "0",
        rangeType: "zero",
        content: "跳起接近目标并发动物理攻击　威力：250<BR>积蓄次数：2<BR>止步状态下无法发动",
        change: "威力从240变更为250<br>新增「积蓄次数：2」"
    },
    {
        name: "樱花怒放",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_12.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/k_Q1zZVmdBmR240Xj6jDJGMiMA.png",
        tname: "枪术师",
        ticon: "",
        lvl: "Lv50",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：100<BR>背面攻击威力：140<BR>连击条件：开膛枪　连击中威力：220<BR>连击中背面攻击威力：260<BR>连击成功：持续伤害<BR>威力：40　持续时间：24秒<BR>连击成功：龙尾大回旋预备<BR>持续时间：30秒",
        change: "连击中威力从290变更为220<br>连击中背面攻击威力从330变更为260<br>持续伤害威力从50变更为40<br>「“苍天龙血”状态中连击成功」变更为「连击成功」<br>持续时间从10秒变更为30秒<br>连击成功时，效果从「龙尾大回旋效果提高」变更为「龙尾大回旋预备」"
    },
    {
        name: "龙炎冲",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_13.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv50",
        classification: "能力",
        cast: "即时",
        recast: "120秒",
        cost: "-",
        distant: "20",
        range: "5",
        rangeType: "circle",
        content: "跳起接近目标并发动火属性范围攻击　威力：300<BR>止步状态下无法发动",
        change: "威力从380变更为300"
    },
    {
        name: "战斗连祷",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_14.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv52",
        classification: "能力",
        cast: "即时",
        recast: "120秒",
        cost: "-",
        distant: "0",
        range: "15",
        rangeType: "circle",
        content: "一定时间内，自身与周围队员的暴击发动率提高10%<BR>持续时间：15秒",
        change: "持续时间从20秒变更为15秒<br>复唱时间从180秒变更为120秒"
    },
    {
        name: "龙牙龙爪",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_16.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv56",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：260<BR>侧面攻击威力：300<BR>发动条件：龙牙龙爪预备状态中",
        type: "update",
        change: "威力从340变更为260<br>侧面攻击威力从380变更为300<br>删除「追加效果：苍天龙血的持续时间延长10秒 最多可延长至30秒」<br>发动条件从「苍天龙血及龙牙龙爪效果提高状态中」变更为「龙牙龙爪预备」"
    },
    {
        name: "龙尾大回旋",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_17.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv58",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：260<BR>背面攻击威力：300<BR>发动条件：龙尾大回旋预备状态中",
        type: "update",
        change: "威力从340变更为260<br>背面攻击威力从380变更为300<br>删除「追加效果：苍天龙血的持续时间延长10秒 最多可延长至30秒」<br>发动条件从「苍天龙血及龙尾大回旋效果提高状态中」变更为「龙尾大回旋预备」"
    },
    {
        name: "武神枪",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_18.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv60",
        classification: "能力",
        cast: "即时",
        recast: "30秒",
        cost: "-",
        distant: "15",
        range: "15",
        rangeType: "circle",
        content: "向目标所在方向发出直线范围物理攻击　威力：250<BR>攻击复数敌人时，对目标之外的敌人威力降低30%<BR>追加效果：红莲龙血<BR>发动条件：龙眼2档",
        change: "威力从300变更为250<br>新增「攻击复数敌人时，对目标之外的敌人威力降低30%」<br>删除「发动条件：苍天龙血状态中」<br>追加效果从「苍天龙血变为红莲龙血」变更为「红莲龙血」"
    },
    {
        name: "音速刺",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_19.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv62",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "10",
        range: "10",
        rangeType: "line",
        content: "向目标所在方向发出直线范围物理攻击　威力：100<BR>连击条件：死天枪　连击中威力：120<BR>连击成功：龙枪<BR>持续时间：30秒<BR>龙枪效果：攻击伤害提高10%",
        change: "连击中威力从200变更为120<br>删除「连击成功：苍天龙血的持续时间延长10秒<BR>最多可延长至30秒」<br>新增「连击成功：龙枪 持续时间：30秒 龙枪效果：攻击伤害提高10%」"
    },
    {
        name: "巨龙视线",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_20.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv66",
        classification: "能力",
        cast: "即时",
        recast: "120秒",
        cost: "-",
        distant: "30",
        range: "0",
        rangeType: "zero",
        content: "为自身附加巨龙右眼状态<BR>当指定一名队员为目标时，为自身附加巨龙右眼状态，为目标附加巨龙左眼状态<BR>巨龙右眼效果：攻击伤害提高10%<BR>巨龙左眼效果：攻击伤害提高5%<BR>持续时间：20秒",
        change: "距离从12米改为30米<BR>删除「与目标的距离超过12米无法发动巨龙左眼的效果」"
    },
    {
        name: "幻象冲",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_21.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv68",
        classification: "能力",
        cast: "即时",
        recast: "1秒",
        cost: "-",
        distant: "20",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：200<BR>追加效果：龙眼<BR>发动条件：发动跳跃、高跳后对自身附加的幻象冲预备状态中",
        change: "威力从300变更为200<br>「“苍天龙血”或“红莲龙血”状态中追加效果」变更为「追加效果」"
    },
    {
        name: "死者之岸",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_22.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv70",
        classification: "能力",
        cast: "即时",
        recast: "10秒",
        cost: "-",
        distant: "15",
        range: "15",
        rangeType: "line",
        content: "向目标所在方向发出直线范围物理攻击　威力：350<BR>攻击复数敌人时，对目标之外的敌人威力降低30%<BR>发动条件：红莲龙血状态中<BR><BR>※该技能无法设置到热键栏",
        change: "威力从400变更为350<br>新增「攻击复数敌人时，对目标之外的敌人威力降低30%」"
    },
    {
        name: "山境酷刑",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_23.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv72",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "10",
        range: "10",
        rangeType: "line",
        content: "向目标所在方向发出直线范围物理攻击　威力：100<BR>连击条件：音速刺　连击中威力：150<BR>连击成功：龙眼预备<BR>持续时间：30秒",
        change: "连击中威力从230变更为150<br>删除「连击成功：苍天龙血的持续时间延长10秒<BR>最多可延长至30秒」<br>新增「连击成功：龙眼预备 持续时间：30秒」"
    },
    {
        name: "高跳",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_24.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv74",
        classification: "能力",
        cast: "即时",
        recast: "30秒",
        cost: "-",
        distant: "20",
        range: "0",
        rangeType: "zero",
        content: "跳起接近目标并发动物理攻击　威力：400<BR>攻击之后回到原位<BR>追加效果：幻象冲预备<BR>持续时间：15秒<BR>止步状态下无法发动",
        change: ""
    },
    {
        name: "龙眼雷电",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_25.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv76",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：280<BR>追加效果：天龙眼<BR>发动条件：龙眼预备状态中<BR><BR>※该技能无法设置到热键栏",
        change: "威力由330变更为280<br>新增「追加效果：天龙眼」<br>发动条件由「龙眼雷电预备状态中」变更为「龙眼预备状态中」"
    },
    {
        name: "坠星冲",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Action_26.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv80",
        classification: "能力",
        cast: "即时",
        recast: "30秒",
        cost: "-",
        distant: "20",
        range: "5",
        rangeType: "circle",
        content: "跳起接近目标并发动火属性范围物理攻击　威力：620<BR>攻击复数敌人时，对目标之外的敌人威力降低30%<BR>止步状态下无法发动<BR>发动条件：红莲龙血状态中",
        change: "威力由600变更为620"
    },
    {
        isDisabled: "false",
        name: "Draconian Fury<BR>龙眼苍穹",
        ndes: "",
        pic: "../../assets/DRG/龙眼苍穹.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv82",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "10",
        range: "10",
        rangeType: "line",
        content: "向目标所在方向发出直线范围物理攻击 威力：130<BR>追加效果：天龙眼<BR>发动条件：龙眼预备状态中<BR><BR>※该技能无法设置到热键栏",
        change: "新增技能"
    },
    {
        isDisabled: "false",
        name: "Heavens' Thrust<br>冲天刺",
        ndes: "",
        pic: "../../assets/DRG/冲天刺.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv86",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：100<BR>连击条件：贯通刺　连击中威力：480<BR>连击成功：龙牙龙爪预备<BR>持续时间：30秒<BR>该效果在执行了战技时自动解除",
        change: "新增技能"
    },
    {
        isDisabled: "false",
        name: "Chaotic Spring<BR>樱花缭乱",
        ndes: "",
        pic: "../../assets/DRG/樱花缭乱.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv86",
        classification: "战技",
        cast: "即时",
        recast: "2.5秒",
        cost: "-",
        distant: "3",
        range: "0",
        rangeType: "zero",
        content: "对目标发动物理攻击　威力：100<BR>背面攻击威力：140<BR>连击条件：开膛枪　连击中威力：260<BR>连击中背面攻击威力：300<BR>连击成功：持续伤害<BR>威力：45　持续时间：24秒<BR>连击成功：龙尾大回旋预备<BR>持续时间：30秒<BR>该效果在执行了战技时自动解除",
        change: "新增技能"
    },
    {
        isDisabled: "false",
        name: "Wyrmwind Thrust<BR>天龙点睛",
        ndes: "",
        pic: "../../assets/DRG/天龙点睛.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv90",
        classification: "能力",
        cast: "即时",
        recast: "10秒",
        cost: "-",
        distant: "15",
        range: "15",
        rangeType: "line",
        content: "向目标所在方向发出直线范围物理攻击　威力：370<BR>攻击复数敌人时，对目标之外的敌人威力降低50%<BR>发动条件：天龙眼2档",
        change: "新增技能"
    }
  ];


  roleSkills: any[] = [
    {
      name: "内丹",
      ndes: "",
      pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/2pih1KRjQsYAb_j4w7GkRFyglk.png",
      tiurl: "",
      tname: "",
      ticon: [
        { "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/9muqitiUXEK0W3qnM33Nb7sATk.png', tname: '近战职业' },
        { "url": 'https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/oWWxUIO2KagIEhDXy0541MRD7M.png', tname: '远程物理职业' }
      ],
      lvl: "Lv8",
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
      content: "令目标陷入眩晕状态<BR>持续时间：3秒",
      change: ""
    },
    {
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
      change: ""
    },
    {
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
      content: "一定时间内，令目标的物理伤害降低10%，魔法伤害降低5% <BR>持续时间：10秒",
      change: "效果从「令目标的力量与灵巧降低10% 」变更为「令目标的物理伤害降低10%，魔法伤害降低5% 」"
    },
    {
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
      content: "为自身张开一个防护罩，一定时间内令除特定攻击之外其他所有击退与吸引效果失效<BR>持续时间：6秒<BR>防护罩追加效果（受到物理攻击时，发动几率100%）：攻击者减速20%　持续时间：15秒",
      change: ""
    },
    {
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
      content: "一定时间内无视技能的方向要求<BR>持续时间：10秒<BR>积蓄次数：2",
      change: ""
    }
  ];


  traits: any[] = [
    {
        name: "苍天龙血",
        ndes: "",
        pic: "../../assets/DRG/苍天龙血.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv54",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "跳跃威力提高至320，破碎冲的威力提高至250",
        change: "新增特性"
    },
    {
        name: "长枪精通",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Trait_01.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv64",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "龙牙龙爪命中时可以使用一次龙尾大回旋，龙尾大回旋命中时可以使用一次龙牙龙爪，并且此时的威力上升100",
        change: "威力提升量从110变更为100"
    },
    {
        name: "红莲龙血",
        ndes: "通过特职任务获得",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Trait_02.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv70",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "对自身附加龙眼状态<BR>在龙眼累积到第二阶段的状态下使用武神枪，为自身附加红莲龙血状态<BR>在红莲龙血的状态下武神枪会变为死者之岸<BR>持续时间：20秒<BR>发动条件：幻象冲成功时",
        change: "效果更新"
    },
    {
        name: "跳跃精通",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Trait_03.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv74",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "跳跃变为高跳",
        change: ""
    },
    {
        name: "长枪精通II",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Trait_04.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv76",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "精准刺威力提高至230，贯通刺威力提高至130，开膛枪威力提高至140<BR>另外，在使用龙牙龙爪命中后使用龙尾大车轮时，或在使用龙尾大车轮命中后使用龙牙龙爪时，会对自身附加龙眼预备状态<BR>持续时间：30秒<BR>该效果在执行了战技时自动解除<BR>效果时间内，精准刺变为龙眼雷电",
        change: "效果更新"
    },
    {
        name: "龙血精通",
        ndes: "",
        pic: "https://static.web.sdo.com/jijiamobile/pic/ff14/20190917jobguid/Dragoon/Trait_05.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv78",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "红莲龙血的持续时间延长到30秒",
        change: "效果对象中删除了苍天龙血"
    },
    {
        name: "山境酷刑效果提高",
        ndes: "",
        pic: "../../assets/DRG/山境酷刑效果提高.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv82",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "对自身附加龙眼预备状态<BR>持续时间：30秒<BR>效果时间内，死天枪变为龙眼苍穹<BR>该效果在执行了战技时自动解除<BR>发动条件：山境酷刑连击成功时",
        change: "新增特性"
    },
    {
        name: "破碎冲效果提高",
        ndes: "",
        pic: "../../assets/DRG/破碎冲效果提高.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv84",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "破碎冲变为积蓄技能 <BR>积蓄次数：2",
        change: "新增特性"
    },
    {
        name: "长枪精通III",
        ndes: "",
        pic: "../../assets/DRG/长枪精通III.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv86",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "直刺变为冲天刺，樱花怒放变为樱花缭乱",
        change: "新增特性"
    },
    {
        name: "龙剑效果提高",
        ndes: "",
        pic: "../../assets/DRG/龙剑效果提高.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv88",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "龙剑变为积蓄技能 <BR>积蓄次数：2",
        change: "新增特性"
    },
    {
        name: "长枪精通IV",
        ndes: "",
        pic: "../../assets/DRG/长枪精通IV.png",
        tiurl: "https://static.web.sdo.com/jijiamobile/pic/ff14/20170901battle/zWRkXGJIJhN7WHGGv1gVscRxmA.png",
        tname: "龙骑士",
        ticon: "",
        lvl: "Lv90",
        classification: "",
        cast: "",
        recast: "",
        cost: "",
        distant: "",
        range: "",
        rangeType: "zero",
        content: "武神枪威力提高至250，死者之岸的威力提高至350<BR>另外，龙眼雷电和龙眼苍穹执行成功时，对自身附加天龙眼状态<BR>最大档数：2",
        change: "新增特性"
    }
  ];

  ngOnInit(): void {
  }

  //获取攻击范围图标
  getRangeImage(rangeType: string) {
    return "../../assets/rangeUI/" + rangeType + ".png";
  }

}
