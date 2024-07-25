const Job = require('../models/jobModel');
const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create job
exports.createJob = async (req, res, next) => {
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//update job by id.
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, { new: true }).populate('jobType', 'jobTypeName').populate('user', 'firstName lastName');
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}

exports.showJobs = async (req, res, next) => {
    try {
        // Enable search by keyword
        const keyword = req.query.keyword ? {
            title: {
                $regex: req.query.keyword,
                $options: 'i' // Case-insensitive
            }
        } : {};

        // Filter jobs by category IDs
        const jobTypeCategory = await JobType.find({}, { _id: 1 });
        const ids = jobTypeCategory.map(cat => cat._id);
        const cat = req.query.cat;
        const categ = cat && cat !== '' ? cat : ids;

        // Jobs by location
        const jobByLocation = await Job.find({}, { location: 1 });
        const locations = jobByLocation.map(val => val.location);
        const setUniqueLocation = [...new Set(locations)];
        const location = req.query.location;
        const locationFilter = location && location !== '' ? location : setUniqueLocation;

        // Enable pagination
        const pageSize = 5;
        const page = Number(req.query.pageNumber) || 1;

        // Get job count for pagination
        const count = await Job.countDocuments({ ...keyword, jobType: { $in: categ }, location: { $in: locationFilter } });

        // Fetch jobs with filters and pagination
        const jobs = await Job.find({ ...keyword, jobType: { $in: categ }, location: { $in: locationFilter } })
            .sort({ createdAt: -1 })
            .skip(pageSize * (page - 1))
            .limit(pageSize);

        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation
        });

    } catch (error) {
        next(new ErrorResponse(error.message, 500));
    }
};