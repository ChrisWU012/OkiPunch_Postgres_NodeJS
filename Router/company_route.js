const { json } = require("body-parser");
const Auth = require("./company_AuthRouter");

class nodeRouterCompany {
    constructor(noteServiceCompany, express) {
        this.noteServiceCompany = noteServiceCompany;
        this.express = express;
        this.auth = new Auth();
    }
    router() {
        let router = this.express.Router();
        router.use(this.auth.isLogged);
        //the route starts from "/biz"
        router.get("/showworkers", this.showAll.bind(this)); //employ
        router.post("/worker/addnew", this.addNew.bind(this)); //employ , employ_information
        router.get("/worker/:id/calendar", this.showCalendar.bind(this)); //attendance
        router.put("/worker/:id/calendar", this.updateCalendar.bind(this)); //attendance
        router.get("/worker/:id/info", this.showInfo.bind(this)); //employ_information
        router.put("/worker/:id/info", this.updateInfo.bind(this)); //employ_information
        router.delete("/worker/:id", this.deleteOne.bind(this)); //employ , employ_information
        return router;
    }

    async showAll(req, res) {
        var data = await this.noteServiceCompany.showWorkers("getAll employees")
        res.json(data);
    }

    async addNew(req, res) {
        var data = await this.noteServiceCompany.addNewWorker();
        res.json(data);
    }

    async showCalendar(req, res) {
        var data = await this.noteServiceCompany.showWorkerCanlendar(null, req.params.id);
        res.json(data);
    }

    async updateCalendar(req, res) {
        var data = await this.noteServiceCompany.updateWorkerCanlendar();
        res.json(data);
    }

    async showInfo(req, res) {
        var data = await this.noteServiceCompany.showWorkerDayRecord();
        res.json(data);
    }

    async updateInfo(req, res) {
        var data = await this.noteServiceCompany.updateWorkerInfo();
        res.json(data);
    }

    async deleteOne(req, res) {
        var data = await this.noteServiceCompany.layoffWorker(null, req.params.id);
        res.json(data);
    }
}

module.exports = nodeRouterCompany;
