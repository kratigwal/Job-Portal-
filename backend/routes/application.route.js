// import express from "express";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
 
// const router = express.Router();

// router.route("/apply/:id").get(isAuthenticated, applyJob);
// router.route("/get").get(isAuthenticated, getAppliedJobs);
// router.route("/:id/applicants").get(isAuthenticated, getApplicants);
// router.route("/status/:id/update").post(isAuthenticated, updateStatus);
 

// export default router;

import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js"

import {
    applyJob,
    getApplicants,
    getAppliedJobs,
    updateStatus
} from "../controllers/application.controller.js"

const router = express.Router()

// APPLY JOB (IMPORTANT: POST)
router.route("/apply/:id").post(isAuthenticated, applyJob)

// student applied jobs
router.route("/get").get(isAuthenticated, getAppliedJobs)

// admin applicants
router.route("/:id/applicants").get(isAuthenticated, getApplicants)

// update status
router.route("/status/:id/update").post(isAuthenticated, updateStatus)

export default router