/**
 * Created by yuchong on 2017/10/30.
 */
function _addressToString(addobj){
    try{
        var addStr='';
        $.each(addobj,function(key,val){
            addStr+=key+":"+val+",";
        });
        return addStr.substring(0,addStr.length-1);
    }catch(e){return ''}
}
function _addressToJson(addstr){
    try{
        if(addstr.indexOf(",")>-1){
            var addobj={};
            $.each(addstr.split(','),function(idx,item){
                if(item.indexOf(":")>-1){
                    var row = item.split(":");
                    addobj[row[0].trim()] = row[1];
                }
            });
            return addobj
        }else{return null}
    }catch(e){return null}
}
//type:ship/bill
function _addressStrBindHtml(type,valtype,addstr,cat){
    try{
        if(isempty(cat)){cat='add'}
        if(addstr.indexOf(",")>-1){
            $.each(addstr.split(','),function(idx,item){
                if(item.indexOf(":")>-1){
                    var row = item.split(":");
                    if($("."+row[0].replace(cat,type)).length>0){
                        if(valtype=="val"){
                            $("."+row[0].replace(cat,type)).val(row[1]);
                        }else if (valtype=="html"){
                            $("."+row[0].replace(cat,type)).html(row[1]);
                        }
                    }
                }
            });
        }else{return null}
    }catch(e){return null}
}

function _toJson(obj){
    return $.parseJSON(obj.replace(/True/g, 'true').replace(/None/g, '""').replace(/False/g, 'false').replace(/'/g, '"').replace('\\xa0',''));
}