import { environment } from '../../environments/environment'

export class ServiceUrls {
    private static servicePrefix = environment.server_URL;

    // Paper URLs
    private static paperExtension = ServiceUrls.servicePrefix + "papers/"
    public static GET_PAPERS = ServiceUrls.paperExtension;
    public static CREATE_PAPER = ServiceUrls.paperExtension;

    public static getPaper(id: string){
        return ServiceUrls.paperExtension + id;
    }
    public static updatePaper(id: string){
        return ServiceUrls.paperExtension + id;
    }
    public static deletePaper(id: string){
        return ServiceUrls.paperExtension + id;
    }





    // Question URLs
    private static questionExtension = ServiceUrls.servicePrefix + "questions/"
    public static GET_QUESTIONS = ServiceUrls.questionExtension;
    public static CREATE_QUESTION = ServiceUrls.questionExtension;

    public static getQuestion(id: string){
        return ServiceUrls.questionExtension + id;
    }
    public static getQuestionByPaperId(paperId: string){
        return ServiceUrls.questionExtension + "paper/" + paperId;
    }
    public static updateQuestion(id: string){
        return ServiceUrls.questionExtension + id;
    }
    public static deleteQuestion(id: string){
        return ServiceUrls.questionExtension + id;
    }





    // Subject URLs
    private static subjectExtension = ServiceUrls.servicePrefix + "subjects/"
    public static GET_SUBJECTS = ServiceUrls.subjectExtension;
    public static CREATE_SUBJECT = ServiceUrls.subjectExtension;

    public static getSubject(id: string){
        return ServiceUrls.subjectExtension + id;
    }
    public static updateSubject(id: string){
        return ServiceUrls.subjectExtension + id;
    }
    public static deleteSubject(id: string){
        return ServiceUrls.subjectExtension + id;
    }




    
    // User URLs
    private static userExtension = ServiceUrls.servicePrefix + "users/"
    public static GET_USERS = ServiceUrls.userExtension;
    public static CREATE_USER = ServiceUrls.userExtension;

    public static getUser(id: string){
        return ServiceUrls.userExtension + id;
    }
    public static updateUser(id: string){
        return ServiceUrls.userExtension + id;
    }
    public static deleteUser(id: string){
        return ServiceUrls.userExtension + id;
    }
}
