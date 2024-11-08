// Tile构造函数，用于创建一个新的Tile对象
function Tile(position,value){
    this.row = position.row;
    this.column = position.column;
    this.value = value;

    this.prePositon = null;

    this.mergedTiles = null;
}
// 更新Tile的位置
Tile.prototype.updatePosition = function(position) {

    this.prePosition = { row : this.row, column: this.column}

    this.row = position.row;
    this.column = position.column;
};