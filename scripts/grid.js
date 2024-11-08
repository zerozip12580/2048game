/**
 * 创建一个网格对象
 * @param {number} size - 网格的大小，默认为4
 */
function Grid(size = 4){
    this.size = size;
    this.cells = [];
    this.init(size);
};

/**
 * 初始化网格
 * @param {number} size - 网格的大小
 */
Grid.prototype.init = function(size){
    for (let row = 0; row < size; row++) {
        this.cells.push([]);
        for (let column = 0; column < size; column++) {
            this.cells[row].push(null);
        }       
    }
};

//在指定位置添加tile
Grid.prototype.add  = function(tile){
    this.cells[tile.row][tile.column] = tile;
};

Grid.prototype.remove = function(tile) {
    this.cells[tile.row][tile.column] = null;
};

/**
 * 找到所有可用的单元格
 * @returns {Array} availableCells - 可用单元格的数组
 */
Grid.prototype.availableCells = function(){
    const availableCells = [];
    for (let row = 0; row < this.cells.length; row++) {
        for (let column = 0; column < this.cells[row].length; column++) {
            if(!this.cells[row][column]){
                availableCells.push({row,column});
            }
        }
    }
    return availableCells;
};

/**
 * 从可用单元格中随机选择一个
 * @returns {Object|undefined} - 随机可用单元格的位置，或未定义
 */
Grid.prototype.randomAvailableCell = function(){
    const cells = this.availableCells();
    if(cells.length > 0 ){
        return cells[Math.floor(Math.random()*cells.length)];
    }
};
Grid.prototype.get = function (position) {
    if (this.outOfRange(position)) {
      return null;
    }
    return this.cells[position.row][position.column];
};
  
  // 判断某个位置是否超出边界
Grid.prototype.outOfRange = function (position) {
    return (
      position.row < 0 ||
      position.row >= this.size ||
      position.column < 0 ||
      position.column >= this.size
    );
};