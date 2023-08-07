// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity1 = "go to the office") {
    return `This Monday, I will ${activity1}.`
}

function wrapAdjective(style = "*") {
    return function innerFunction(adj1 = "special") {
        return `You are ${style}${adj1}${style}!`
    }
}