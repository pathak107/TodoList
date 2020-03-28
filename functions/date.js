
module.exports.getDate=getDate;
function getDate()
{
    var d = new Date();
    
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    var day=d.toLocaleDateString("en-US",option);
    return day
}

module.exports.getDay=getDay;
function getDay()
{
    var d = new Date();
    
    var option={
        weekday:"long"
    }

    var day=d.toLocaleDateString("en-US",option);
    return day
}