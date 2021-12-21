function validate(){
    var _Name = document.getElementById('Name');
    var _Email = document.getElementById('Email');
    var _Mess = document.getElementById('Mess')
    if(_Name.value == ''){
        _Name.classList.add('error');
        document.getElementById('er_Name').classList.remove('er');
        return false;
    }else{
        _Name.classList.remove('error');
        document.getElementById('er_Name').classList.add('er');
    }
    if(_Email.value == ''){
        _Email.classList.add('error');
        document.getElementById('er_Email').classList.remove('er');
        return false;
    }else{
        _Email.classList.remove('error');
        document.getElementById('er_Email').classList.add('er');
    }
    if(_Mess.value == ''){
        _Mess.classList.add('error');
        document.getElementById('er_Mess').classList.remove('er');
        return false;
    }else{
        _Mess.classList.remove('error');
        document.getElementById('er_Mess').classList.add('er');
    }
}