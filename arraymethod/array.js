// 工作中遇到处理数据


// 一.  两组数组对比取出相同的数据
let arr1 = [{id:12,mobphone:1806250992,nickname:'撒野'},{id:14,mobphone:1806250292,nickname:'王子病的春天'}]
let arr2 = [{id:15,mobphone:1806251112,nickname:'相见欢'},{id:12,mobphone:1806250992,nickname:'撒野'},{id:20,mobphone:1806251112,nickname:'乱世为王'}，{id:18,mobphone:1806151112,nickname:'默读'}]


// 相同
compare(arr1,arr2){
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if(arr1[j] === arr2[i]){
                newArr.push(arr1[j]);
            }
        }
    }
    return newArr;
}


// 2.不同的
compare(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr2.length; i++) {
        var id = arr2[i].id;
        var status = false;
        for (var j = 0; j < arr1.length; j++) {
            var userId = arr1[j].userId;
            if (userId == id) {
                status = true;
                break;
            }
        }
        if (!status) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
},


二 .合并数组
let arr1 = [{age:19},{age:20}];
let arr2 = [{name:'2013'},{name:'破云'}]
let arr3 = [{phone:13000229922},{phone:13020229922}]

需要实现
arr = [{age:19,name:'2013',phone:13000229922},{age:20,name:'破云',phone:13020229922}]

var arr = [];
for(var i=0;i<arr1.length;i++){
    arr.push(Object.assign({},arr1[i],arr2[i],arr3[i]))
}

三.js 判断一个 object 对象是否为空
if (JSON.stringify(data) === '{}') {
    return false // 如果为空,返回false，数组可以用同样的判断方式
}
if (Object.keys(object).length === 0) {
    return false // 如果为空,返回false，Object.keys(object)会返回一个空数组[]
}

四.js判断数组中对象里的某一个值是否存在
function isInArray(arr,value){
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]['id']){
            return true;
        }
    }
    return false;
}
var arr = [{id: "ccjl1"},{id: "ccjl2"},{id: "ccjl3"}];
var test = isInArray(arr,'ccjl1');
console.log(test);