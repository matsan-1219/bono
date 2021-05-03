class App {
 public sueldo:number = parseFloat((<HTMLInputElement>document.getElementById("sueldo")).value);
 public edad:number = parseFloat((<HTMLInputElement>document.getElementById("edad")).value);
 public sexo=(<HTMLInputElement>document.getElementById("sexo"));

   public porcentaje:number = 0.15; 
  
   public porcentaje2:number= 0.03;
   public mayor :number=0.02;
   public extranjero:number =0.05;
   public p1:number= 0.05;
   
   public p2 :number=0.10;
   public p3:number =0.15;
   public php :number=20;
   public ja:number =35;
   public asp:number= 40;
   public ora :number=60;
   public vb:number =55;
   public bd:number =15;


   

   
   public calcularporciento():number {
    return this.sueldo * this.porcentaje  ;
    }
    public porcientofem():number {
        return this.calcularporciento() + this.porcentaje2 ;
    }
    public porcientoanti():number {
        return this.porcientofem() + this.p1;
    }
    public porcientocurso():number {
        return this.ja *3;
    }
    public total():number {
        return this.porcientocurso() + this.porcientoanti();
    }



   public setResultado(){
    let cantidad =this.total().toFixed(2);
    (<HTMLInputElement>document.getElementById("bono")).value = cantidad.toString();
 
       
   
  }
 
    

  

}
function Calcular(){
    let objeto = new App();
    let cantidad = (<HTMLInputElement>document.getElementById("sueldo")).value;
    if (cantidad == "") {
        alert("Debe ingresar una cantidad");
        return false; 
    }
    let edad = (<HTMLInputElement>document.getElementById("edad")).value;
    if (edad == "") {
        alert("Debe ingresar la edad");
        return false;

    }   
    let sexo = (<HTMLInputElement>document.getElementById("sexo")).value;
    if (sexo == "") {
        alert("Debe ingresar la edad");
        return false;
    }
    objeto.setResultado();
 
}
function Nuevo(){
    (<HTMLInputElement>document.getElementById("sueldo")).value = "";
    (<HTMLInputElement>document.getElementById("edad")).value = "";
    (<HTMLInputElement>document.getElementById("nacionalidad")).value = "";
    (<HTMLInputElement>document.getElementById("cbox1")).value = "";
    (<HTMLInputElement>document.getElementById("cbox2")).value = "";
    (<HTMLInputElement>document.getElementById("cbox3")).value = "";
    (<HTMLInputElement>document.getElementById("cbox4")).value = "";
    (<HTMLInputElement>document.getElementById("cbox5")).value = "";
    (<HTMLInputElement>document.getElementById("cbox6")).value = "";
    (<HTMLInputElement>document.getElementById("bono")).value = "";
    (<HTMLInputElement>document.getElementById("sexo")).value = "";
    (<HTMLInputElement>document.getElementById("antiguedad1")).value = "";
    (<HTMLInputElement>document.getElementById("antigu2")).value = "";
    (<HTMLInputElement>document.getElementById("antigu3")).value = "";
 
    
}



