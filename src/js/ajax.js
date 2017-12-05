import $ from 'jquery';

var ajax={};
ajax.get=function(data,url){
    return $.ajax({
        url:url,
        method:"get",
        dataType:"JSON"
    });
}

ajax.post=function(data,url){
    return $.ajax({
        url:url,
        method:"post",
        dataType:"JSON"
    });
}
export default ajax;