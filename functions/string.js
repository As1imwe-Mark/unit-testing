const stringLength=str=>(!(str.length>0 && str.length<10))? `throw new Error("It doesn't pass")` : str.length;

module.exports =stringLength;