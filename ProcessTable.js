function processTable(data){
    var tableData = data.split('\n');
    var unidades = 0, pares = 0, segundaTraseira = 0, total = 0;
    tableData.forEach(line => {
        arrayLine = line.split(',');
        let digito = arrayLine[3];
        if (digito == '1') {unidades++; total++}
        if (digito == '2') {pares++; total++}
        if (digito == '3') {segundaTraseira++; total++}           
    });
    return {"unitarias": unidades, "pares": pares, "segundaTraseira": segundaTraseira};
}


module.exports = processTable;