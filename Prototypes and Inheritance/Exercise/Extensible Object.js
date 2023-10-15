function extensibleObject() {
    let parentObj = {};
    let childObj = Object.create(parentObj);

    childObj.extend = function(obj){
        let objAsArray = Object.entries(obj);

        for (const [key, value] of objAsArray) {
            if (typeof(value) === 'function') {
                parentObj[key] = value;
            } else{
                childObj[key] = value;
            }
        }

    }
    return childObj;
}