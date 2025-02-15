// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        card: {
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start() {
        let arrRows = [];
        for(let row = 0 ; row < 4 ; row++){
            let arrRow = [];
            for(let col = 0; col < 4; col++){
                arrRow.push(0);
            }
            arrRows.push(arrRow);
        }
        cc.log(arrRows)
        this.render(arrRows);
    },

    render(arrRow) {
        for(let row =0 ; row < arrRow.length ; row++){
            for(let col = 0 ; col < arrRow[row].length ; col ++){
                let x = -226.227 + row *150;
                let y = 225.631 - col * 150;
                this.createItem(x,y,arrRow[row][col]);
            }
        }
    },

    createRandomNumber(){

    },

    createItem(x,y,value) {
        let card = cc.instantiate(this.card);
        card.parent = this.node
        card.x = x;
        card.y = y;
        //card.getComponent(cc.Label).string = value;
    }

    // update (dt) {},
});
