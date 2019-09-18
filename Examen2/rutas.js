class Ruta{
    constructor(){
        this._numero = numero;
        this._tDuracion = duracion;
        this._bases = 5;
        this._marca = marca;
    }
    get numero(){
        return this._numero;
    }
    set numero(numero){
        this._numero = numero;
    }
    get tDuracion(){
        return this._tDuracion;
    }
    get marca(){
        return this._marca;
    }
}

class Base{
    constructor(){
        this._nombre = nombre;
        this._referencia = referencia;
        this._latitud = 0;
        this._longitud = 0; 
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get referencia(){
        return this._referencia;
    }
    get latitud(){
        return this._latitud;
    }
    get longitud(){
        return this._longitud;
    }
    
}

class Salidas  extends Ruta{
    constructor(numero){
        super(numero)
        this._bInicio = inicio;
        this._hIncio = hIncio;
        this._hFin = hFin;
    }
    get bInicio(){
        return this._bInicio;
    }
    set bInicio(inicio){
        this.bInicio = inicio;
    }
    get hInicio(){
        return this._bInicio;
    }
    set hInicio(hinicio){
        this.bInicio = hinicio;
    }
    get hFin(){
        return this._hFin;
    }
    set bInicio(hFin){
        this.hFin = hFin;
    }

}