var $ = jQuery;

    $(document).on('click','#btnExport', function(e){
        e.preventDefault();
        var prj_name = document.getElementById('project_name').value;
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        html2canvas(document.getElementById('example'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download(prj_name + utc + '.pdf');
            }
        });
    });