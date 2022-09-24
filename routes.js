import { Router, json } from "express";

import {
    listProgrammingLanguages,
    saveProgrammingLanguage,
    updateProgrammingLanguage,
    deleteProgrammingLanguage,
  } from "./controllers/ProgrammingLanguageController.js";
  

const router = Router();

router.use(json());

router
  .get("/programming_languages", listProgrammingLanguages) 
  .post("/programming_languages", saveProgrammingLanguage)  
  .put("/programming_languages/:id", updateProgrammingLanguage) 
  .delete("/programming_languages/:id", deleteProgrammingLanguage)

  /** Routes 
   * http://localhost:3000/programming_languages - GET
   * http://localhost:3000/programming_languages - POST 
   * http://localhost:3000/programming_languages/1 - PUT
   * http://localhost:3000/programming_languages/1 - DELETE
  */

export default router;
