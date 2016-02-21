function deleteData(msg, table, id) {
    if (window.confirm(msg)) {
        var url = eshow.ctx + "/" + table + "!delete.action?id=" + id;
        $.get(url, function(data) {
            $('#' + table + id).slideUp("slow");
            delete msg;
        });
        return true;
    }
    return false;
}
