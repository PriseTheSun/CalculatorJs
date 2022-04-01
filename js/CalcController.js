class CalcController{
    constructor (){
        this._displayCalc = "0";
        this._currentDate; 
    }
    //get & set do displayCalc;
    get displayCalc(){
        return this._displayCalc; 
    }
    set displayCalc(value){
        this._displayCalc = value;
    }
    //get & set do currentDate;
    get _currentDate(){
        return this._currentDate;
    }
    set _currentDate(value){
        this._currentDate = value;
    }
}