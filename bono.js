var App = /** @class */ (function () {
    function App() {
        this.sueldo = parseFloat(document.getElementById("sueldo").value);
        this.edad = parseFloat(document.getElementById("edad").value);
        this.sexo = document.getElementById("sexo");
        this.porcentaje = 0.15;
        this.porcentaje2 = 0.03;
        this.mayor = 0.02;
        this.extranjero = 0.05;
        this.p1 = 0.05;
        this.p2 = 0.10;
        this.p3 = 0.15;
        this.php = 20;
        this.ja = 35;
        this.asp = 40;
        this.ora = 60;
        this.vb = 55;
        this.bd = 15;
    }
    App.prototype.calcularporciento = function () {
        return this.sueldo * this.porcentaje;
    };
    App.prototype.porcientofem = function () {
        return this.calcularporciento() + this.porcentaje2;
    };
    App.prototype.porcientoanti = function () {
        return this.porcientofem() + this.p1;
    };
    App.prototype.porcientocurso = function () {
        return this.ja * 3;
    };
    App.prototype.total = function () {
        return this.porcientocurso() + this.porcientoanti();
    };
    App.prototype.setResultado = function () {
        var cantidad = this.total();
        document.getElementById("bono").value = cantidad.toString();
    };
    return App;
}());
function Calcular() {
    var objeto = new App();
    var cantidad = document.getElementById("sueldo").value;
    if (cantidad == "") {
        alert("Debe ingresar una cantidad");
        return false;
    }
    var edad = document.getElementById("edad").value;
    if (edad == "") {
        alert("Debe ingresar la edad");
        return false;
    }
    var sexo = document.getElementById("sexo").value;
    if (sexo == "") {
        alert("Debe ingresar la edad");
        return false;
    }
    objeto.setResultado();
}
function Nuevo() {
    document.getElementById("sueldo").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("nacionalidad").value = "";
    document.getElementById("cbox1").value = "";
    document.getElementById("cbox2").value = "";
    document.getElementById("cbox3").value = "";
    document.getElementById("cbox4").value = "";
    document.getElementById("cbox5").value = "";
    document.getElementById("cbox6").value = "";
    document.getElementById("bono").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("antiguedad1").value = "";
    document.getElementById("antigu2").value = "";
    document.getElementById("antigu3").value = "";
}
