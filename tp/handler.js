const { TransactionHandler } = require('sawtooth-sdk/processor/handler');
const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions');
const cbor = require('cbor');
const PatientRecord = require('./PatientRecord');

var key_hard = [];
var list = [];
var id=0;
var hgb=0;
var sao2=0;
var svo2=0;
var pao2=0;
var pvo2=0;
var co=0;
var get_key=0;
var get_keyvalues=0;
var arr_key=0;
var remainder=BigInt(0);
var pkey = [];
var hgb_range = [];
var do2_range = [];
var vo2_range = [];
var ide=BigInt(0);
var hgbe=BigInt(0);
var sao2e=BigInt(0);
var svo2e=BigInt(0);
var pao2e=BigInt(0);
var pvo2e=BigInt(0);
var coe=BigInt(0);
var do2calce=BigInt(0);
var vo2calce=BigInt(0);
var ards
var b1=0;
var { TP_FAMILY, TP_NAMESPACE } = require('./constants');


class ArdsHandler extends TransactionHandler {
    constructor() {
        super(TP_FAMILY, ['1.0'], [TP_NAMESPACE]);
    }

     Encryption_Initialization()
    {
	get_key=get_key+1;
	get_keyvalues=get_key+1;
	var key_generation= BigInt(BigInt(list[get_key])*BigInt(list[get_keyvalues]));
	//console.log(key_generation);
	pkey.push(BigInt(list[get_keyvalues]));
	var result=key_hard[arr_key];
	arr_key=arr_key+1;
	//console.log(list[get_keyvalues]);
	//console.log(list[get_key]);
	var power_values=BigInt((BigInt(list[get_keyvalues])**(BigInt(list[get_key]))));
	var final_power=BigInt(power_values*BigInt(result))
	remainder=final_power%key_generation;
	//console.log(remainder);
	//console.log(typeof(remainder));

    }
      encryption_process(val)
    {
	var id1=BigInt(val);
	 var ncrypted_unit=id1+remainder;
	return ncrypted_unit;
    }

      encryption()
    {
	get_key=1000+Math.floor(Math.random() * (400 - 0) + 0);
	for ( var i = 0; i < 10000000; i++)
	{
		var key=1200+Math.floor(Math.random() * (20000 - 0) + 0);
		if(key>0)
		{
			key_hard.push(key);
		}
	}
	//console.log(get_key).
	var beg=1500;
    var end=20000;
    var n; 
    var j;
	for(n = beg; n <= end; n++) 
	{
            var prime = true;
            for(j = 2; j <= n / 2; j++)
			{
                if (n % j == 0 && n != j) 
				{
                    prime = false;
                }
            }
            if(prime) 
			{
				//console.log("Inside prime if ")
                list.push(n);
            }
    }    
	var f1=parseFloat(hgb);
	var f2=parseFloat(sao2);
	var f3=parseFloat(pao2);
	var f4=parseFloat(svo2);
	var f5=parseFloat(pvo2);
    
	var cao2calc =(1.34*f1*(f2/100))+(f3*0.0031);
	cao2calc = parseInt(cao2calc);
	
	var cvo2calc =(1.34*f1*(f4/100))+(f5*0.0031);
	cvo2calc = parseInt(cvo2calc);
	
	var dif = cao2calc - cvo2calc;
	dif = parseInt(dif);
	
	this.Encryption_Initialization()
	
	ide=this.encryption_process(id);
	//console.log(ide);
	
	hgbe=this.encryption_process(hgb);
	//console.log(hgbe);
	
	sao2e=this.encryption_process(sao2);
	//console.log(sao2e);
	
	svo2e=this.encryption_process(svo2);
	//console.log(svo2e);
	
	pao2e=this.encryption_process(pao2);
	//console.log(pao2e);
	
	pvo2e=this.encryption_process(pvo2);
	//console.log(pvo2e);
	
	coe=this.encryption_process(co);
	//console.log(coe);
	
	var cao2calce=this.encryption_process(String(cao2calc));
	//console.log(cao2calce);
	
	var dife=this.encryption_process(String(dif));
	//console.log(dife);
	
	var tene=this.encryption_process("10");
	//console.log(tene);
	
	do2calce=cao2calce*coe*tene;
	//console.log(do2calce);
	
	vo2calce=dife*coe*tene;
	//console.log(vo2calce);
	
	var cao2_r1 = "11";
    var cvo2_r1 = "8";
    var co_r1 = "3";
    var hgb_r2 = "11";
	
	var cao2_re=this.encryption_process(cao2_r1);
	var cvo2_re=this.encryption_process(cvo2_r1);
	var co_re=this.encryption_process(co_r1);
	var hgb_re=this.encryption_process(hgb_r2);
	
	var do2ra=cao2_re*co_re*tene;
	var vo2ra=co_re*cvo2_re*tene;
	
	hgb_range.push(hgb_re);
	do2_range.push(do2ra);
	vo2_range.push(vo2ra);
	
    }

