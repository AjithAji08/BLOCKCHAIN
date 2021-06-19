var { _hash } = require('./lib');
var { TP_NAMESPACE } = require('./constants');
var serialise = require('./serialiser');

class PatientRecord {
    constructor(context) {
        this.context = context;
        this.timeout = 500;
    }

    async addPatient(patient,_ards) {
		
        const address = patientAddress(patient.id);
		
        let patientInfo = { patient_Id: patient.id, ards: _ards};
        let serialised = serialise(patientInfo);
        //console.log(serialised);
        let data = Buffer.from(serialised);
        return await this.context.setState({ [address]: data }, this.timeout);
    }


    // async getParty(partyId) {
    //     const address = partyAddress(partyId);
    //     let partyInfo = await this.context.getState([address], this.timeout);
    //     const partyData = partyInfo[address];
    //     if (Buffer.isBuffer(partyData)) {
    //         const json = partyData.toString();
    //         const party = JSON.parse(json);
    //         return party;
    //     } else {
    //         return undefined;
    //     }
    // }
}

const patientAddress = patientId => TP_NAMESPACE + '01' + _hash(patientId).substring(0, 62);

module.exports = PatientRecord;
