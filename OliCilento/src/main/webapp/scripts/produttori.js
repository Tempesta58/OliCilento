$(document).ready(function (){

    $.getJSON("ServletDisplayProduttori", function (object) {
        $.getJSON("ServletDisplayRisorse", function (object_2){

            let num = 0;
            for(let x in object){
                let risorse = 0;

                for(i in object_2){

                    if (object_2[i].idProduttore == object[x].id ){
                        risorse += object_2[i].risorse;
                    }

                }


                var riga = $("<tr class=\"row\">" +
                    "<form action=\"ServletDettagliProduttore\" method=\"post\" id=\"prod_"+ num +"\"></form>" +
                    "<input type=\"hidden\" form=\"prod_"+ num +"\" name=\"id\" value=\"" + object[x].id + "\">" +
                    "<td>" + object[x].nome + " " + object[x].cognome+ "</td>" +
                    "<td>" + object[x].anni + "</td>" +
                    "<td>" + risorse + "</td>" +
                    "<td>" + object[x].telefono + "</td>" +
                    "<td><input type=\"submit\" form=\"prod_"+ num +"\" value =\"Visualizza Pagina Produttore\"></td>" +
                    "</tr>");


                $(".table").append(riga);
                num++;


            }

        })

    })

})

