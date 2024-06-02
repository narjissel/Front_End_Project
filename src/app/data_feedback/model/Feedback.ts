export class Feedback{
    constructor(
        public emailAdress :  string,
        public phoneNumber : string,
        public rate : number ,
        public feedbackTitle : string ,
        public feedback: string
    ){}
}