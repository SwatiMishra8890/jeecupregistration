function SubmitForm()
{
    //GET FORM DATA///
    var inputname = $("#inputname").val();
    var fathername = $("#fathername").val();
    var mothername = $("#mothername").val();
    var date = $("#date").val();
    var gender = $("#gender").val();
    if (inputname == null || inputname == "") {
        Swal.fire({
            icon: "warning",
            title: "warning...",
            text: "Name is required",
           
        });
        return;
    }
    if (fathername == null || fathername == "") {
        Swal.fire({
            icon: "warning",
            title: "warning...",
            text: "fathername is required",

        });
        return;
    }
    if (mothername == null || mothername == "") {
        Swal.fire({
            icon: "warning",
            title: "warning...",
            text: "mothername is required",

        });
        return;
    }
    if (date == null || date == "") {
        Swal.fire({
            icon: "warning",
            title: "warning...",
            text: "date is required",

        });
        return;
    }
    if (gender == null || gender == "") {
        Swal.fire({
            icon: "warning",
            title: "warning...",
            text: "gender is required",

        });
        return;
    }
   
}