    analysis()
    {
	    var temp =0;
        var temp1 =0;
        var temp2 =0;
        ards="No"

       var c1 =0;
       var c2 =0;
       var c3 =0;

       c1=String(do2_range[b1]).localeCompare(String(do2calce));
       c2=String(vo2_range[b1]).localeCompare(String(vo2calce));
        //console.log(c1);
		//console.log(c2);
       c3=String(hgb_range[b1]).localeCompare(String(hgbe));
       //console.log(c3);
       if (c1==0 || c1==1) {
        temp=1
       }
       if (c2==0 || c2==1) {
        temp1=1
       }
       if (c3==0 || c3==1) {
        temp2=1
       }
     
       if ( (temp==1 && temp2==1) || (temp==1 && temp1==1) || (temp1==1 || temp==1 )) {
                ards="Yes";
        }else {
            ards="No"
        }
		console.log("-----------------");
		console.log("Patient ID : "+id);
        console.log("Ards Result : "+ards);
		console.log("-----------------");


    }

     decryption_process(val)
    {
	    return val%BigInt(pkey[b1]);
    }

     decryption()
    {
	var idd=this.decryption_process(ide);
	//console.log(idd);
	var hgbd=this.decryption_process(hgbe);
	//console.log(hgbd);
	var pao2d=this.decryption_process(pao2e);
	//console.log(pao2d);
	var pvo2d=this.decryption_process(pvo2e);
	//console.log(pvo2d);
	var sao2d=this.decryption_process(sao2e);
	//console.log(sao2d);
	var svo2d=this.decryption_process(svo2e);
	//console.log(svo2d);
	var cod=this.decryption_process(coe);
	//console.log(cod);
	var do2d=this.decryption_process(do2calce);
	//console.log(do2d);
	var vo2d=this.decryption_process(vo2calce);
	//console.log(vo2d);
    //console.log(ards);

    b1++; 
	}

    async handleAddPatientTransaction(context, payload) {
        //node sendRequest.js "{"id":1, "hgb":2, "sao2":3, "svo2":4, "pao2":5, "pvo2":6,"co":7}"
        const patientStore = new PatientRecord(context);
        id = payload.id;
        hgb = payload.hgb;
        sao2 = payload.sao2;
        svo2 = payload.svo2;
        pao2 = payload.pao2;
        pvo2 = payload.pvo2;
        co = payload.co;
        //console.log("Patient Id"+payload.id);
		//console.log(payload);
        this.encryption();
		//console.log("Encryption");
	    this.analysis();
		//console.log("analysis");
	    this.decryption();
		//console.log("decryption");
        return await patientStore.addPatient(payload,ards);
    }


    async apply(transactionProcessRequest, context) {
		//console.log("apply");
        let payload = cbor.decode(transactionProcessRequest.payload);
        return await this.handleAddPatientTransaction(context, payload);
		
    }
}

module.exports = ArdsHandler;
