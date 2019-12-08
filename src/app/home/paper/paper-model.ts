export class PaperModel {
    constructor(
        public name: string,
        public year: string,
        public instructor: string,
        public subject: string,
        public no_of_questions: number,
        public added_questions: number,
        public time: string,
        public questions: string,
        public price: string
    ){}
}
