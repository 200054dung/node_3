exports.values = [
    {id: 1,name:'コーヒー',price:150},
    {id: 1,name:'紅茶',price:110},
    {id: 1,name:'ほうじ茶',price:120},
]
exports.find = (id)=>{
    return this.values.find((value) => value.id == id)
}